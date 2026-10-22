'use strict';
// 精确有理数多项式引擎：只解析数学文法，不执行输入代码。
(() => {
const abs=n=>n<0n?-n:n;
function gcd(a,b){a=abs(a);b=abs(b);while(b){[a,b]=[b,a%b]}return a||1n}
function R(n,d=1n){if(!d)throw Error('分母不能为0。');if(d<0n){n=-n;d=-d}const g=gcd(n,d);return [n/g,d/g]}
const plus=(a,b)=>R(a[0]*b[1]+b[0]*a[1],a[1]*b[1]),times=(a,b)=>R(a[0]*b[0],a[1]*b[1]),neg=a=>[-a[0],a[1]],div=(a,b)=>{if(!b[0])throw Error('分母不能为0。');return R(a[0]*b[1],a[1]*b[0])},rs=a=>a[1]===1n?String(a[0]):`${a[0]}/${a[1]}`;
const zero=()=>new Map(),constant=r=>r[0]?new Map([['',r]]):zero(),variable=v=>new Map([[v,R(1n)]]);
function add(a,b,minus=false){const p=new Map(a);for(const [k,v]of b){const r=plus(p.get(k)||R(0n),minus?neg(v):v);if(r[0])p.set(k,r);else p.delete(k)}return p}
function mul(a,b){const p=zero();for(const[k,v]of a)for(const[l,w]of b){const key=(k+l).split('').sort().join('');if(key.length>16)throw Error('本练习只支持总次数不超过16的多项式。');const r=plus(p.get(key)||R(0n),times(v,w));if(r[0])p.set(key,r);else p.delete(key)}if(p.size>350)throw Error('表达式过于复杂，请拆成较小步骤。');return p}
function cp(a){if(!a.size)return R(0n);if(a.size===1&&a.has(''))return a.get('');throw Error('当前只支持常数作分母；含字母的分式请在后续单元练习。')}
function poly(n){switch(n.op){case'n':return constant(n.r);case'v':return variable(n.v);case'neg':return new Map([...poly(n.a)].map(([k,v])=>[k,neg(v)]));case'+':return add(poly(n.a),poly(n.b));case'-':return add(poly(n.a),poly(n.b),true);case'*':return mul(poly(n.a),poly(n.b));case'/':{const d=cp(poly(n.b));return new Map([...poly(n.a)].map(([k,v])=>[k,div(v,d)]))}case'^':{let p=constant(R(1n)),base=poly(n.a);for(let i=0;i<n.e;i++)p=mul(p,base);return p}}}
function parse(input){let s=String(input).trim().replace(/[−–－]/g,'-').replace(/[×·⋅]/g,'*').replace(/[÷]/g,'/').replace(/[（\[]/g,'(').replace(/[）\]]/g,')').replace(/²/g,'^2').replace(/³/g,'^3').replace(/⁴/g,'^4').replace(/\s+/g,'');if(!s||s.length>260)throw Error('请输入不超过260字符的表达式。');if(/[^0-9a-z+\-*/^().]/.test(s))throw Error('请只输入小写字母、数字和 + - * / ^ ( )；每行输入一个表达式。');const ts=s.match(/\d+(?:\.\d+)?|[a-z]|[+\-*/^()]/g)||[];if(ts.join('')!==s)throw Error('表达式中有无法识别的小数或符号。');let i=0,depth=0;
function atom(){if(++depth>35)throw Error('括号层数过多。');const t=ts[i++];let n;if(t==='('){n=expr();if(ts[i++]!==')')throw Error('左右括号没有配对。')}else if(/^\d/.test(t||'')){const parts=t.split('.'),d=10n**BigInt(parts[1]?.length||0);n={op:'n',r:R(BigInt(parts.join('')),d)}}else if(/^[a-z]$/.test(t||''))n={op:'v',v:t};else throw Error('这里缺少数字、字母或括号。');depth--;if(ts[i]==='^'){i++;const e=ts[i++];if(!/^\d+$/.test(e||'')||Number(e)>12)throw Error('指数须为0—12的整数。');n={op:'^',a:n,e:Number(e)}}return n}
function unary(){if(ts[i]==='+'){i++;return unary()}if(ts[i]==='-'){i++;return {op:'neg',a:unary()}}return atom()}
function product(){let n=unary();while(i<ts.length){const t=ts[i];if(t==='*'||t==='/'){i++;n={op:t,a:n,b:unary()}}else if(t==='('||/^[a-z]$/.test(t)||/^\d/.test(t))n={op:'*',a:n,b:unary()};else break}return n}
function expr(){let n=product();while(ts[i]==='+'||ts[i]==='-'){const op=ts[i++];n={op,a:n,b:product()}}return n}const tree=expr();if(i!==ts.length)throw Error('请检查多余的括号或运算符。');const p=poly(tree);if([...p.values()].some(r=>String(abs(r[0])).length>100||String(r[1]).length>100))throw Error('数字过大，请拆步计算。');return {tree,p}}
const key=p=>[...p].sort(([a],[b])=>a.localeCompare(b)).map(([k,v])=>k+':'+rs(v)).join('|');
const eq=(a,b)=>key(typeof a==='string'?parse(a).p:a)===key(typeof b==='string'?parse(b).p:b);
function normalized(p){if(!p.size)return 'ZERO';const vals=[...p].sort(([a],[b])=>a.localeCompare(b)),lead=vals[0][1];return key(new Map(vals.map(([k,v])=>[k,div(v,lead)])))}
// 按已核验目标的不可约因式检查结构。不是通用计算机代数分解器。
function atoms(tree){let out=[];function walk(n,count=1){if(n.op==='*'){walk(n.a,count);walk(n.b,count)}else if(n.op==='neg')walk(n.a,count);else if(n.op==='/'&&cp(poly(n.b))[0])walk(n.a,count);else if(n.op==='^'){walk(n.a,count*n.e)}else {const p=poly(n);if(p.size===1){const [mon]=[...p.keys()];for(const v of mon)for(let j=0;j<count;j++)out.push(normalized(variable(v)))}else if(p.size>1){for(let j=0;j<count;j++)out.push(normalized(p))}else out.push('ZERO')}}walk(tree);return out.sort().join(';')}
function expanded(n){if(poly(n).size<=1)return true;if(n.op==='+'||n.op==='-')return expanded(n.a)&&expanded(n.b);return false}
function termCount(n){return n.op==='+'||n.op==='-'?termCount(n.a)+termCount(n.b):1}
function goal(input,target,mode='factor'){const a=parse(input),b=parse(target);if(!eq(a.p,b.p))return {ok:false,equivalent:false,message:'与目标不等价，先检查符号、系数和漏项。'};if(mode==='factor'&&atoms(a.tree)!==atoms(b.tree))return {ok:false,equivalent:true,message:'等价变形正确；仍有可继续分解的部分，请检查是否已在整数系数范围分解彻底。'};if(mode==='expand'&&(!expanded(a.tree)||termCount(a.tree)!==a.p.size&&a.p.size!==0))return {ok:false,equivalent:true,message:'结果等价，但还需要展开括号并合并同类项。'};return {ok:true,equivalent:true,message:'结果与目标等价，且已完成本题要求。'}}
function evaluate(p,values){let total=R(0n);for(const[k,v]of p){let r=v;for(const c of k){if(!(c in values))throw Error('缺少变量 '+c+' 的值。');r=times(r,parse(String(values[c])).p.get('')||R(0n))}total=plus(total,r)}return total}
function compare(a,b,values){const pa=parse(a).p,pb=parse(b).p;return eq(pa,pb)||(values&&rs(evaluate(pa,values))===rs(evaluate(pb,values)))}
window.MATH_ENGINE={parse,eq,goal,compare,normalized,atoms,evaluate,key,rs};
})();
