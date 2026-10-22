const fs=require('fs'),vm=require('vm'),assert=require('assert');let checks=0;const check=(v,msg)=>{assert(v,msg);checks++};const nodes=new Map();const node=s=>{if(!nodes.has(s))nodes.set(s,{value:'',checked:false,innerHTML:'',className:'',style:{},classList:{toggle(){}},scrollIntoView(){},click(){},focus(){},offsetWidth:1});return nodes.get(s)};
let now=1792674000000;class Clock extends Date{constructor(...a){super(...(a.length?a:[now]))}static now(){return now}}
let stored={};const ctx={console,BigInt,Map,Date:Clock,setTimeout:()=>1,clearTimeout(){},Blob,URL,document:{querySelector:s=>s==='#drawing'?null:node(s),querySelectorAll:()=>[],addEventListener(){},contains:()=>false,createElement:()=>node('a')},localStorage:{getItem:k=>stored[k]||null,setItem:(k,v)=>stored[k]=v},window:{scrollTo(){},addEventListener(){}}};vm.createContext(ctx);for(const f of ['data.js','math-engine.js'])vm.runInContext(fs.readFileSync(__dirname+'/'+f,'utf8'),ctx);
const E=ctx.window.MATH_ENGINE,D=ctx.window.MATH_DATA;
for(const [a,b] of [['(x-2)(x+2)','x^2-4'],['-x^2','-(x^2)'],['(-x)^2','x^2'],['0.1x+0.2x','3x/10'],['a(x-y)-b(y-x)','(a+b)(x-y)'],['2x^0','2']])check(E.eq(a,b),'精确等价 '+a);
for(const [a,b] of [['x^2+4','(x+2)^2'],['-x^2','(-x)^2'],['x+x','x^2']])check(!E.eq(a,b),'不能误判 '+a);
for(const s of ['alert{1}','x;document','x^-1','x/0','1/x','x^99','(x+1','x..1']){assert.throws(()=>E.parse(s));checks++}
check(!E.goal('3x(x^2-4)','3x(x-2)(x+2)').ok,'等价但未彻底');check(E.goal('3(x+2)x(x-2)','3x(x-2)(x+2)').ok,'交换因式可接受');check(E.goal('-3x(2-x)(x+2)','3x(x-2)(x+2)').ok,'负号变化可接受');check(!E.goal('(x+1)^2','x^2+2x+1','expand').ok,'未展开');check(!E.goal('x+x','2x','expand').ok,'未合并');
for(const m of D.modules)for(const l of [1,2,3])check(D.questions.filter(q=>q.module===m.id&&q.level===l).length>=4,'每模块三档都有真实任务');
for(const q of D.questions){check(q.source&&q.origin&&q.checkpoint,'来源和检查点 '+q.id);if(q.kind==='choice'){check(q.options.length===4&&q.answer>=0&&q.answer<4&&q.explain,'选择题字段');continue}let prev=q.start;for(const s of q.steps){check(E.compare(prev,s,q.values),'参考路线等价 '+q.id+' '+prev+' => '+s);prev=s}check(E.goal(q.target,q.target,q.mode).ok,'最终目标结构 '+q.id);check(E.compare(prev,q.target,q.values),'最后一步匹配 '+q.id)}
let app=fs.readFileSync(__dirname+'/app.js','utf8').replace('// 只读计数用于发布核验；学习数据不发送到外部。',`window.__test={grade,firstError,queue,start,submit,action,metric,valid,work,updateReason,get state(){return state},setRoute(r){route=r},reset(){state=fresh();state.sound=false;route='home'}};\n// 只读计数用于发布核验；学习数据不发送到外部。`);vm.runInContext(app,ctx);const T=ctx.window.__test;
check(T.queue('common',3,'expression',20).every(q=>q.level===3&&q.module==='common'),'不暗换难度');check(T.queue('mixed',1,'all',6).length===6,'混合配题');check(T.queue('mixed',1,'all',6).every(q=>q.level===1),'混合也尊重档位');
function answer(q,{wrong=false,hints=0,lines=q.steps||[]}={}){now+=1000;T.start([q.id]);const w=T.work();w.lines=[...lines];w.final=wrong?'999z':q.target||'';w.choice=wrong?(q.answer+1)%4:q.answer;w.hints=hints;node('#final').value=w.final;node('#scratch').value='';T.submit();return T.state.records.at(-1)}
T.reset();for(const q of D.questions){const r=answer(q);check(r?.correct,'标准答案接受 '+q.id);check(r.process,'标准过程接受 '+q.id)}
const q=D.questions.find(q=>q.id==='common-2-3');T.reset();answer(q,{wrong:true});check(T.state.mistakes[q.id].count===1,'错误自动归档');T.updateReason('parallel');check(T.state.mistakes[q.id].reason==='parallel','保留待验证错因');answer(q,{hints:1});check(T.state.mistakes[q.id].successes===0,'提示不算独立修复');answer(q);check(T.state.mistakes[q.id].successes===1,'后续独立修复1');answer(q);check(!T.state.mistakes[q.id].resolved,'未到期不修复');now+=86400001;answer(q);check(T.state.mistakes[q.id].resolved,'跨日独立修复2');
const hard=D.questions.find(q=>q.kind==='expression'&&q.level===3);T.reset();const r=answer(hard,{lines:[]});check(r.correct&&!r.process,'答案对但过程待补分别记录');check(T.state.mistakes[hard.id],'过程待补也入档');
check(!T.grade(q,{final:q.target,lines:['3x(x^2+4)']}).correct,'中间式错而最终对不能过');
T.reset();answer(q,{wrong:true});const w=T.work();T.action('retry',{});w.final=q.target;node('#final').value=q.target;T.submit();check(T.state.records.at(-1).helped,'原题重试不冒充独立');
check(!T.valid({version:1,records:[],mistakes:{},xp:0,sound:true,session:{ids:['bad']}}),'损坏备份拒绝');check(T.valid(T.state),'正常备份接受');
console.log(JSON.stringify({checks,questions:D.questions.length,result:'PASS'},null,2));



