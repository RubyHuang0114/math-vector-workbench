window.MATH_DATA = {
  "version": 1,
  "modules": [
    {
      "id": "base",
      "name": "整式运算",
      "sub": "看清项与符号，稳住计算底盘",
      "icon": "01",
      "tool": "同类项扫描",
      "source": "整式与合并同类项；整式乘法；整式加减期中汇编",
      "points": [
        "同类项的字母和对应指数相同，系数可以不同。",
        "去括号遇到负号，括号内各项都变号。",
        "合并同类项只改变系数，不改变字母与指数。",
        "把负号、乘方、乘法的顺序理清；(−x)² 与 −x² 不同。"
      ]
    },
    {
      "id": "common",
      "name": "提公因式",
      "sub": "找全、提净、不漏1",
      "icon": "02",
      "tool": "公因式探测",
      "source": "因式分解的意义与提公因式法及解析",
      "points": [
        "公因式的系数取最大公约数，字母取各项共有部分，指数取最低次。",
        "提出负因式时，每一项都要变号。",
        "某一项被完整提走时，括号内仍要保留1。",
        "相同的多项式也能作为整体公因式。"
      ]
    },
    {
      "id": "formula",
      "name": "公式识别",
      "sub": "平方差、完全平方，核对结构",
      "icon": "03",
      "tool": "结构透镜",
      "source": "公式法因式分解及解析；完全平方式应用",
      "points": [
        "平方差：A²−B²=(A−B)(A+B)，需要两项、平方、相减。",
        "完全平方：A²±2AB+B²=(A±B)²；中间项必须恰好是±2AB。",
        "A、B可以是数、单项式或整体式，不只代表单个字母。",
        "先检查公因式，再看公式，分解后还要检查能否继续。"
      ]
    },
    {
      "id": "cross",
      "name": "十字相乘",
      "sub": "同时照顾乘积与交叉和",
      "icon": "04",
      "tool": "因式配对",
      "source": "因式分解综合应用（七大题型）及解析：题型二",
      "points": [
        "x²+bx+c=(x+p)(x+q)，同时要求p+q=b、pq=c。",
        "首项系数不是1时，要核对交叉相乘后的中间项。",
        "常数项为负，两数异号；哪一个绝对值更大由一次项系数决定。",
        "最后展开核验，不能只检查首项和常数项。"
      ]
    },
    {
      "id": "group",
      "name": "分组与整体",
      "sub": "在复杂外观里识别熟悉结构",
      "icon": "05",
      "tool": "整体标记",
      "source": "因式分解综合应用（七大题型）及解析：题型三、五",
      "points": [
        "分组的目的是制造共同因式，不是随便两项放一起。",
        "a−b 与 b−a 相差一个负号，统一后再合并。",
        "同一个整体反复出现，可以暂用一个字母代表。",
        "正确分组可能不止一种，能等价并继续分解即可。"
      ]
    },
    {
      "id": "apply",
      "name": "综合与新情境",
      "sub": "参数、面积、整体求值与简便计算",
      "icon": "06",
      "tool": "条件关系板",
      "source": "整体思想与赋值法；因式分解综合应用：参数与应用",
      "points": [
        "新情境先分清已知与目标，再写出关系，不急着套公式。",
        "恒等式比较对应项系数；不能用一两个数的巧合代替一般证明。",
        "整体求值优先寻找差、积或平方的整体关系，减少大数展开。",
        "面积模型核对长×宽、单位与条件；得到结果后重新读问题。"
      ]
    }
  ],
  "questions": [
    {
      "id": "base-1-1",
      "module": "base",
      "level": 1,
      "kind": "expression",
      "family": "同类项归队",
      "title": "同类项归队",
      "prompt": "在整数系数范围内分解因式。",
      "start": "3x+5x-2",
      "target": "8x-2",
      "steps": [
        "8x-2"
      ],
      "hints": [
        "只合并含x的一次项。",
        "3+5=8，常数−2不变。"
      ],
      "mode": "expand",
      "values": null,
      "context": null,
      "origin": "资料考点衍生编写，非整卷原题复刻",
      "source": "整式与合并同类项；整式乘法；整式加减期中汇编",
      "checkpoint": "去括号的负号逐项对应，乘法与乘方按顺序处理；合并后保持字母与指数不变。卷面保留关键变形。"
    },
    {
      "id": "base-1-2",
      "module": "base",
      "level": 1,
      "kind": "expression",
      "family": "负号穿过括号",
      "title": "负号穿过括号",
      "prompt": "在整数系数范围内分解因式。",
      "start": "5x-(2x-3)",
      "target": "3x+3",
      "steps": [
        "5x-2x+3",
        "3x+3"
      ],
      "hints": [
        "括号外是减号，里面两项都要变号。",
        "先写5x−2x+3。"
      ],
      "mode": "expand",
      "values": null,
      "context": null,
      "origin": "资料考点衍生编写，非整卷原题复刻",
      "source": "整式与合并同类项；整式乘法；整式加减期中汇编",
      "checkpoint": "去括号的负号逐项对应，乘法与乘方按顺序处理；合并后保持字母与指数不变。卷面保留关键变形。"
    },
    {
      "id": "base-1-3",
      "module": "base",
      "level": 1,
      "kind": "expression",
      "family": "一项乘两项",
      "title": "一项乘两项",
      "prompt": "在整数系数范围内分解因式。",
      "start": "2x(x+3)",
      "target": "2x^2+6x",
      "steps": [
        "2x^2+6x"
      ],
      "hints": [
        "2x要乘括号中的每一项。",
        "指数相加只适用于同底数相乘。"
      ],
      "mode": "expand",
      "values": null,
      "context": null,
      "origin": "资料考点衍生编写，非整卷原题复刻",
      "source": "整式与合并同类项；整式乘法；整式加减期中汇编",
      "checkpoint": "去括号的负号逐项对应，乘法与乘方按顺序处理；合并后保持字母与指数不变。卷面保留关键变形。"
    },
    {
      "id": "base-2-1",
      "module": "base",
      "level": 2,
      "kind": "expression",
      "family": "双括号合并",
      "title": "双括号合并",
      "prompt": "在整数系数范围内分解因式。",
      "start": "2(3x-1)-3(x+2)",
      "target": "3x-8",
      "steps": [
        "6x-2-3x-6",
        "3x-8"
      ],
      "hints": [
        "分别分配，注意−3也要乘2。",
        "常数项是−2−6。"
      ],
      "mode": "expand",
      "values": null,
      "context": null,
      "origin": "资料考点衍生编写，非整卷原题复刻",
      "source": "整式与合并同类项；整式乘法；整式加减期中汇编",
      "checkpoint": "去括号的负号逐项对应，乘法与乘方按顺序处理；合并后保持字母与指数不变。卷面保留关键变形。"
    },
    {
      "id": "base-2-2",
      "module": "base",
      "level": 2,
      "kind": "expression",
      "family": "乘积与同类项",
      "title": "乘积与同类项",
      "prompt": "在整数系数范围内分解因式。",
      "start": "(x+2)(x-3)+4x",
      "target": "x^2+3x-6",
      "steps": [
        "x^2-x-6+4x",
        "x^2+3x-6"
      ],
      "hints": [
        "先展开乘积，再合并一次项。",
        "交叉项是−3x+2x。"
      ],
      "mode": "expand",
      "values": null,
      "context": null,
      "origin": "资料考点衍生编写，非整卷原题复刻",
      "source": "整式与合并同类项；整式乘法；整式加减期中汇编",
      "checkpoint": "去括号的负号逐项对应，乘法与乘方按顺序处理；合并后保持字母与指数不变。卷面保留关键变形。"
    },
    {
      "id": "base-2-3",
      "module": "base",
      "level": 2,
      "kind": "expression",
      "family": "多字母归类",
      "title": "多字母归类",
      "prompt": "在整数系数范围内分解因式。",
      "start": "3a^2b-2ab^2+5ab^2-a^2b",
      "target": "2a^2b+3ab^2",
      "steps": [
        "2a^2b+3ab^2"
      ],
      "hints": [
        "a²b与ab²不是同类项。",
        "分别合并a²b和ab²的系数。"
      ],
      "mode": "expand",
      "values": null,
      "context": null,
      "origin": "资料考点衍生编写，非整卷原题复刻",
      "source": "整式与合并同类项；整式乘法；整式加减期中汇编",
      "checkpoint": "去括号的负号逐项对应，乘法与乘方按顺序处理；合并后保持字母与指数不变。卷面保留关键变形。"
    },
    {
      "id": "base-3-1",
      "module": "base",
      "level": 3,
      "kind": "expression",
      "family": "乘方与减法嵌套",
      "title": "乘方与减法嵌套",
      "prompt": "在整数系数范围内分解因式。",
      "start": "(2x-3)^2-(x+1)(x-1)",
      "target": "3x^2-12x+10",
      "steps": [
        "4x^2-12x+9-(x^2-1)",
        "3x^2-12x+10"
      ],
      "hints": [
        "先分别处理完全平方与平方差。",
        "减去(x²−1)时两个符号都要检查。"
      ],
      "mode": "expand",
      "values": null,
      "context": null,
      "origin": "资料考点衍生编写，非整卷原题复刻",
      "source": "整式与合并同类项；整式乘法；整式加减期中汇编",
      "checkpoint": "去括号的负号逐项对应，乘法与乘方按顺序处理；合并后保持字母与指数不变。卷面保留关键变形。"
    },
    {
      "id": "base-3-2",
      "module": "base",
      "level": 3,
      "kind": "expression",
      "family": "多层括号",
      "title": "多层括号",
      "prompt": "在整数系数范围内分解因式。",
      "start": "2x-[3x-(x-2(1-x))]",
      "target": "2x-2",
      "steps": [
        "2x-(3x-(3x-2))",
        "2x-2"
      ],
      "hints": [
        "从最内层括号开始，先检查2(1−x)。",
        "把每层括号外的负号单独处理。"
      ],
      "mode": "expand",
      "values": null,
      "context": null,
      "origin": "资料考点衍生编写，非整卷原题复刻",
      "source": "整式与合并同类项；整式乘法；整式加减期中汇编",
      "checkpoint": "去括号的负号逐项对应，乘法与乘方按顺序处理；合并后保持字母与指数不变。卷面保留关键变形。"
    },
    {
      "id": "base-3-3",
      "module": "base",
      "level": 3,
      "kind": "expression",
      "family": "乘积相消",
      "title": "乘积相消",
      "prompt": "在整数系数范围内分解因式。",
      "start": "(a+b)^2-(a-b)^2-2ab",
      "target": "2ab",
      "steps": [
        "4ab-2ab",
        "2ab"
      ],
      "hints": [
        "两组平方中的a²和b²会相消。",
        "不要漏掉最后的−2ab。"
      ],
      "mode": "expand",
      "values": null,
      "context": null,
      "origin": "资料考点衍生编写，非整卷原题复刻",
      "source": "整式与合并同类项；整式乘法；整式加减期中汇编",
      "checkpoint": "去括号的负号逐项对应，乘法与乘方按顺序处理；合并后保持字母与指数不变。卷面保留关键变形。"
    },
    {
      "id": "common-1-1",
      "module": "common",
      "level": 1,
      "kind": "expression",
      "family": "系数与字母",
      "title": "系数与字母",
      "prompt": "在整数系数范围内分解因式。",
      "start": "6x^2+9x",
      "target": "3x(2x+3)",
      "steps": [
        "3x(2x+3)"
      ],
      "hints": [
        "6和9的最大公约数是3。",
        "两个项都含x，最低次数是1。"
      ],
      "mode": "factor",
      "values": null,
      "context": null,
      "origin": "资料考点衍生编写，非整卷原题复刻",
      "source": "因式分解的意义与提公因式法及解析",
      "checkpoint": "提出公因式后各项一一对应，不漏1；负因式注意全体变号。若括号还能分解，继续写到最终积式。"
    },
    {
      "id": "common-1-2",
      "module": "common",
      "level": 1,
      "kind": "expression",
      "family": "不能漏掉1",
      "title": "不能漏掉1",
      "prompt": "在整数系数范围内分解因式。",
      "start": "5x^2-5x",
      "target": "5x(x-1)",
      "steps": [
        "5x(x-1)"
      ],
      "hints": [
        "公因式是5x。",
        "5x÷5x=1，括号内不能漏1。"
      ],
      "mode": "factor",
      "values": null,
      "context": null,
      "origin": "资料考点衍生编写，非整卷原题复刻",
      "source": "因式分解的意义与提公因式法及解析",
      "checkpoint": "提出公因式后各项一一对应，不漏1；负因式注意全体变号。若括号还能分解，继续写到最终积式。"
    },
    {
      "id": "common-1-3",
      "module": "common",
      "level": 1,
      "kind": "expression",
      "family": "先提负号",
      "title": "先提负号",
      "prompt": "在整数系数范围内分解因式。",
      "start": "-4a^2+8a",
      "target": "-4a(a-2)",
      "steps": [
        "-4a(a-2)"
      ],
      "hints": [
        "可提出−4a，使括号内首项为正。",
        "第二项8a÷(−4a)=−2。"
      ],
      "mode": "factor",
      "values": null,
      "context": null,
      "origin": "资料考点衍生编写，非整卷原题复刻",
      "source": "因式分解的意义与提公因式法及解析",
      "checkpoint": "提出公因式后各项一一对应，不漏1；负因式注意全体变号。若括号还能分解，继续写到最终积式。"
    },
    {
      "id": "common-2-1",
      "module": "common",
      "level": 2,
      "kind": "expression",
      "family": "最低次数",
      "title": "最低次数",
      "prompt": "在整数系数范围内分解因式。",
      "start": "12a^3b^2-18a^2b^3",
      "target": "6a^2b^2(2a-3b)",
      "steps": [
        "6a^2b^2(2a-3b)"
      ],
      "hints": [
        "系数6、a的最低次2、b的最低次2。",
        "每一项分别除以公因式。"
      ],
      "mode": "factor",
      "values": null,
      "context": null,
      "origin": "资料考点衍生编写，非整卷原题复刻",
      "source": "因式分解的意义与提公因式法及解析",
      "checkpoint": "提出公因式后各项一一对应，不漏1；负因式注意全体变号。若括号还能分解，继续写到最终积式。"
    },
    {
      "id": "common-2-2",
      "module": "common",
      "level": 2,
      "kind": "expression",
      "family": "把括号当整体",
      "title": "把括号当整体",
      "prompt": "在整数系数范围内分解因式。",
      "start": "a(x-2)+3(x-2)",
      "target": "(x-2)(a+3)",
      "steps": [
        "(x-2)(a+3)"
      ],
      "hints": [
        "共同部分是整个(x−2)。",
        "提走整体后，两项分别剩a和3。"
      ],
      "mode": "factor",
      "values": null,
      "context": null,
      "origin": "资料考点衍生编写，非整卷原题复刻",
      "source": "因式分解的意义与提公因式法及解析",
      "checkpoint": "提出公因式后各项一一对应，不漏1；负因式注意全体变号。若括号还能分解，继续写到最终积式。"
    },
    {
      "id": "common-2-3",
      "module": "common",
      "level": 2,
      "kind": "expression",
      "family": "先提再看公式",
      "title": "先提再看公式",
      "prompt": "在整数系数范围内分解因式。",
      "start": "3x^3-12x",
      "target": "3x(x-2)(x+2)",
      "steps": [
        "3x(x^2-4)",
        "3x(x-2)(x+2)"
      ],
      "hints": [
        "先提3x。",
        "x²−4是平方差，还没有结束。"
      ],
      "mode": "factor",
      "values": null,
      "context": null,
      "origin": "资料考点衍生编写，非整卷原题复刻",
      "source": "因式分解的意义与提公因式法及解析",
      "checkpoint": "提出公因式后各项一一对应，不漏1；负因式注意全体变号。若括号还能分解，继续写到最终积式。"
    },
    {
      "id": "common-3-1",
      "module": "common",
      "level": 3,
      "kind": "expression",
      "family": "负整体与平方差",
      "title": "负整体与平方差",
      "prompt": "在整数系数范围内分解因式。",
      "start": "-2x(x-1)^2+8x",
      "target": "-2x(x-3)(x+1)",
      "steps": [
        "-2x((x-1)^2-4)",
        "-2x(x-3)(x+1)"
      ],
      "hints": [
        "先提−2x；8x÷(−2x)=−4。",
        "(x−1)²−2²继续用平方差。"
      ],
      "mode": "factor",
      "values": null,
      "context": null,
      "origin": "资料考点衍生编写，非整卷原题复刻",
      "source": "因式分解的意义与提公因式法及解析",
      "checkpoint": "提出公因式后各项一一对应，不漏1；负因式注意全体变号。若括号还能分解，继续写到最终积式。"
    },
    {
      "id": "common-3-2",
      "module": "common",
      "level": 3,
      "kind": "expression",
      "family": "统一相反因式",
      "title": "统一相反因式",
      "prompt": "在整数系数范围内分解因式。",
      "start": "a(x-y)-b(y-x)",
      "target": "(a+b)(x-y)",
      "steps": [
        "a(x-y)+b(x-y)",
        "(a+b)(x-y)"
      ],
      "hints": [
        "y−x=−(x−y)。",
        "原来的减号与换序产生的负号相抵。"
      ],
      "mode": "factor",
      "values": null,
      "context": null,
      "origin": "资料考点衍生编写，非整卷原题复刻",
      "source": "因式分解的意义与提公因式法及解析",
      "checkpoint": "提出公因式后各项一一对应，不漏1；负因式注意全体变号。若括号还能分解，继续写到最终积式。"
    },
    {
      "id": "common-3-3",
      "module": "common",
      "level": 3,
      "kind": "expression",
      "family": "多变量连续分解",
      "title": "多变量连续分解",
      "prompt": "在整数系数范围内分解因式。",
      "start": "6a^3b-24ab^3",
      "target": "6ab(a-2b)(a+2b)",
      "steps": [
        "6ab(a^2-4b^2)",
        "6ab(a-2b)(a+2b)"
      ],
      "hints": [
        "先提6ab。",
        "括号里的4b²=(2b)²。"
      ],
      "mode": "factor",
      "values": null,
      "context": null,
      "origin": "资料考点衍生编写，非整卷原题复刻",
      "source": "因式分解的意义与提公因式法及解析",
      "checkpoint": "提出公因式后各项一一对应，不漏1；负因式注意全体变号。若括号还能分解，继续写到最终积式。"
    },
    {
      "id": "formula-1-1",
      "module": "formula",
      "level": 1,
      "kind": "expression",
      "family": "平方差结构",
      "title": "平方差结构",
      "prompt": "在整数系数范围内分解因式。",
      "start": "x^2-25",
      "target": "(x-5)(x+5)",
      "steps": [
        "(x-5)(x+5)"
      ],
      "hints": [
        "25=5²。",
        "两个因式分别取差与和。"
      ],
      "mode": "factor",
      "values": null,
      "context": null,
      "origin": "资料考点衍生编写，非整卷原题复刻",
      "source": "公式法因式分解及解析；完全平方式应用",
      "checkpoint": "使用完全平方先核对中间项±2AB；平方差要写出和、差两个因式。综合题检查是否还能继续。"
    },
    {
      "id": "formula-1-2",
      "module": "formula",
      "level": 1,
      "kind": "expression",
      "family": "核对中间项",
      "title": "核对中间项",
      "prompt": "在整数系数范围内分解因式。",
      "start": "x^2+6x+9",
      "target": "(x+3)^2",
      "steps": [
        "(x+3)^2"
      ],
      "hints": [
        "9=3²，6x=2·x·3。",
        "三项匹配完全平方。"
      ],
      "mode": "factor",
      "values": null,
      "context": null,
      "origin": "资料考点衍生编写，非整卷原题复刻",
      "source": "公式法因式分解及解析；完全平方式应用",
      "checkpoint": "使用完全平方先核对中间项±2AB；平方差要写出和、差两个因式。综合题检查是否还能继续。"
    },
    {
      "id": "formula-1-3",
      "module": "formula",
      "level": 1,
      "kind": "expression",
      "family": "减号完全平方",
      "title": "减号完全平方",
      "prompt": "在整数系数范围内分解因式。",
      "start": "4a^2-12a+9",
      "target": "(2a-3)^2",
      "steps": [
        "(2a-3)^2"
      ],
      "hints": [
        "首尾分别是(2a)²、3²。",
        "中间项−12a=−2·2a·3。"
      ],
      "mode": "factor",
      "values": null,
      "context": null,
      "origin": "资料考点衍生编写，非整卷原题复刻",
      "source": "公式法因式分解及解析；完全平方式应用",
      "checkpoint": "使用完全平方先核对中间项±2AB；平方差要写出和、差两个因式。综合题检查是否还能继续。"
    },
    {
      "id": "formula-2-1",
      "module": "formula",
      "level": 2,
      "kind": "expression",
      "family": "整体平方差",
      "title": "整体平方差",
      "prompt": "在整数系数范围内分解因式。",
      "start": "(a+b)^2-16",
      "target": "(a+b-4)(a+b+4)",
      "steps": [
        "(a+b-4)(a+b+4)"
      ],
      "hints": [
        "把a+b整体视为A。",
        "A²−4²=(A−4)(A+4)。"
      ],
      "mode": "factor",
      "values": null,
      "context": null,
      "origin": "资料考点衍生编写，非整卷原题复刻",
      "source": "公式法因式分解及解析；完全平方式应用",
      "checkpoint": "使用完全平方先核对中间项±2AB；平方差要写出和、差两个因式。综合题检查是否还能继续。"
    },
    {
      "id": "formula-2-2",
      "module": "formula",
      "level": 2,
      "kind": "expression",
      "family": "再分一次",
      "title": "再分一次",
      "prompt": "在整数系数范围内分解因式。",
      "start": "x^4-81",
      "target": "(x^2+9)(x-3)(x+3)",
      "steps": [
        "(x^2-9)(x^2+9)",
        "(x-3)(x+3)(x^2+9)"
      ],
      "hints": [
        "x⁴=(x²)²，81=9²。",
        "x²−9继续分解，x²+9在整数系数范围不用硬拆。"
      ],
      "mode": "factor",
      "values": null,
      "context": null,
      "origin": "资料考点衍生编写，非整卷原题复刻",
      "source": "公式法因式分解及解析；完全平方式应用",
      "checkpoint": "使用完全平方先核对中间项±2AB；平方差要写出和、差两个因式。综合题检查是否还能继续。"
    },
    {
      "id": "formula-2-3",
      "module": "formula",
      "level": 2,
      "kind": "expression",
      "family": "先提常数",
      "title": "先提常数",
      "prompt": "在整数系数范围内分解因式。",
      "start": "2x^2-8x+8",
      "target": "2(x-2)^2",
      "steps": [
        "2(x^2-4x+4)",
        "2(x-2)^2"
      ],
      "hints": [
        "先提公因数2。",
        "括号中是(x−2)²。"
      ],
      "mode": "factor",
      "values": null,
      "context": null,
      "origin": "资料考点衍生编写，非整卷原题复刻",
      "source": "公式法因式分解及解析；完全平方式应用",
      "checkpoint": "使用完全平方先核对中间项±2AB；平方差要写出和、差两个因式。综合题检查是否还能继续。"
    },
    {
      "id": "formula-3-1",
      "module": "formula",
      "level": 3,
      "kind": "expression",
      "family": "两次平方差",
      "title": "两次平方差",
      "prompt": "在整数系数范围内分解因式。",
      "start": "x^8-1",
      "target": "(x-1)(x+1)(x^2+1)(x^4+1)",
      "steps": [
        "(x^4-1)(x^4+1)",
        "(x^2-1)(x^2+1)(x^4+1)",
        "(x-1)(x+1)(x^2+1)(x^4+1)"
      ],
      "hints": [
        "先以x⁴为整体作平方差。",
        "每个因式再检查一次，不是都能分解。"
      ],
      "mode": "factor",
      "values": null,
      "context": null,
      "origin": "资料考点衍生编写，非整卷原题复刻",
      "source": "公式法因式分解及解析；完全平方式应用",
      "checkpoint": "使用完全平方先核对中间项±2AB；平方差要写出和、差两个因式。综合题检查是否还能继续。"
    },
    {
      "id": "formula-3-2",
      "module": "formula",
      "level": 3,
      "kind": "expression",
      "family": "整体公式转换",
      "title": "整体公式转换",
      "prompt": "在整数系数范围内分解因式。",
      "start": "(x^2-7)^2+4(7-x^2)+4",
      "target": "(x-3)^2(x+3)^2",
      "steps": [
        "(x^2-7)^2-4(x^2-7)+4",
        "(x^2-9)^2",
        "(x-3)^2(x+3)^2"
      ],
      "hints": [
        "7−x²与x²−7互为相反数。",
        "设A=x²−7，得到A²−4A+4。"
      ],
      "mode": "factor",
      "values": null,
      "context": null,
      "origin": "资料考点衍生编写，非整卷原题复刻",
      "source": "公式法因式分解及解析；完全平方式应用",
      "checkpoint": "使用完全平方先核对中间项±2AB；平方差要写出和、差两个因式。综合题检查是否还能继续。"
    },
    {
      "id": "formula-3-3",
      "module": "formula",
      "level": 3,
      "kind": "expression",
      "family": "整体再平方差",
      "title": "整体再平方差",
      "prompt": "在整数系数范围内分解因式。",
      "start": "(m^2-1)^2-6(m^2-1)+9",
      "target": "(m-2)^2(m+2)^2",
      "steps": [
        "(m^2-4)^2",
        "(m-2)^2(m+2)^2"
      ],
      "hints": [
        "先把m²−1视为A。",
        "A²−6A+9=(A−3)²。"
      ],
      "mode": "factor",
      "values": null,
      "context": null,
      "origin": "资料考点衍生编写，非整卷原题复刻",
      "source": "公式法因式分解及解析；完全平方式应用",
      "checkpoint": "使用完全平方先核对中间项±2AB；平方差要写出和、差两个因式。综合题检查是否还能继续。"
    },
    {
      "id": "cross-1-1",
      "module": "cross",
      "level": 1,
      "kind": "expression",
      "family": "和与积同查",
      "title": "和与积同查",
      "prompt": "在整数系数范围内分解因式。",
      "start": "x^2+5x+6",
      "target": "(x+2)(x+3)",
      "steps": [
        "(x+2)(x+3)"
      ],
      "hints": [
        "寻找积为6、和为5的两个整数。",
        "2和3同时满足。"
      ],
      "mode": "factor",
      "values": null,
      "context": null,
      "origin": "资料考点衍生编写，非整卷原题复刻",
      "source": "因式分解综合应用（七大题型）及解析：题型二",
      "checkpoint": "首项、常数项、交叉和三处同时核验。必要时在卷面写出配对或展开核验，不能只凭首尾猜答案。"
    },
    {
      "id": "cross-1-2",
      "module": "cross",
      "level": 1,
      "kind": "expression",
      "family": "两数都为负",
      "title": "两数都为负",
      "prompt": "在整数系数范围内分解因式。",
      "start": "x^2-5x+6",
      "target": "(x-2)(x-3)",
      "steps": [
        "(x-2)(x-3)"
      ],
      "hints": [
        "积为正而和为负，两数都负。",
        "−2+(−3)=−5。"
      ],
      "mode": "factor",
      "values": null,
      "context": null,
      "origin": "资料考点衍生编写，非整卷原题复刻",
      "source": "因式分解综合应用（七大题型）及解析：题型二",
      "checkpoint": "首项、常数项、交叉和三处同时核验。必要时在卷面写出配对或展开核验，不能只凭首尾猜答案。"
    },
    {
      "id": "cross-1-3",
      "module": "cross",
      "level": 1,
      "kind": "expression",
      "family": "常数项为负",
      "title": "常数项为负",
      "prompt": "在整数系数范围内分解因式。",
      "start": "x^2-x-6",
      "target": "(x-3)(x+2)",
      "steps": [
        "(x-3)(x+2)"
      ],
      "hints": [
        "两数异号，积是−6。",
        "−3+2=−1。"
      ],
      "mode": "factor",
      "values": null,
      "context": null,
      "origin": "资料考点衍生编写，非整卷原题复刻",
      "source": "因式分解综合应用（七大题型）及解析：题型二",
      "checkpoint": "首项、常数项、交叉和三处同时核验。必要时在卷面写出配对或展开核验，不能只凭首尾猜答案。"
    },
    {
      "id": "cross-2-1",
      "module": "cross",
      "level": 2,
      "kind": "expression",
      "family": "首项系数不是1",
      "title": "首项系数不是1",
      "prompt": "在整数系数范围内分解因式。",
      "start": "6x^2-5x+1",
      "target": "(2x-1)(3x-1)",
      "steps": [
        "(2x-1)(3x-1)"
      ],
      "hints": [
        "首项2x·3x，常数(−1)(−1)。",
        "交叉和−2x−3x=−5x。"
      ],
      "mode": "factor",
      "values": null,
      "context": null,
      "origin": "资料考点衍生编写，非整卷原题复刻",
      "source": "因式分解综合应用（七大题型）及解析：题型二",
      "checkpoint": "首项、常数项、交叉和三处同时核验。必要时在卷面写出配对或展开核验，不能只凭首尾猜答案。"
    },
    {
      "id": "cross-2-2",
      "module": "cross",
      "level": 2,
      "kind": "expression",
      "family": "不被首尾骗过",
      "title": "不被首尾骗过",
      "prompt": "在整数系数范围内分解因式。",
      "start": "4x^2-15x+9",
      "target": "(4x-3)(x-3)",
      "steps": [
        "(4x-3)(x-3)"
      ],
      "hints": [
        "常数项9可以拆成3×3。",
        "交叉项−12x−3x=−15x。"
      ],
      "mode": "factor",
      "values": null,
      "context": null,
      "origin": "资料考点衍生编写，非整卷原题复刻",
      "source": "因式分解综合应用（七大题型）及解析：题型二",
      "checkpoint": "首项、常数项、交叉和三处同时核验。必要时在卷面写出配对或展开核验，不能只凭首尾猜答案。"
    },
    {
      "id": "cross-2-3",
      "module": "cross",
      "level": 2,
      "kind": "expression",
      "family": "双字母配对",
      "title": "双字母配对",
      "prompt": "在整数系数范围内分解因式。",
      "start": "x^2-5xy+6y^2",
      "target": "(x-2y)(x-3y)",
      "steps": [
        "(x-2y)(x-3y)"
      ],
      "hints": [
        "把y保留在因式中。",
        "(−2y)+(−3y)=−5y，积为6y²。"
      ],
      "mode": "factor",
      "values": null,
      "context": null,
      "origin": "资料考点衍生编写，非整卷原题复刻",
      "source": "因式分解综合应用（七大题型）及解析：题型二",
      "checkpoint": "首项、常数项、交叉和三处同时核验。必要时在卷面写出配对或展开核验，不能只凭首尾猜答案。"
    },
    {
      "id": "cross-3-1",
      "module": "cross",
      "level": 3,
      "kind": "expression",
      "family": "先提再交叉",
      "title": "先提再交叉",
      "prompt": "在整数系数范围内分解因式。",
      "start": "12x^3-10x^2+2x",
      "target": "2x(2x-1)(3x-1)",
      "steps": [
        "2x(6x^2-5x+1)",
        "2x(2x-1)(3x-1)"
      ],
      "hints": [
        "先提2x降低复杂度。",
        "对6x²−5x+1核对交叉项。"
      ],
      "mode": "factor",
      "values": null,
      "context": null,
      "origin": "资料考点衍生编写，非整卷原题复刻",
      "source": "因式分解综合应用（七大题型）及解析：题型二",
      "checkpoint": "首项、常数项、交叉和三处同时核验。必要时在卷面写出配对或展开核验，不能只凭首尾猜答案。"
    },
    {
      "id": "cross-3-2",
      "module": "cross",
      "level": 3,
      "kind": "expression",
      "family": "换整体变量",
      "title": "换整体变量",
      "prompt": "在整数系数范围内分解因式。",
      "start": "(x+1)^2-5(x+1)+6",
      "target": "(x-1)(x-2)",
      "steps": [
        "((x+1)-2)((x+1)-3)",
        "(x-1)(x-2)"
      ],
      "hints": [
        "把x+1当成一个整体t。",
        "t²−5t+6=(t−2)(t−3)。"
      ],
      "mode": "factor",
      "values": null,
      "context": null,
      "origin": "资料考点衍生编写，非整卷原题复刻",
      "source": "因式分解综合应用（七大题型）及解析：题型二",
      "checkpoint": "首项、常数项、交叉和三处同时核验。必要时在卷面写出配对或展开核验，不能只凭首尾猜答案。"
    },
    {
      "id": "cross-3-3",
      "module": "cross",
      "level": 3,
      "kind": "expression",
      "family": "复杂系数异号",
      "title": "复杂系数异号",
      "prompt": "在整数系数范围内分解因式。",
      "start": "6a^2+7ab-3b^2",
      "target": "(3a-b)(2a+3b)",
      "steps": [
        "(3a-b)(2a+3b)"
      ],
      "hints": [
        "首项3a·2a，常数(−b)·3b。",
        "9ab−2ab=7ab。"
      ],
      "mode": "factor",
      "values": null,
      "context": null,
      "origin": "资料考点衍生编写，非整卷原题复刻",
      "source": "因式分解综合应用（七大题型）及解析：题型二",
      "checkpoint": "首项、常数项、交叉和三处同时核验。必要时在卷面写出配对或展开核验，不能只凭首尾猜答案。"
    },
    {
      "id": "group-1-1",
      "module": "group",
      "level": 1,
      "kind": "expression",
      "family": "两组出现共同因式",
      "title": "两组出现共同因式",
      "prompt": "在整数系数范围内分解因式。",
      "start": "ax+ay+bx+by",
      "target": "(a+b)(x+y)",
      "steps": [
        "a(x+y)+b(x+y)",
        "(a+b)(x+y)"
      ],
      "hints": [
        "前两项与后两项分别提公因式。",
        "出现共同的x+y。"
      ],
      "mode": "factor",
      "values": null,
      "context": null,
      "origin": "资料考点衍生编写，非整卷原题复刻",
      "source": "因式分解综合应用（七大题型）及解析：题型三、五",
      "checkpoint": "卷面留下制造相同因式或识别整体的关键变形；负号逐项核对。其他正确分组同样接受。"
    },
    {
      "id": "group-1-2",
      "module": "group",
      "level": 1,
      "kind": "expression",
      "family": "负号分组",
      "title": "负号分组",
      "prompt": "在整数系数范围内分解因式。",
      "start": "ax-ay-bx+by",
      "target": "(a-b)(x-y)",
      "steps": [
        "a(x-y)-b(x-y)",
        "(a-b)(x-y)"
      ],
      "hints": [
        "后两项提出−b，留下x−y。",
        "检查−b(x−y)=−bx+by。"
      ],
      "mode": "factor",
      "values": null,
      "context": null,
      "origin": "资料考点衍生编写，非整卷原题复刻",
      "source": "因式分解综合应用（七大题型）及解析：题型三、五",
      "checkpoint": "卷面留下制造相同因式或识别整体的关键变形；负号逐项核对。其他正确分组同样接受。"
    },
    {
      "id": "group-1-3",
      "module": "group",
      "level": 1,
      "kind": "expression",
      "family": "乘法逆向组装",
      "title": "乘法逆向组装",
      "prompt": "在整数系数范围内分解因式。",
      "start": "xy+2x+3y+6",
      "target": "(x+3)(y+2)",
      "steps": [
        "x(y+2)+3(y+2)",
        "(x+3)(y+2)"
      ],
      "hints": [
        "xy与2x一组，3y与6一组。",
        "相同因式是y+2。"
      ],
      "mode": "factor",
      "values": null,
      "context": null,
      "origin": "资料考点衍生编写，非整卷原题复刻",
      "source": "因式分解综合应用（七大题型）及解析：题型三、五",
      "checkpoint": "卷面留下制造相同因式或识别整体的关键变形；负号逐项核对。其他正确分组同样接受。"
    },
    {
      "id": "group-2-1",
      "module": "group",
      "level": 2,
      "kind": "expression",
      "family": "一眼看作差",
      "title": "一眼看作差",
      "prompt": "在整数系数范围内分解因式。",
      "start": "a^2-ab-ac+bc",
      "target": "(a-b)(a-c)",
      "steps": [
        "a(a-b)-c(a-b)",
        "(a-b)(a-c)"
      ],
      "hints": [
        "可先把前两项、后两项分组。",
        "也可以按a−c分组，正确路线不唯一。"
      ],
      "mode": "factor",
      "values": null,
      "context": null,
      "origin": "资料考点衍生编写，非整卷原题复刻",
      "source": "因式分解综合应用（七大题型）及解析：题型三、五",
      "checkpoint": "卷面留下制造相同因式或识别整体的关键变形；负号逐项核对。其他正确分组同样接受。"
    },
    {
      "id": "group-2-2",
      "module": "group",
      "level": 2,
      "kind": "expression",
      "family": "三次式里藏结构",
      "title": "三次式里藏结构",
      "prompt": "在整数系数范围内分解因式。",
      "start": "x^3+2x^2-9x-18",
      "target": "(x+2)(x-3)(x+3)",
      "steps": [
        "x^2(x+2)-9(x+2)",
        "(x+2)(x^2-9)",
        "(x+2)(x-3)(x+3)"
      ],
      "hints": [
        "前两项提x²，后两项提−9。",
        "提完x+2后还有平方差。"
      ],
      "mode": "factor",
      "values": null,
      "context": null,
      "origin": "资料考点衍生编写，非整卷原题复刻",
      "source": "因式分解综合应用（七大题型）及解析：题型三、五",
      "checkpoint": "卷面留下制造相同因式或识别整体的关键变形；负号逐项核对。其他正确分组同样接受。"
    },
    {
      "id": "group-2-3",
      "module": "group",
      "level": 2,
      "kind": "expression",
      "family": "分组制造平方差",
      "title": "分组制造平方差",
      "prompt": "在整数系数范围内分解因式。",
      "start": "a^2-b^2+2a+1",
      "target": "(a+1-b)(a+1+b)",
      "steps": [
        "(a+1)^2-b^2",
        "(a+1-b)(a+1+b)"
      ],
      "hints": [
        "把a²+2a+1凑成完全平方。",
        "再减去b²，使用平方差。"
      ],
      "mode": "factor",
      "values": null,
      "context": null,
      "origin": "资料考点衍生编写，非整卷原题复刻",
      "source": "因式分解综合应用（七大题型）及解析：题型三、五",
      "checkpoint": "卷面留下制造相同因式或识别整体的关键变形；负号逐项核对。其他正确分组同样接受。"
    },
    {
      "id": "group-3-1",
      "module": "group",
      "level": 3,
      "kind": "expression",
      "family": "四项组合再提净",
      "title": "四项组合再提净",
      "prompt": "在整数系数范围内分解因式。",
      "start": "x^3-x^2-4x+4",
      "target": "(x-1)(x-2)(x+2)",
      "steps": [
        "x^2(x-1)-4(x-1)",
        "(x-1)(x^2-4)",
        "(x-1)(x-2)(x+2)"
      ],
      "hints": [
        "先造出共同因式x−1。",
        "提取后仍有x²−4。"
      ],
      "mode": "factor",
      "values": null,
      "context": null,
      "origin": "资料考点衍生编写，非整卷原题复刻",
      "source": "因式分解综合应用（七大题型）及解析：题型三、五",
      "checkpoint": "卷面留下制造相同因式或识别整体的关键变形；负号逐项核对。其他正确分组同样接受。"
    },
    {
      "id": "group-3-2",
      "module": "group",
      "level": 3,
      "kind": "expression",
      "family": "平方整体拼接",
      "title": "平方整体拼接",
      "prompt": "在整数系数范围内分解因式。",
      "start": "a^2+2ab+b^2-c^2",
      "target": "(a+b-c)(a+b+c)",
      "steps": [
        "(a+b)^2-c^2",
        "(a+b-c)(a+b+c)"
      ],
      "hints": [
        "前三项先凑(a+b)²。",
        "整体A=a+b后是A²−c²。"
      ],
      "mode": "factor",
      "values": null,
      "context": null,
      "origin": "资料考点衍生编写，非整卷原题复刻",
      "source": "因式分解综合应用（七大题型）及解析：题型三、五",
      "checkpoint": "卷面留下制造相同因式或识别整体的关键变形；负号逐项核对。其他正确分组同样接受。"
    },
    {
      "id": "group-3-3",
      "module": "group",
      "level": 3,
      "kind": "expression",
      "family": "不同分组也可行",
      "title": "不同分组也可行",
      "prompt": "在整数系数范围内分解因式。",
      "start": "x^2-y^2+2xz+2yz",
      "target": "(x+y)(x-y+2z)",
      "steps": [
        "(x+y)(x-y)+2z(x+y)",
        "(x+y)(x-y+2z)"
      ],
      "hints": [
        "前两项平方差；后两项提2z。",
        "两部分都有x+y。"
      ],
      "mode": "factor",
      "values": null,
      "context": null,
      "origin": "资料考点衍生编写，非整卷原题复刻",
      "source": "因式分解综合应用（七大题型）及解析：题型三、五",
      "checkpoint": "卷面留下制造相同因式或识别整体的关键变形；负号逐项核对。其他正确分组同样接受。"
    },
    {
      "id": "apply-1-1",
      "module": "apply",
      "level": 1,
      "kind": "expression",
      "family": "邻近数的平方差",
      "title": "邻近数的平方差",
      "prompt": "在整数系数范围内分解因式。",
      "start": "101^2-99^2",
      "target": "400",
      "steps": [
        "(101-99)(101+99)",
        "2*200",
        "400"
      ],
      "hints": [
        "大数不用急着平方。",
        "先识别A²−B²。"
      ],
      "mode": "value",
      "values": null,
      "context": "简便计算：比较直接展开与平方差。",
      "origin": "资料考点衍生编写，非整卷原题复刻",
      "source": "整体思想与赋值法；因式分解综合应用：参数与应用",
      "checkpoint": "写明由条件得到的关键关系与结构变形；数值验证不能代替恒等证明。求值与证明任务均须回应原问题。"
    },
    {
      "id": "apply-1-2",
      "module": "apply",
      "level": 1,
      "kind": "expression",
      "family": "正方形面积差",
      "title": "正方形面积差",
      "prompt": "在整数系数范围内分解因式。",
      "start": "x^2-16",
      "target": "(x-4)(x+4)",
      "steps": [
        "(x-4)(x+4)"
      ],
      "hints": [
        "外正方形边长x，小正方形边长4。",
        "剩余面积是x²−4²。"
      ],
      "mode": "factor",
      "values": null,
      "context": "面积模型：x>4，边长单位为厘米；写出剩余面积的因式分解式。",
      "origin": "资料考点衍生编写，非整卷原题复刻",
      "source": "整体思想与赋值法；因式分解综合应用：参数与应用",
      "checkpoint": "写明由条件得到的关键关系与结构变形；数值验证不能代替恒等证明。求值与证明任务均须回应原问题。"
    },
    {
      "id": "apply-1-3",
      "module": "apply",
      "level": 1,
      "kind": "expression",
      "family": "先组装再代入",
      "title": "先组装再代入",
      "prompt": "先完成结构变形，再利用给定条件求值。",
      "start": "a^2-ab-ac+bc",
      "target": "2",
      "steps": [
        "a(a-b)-c(a-b)",
        "(a-b)(a-c)",
        "(-1)*(-2)",
        "2"
      ],
      "hints": [
        "先找共同结构，不要展开2017的平方。",
        "a−b=−1，a−c=−2。"
      ],
      "mode": "value",
      "values": {
        "a": 2016,
        "b": 2017,
        "c": 2018
      },
      "context": "已知a=2016，b=2017，c=2018，求代数式的值。",
      "origin": "资料考点衍生编写，非整卷原题复刻",
      "source": "整体思想与赋值法；因式分解综合应用：参数与应用",
      "checkpoint": "写明由条件得到的关键关系与结构变形；数值验证不能代替恒等证明。求值与证明任务均须回应原问题。"
    },
    {
      "id": "apply-2-1",
      "module": "apply",
      "level": 2,
      "kind": "expression",
      "family": "日程中的整体差",
      "title": "日程中的整体差",
      "prompt": "先完成结构变形，再利用给定条件求值。",
      "start": "a^2-b^2",
      "target": "40",
      "steps": [
        "(a-b)(a+b)",
        "2*20",
        "40"
      ],
      "hints": [
        "先看能否用平方差。",
        "a−b=2，a+b=20。"
      ],
      "mode": "value",
      "values": {
        "a": 11,
        "b": 9
      },
      "context": "已知a=11，b=9，先化简再求值。",
      "origin": "资料考点衍生编写，非整卷原题复刻",
      "source": "整体思想与赋值法；因式分解综合应用：参数与应用",
      "checkpoint": "写明由条件得到的关键关系与结构变形；数值验证不能代替恒等证明。求值与证明任务均须回应原问题。"
    },
    {
      "id": "apply-2-2",
      "module": "apply",
      "level": 2,
      "kind": "expression",
      "family": "两条线索拼回原式",
      "title": "两条线索拼回原式",
      "prompt": "在整数系数范围内分解因式。",
      "start": "x^2-5x+6",
      "target": "(x-2)(x-3)",
      "steps": [
        "(x-2)(x-3)"
      ],
      "hints": [
        "一次项只由第二条线索确定；常数项由第一条线索确定。",
        "先恢复正确三项式，再分解。"
      ],
      "mode": "factor",
      "values": null,
      "context": "线索：一位同学只看错一次项，得到(x+2)(x+3)；另一位只看错常数项，得到(x−6)(x+1)。已恢复原式如下，请分解并用交叉项核验。",
      "origin": "资料考点衍生编写，非整卷原题复刻",
      "source": "整体思想与赋值法；因式分解综合应用：参数与应用",
      "checkpoint": "写明由条件得到的关键关系与结构变形；数值验证不能代替恒等证明。求值与证明任务均须回应原问题。"
    },
    {
      "id": "apply-2-3",
      "module": "apply",
      "level": 2,
      "kind": "expression",
      "family": "三项平方的简便求值",
      "title": "三项平方的简便求值",
      "prompt": "先完成结构变形，再利用给定条件求值。",
      "start": "a^2+b^2+c^2-ab-bc-ac",
      "target": "12",
      "steps": [
        "((a-b)^2+(b-c)^2+(c-a)^2)/2",
        "(4+4+16)/2",
        "12"
      ],
      "hints": [
        "用两两差的平方，避免大数展开。",
        "a−b=−2，b−c=−2，c−a=4。"
      ],
      "mode": "value",
      "values": {
        "a": 2000,
        "b": 2002,
        "c": 2004
      },
      "context": "已知a=2000，b=2002，c=2004。求值并保留核心变形。",
      "origin": "资料考点衍生编写，非整卷原题复刻",
      "source": "整体思想与赋值法；因式分解综合应用：参数与应用",
      "checkpoint": "写明由条件得到的关键关系与结构变形；数值验证不能代替恒等证明。求值与证明任务均须回应原问题。"
    },
    {
      "id": "apply-3-1",
      "module": "apply",
      "level": 3,
      "kind": "expression",
      "family": "整体式的连续分解",
      "title": "整体式的连续分解",
      "prompt": "在整数系数范围内分解因式。",
      "start": "(x^2-7)^2+4(7-x^2)+4",
      "target": "(x-3)^2(x+3)^2",
      "steps": [
        "(x^2-7)^2-4(x^2-7)+4",
        "(x^2-9)^2",
        "(x-3)^2(x+3)^2"
      ],
      "hints": [
        "先统一7−x²与x²−7的方向。",
        "完全平方后还有平方差。"
      ],
      "mode": "factor",
      "values": null,
      "context": "新外观挑战：识别重复出现的整体。",
      "origin": "资料考点衍生编写，非整卷原题复刻",
      "source": "整体思想与赋值法；因式分解综合应用：参数与应用",
      "checkpoint": "写明由条件得到的关键关系与结构变形；数值验证不能代替恒等证明。求值与证明任务均须回应原问题。"
    },
    {
      "id": "apply-3-2",
      "module": "apply",
      "level": 3,
      "kind": "expression",
      "family": "大数背后的不变量",
      "title": "大数背后的不变量",
      "prompt": "先完成结构变形，再利用给定条件求值。",
      "start": "(2017t+2016)^2-(2017t+2016)(2017t+2017)-(2017t+2016)(2017t+2018)+(2017t+2017)(2017t+2018)",
      "target": "2",
      "steps": [
        "((2017t+2016)-(2017t+2017))*((2017t+2016)-(2017t+2018))",
        "(-1)*(-2)",
        "2"
      ],
      "hints": [
        "a、b、c虽然大，相邻差却很小。",
        "a−b=−1，a−c=−2。"
      ],
      "mode": "value",
      "values": null,
      "context": "a=2017t+2016，b=2017t+2017，c=2017t+2018。原式已将a、b、c代回。证明无论t取何值，结果都是2。",
      "origin": "资料考点衍生编写，非整卷原题复刻",
      "source": "整体思想与赋值法；因式分解综合应用：参数与应用",
      "checkpoint": "写明由条件得到的关键关系与结构变形；数值验证不能代替恒等证明。求值与证明任务均须回应原问题。"
    },
    {
      "id": "apply-3-3",
      "module": "apply",
      "level": 3,
      "kind": "expression",
      "family": "对称大数计算",
      "title": "对称大数计算",
      "prompt": "在整数系数范围内分解因式。",
      "start": "(1001)^2-2*1001*999+999^2",
      "target": "4",
      "steps": [
        "(1001-999)^2",
        "2^2",
        "4"
      ],
      "hints": [
        "不要逐个算大数平方。",
        "整体为A²−2AB+B²。"
      ],
      "mode": "value",
      "values": null,
      "context": "对比两种策略：直接计算，或先识别结构。",
      "origin": "资料考点衍生编写，非整卷原题复刻",
      "source": "整体思想与赋值法；因式分解综合应用：参数与应用",
      "checkpoint": "写明由条件得到的关键关系与结构变形；数值验证不能代替恒等证明。求值与证明任务均须回应原问题。"
    },
    {
      "id": "base-concept-1",
      "module": "base",
      "level": 1,
      "kind": "choice",
      "family": "同类项",
      "title": "结构侦探 · 同类项",
      "prompt": "哪些才是同类项？",
      "options": [
        "2x与2y",
        "3a²b与−5a²b",
        "3a²b与3ab²",
        "a与a²"
      ],
      "answer": 1,
      "explain": "同类项检查字母及对应指数；系数不必相同。",
      "source": "整式与合并同类项；整式乘法；整式加减期中汇编",
      "origin": "资料考点衍生编写",
      "checkpoint": "去括号的负号逐项对应，乘法与乘方按顺序处理；合并后保持字母与指数不变。卷面保留关键变形。"
    },
    {
      "id": "base-concept-2",
      "module": "base",
      "level": 2,
      "kind": "choice",
      "family": "负号分配",
      "title": "结构侦探 · 负号分配",
      "prompt": "5x−(2x−3) 去括号后应该是？",
      "options": [
        "5x−2x−3",
        "5x+2x−3",
        "5x+2x+3",
        "5x−2x+3"
      ],
      "answer": 3,
      "explain": "减去整个括号，两项都变号。",
      "source": "整式与合并同类项；整式乘法；整式加减期中汇编",
      "origin": "资料考点衍生编写",
      "checkpoint": "去括号的负号逐项对应，乘法与乘方按顺序处理；合并后保持字母与指数不变。卷面保留关键变形。"
    },
    {
      "id": "base-concept-3",
      "module": "base",
      "level": 3,
      "kind": "choice",
      "family": "平方展开",
      "title": "结构侦探 · 平方展开",
      "prompt": "第一处错误：①(2x−3)²=4x²−9；②再合并。错在？",
      "options": [
        "没有错误",
        "①漏掉中间项−12x",
        "①平方差公式算错9",
        "②合并同类项"
      ],
      "answer": 1,
      "explain": "平方的二项和必须含±2AB；不能把(A−B)²写成A²−B²。",
      "source": "整式与合并同类项；整式乘法；整式加减期中汇编",
      "origin": "资料考点衍生编写",
      "checkpoint": "去括号的负号逐项对应，乘法与乘方按顺序处理；合并后保持字母与指数不变。卷面保留关键变形。"
    },
    {
      "id": "common-concept-1",
      "module": "common",
      "level": 1,
      "kind": "choice",
      "family": "漏1",
      "title": "结构侦探 · 漏1",
      "prompt": "5x²−5x=5x(x−__)，空格应填？",
      "options": [
        "x",
        "5",
        "1",
        "0"
      ],
      "answer": 2,
      "explain": "5x除以自身为1，不能漏掉。",
      "source": "因式分解的意义与提公因式法及解析",
      "origin": "资料考点衍生编写",
      "checkpoint": "提出公因式后各项一一对应，不漏1；负因式注意全体变号。若括号还能分解，继续写到最终积式。"
    },
    {
      "id": "common-concept-2",
      "module": "common",
      "level": 2,
      "kind": "choice",
      "family": "最小指数",
      "title": "结构侦探 · 最小指数",
      "prompt": "12a³b²与18a²b³的最大公因式是？",
      "options": [
        "6a²b²",
        "6a³b³",
        "3ab",
        "36a²b²"
      ],
      "answer": 0,
      "explain": "系数最大公约数6，字母取最低次。",
      "source": "因式分解的意义与提公因式法及解析",
      "origin": "资料考点衍生编写",
      "checkpoint": "提出公因式后各项一一对应，不漏1；负因式注意全体变号。若括号还能分解，继续写到最终积式。"
    },
    {
      "id": "common-concept-3",
      "module": "common",
      "level": 3,
      "kind": "choice",
      "family": "相反因式",
      "title": "结构侦探 · 相反因式",
      "prompt": "a(x−y)−b(y−x)提取(x−y)后剩下？",
      "options": [
        "−a−b",
        "ab",
        "a+b",
        "a−b"
      ],
      "answer": 2,
      "explain": "y−x=−(x−y)，两个负号相抵。",
      "source": "因式分解的意义与提公因式法及解析",
      "origin": "资料考点衍生编写",
      "checkpoint": "提出公因式后各项一一对应，不漏1；负因式注意全体变号。若括号还能分解，继续写到最终积式。"
    },
    {
      "id": "formula-concept-1",
      "module": "formula",
      "level": 1,
      "kind": "choice",
      "family": "公式条件",
      "title": "结构侦探 · 公式条件",
      "prompt": "哪一个是完全平方式？",
      "options": [
        "x²+3x+9",
        "x²−9",
        "x²+9",
        "x²+6x+9"
      ],
      "answer": 3,
      "explain": "首尾平方，中间必须是2·x·3。",
      "source": "公式法因式分解及解析；完全平方式应用",
      "origin": "资料考点衍生编写",
      "checkpoint": "使用完全平方先核对中间项±2AB；平方差要写出和、差两个因式。综合题检查是否还能继续。"
    },
    {
      "id": "formula-concept-2",
      "module": "formula",
      "level": 2,
      "kind": "choice",
      "family": "彻底分解",
      "title": "结构侦探 · 彻底分解",
      "prompt": "x⁴−81=(x²−9)(x²+9)，下一步应？",
      "options": [
        "两个括号都拆成相同因式",
        "继续分解x²−9",
        "把x²+9硬拆成(x+3)²",
        "已经彻底"
      ],
      "answer": 1,
      "explain": "在整数系数范围x²−9可继续；x²+9不能这样分。",
      "source": "公式法因式分解及解析；完全平方式应用",
      "origin": "资料考点衍生编写",
      "checkpoint": "使用完全平方先核对中间项±2AB；平方差要写出和、差两个因式。综合题检查是否还能继续。"
    },
    {
      "id": "formula-concept-3",
      "module": "formula",
      "level": 3,
      "kind": "choice",
      "family": "整体方向",
      "title": "结构侦探 · 整体方向",
      "prompt": "令A=x²−7，则4(7−x²)应写成？",
      "options": [
        "4A",
        "4A²",
        "−4A²",
        "−4A"
      ],
      "answer": 3,
      "explain": "7−x²=−(x²−7)。",
      "source": "公式法因式分解及解析；完全平方式应用",
      "origin": "资料考点衍生编写",
      "checkpoint": "使用完全平方先核对中间项±2AB；平方差要写出和、差两个因式。综合题检查是否还能继续。"
    },
    {
      "id": "cross-concept-1",
      "module": "cross",
      "level": 1,
      "kind": "choice",
      "family": "和积约束",
      "title": "结构侦探 · 和积约束",
      "prompt": "x²−x−6=(x+p)(x+q)，必须同时满足？",
      "options": [
        "p+q=−1且pq=−6",
        "p+q=6且pq=−1",
        "p+q=1且pq=6",
        "只需pq=−6"
      ],
      "answer": 0,
      "explain": "展开后一次项系数是p+q，常数是pq。",
      "source": "因式分解综合应用（七大题型）及解析：题型二",
      "origin": "资料考点衍生编写",
      "checkpoint": "首项、常数项、交叉和三处同时核验。必要时在卷面写出配对或展开核验，不能只凭首尾猜答案。"
    },
    {
      "id": "cross-concept-2",
      "module": "cross",
      "level": 2,
      "kind": "choice",
      "family": "交叉核验",
      "title": "结构侦探 · 交叉核验",
      "prompt": "(2x−1)(3x−1)的一次项是？",
      "options": [
        "5x",
        "−x",
        "−5x",
        "−6x"
      ],
      "answer": 2,
      "explain": "交叉项−2x−3x=−5x。",
      "source": "因式分解综合应用（七大题型）及解析：题型二",
      "origin": "资料考点衍生编写",
      "checkpoint": "首项、常数项、交叉和三处同时核验。必要时在卷面写出配对或展开核验，不能只凭首尾猜答案。"
    },
    {
      "id": "cross-concept-3",
      "module": "cross",
      "level": 3,
      "kind": "choice",
      "family": "异号交叉",
      "title": "结构侦探 · 异号交叉",
      "prompt": "(3a−b)(2a+3b)的交叉项合并为？",
      "options": [
        "7ab",
        "11ab",
        "−7ab",
        "6ab"
      ],
      "answer": 0,
      "explain": "9ab−2ab=7ab，不能只核对首尾。",
      "source": "因式分解综合应用（七大题型）及解析：题型二",
      "origin": "资料考点衍生编写",
      "checkpoint": "首项、常数项、交叉和三处同时核验。必要时在卷面写出配对或展开核验，不能只凭首尾猜答案。"
    },
    {
      "id": "group-concept-1",
      "module": "group",
      "level": 1,
      "kind": "choice",
      "family": "分组目标",
      "title": "结构侦探 · 分组目标",
      "prompt": "ax+ay+bx+by，分组的目标是？",
      "options": [
        "消掉所有变量",
        "制造相同因式再提取",
        "随便分成两组就结束",
        "只按字母排序"
      ],
      "answer": 1,
      "explain": "分组是为下一次提公因式服务。",
      "source": "因式分解综合应用（七大题型）及解析：题型三、五",
      "origin": "资料考点衍生编写",
      "checkpoint": "卷面留下制造相同因式或识别整体的关键变形；负号逐项核对。其他正确分组同样接受。"
    },
    {
      "id": "group-concept-2",
      "module": "group",
      "level": 2,
      "kind": "choice",
      "family": "分组符号",
      "title": "结构侦探 · 分组符号",
      "prompt": "a²−ab−ac+bc的一个正确分组是？",
      "options": [
        "a(a−b)−c(a+b)",
        "a(a+b)+c(a−b)",
        "(a−b)(a+c)",
        "a(a−b)−c(a−b)"
      ],
      "answer": 3,
      "explain": "−c(a−b)=−ac+bc，符号须逐项对应。",
      "source": "因式分解综合应用（七大题型）及解析：题型三、五",
      "origin": "资料考点衍生编写",
      "checkpoint": "卷面留下制造相同因式或识别整体的关键变形；负号逐项核对。其他正确分组同样接受。"
    },
    {
      "id": "group-concept-3",
      "module": "group",
      "level": 3,
      "kind": "choice",
      "family": "结构转换",
      "title": "结构侦探 · 结构转换",
      "prompt": "a²+2ab+b²−c² 的关键起手点是？",
      "options": [
        "所有项都含a",
        "前三项合成(a+b)²",
        "先把a²与b²相加开方",
        "把−c²写成+c²"
      ],
      "answer": 1,
      "explain": "前三项的中间项恰好是2ab。",
      "source": "因式分解综合应用（七大题型）及解析：题型三、五",
      "origin": "资料考点衍生编写",
      "checkpoint": "卷面留下制造相同因式或识别整体的关键变形；负号逐项核对。其他正确分组同样接受。"
    },
    {
      "id": "apply-concept-1",
      "module": "apply",
      "level": 1,
      "kind": "choice",
      "family": "恒等依据",
      "title": "结构侦探 · 恒等依据",
      "prompt": "用(a−b)(a+b)计算a²−b²，依据是？",
      "options": [
        "把平方当成乘2",
        "所有平方和都能相减",
        "平方差恒等式",
        "代两个数凑巧相等"
      ],
      "answer": 2,
      "explain": "恒等变形是结构依据；只验证一个数值不能代替一般论证。",
      "source": "整体思想与赋值法；因式分解综合应用：参数与应用",
      "origin": "资料考点衍生编写",
      "checkpoint": "写明由条件得到的关键关系与结构变形；数值验证不能代替恒等证明。求值与证明任务均须回应原问题。"
    },
    {
      "id": "apply-concept-2",
      "module": "apply",
      "level": 2,
      "kind": "choice",
      "family": "参数关系",
      "title": "结构侦探 · 参数关系",
      "prompt": "参数恒等式中要确定未知系数，稳妥的依据是？",
      "options": [
        "展开并比较对应系数",
        "任意猜一个数",
        "只看最高次项",
        "只检查最后答案的外观"
      ],
      "answer": 0,
      "explain": "对应系数关系来自恒等式对允许变量值都成立。",
      "source": "整体思想与赋值法；因式分解综合应用：参数与应用",
      "origin": "资料考点衍生编写",
      "checkpoint": "写明由条件得到的关键关系与结构变形；数值验证不能代替恒等证明。求值与证明任务均须回应原问题。"
    },
    {
      "id": "apply-concept-3",
      "module": "apply",
      "level": 3,
      "kind": "choice",
      "family": "一般性证明",
      "title": "结构侦探 · 一般性证明",
      "prompt": "证明结果与t无关，哪种证据充分？",
      "options": [
        "只代t=1",
        "试两个数相同就一定成立",
        "恒等变形到常数",
        "只代t=0"
      ],
      "answer": 2,
      "explain": "不能将有限次尝试当作对任意t的证明。",
      "source": "整体思想与赋值法；因式分解综合应用：参数与应用",
      "origin": "资料考点衍生编写",
      "checkpoint": "写明由条件得到的关键关系与结构变形；数值验证不能代替恒等证明。求值与证明任务均须回应原问题。"
    }
  ],
  "levels": {
    "1": "简易题",
    "2": "中档题",
    "3": "难 / 压轴题"
  },
  "scope": "七上整式运算与因式分解；难档表示本范围内的挑战，不等同上海中考压轴题。分式方程独立预留扩展，不混入当前主线。",
  "sources": [
    {
      "id": 1,
      "name": "【七上专题】 因式分解综合应用（七大题型）.pdf",
      "pages": 15,
      "chars": 8757
    },
    {
      "id": 2,
      "name": "【七上专题解析】 因式分解综合应用（七大题型）.pdf",
      "pages": 28,
      "chars": 20539
    },
    {
      "id": 3,
      "name": "【七上数学专题】  因式分解的概念与基本方法（原卷版）.pdf",
      "pages": 6,
      "chars": 1668
    },
    {
      "id": 4,
      "name": "【七上数学专题】  因式分解的概念与基本方法（解析版）.pdf",
      "pages": 19,
      "chars": 6770
    },
    {
      "id": 5,
      "name": "【七上数学预习】公式法因式分解.pdf",
      "pages": 12,
      "chars": 6112
    },
    {
      "id": 6,
      "name": "【七上数学预习】因式分解的意义与提公因式法.pdf",
      "pages": 10,
      "chars": 6080
    },
    {
      "id": 7,
      "name": "【七上数学预习解析】公式法因式分解.pdf",
      "pages": 26,
      "chars": 19305
    },
    {
      "id": 8,
      "name": "【七上数学预习解析】因式分解的意义与提公因式法.pdf",
      "pages": 22,
      "chars": 16932
    },
    {
      "id": 9,
      "name": "【七上数学预习解析】整式乘法.pdf",
      "pages": 35,
      "chars": 24496
    },
    {
      "id": 10,
      "name": "【七上预习｜解析】整式与合并同类项.pdf",
      "pages": 36,
      "chars": 26603
    },
    {
      "id": 11,
      "name": "【数学期中汇编】整式的加法和减法（原卷版）.pdf",
      "pages": 7,
      "chars": 4064
    },
    {
      "id": 12,
      "name": "【数学期中汇编】整式的加法和减法（解析版）.pdf",
      "pages": 27,
      "chars": 10512
    },
    {
      "id": 13,
      "name": "【期中汇编专题】因式分解（原卷版）.pdf",
      "pages": 21,
      "chars": 10991
    },
    {
      "id": 14,
      "name": "【期中汇编专题】因式分解（解析版）.pdf",
      "pages": 38,
      "chars": 16147
    },
    {
      "id": 15,
      "name": "【答案】分式方程应用.pdf",
      "pages": 5,
      "chars": 3067
    },
    {
      "id": 16,
      "name": "【答案】完全平方式应用.pdf",
      "pages": 6,
      "chars": 1243
    },
    {
      "id": 17,
      "name": "【答案】整体思想与赋值法.pdf",
      "pages": 3,
      "chars": 527
    },
    {
      "id": 18,
      "name": "【答案】整式应用题.pdf",
      "pages": 8,
      "chars": 2423
    },
    {
      "id": 19,
      "name": "【答案】整式计算练习.pdf",
      "pages": 16,
      "chars": 2139
    },
    {
      "id": 20,
      "name": "分式方程应用.pdf",
      "pages": 5,
      "chars": 1821
    },
    {
      "id": 21,
      "name": "完全平方式应用.pdf",
      "pages": 6,
      "chars": 584
    },
    {
      "id": 22,
      "name": "整体思想与赋值法.pdf",
      "pages": 3,
      "chars": 250
    },
    {
      "id": 23,
      "name": "整式应用题.pdf",
      "pages": 8,
      "chars": 1304
    },
    {
      "id": 24,
      "name": "整式计算练习.pdf",
      "pages": 16,
      "chars": 1274
    }
  ]
};
