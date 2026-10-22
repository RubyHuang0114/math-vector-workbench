window.MATH_DATA = {
  "version": 2,
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
      "id": "seven-A-01",
      "number": 1,
      "section": "A",
      "citation": "25-26七年级上·上海·期中",
      "questionFile": "【七上专题】 因式分解综合应用（七大题型）.pdf",
      "questionPage": 1,
      "answerFile": "【七上专题解析】 因式分解综合应用（七大题型）.pdf",
      "answerPage": 1,
      "questionImages": [
        "original-assets/seven-A-01-q-1.webp"
      ],
      "solutionImages": [
        "original-assets/seven-A-01-a-1.webp"
      ],
      "questionLocations": [
        {
          "fileId": 1,
          "page": 1,
          "box": [
            45,
            374.5,
            555.28,
            418.5
          ],
          "sha256": "19402dfbe35594949e656f0c2370432c9023e6e10edf35decb9de32f672d2eda"
        }
      ],
      "solutionLocations": [
        {
          "fileId": 2,
          "page": 1,
          "box": [
            45,
            355.3,
            555.28,
            683.82
          ],
          "sha256": "ac6daa39c6a9d2798cfc04cebd5955c76f6b5739d4f50d749f49bd64cb263e72"
        }
      ],
      "header": "1．（25-26七年级上·上海·期中）因式分解x2mx12x pxq，其中m、p、q都为整数，则这样",
      "module": "cross",
      "level": 3,
      "kind": "parts",
      "parts": [
        {
          "label": "原题填空",
          "target": "11",
          "mode": "value",
          "start": null
        }
      ],
      "requiresReason": false,
      "bank": "original",
      "active": true,
      "pendingReason": null,
      "origin": "文件夹原题 · 原稿展示",
      "source": "25-26七年级上·上海·期中｜【七上专题】 因式分解综合应用（七大题型）.pdf 第1页 · A第1题",
      "title": "A · 原题 1",
      "family": "十字-参数条件",
      "prompt": "按上方原题要求作答，题干、条件与图示均以原稿为准。",
      "context": "",
      "checkpoint": "保留支撑结论的关键变形；过程检查不等于官方步骤分。",
      "hints": []
    },
    {
      "id": "seven-A-02",
      "number": 2,
      "section": "A",
      "citation": "25-26七年级上·上海·期中",
      "questionFile": "【七上专题】 因式分解综合应用（七大题型）.pdf",
      "questionPage": 1,
      "answerFile": "【七上专题解析】 因式分解综合应用（七大题型）.pdf",
      "answerPage": 1,
      "questionImages": [
        "original-assets/seven-A-02-q-1.webp"
      ],
      "solutionImages": [
        "original-assets/seven-A-02-a-1.webp",
        "original-assets/seven-A-02-a-2.webp"
      ],
      "questionLocations": [
        {
          "fileId": 1,
          "page": 1,
          "box": [
            45,
            419.5,
            555.28,
            443.57
          ],
          "sha256": "001ef3485a0e8d59efc78fec2f1d2ced52b5053e9cefb90ca96296d42e660833"
        }
      ],
      "solutionLocations": [
        {
          "fileId": 2,
          "page": 1,
          "box": [
            45,
            684.82,
            555.28,
            779.75
          ],
          "sha256": "d4bb29b9a18533bdef222d817af1e9c03799bdfd331ece3f697250f86ddbda61"
        },
        {
          "fileId": 2,
          "page": 2,
          "box": [
            45,
            68,
            555.28,
            154.73
          ],
          "sha256": "c786ebcded8d6fd972c6e05702cd39d35c63db9d810ce106f4c48134722c3c9c"
        }
      ],
      "header": "2．（25-26七年级上·上海·期中）已知整式x2xk可以因式分解为xmx5，则m的值为 ．",
      "module": "cross",
      "level": 1,
      "kind": "parts",
      "parts": [
        {
          "label": "原题填空",
          "target": "4",
          "mode": "value",
          "start": null
        }
      ],
      "requiresReason": false,
      "bank": "original",
      "active": true,
      "pendingReason": null,
      "origin": "文件夹原题 · 原稿展示",
      "source": "25-26七年级上·上海·期中｜【七上专题】 因式分解综合应用（七大题型）.pdf 第1页 · A第2题",
      "title": "A · 原题 2",
      "family": "十字-参数条件",
      "prompt": "按上方原题要求作答，题干、条件与图示均以原稿为准。",
      "context": "",
      "checkpoint": "保留支撑结论的关键变形；过程检查不等于官方步骤分。",
      "hints": []
    },
    {
      "id": "seven-A-03",
      "number": 3,
      "section": "A",
      "citation": "25-26七年级上·上海·期中",
      "questionFile": "【七上专题】 因式分解综合应用（七大题型）.pdf",
      "questionPage": 1,
      "answerFile": "【七上专题解析】 因式分解综合应用（七大题型）.pdf",
      "answerPage": 2,
      "questionImages": [
        "original-assets/seven-A-03-q-1.webp"
      ],
      "solutionImages": [
        "original-assets/seven-A-03-a-1.webp"
      ],
      "questionLocations": [
        {
          "fileId": 1,
          "page": 1,
          "box": [
            45,
            444.57,
            555.28,
            499.0
          ],
          "sha256": "b04c2794c5373ba61a587ce74776f69a836897b82bb8b1620c2f04acc96276e7"
        }
      ],
      "solutionLocations": [
        {
          "fileId": 2,
          "page": 2,
          "box": [
            45,
            155.73,
            555.28,
            423.4
          ],
          "sha256": "2c2b475f3e79169a04dd8a84188d80d5decf31e46ba3a433016bf035e801419c"
        }
      ],
      "header": "3．（25-26七年级上·上海·期中）已知整式mx211x10可以写成两个因式的积，其中一个因式是2x5，",
      "module": "cross",
      "level": 2,
      "kind": "parts",
      "parts": [
        {
          "label": "原题填空",
          "target": "6",
          "mode": "value",
          "start": null
        }
      ],
      "requiresReason": false,
      "bank": "original",
      "active": true,
      "pendingReason": null,
      "origin": "文件夹原题 · 原稿展示",
      "source": "25-26七年级上·上海·期中｜【七上专题】 因式分解综合应用（七大题型）.pdf 第1页 · A第3题",
      "title": "A · 原题 3",
      "family": "十字-参数条件",
      "prompt": "按上方原题要求作答，题干、条件与图示均以原稿为准。",
      "context": "",
      "checkpoint": "保留支撑结论的关键变形；过程检查不等于官方步骤分。",
      "hints": []
    },
    {
      "id": "seven-A-04",
      "number": 4,
      "section": "A",
      "citation": "25-26七年级上·上海·阶段练习",
      "questionFile": "【七上专题】 因式分解综合应用（七大题型）.pdf",
      "questionPage": 1,
      "answerFile": "【七上专题解析】 因式分解综合应用（七大题型）.pdf",
      "answerPage": 2,
      "questionImages": [
        "original-assets/seven-A-04-q-1.webp"
      ],
      "solutionImages": [
        "original-assets/seven-A-04-a-1.webp"
      ],
      "questionLocations": [
        {
          "fileId": 1,
          "page": 1,
          "box": [
            45,
            534.81,
            555.28,
            555.6
          ],
          "sha256": "a4a9c3d94abae47ce807f44618b88e1f7c95c87d6912266d80ffafa323b68414"
        }
      ],
      "solutionLocations": [
        {
          "fileId": 2,
          "page": 2,
          "box": [
            45,
            440.01,
            555.28,
            534.36
          ],
          "sha256": "86d8887d77696da55099d5adbe1639743d2edf9162d5a42561aaccb2a7e8b5dd"
        }
      ],
      "header": "4．（25-26七年级上·上海·阶段练习）因式分解：6x25x1 ．",
      "module": "cross",
      "level": 2,
      "kind": "expression",
      "mode": "factor",
      "start": "6x^2-5x+1",
      "target": "(2x-1)(3x-1)",
      "steps": [
        "(2x-1)(3x-1)"
      ],
      "bank": "original",
      "active": true,
      "pendingReason": null,
      "origin": "文件夹原题 · 原稿展示",
      "source": "25-26七年级上·上海·阶段练习｜【七上专题】 因式分解综合应用（七大题型）.pdf 第1页 · A第4题",
      "title": "A · 原题 4",
      "family": "十字-一元三项式",
      "prompt": "按上方原题要求作答，题干、条件与图示均以原稿为准。",
      "context": "",
      "checkpoint": "保留支撑结论的关键变形；过程检查不等于官方步骤分。",
      "hints": []
    },
    {
      "id": "seven-A-05",
      "number": 5,
      "section": "A",
      "citation": "25-26七年级上·上海普陀·期中",
      "questionFile": "【七上专题】 因式分解综合应用（七大题型）.pdf",
      "questionPage": 1,
      "answerFile": "【七上专题解析】 因式分解综合应用（七大题型）.pdf",
      "answerPage": 2,
      "questionImages": [
        "original-assets/seven-A-05-q-1.webp"
      ],
      "solutionImages": [
        "original-assets/seven-A-05-a-1.webp"
      ],
      "questionLocations": [
        {
          "fileId": 1,
          "page": 1,
          "box": [
            45,
            556.6,
            555.28,
            577.49
          ],
          "sha256": "188759557b0764afca3685eed08c7807e1b39c193816a7fdd6349179b7485fdd"
        }
      ],
      "solutionLocations": [
        {
          "fileId": 2,
          "page": 2,
          "box": [
            45,
            535.36,
            555.28,
            622.85
          ],
          "sha256": "6d92d853cf2edee8b7ce421e1da7bbb9bf428df9f7770f31fc9dbc54505eaf6f"
        }
      ],
      "header": "5．（25-26七年级上·上海普陀·期中）因式分解：x25xy6y2  ．",
      "module": "cross",
      "level": 1,
      "kind": "expression",
      "mode": "factor",
      "start": "x^2-5xy+6y^2",
      "target": "(x-2y)(x-3y)",
      "steps": [
        "(x-2y)(x-3y)"
      ],
      "bank": "original",
      "active": true,
      "pendingReason": null,
      "origin": "文件夹原题 · 原稿展示",
      "source": "25-26七年级上·上海普陀·期中｜【七上专题】 因式分解综合应用（七大题型）.pdf 第1页 · A第5题",
      "title": "A · 原题 5",
      "family": "十字-二元三项式",
      "prompt": "按上方原题要求作答，题干、条件与图示均以原稿为准。",
      "context": "",
      "checkpoint": "保留支撑结论的关键变形；过程检查不等于官方步骤分。",
      "hints": []
    },
    {
      "id": "seven-A-06",
      "number": 6,
      "section": "A",
      "citation": "25-26七年级上·上海·期中",
      "questionFile": "【七上专题】 因式分解综合应用（七大题型）.pdf",
      "questionPage": 1,
      "answerFile": "【七上专题解析】 因式分解综合应用（七大题型）.pdf",
      "answerPage": 2,
      "questionImages": [
        "original-assets/seven-A-06-q-1.webp"
      ],
      "solutionImages": [
        "original-assets/seven-A-06-a-1.webp"
      ],
      "questionLocations": [
        {
          "fileId": 1,
          "page": 1,
          "box": [
            45,
            578.49,
            555.28,
            598.49
          ],
          "sha256": "2b6f251ae6311e24d7dd6dbfe3e4980c682dabae5bd10d2b79c30e991b9cd510"
        }
      ],
      "solutionLocations": [
        {
          "fileId": 2,
          "page": 2,
          "box": [
            45,
            623.85,
            555.28,
            717.41
          ],
          "sha256": "3ca6e882c1aa8fb0d4be68e3d31ba1b9c36f3979e362495e0ec090b20420850b"
        }
      ],
      "header": "6．（25-26七年级上·上海·期中）因式分解：a211a24 ．",
      "module": "cross",
      "level": 1,
      "kind": "expression",
      "mode": "factor",
      "start": "a^2-11a+24",
      "target": "(a-3)(a-8)",
      "steps": [
        "(a-3)(a-8)"
      ],
      "bank": "original",
      "active": true,
      "pendingReason": null,
      "origin": "文件夹原题 · 原稿展示",
      "source": "25-26七年级上·上海·期中｜【七上专题】 因式分解综合应用（七大题型）.pdf 第1页 · A第6题",
      "title": "A · 原题 6",
      "family": "十字-一元三项式",
      "prompt": "按上方原题要求作答，题干、条件与图示均以原稿为准。",
      "context": "",
      "checkpoint": "保留支撑结论的关键变形；过程检查不等于官方步骤分。",
      "hints": []
    },
    {
      "id": "seven-A-07",
      "number": 7,
      "section": "A",
      "citation": "25-26七年级上·上海徐汇·期中",
      "questionFile": "【七上专题】 因式分解综合应用（七大题型）.pdf",
      "questionPage": 1,
      "answerFile": "【七上专题解析】 因式分解综合应用（七大题型）.pdf",
      "answerPage": 2,
      "questionImages": [
        "original-assets/seven-A-07-q-1.webp"
      ],
      "solutionImages": [
        "original-assets/seven-A-07-a-1.webp",
        "original-assets/seven-A-07-a-2.webp"
      ],
      "questionLocations": [
        {
          "fileId": 1,
          "page": 1,
          "box": [
            45,
            599.49,
            555.28,
            619.13
          ],
          "sha256": "9c01ce5ee602735a1d44ef48e4b07fdb3a23084322d34846ac7c1fda9d22d845"
        }
      ],
      "solutionLocations": [
        {
          "fileId": 2,
          "page": 2,
          "box": [
            45,
            718.41,
            555.28,
            779.75
          ],
          "sha256": "1037b6d85a6d0e8f48b4991a16e62b40d9fd44e0bb4b087dece90a56787d955d"
        },
        {
          "fileId": 2,
          "page": 3,
          "box": [
            45,
            68,
            555.28,
            117.41
          ],
          "sha256": "40bd788ae1464139c70dbb1ad056acfb4bdcfe71ee2bbb7c04cec539a6b10122"
        }
      ],
      "header": "7．（25-26七年级上·上海徐汇·期中）因式分解：x25x6 ．",
      "module": "cross",
      "level": 1,
      "kind": "expression",
      "mode": "factor",
      "start": "x^2-5x-6",
      "target": "(x+1)(x-6)",
      "steps": [
        "(x+1)(x-6)"
      ],
      "bank": "original",
      "active": true,
      "pendingReason": null,
      "origin": "文件夹原题 · 原稿展示",
      "source": "25-26七年级上·上海徐汇·期中｜【七上专题】 因式分解综合应用（七大题型）.pdf 第1页 · A第7题",
      "title": "A · 原题 7",
      "family": "十字-一元三项式",
      "prompt": "按上方原题要求作答，题干、条件与图示均以原稿为准。",
      "context": "",
      "checkpoint": "保留支撑结论的关键变形；过程检查不等于官方步骤分。",
      "hints": []
    },
    {
      "id": "seven-A-08",
      "number": 8,
      "section": "A",
      "citation": "25-26七年级上·上海杨浦·期中",
      "questionFile": "【七上专题】 因式分解综合应用（七大题型）.pdf",
      "questionPage": 1,
      "answerFile": "【七上专题解析】 因式分解综合应用（七大题型）.pdf",
      "answerPage": 3,
      "questionImages": [
        "original-assets/seven-A-08-q-1.webp"
      ],
      "solutionImages": [
        "original-assets/seven-A-08-a-1.webp"
      ],
      "questionLocations": [
        {
          "fileId": 1,
          "page": 1,
          "box": [
            45,
            620.13,
            555.28,
            639.53
          ],
          "sha256": "44e73745e6fa3442f08c1dc06984752faffee1f4ad7da53eccdff3c0f149fd8c"
        }
      ],
      "solutionLocations": [
        {
          "fileId": 2,
          "page": 3,
          "box": [
            45,
            118.41,
            555.28,
            252.17
          ],
          "sha256": "c6d970050d8ffb4bb17ccd03addb0118e1d5dff5fa90038370b9d64f0d965ed7"
        }
      ],
      "header": "8．（25-26七年级上·上海杨浦·期中）因式分解：x214x32 ．",
      "module": "cross",
      "level": 2,
      "kind": "expression",
      "mode": "factor",
      "start": "x^2-14x-32",
      "target": "(x+2)(x-16)",
      "steps": [
        "(x+2)(x-16)"
      ],
      "bank": "original",
      "active": true,
      "pendingReason": null,
      "origin": "文件夹原题 · 原稿展示",
      "source": "25-26七年级上·上海杨浦·期中｜【七上专题】 因式分解综合应用（七大题型）.pdf 第1页 · A第8题",
      "title": "A · 原题 8",
      "family": "十字-一元三项式",
      "prompt": "按上方原题要求作答，题干、条件与图示均以原稿为准。",
      "context": "",
      "checkpoint": "保留支撑结论的关键变形；过程检查不等于官方步骤分。",
      "hints": []
    },
    {
      "id": "seven-A-09",
      "number": 9,
      "section": "A",
      "citation": "25-26七年级上·上海·期中",
      "questionFile": "【七上专题】 因式分解综合应用（七大题型）.pdf",
      "questionPage": 1,
      "answerFile": "【七上专题解析】 因式分解综合应用（七大题型）.pdf",
      "answerPage": 3,
      "questionImages": [
        "original-assets/seven-A-09-q-1.webp"
      ],
      "solutionImages": [
        "original-assets/seven-A-09-a-1.webp"
      ],
      "questionLocations": [
        {
          "fileId": 1,
          "page": 1,
          "box": [
            45,
            640.53,
            555.28,
            660.05
          ],
          "sha256": "6ba1081762d23e55b3a8c32245f082b51ea6eecca4b845d48a509242236e6ca6"
        }
      ],
      "solutionLocations": [
        {
          "fileId": 2,
          "page": 3,
          "box": [
            45,
            253.17,
            555.28,
            346.01
          ],
          "sha256": "8346d7fac9db323080e270af72537925b949826fc973ce5daa82a71505b30486"
        }
      ],
      "header": "9．（25-26七年级上·上海·期中）因式分解：4x215x9 ．",
      "module": "cross",
      "level": 2,
      "kind": "expression",
      "mode": "factor",
      "start": "4x^2-15x+9",
      "target": "(4x-3)(x-3)",
      "steps": [
        "(4x-3)(x-3)"
      ],
      "bank": "original",
      "active": true,
      "pendingReason": null,
      "origin": "文件夹原题 · 原稿展示",
      "source": "25-26七年级上·上海·期中｜【七上专题】 因式分解综合应用（七大题型）.pdf 第1页 · A第9题",
      "title": "A · 原题 9",
      "family": "十字-一元三项式",
      "prompt": "按上方原题要求作答，题干、条件与图示均以原稿为准。",
      "context": "",
      "checkpoint": "保留支撑结论的关键变形；过程检查不等于官方步骤分。",
      "hints": []
    },
    {
      "id": "seven-A-10",
      "number": 10,
      "section": "A",
      "citation": "25-26七年级上·上海闵行·期中",
      "questionFile": "【七上专题】 因式分解综合应用（七大题型）.pdf",
      "questionPage": 1,
      "answerFile": "【七上专题解析】 因式分解综合应用（七大题型）.pdf",
      "answerPage": 3,
      "questionImages": [
        "original-assets/seven-A-10-q-1.webp"
      ],
      "solutionImages": [
        "original-assets/seven-A-10-a-1.webp"
      ],
      "questionLocations": [
        {
          "fileId": 1,
          "page": 1,
          "box": [
            45,
            661.05,
            555.28,
            779.75
          ],
          "sha256": "1bcb575134459e1240d105b80422ad07249e5a085f265603b12809474d3c30bd"
        }
      ],
      "solutionLocations": [
        {
          "fileId": 2,
          "page": 3,
          "box": [
            45,
            347.01,
            555.28,
            633.29
          ],
          "sha256": "b07669820658f6d8728a2f9e2cc9b31d3c213722b6a4d153a4ec42b833207bc1"
        }
      ],
      "header": "10．（25-26七年级上·上海闵行·期中）两名学生将一个二次三项式因式分解，一名学生看错了一次项系数，",
      "module": "cross",
      "level": 3,
      "kind": "parts",
      "parts": [
        {
          "label": "正确的因式分解结果",
          "target": "(x-2)(x-3)",
          "mode": "factor",
          "start": null
        }
      ],
      "requiresReason": true,
      "bank": "original",
      "active": true,
      "pendingReason": null,
      "origin": "文件夹原题 · 原稿展示",
      "source": "25-26七年级上·上海闵行·期中｜【七上专题】 因式分解综合应用（七大题型）.pdf 第1页 · A第10题",
      "title": "A · 原题 10",
      "family": "十字-参数条件",
      "prompt": "按上方原题要求作答，题干、条件与图示均以原稿为准。",
      "context": "",
      "checkpoint": "保留支撑结论的关键变形；过程检查不等于官方步骤分。",
      "hints": []
    },
    {
      "id": "seven-A-11",
      "number": 11,
      "section": "A",
      "citation": "25-26七年级上·上海·期中",
      "questionFile": "【七上专题】 因式分解综合应用（七大题型）.pdf",
      "questionPage": 2,
      "answerFile": "【七上专题解析】 因式分解综合应用（七大题型）.pdf",
      "answerPage": 3,
      "questionImages": [
        "original-assets/seven-A-11-q-1.webp"
      ],
      "solutionImages": [
        "original-assets/seven-A-11-a-1.webp",
        "original-assets/seven-A-11-a-2.webp"
      ],
      "questionLocations": [
        {
          "fileId": 1,
          "page": 2,
          "box": [
            45,
            69.45,
            555.28,
            185.49
          ],
          "sha256": "41dbd677cfea645d7433dd2c4ddd14f1a202054b0c146ccc24f65ecf51e663e1"
        }
      ],
      "solutionLocations": [
        {
          "fileId": 2,
          "page": 3,
          "box": [
            45,
            634.29,
            555.28,
            779.75
          ],
          "sha256": "30a2283516adcb7582e4ba8ff889b7e7c32918e97711e85771c0da5244128d3b"
        },
        {
          "fileId": 2,
          "page": 4,
          "box": [
            45,
            68,
            555.28,
            202.53
          ],
          "sha256": "16e24034acc75acd3f9108c189a4bc8036e41db181e56041c6e4eab4ac7d2ec3"
        }
      ],
      "header": "11．（25-26七年级上·上海·期中）若取图中的若干个（三种图形都要取到）拼成一个长方形，使其面积为",
      "module": "apply",
      "level": 3,
      "kind": "parts",
      "parts": [
        {
          "label": "m的所有可能值",
          "target": "9,12,21",
          "mode": "set",
          "start": null
        }
      ],
      "requiresReason": true,
      "bank": "original",
      "active": true,
      "pendingReason": null,
      "origin": "文件夹原题 · 原稿展示",
      "source": "25-26七年级上·上海·期中｜【七上专题】 因式分解综合应用（七大题型）.pdf 第2页 · A第11题",
      "title": "A · 原题 11",
      "family": "应用-条件与结论",
      "prompt": "按上方原题要求作答，题干、条件与图示均以原稿为准。",
      "context": "",
      "checkpoint": "保留支撑结论的关键变形；过程检查不等于官方步骤分。",
      "hints": []
    },
    {
      "id": "seven-A-12",
      "number": 12,
      "section": "A",
      "citation": "25-26七年级上·上海闵行·期中",
      "questionFile": "【七上专题】 因式分解综合应用（七大题型）.pdf",
      "questionPage": 2,
      "answerFile": "【七上专题解析】 因式分解综合应用（七大题型）.pdf",
      "answerPage": 4,
      "questionImages": [
        "original-assets/seven-A-12-q-1.webp"
      ],
      "solutionImages": [
        "original-assets/seven-A-12-a-1.webp"
      ],
      "questionLocations": [
        {
          "fileId": 1,
          "page": 2,
          "box": [
            45,
            186.49,
            555.28,
            269.06
          ],
          "sha256": "71fab83df98801560edf0f820490547627b4947aed245e44f706098785ec72f9"
        }
      ],
      "solutionLocations": [
        {
          "fileId": 2,
          "page": 4,
          "box": [
            45,
            203.53,
            555.28,
            359.78
          ],
          "sha256": "f052c08be3bcff2df77382a6825c2654e84bd3c5c91ab6ba92187cd77562887b"
        }
      ],
      "header": "12．（25-26七年级上·上海闵行·期中）因式分解：  x2x  x2x5  6．",
      "module": "cross",
      "level": 3,
      "kind": "expression",
      "mode": "factor",
      "start": "(x^2+x)(x^2+x-5)-6",
      "target": "(x+3)(x-2)(x^2+x+1)",
      "steps": [
        "(x+3)(x-2)(x^2+x+1)"
      ],
      "bank": "original",
      "active": true,
      "pendingReason": null,
      "origin": "文件夹原题 · 原稿展示",
      "source": "25-26七年级上·上海闵行·期中｜【七上专题】 因式分解综合应用（七大题型）.pdf 第2页 · A第12题",
      "title": "A · 原题 12",
      "family": "十字-一元三项式",
      "prompt": "按上方原题要求作答，题干、条件与图示均以原稿为准。",
      "context": "",
      "checkpoint": "保留支撑结论的关键变形；过程检查不等于官方步骤分。",
      "hints": []
    },
    {
      "id": "seven-A-13",
      "number": 13,
      "section": "A",
      "citation": "25-26七年级上·上海静安·期中",
      "questionFile": "【七上专题】 因式分解综合应用（七大题型）.pdf",
      "questionPage": 2,
      "answerFile": "【七上专题解析】 因式分解综合应用（七大题型）.pdf",
      "answerPage": 4,
      "questionImages": [
        "original-assets/seven-A-13-q-1.webp"
      ],
      "solutionImages": [
        "original-assets/seven-A-13-a-1.webp"
      ],
      "questionLocations": [
        {
          "fileId": 1,
          "page": 2,
          "box": [
            45,
            270.06,
            555.28,
            393.05
          ],
          "sha256": "ac5548b11757aaef2d061e4112e4d1acf2ee3bc6c600fe27fe5c6c2e5a0bcdd6"
        }
      ],
      "solutionLocations": [
        {
          "fileId": 2,
          "page": 4,
          "box": [
            45,
            360.78,
            555.28,
            491.21
          ],
          "sha256": "08e844fd410d189b15fc9486b192d64d237f4acce0dc1476a4e323bc932d7827"
        }
      ],
      "header": "13．（25-26七年级上·上海静安·期中）分解因式：(a25a)25  a25a  6．",
      "module": "cross",
      "level": 3,
      "kind": "expression",
      "mode": "factor",
      "start": "(a^2+5a)^2+5(a^2+5a)-6",
      "target": "(a^2+5a-1)(a+2)(a+3)",
      "steps": [
        "(a^2+5a-1)(a+2)(a+3)"
      ],
      "bank": "original",
      "active": true,
      "pendingReason": null,
      "origin": "文件夹原题 · 原稿展示",
      "source": "25-26七年级上·上海静安·期中｜【七上专题】 因式分解综合应用（七大题型）.pdf 第2页 · A第13题",
      "title": "A · 原题 13",
      "family": "十字-一元三项式",
      "prompt": "按上方原题要求作答，题干、条件与图示均以原稿为准。",
      "context": "",
      "checkpoint": "保留支撑结论的关键变形；过程检查不等于官方步骤分。",
      "hints": []
    },
    {
      "id": "seven-A-14",
      "number": 14,
      "section": "A",
      "citation": "25-26七年级上·上海·期中",
      "questionFile": "【七上专题】 因式分解综合应用（七大题型）.pdf",
      "questionPage": 2,
      "answerFile": "【七上专题解析】 因式分解综合应用（七大题型）.pdf",
      "answerPage": 4,
      "questionImages": [
        "original-assets/seven-A-14-q-1.webp"
      ],
      "solutionImages": [
        "original-assets/seven-A-14-a-1.webp"
      ],
      "questionLocations": [
        {
          "fileId": 1,
          "page": 2,
          "box": [
            45,
            394.05,
            555.28,
            490.8
          ],
          "sha256": "f627b227793874defc721281699c48de5458c0d452cefa9b6dfa538969147f54"
        }
      ],
      "solutionLocations": [
        {
          "fileId": 2,
          "page": 4,
          "box": [
            45,
            492.21,
            555.28,
            609.36
          ],
          "sha256": "747eae23fb4c2552f88cfdd03c5cf2b1134312ef15073e1e93fc4399256d239c"
        }
      ],
      "header": "14．（25-26七年级上·上海·期中）因式分解：2x3y2x2y212xy3",
      "module": "cross",
      "level": 2,
      "kind": "expression",
      "mode": "factor",
      "start": "2x^3y+2x^2y^2-12xy^3",
      "target": "2xy(x+3y)(x-2y)",
      "steps": [
        "2xy(x+3y)(x-2y)"
      ],
      "bank": "original",
      "active": true,
      "pendingReason": null,
      "origin": "文件夹原题 · 原稿展示",
      "source": "25-26七年级上·上海·期中｜【七上专题】 因式分解综合应用（七大题型）.pdf 第2页 · A第14题",
      "title": "A · 原题 14",
      "family": "十字-二元三项式",
      "prompt": "按上方原题要求作答，题干、条件与图示均以原稿为准。",
      "context": "",
      "checkpoint": "保留支撑结论的关键变形；过程检查不等于官方步骤分。",
      "hints": []
    },
    {
      "id": "seven-A-15",
      "number": 15,
      "section": "A",
      "citation": "23-24七年级上·上海青浦·期中",
      "questionFile": "【七上专题】 因式分解综合应用（七大题型）.pdf",
      "questionPage": 2,
      "answerFile": "【七上专题解析】 因式分解综合应用（七大题型）.pdf",
      "answerPage": 4,
      "questionImages": [
        "original-assets/seven-A-15-q-1.webp"
      ],
      "solutionImages": [
        "original-assets/seven-A-15-a-1.webp",
        "original-assets/seven-A-15-a-2.webp"
      ],
      "questionLocations": [
        {
          "fileId": 1,
          "page": 2,
          "box": [
            45,
            483,
            555.28,
            613.24
          ],
          "sha256": "04a21400f9bb5480947a47555f6459131f2c09d0e8ec3f297f65a84d7cd3f3a4"
        }
      ],
      "solutionLocations": [
        {
          "fileId": 2,
          "page": 4,
          "box": [
            45,
            610.36,
            555.28,
            779.75
          ],
          "sha256": "8d91735c10e8b7c104f1aeb43b39e321ac862b0653c0019ad7611a061c5d7261"
        },
        {
          "fileId": 2,
          "page": 5,
          "box": [
            45,
            68,
            555.28,
            109.6
          ],
          "sha256": "97e67b2d3251646df80de50cef5ecbb5cdebbc16be39892e6355e897f66d77ea"
        }
      ],
      "header": "15．（23-24七年级上·上海青浦·期中）用简便方法计算： ．",
      "module": "apply",
      "level": 3,
      "kind": "expression",
      "mode": "value",
      "start": "((2020^2-2026)(2020^2+4037)*2021)/(2017*2019*2022*2023)",
      "target": "2021",
      "steps": [
        "2021"
      ],
      "bank": "original",
      "active": true,
      "pendingReason": null,
      "origin": "文件夹原题 · 原稿展示",
      "source": "23-24七年级上·上海青浦·期中｜【七上专题】 因式分解综合应用（七大题型）.pdf 第2页 · A第15题",
      "title": "A · 原题 15",
      "family": "应用-简便计算",
      "prompt": "按上方原题要求作答，题干、条件与图示均以原稿为准。",
      "context": "",
      "checkpoint": "保留支撑结论的关键变形；过程检查不等于官方步骤分。",
      "hints": []
    },
    {
      "id": "seven-A-16",
      "number": 16,
      "section": "A",
      "citation": "25-26七年级上·上海静安·期中",
      "questionFile": "【七上专题】 因式分解综合应用（七大题型）.pdf",
      "questionPage": 2,
      "answerFile": "【七上专题解析】 因式分解综合应用（七大题型）.pdf",
      "answerPage": 5,
      "questionImages": [
        "original-assets/seven-A-16-q-1.webp"
      ],
      "solutionImages": [
        "original-assets/seven-A-16-a-1.webp"
      ],
      "questionLocations": [
        {
          "fileId": 1,
          "page": 2,
          "box": [
            45,
            629.64,
            555.28,
            779.75
          ],
          "sha256": "100c6c270864e21181a558cba33aefce8607a2c0acc751344b1510daacd0395c"
        }
      ],
      "solutionLocations": [
        {
          "fileId": 2,
          "page": 5,
          "box": [
            45,
            125.88,
            555.28,
            244.25
          ],
          "sha256": "770a1b6c3dd9e3260a93b99e04edf8099a774377cf7328471d619b9248c242f6"
        }
      ],
      "header": "16．（25-26七年级上·上海静安·期中）分解因式：8axby4ay2bx．",
      "module": "group",
      "level": 1,
      "kind": "expression",
      "mode": "factor",
      "start": "8ax-by+4ay-2bx",
      "target": "(4a-b)(2x+y)",
      "steps": [
        "(4a-b)(2x+y)"
      ],
      "bank": "original",
      "active": true,
      "pendingReason": null,
      "origin": "文件夹原题 · 原稿展示",
      "source": "25-26七年级上·上海静安·期中｜【七上专题】 因式分解综合应用（七大题型）.pdf 第2页 · A第16题",
      "title": "A · 原题 16",
      "family": "分组-公共因式",
      "prompt": "按上方原题要求作答，题干、条件与图示均以原稿为准。",
      "context": "",
      "checkpoint": "保留支撑结论的关键变形；过程检查不等于官方步骤分。",
      "hints": []
    },
    {
      "id": "seven-A-17",
      "number": 17,
      "section": "A",
      "citation": "25-26七年级上·上海·期中",
      "questionFile": "【七上专题】 因式分解综合应用（七大题型）.pdf",
      "questionPage": 3,
      "answerFile": "【七上专题解析】 因式分解综合应用（七大题型）.pdf",
      "answerPage": 5,
      "questionImages": [
        "original-assets/seven-A-17-q-1.webp"
      ],
      "solutionImages": [
        "original-assets/seven-A-17-a-1.webp"
      ],
      "questionLocations": [
        {
          "fileId": 1,
          "page": 3,
          "box": [
            45,
            69.81,
            555.28,
            167.4
          ],
          "sha256": "dba94a3fdfc93d2ac740fef8bb291e6b0d6b2b4cd76aa7d9c0e3cb5dee55aeba"
        }
      ],
      "solutionLocations": [
        {
          "fileId": 2,
          "page": 5,
          "box": [
            45,
            245.25,
            555.28,
            433.44
          ],
          "sha256": "504d32080b3f6bc9d7c10e0195944d2e1d19bed2a58e4896fd94408c0010cdd6"
        }
      ],
      "header": "17．（25-26七年级上·上海·期中）因式分解：a26ab9b2a3b",
      "module": "group",
      "level": 2,
      "kind": "expression",
      "mode": "factor",
      "start": "a^2-6ab+9b^2-a+3b",
      "target": "(a-3b)(a-3b-1)",
      "steps": [
        "(a-3b)(a-3b-1)"
      ],
      "bank": "original",
      "active": true,
      "pendingReason": null,
      "origin": "文件夹原题 · 原稿展示",
      "source": "25-26七年级上·上海·期中｜【七上专题】 因式分解综合应用（七大题型）.pdf 第3页 · A第17题",
      "title": "A · 原题 17",
      "family": "分组-平方结构",
      "prompt": "按上方原题要求作答，题干、条件与图示均以原稿为准。",
      "context": "",
      "checkpoint": "保留支撑结论的关键变形；过程检查不等于官方步骤分。",
      "hints": []
    },
    {
      "id": "seven-A-18",
      "number": 18,
      "section": "A",
      "citation": "25-26七年级上·上海闵行·期中",
      "questionFile": "【七上专题】 因式分解综合应用（七大题型）.pdf",
      "questionPage": 3,
      "answerFile": "【七上专题解析】 因式分解综合应用（七大题型）.pdf",
      "answerPage": 5,
      "questionImages": [
        "original-assets/seven-A-18-q-1.webp"
      ],
      "solutionImages": [
        "original-assets/seven-A-18-a-1.webp"
      ],
      "questionLocations": [
        {
          "fileId": 1,
          "page": 3,
          "box": [
            45,
            168.4,
            555.28,
            285.41
          ],
          "sha256": "117601912d96e0709ca964402bc362b56fc37571f2ec6d243653a36251391ce2"
        }
      ],
      "solutionLocations": [
        {
          "fileId": 2,
          "page": 5,
          "box": [
            45,
            434.44,
            555.28,
            577.73
          ],
          "sha256": "41b4d2bb26c98fa8d956bdb0620a00c6b9ffa564e9b7d6c67ddb41c17e29dfa6"
        }
      ],
      "header": "18．（25-26七年级上·上海闵行·期中）因式分解：9x2y22y1",
      "module": "group",
      "level": 2,
      "kind": "expression",
      "mode": "factor",
      "start": "9x^2-y^2+2y-1",
      "target": "(3x-y+1)(3x+y-1)",
      "steps": [
        "(3x-y+1)(3x+y-1)"
      ],
      "bank": "original",
      "active": true,
      "pendingReason": null,
      "origin": "文件夹原题 · 原稿展示",
      "source": "25-26七年级上·上海闵行·期中｜【七上专题】 因式分解综合应用（七大题型）.pdf 第3页 · A第18题",
      "title": "A · 原题 18",
      "family": "分组-平方结构",
      "prompt": "按上方原题要求作答，题干、条件与图示均以原稿为准。",
      "context": "",
      "checkpoint": "保留支撑结论的关键变形；过程检查不等于官方步骤分。",
      "hints": []
    },
    {
      "id": "seven-A-19",
      "number": 19,
      "section": "A",
      "citation": "23-24七年级上·上海杨浦·期末",
      "questionFile": "【七上专题】 因式分解综合应用（七大题型）.pdf",
      "questionPage": 3,
      "answerFile": "【七上专题解析】 因式分解综合应用（七大题型）.pdf",
      "answerPage": 5,
      "questionImages": [
        "original-assets/seven-A-19-q-1.webp"
      ],
      "solutionImages": [
        "original-assets/seven-A-19-a-1.webp",
        "original-assets/seven-A-19-a-2.webp"
      ],
      "questionLocations": [
        {
          "fileId": 1,
          "page": 3,
          "box": [
            45,
            286.41,
            555.28,
            402.76
          ],
          "sha256": "c2ff23e0490127415a81278c7e148020fbe50fda2512b3471f967f595e5ce444"
        }
      ],
      "solutionLocations": [
        {
          "fileId": 2,
          "page": 5,
          "box": [
            45,
            578.73,
            555.28,
            779.75
          ],
          "sha256": "c60495a5cef998d145e3429c7ea0326613dfd7c00f8785cd3aadd2363af2c0ba"
        },
        {
          "fileId": 2,
          "page": 6,
          "box": [
            45,
            68,
            555.28,
            85.1
          ],
          "sha256": "f2a91a377e2e8478f6927f64570a4b93c0a88db82bbc6010c9536d183d976191"
        }
      ],
      "header": "19．（23-24七年级上·上海杨浦·期末）分解因式：a33a23a2．",
      "module": "group",
      "level": 3,
      "kind": "expression",
      "mode": "factor",
      "start": "a^3+3a^2+3a+2",
      "target": "(a+2)(a^2+a+1)",
      "steps": [
        "(a+2)(a^2+a+1)"
      ],
      "bank": "original",
      "active": true,
      "pendingReason": null,
      "origin": "文件夹原题 · 原稿展示",
      "source": "23-24七年级上·上海杨浦·期末｜【七上专题】 因式分解综合应用（七大题型）.pdf 第3页 · A第19题",
      "title": "A · 原题 19",
      "family": "分组-平方结构",
      "prompt": "按上方原题要求作答，题干、条件与图示均以原稿为准。",
      "context": "",
      "checkpoint": "保留支撑结论的关键变形；过程检查不等于官方步骤分。",
      "hints": []
    },
    {
      "id": "seven-A-20",
      "number": 20,
      "section": "A",
      "citation": "25-26七年级上·上海·阶段练习",
      "questionFile": "【七上专题】 因式分解综合应用（七大题型）.pdf",
      "questionPage": 3,
      "answerFile": "【七上专题解析】 因式分解综合应用（七大题型）.pdf",
      "answerPage": 6,
      "questionImages": [
        "original-assets/seven-A-20-q-1.webp"
      ],
      "solutionImages": [
        "original-assets/seven-A-20-a-1.webp"
      ],
      "questionLocations": [
        {
          "fileId": 1,
          "page": 3,
          "box": [
            45,
            439.26,
            555.28,
            460.51
          ],
          "sha256": "ea5d508a2fc685379bed576785eea180500e7cd6defbae0eea64842256b9d2c5"
        }
      ],
      "solutionLocations": [
        {
          "fileId": 2,
          "page": 6,
          "box": [
            45,
            86.1,
            555.28,
            173.47
          ],
          "sha256": "0f29707074bea6981a218976d23e81f5be1a58977af97157b53e87b526bee780"
        }
      ],
      "header": "20．（25-26七年级上·上海·阶段练习）因式分解：x24xy4y2  ．",
      "module": "formula",
      "level": 1,
      "kind": "expression",
      "mode": "factor",
      "start": "-x^2-4xy-4y^2",
      "target": "-(x+2y)^2",
      "steps": [
        "-(x+2y)^2"
      ],
      "bank": "original",
      "active": true,
      "pendingReason": null,
      "origin": "文件夹原题 · 原稿展示",
      "source": "25-26七年级上·上海·阶段练习｜【七上专题】 因式分解综合应用（七大题型）.pdf 第3页 · A第20题",
      "title": "A · 原题 20",
      "family": "公式-完全平方",
      "prompt": "按上方原题要求作答，题干、条件与图示均以原稿为准。",
      "context": "",
      "checkpoint": "保留支撑结论的关键变形；过程检查不等于官方步骤分。",
      "hints": []
    },
    {
      "id": "seven-A-21",
      "number": 21,
      "section": "A",
      "citation": "25-26七年级上·上海闵行·期中",
      "questionFile": "【七上专题】 因式分解综合应用（七大题型）.pdf",
      "questionPage": 3,
      "answerFile": "【七上专题解析】 因式分解综合应用（七大题型）.pdf",
      "answerPage": 6,
      "questionImages": [
        "original-assets/seven-A-21-q-1.webp"
      ],
      "solutionImages": [
        "original-assets/seven-A-21-a-1.webp"
      ],
      "questionLocations": [
        {
          "fileId": 1,
          "page": 3,
          "box": [
            45,
            461.51,
            555.28,
            482.93
          ],
          "sha256": "841f6fb1c5ca10a4a8444d80cf0dbd91a61148770db85f293091c664c4063ee2"
        }
      ],
      "solutionLocations": [
        {
          "fileId": 2,
          "page": 6,
          "box": [
            45,
            174.47,
            555.28,
            317.69
          ],
          "sha256": "549f147d2d5c2335b047c8bc7929cb0cf36dc9ace8a529044492a90988846fea"
        }
      ],
      "header": "21．（25-26七年级上·上海闵行·期中）因式分解：yn28yn112yn  ．",
      "module": "apply",
      "level": 3,
      "kind": "reference",
      "bank": "original",
      "active": false,
      "pendingReason": "原题含字母指数n，尚未配置严格的符号指数判题；保留原题与原解析供查阅。",
      "origin": "文件夹原题 · 原稿展示",
      "source": "25-26七年级上·上海闵行·期中｜【七上专题】 因式分解综合应用（七大题型）.pdf 第3页 · A第21题",
      "title": "A · 原题 21",
      "family": "待配置",
      "prompt": "按上方原题要求作答，题干、条件与图示均以原稿为准。",
      "context": "",
      "checkpoint": "保留支撑结论的关键变形；过程检查不等于官方步骤分。",
      "hints": []
    },
    {
      "id": "seven-A-22",
      "number": 22,
      "section": "A",
      "citation": "25-26七年级上·上海·期中",
      "questionFile": "【七上专题】 因式分解综合应用（七大题型）.pdf",
      "questionPage": 3,
      "answerFile": "【七上专题解析】 因式分解综合应用（七大题型）.pdf",
      "answerPage": 6,
      "questionImages": [
        "original-assets/seven-A-22-q-1.webp"
      ],
      "solutionImages": [
        "original-assets/seven-A-22-a-1.webp"
      ],
      "questionLocations": [
        {
          "fileId": 1,
          "page": 3,
          "box": [
            45,
            483.93,
            555.28,
            504.6
          ],
          "sha256": "3c9dd0bb7cb53417db939e76f9b7bf59baba239f791873f48cfcfde47b09f7c9"
        }
      ],
      "solutionLocations": [
        {
          "fileId": 2,
          "page": 6,
          "box": [
            45,
            318.69,
            555.28,
            458.76
          ],
          "sha256": "307bfee34aa9b0ac28cf584d5ba48f2327403c5bb6dba36ad612d14ef488dc0a"
        }
      ],
      "header": "22．（25-26七年级上·上海·期中）分解因式：x3x ．",
      "module": "formula",
      "level": 1,
      "kind": "expression",
      "mode": "factor",
      "start": "x^3-x",
      "target": "x(x-1)(x+1)",
      "steps": [
        "x(x-1)(x+1)"
      ],
      "bank": "original",
      "active": true,
      "pendingReason": null,
      "origin": "文件夹原题 · 原稿展示",
      "source": "25-26七年级上·上海·期中｜【七上专题】 因式分解综合应用（七大题型）.pdf 第3页 · A第22题",
      "title": "A · 原题 22",
      "family": "公式-平方差",
      "prompt": "按上方原题要求作答，题干、条件与图示均以原稿为准。",
      "context": "",
      "checkpoint": "保留支撑结论的关键变形；过程检查不等于官方步骤分。",
      "hints": []
    },
    {
      "id": "seven-A-23",
      "number": 23,
      "section": "A",
      "citation": "25-26七年级上·上海·期中",
      "questionFile": "【七上专题】 因式分解综合应用（七大题型）.pdf",
      "questionPage": 3,
      "answerFile": "【七上专题解析】 因式分解综合应用（七大题型）.pdf",
      "answerPage": 6,
      "questionImages": [
        "original-assets/seven-A-23-q-1.webp"
      ],
      "solutionImages": [
        "original-assets/seven-A-23-a-1.webp"
      ],
      "questionLocations": [
        {
          "fileId": 1,
          "page": 3,
          "box": [
            45,
            505.6,
            555.28,
            526.26
          ],
          "sha256": "bd1f42eec61be3acc5df7362c0941e8ecdfea01e423062e4a24b169c38f074c5"
        }
      ],
      "solutionLocations": [
        {
          "fileId": 2,
          "page": 6,
          "box": [
            45,
            459.76,
            555.28,
            602.22
          ],
          "sha256": "d52b9ba4da615ff7638ceea17ba54ea6eb5487ffd55d046bfbcc3f59c624466d"
        }
      ],
      "header": "23．（25-26七年级上·上海·期中）因式分解：20x25y2  ．",
      "module": "formula",
      "level": 1,
      "kind": "expression",
      "mode": "factor",
      "start": "20x^2-5y^2",
      "target": "5(2x+y)(2x-y)",
      "steps": [
        "5(2x+y)(2x-y)"
      ],
      "bank": "original",
      "active": true,
      "pendingReason": null,
      "origin": "文件夹原题 · 原稿展示",
      "source": "25-26七年级上·上海·期中｜【七上专题】 因式分解综合应用（七大题型）.pdf 第3页 · A第23题",
      "title": "A · 原题 23",
      "family": "公式-平方差",
      "prompt": "按上方原题要求作答，题干、条件与图示均以原稿为准。",
      "context": "",
      "checkpoint": "保留支撑结论的关键变形；过程检查不等于官方步骤分。",
      "hints": []
    },
    {
      "id": "seven-A-24",
      "number": 24,
      "section": "A",
      "citation": "25-26七年级上·上海·期中",
      "questionFile": "【七上专题】 因式分解综合应用（七大题型）.pdf",
      "questionPage": 3,
      "answerFile": "【七上专题解析】 因式分解综合应用（七大题型）.pdf",
      "answerPage": 6,
      "questionImages": [
        "original-assets/seven-A-24-q-1.webp"
      ],
      "solutionImages": [
        "original-assets/seven-A-24-a-1.webp",
        "original-assets/seven-A-24-a-2.webp"
      ],
      "questionLocations": [
        {
          "fileId": 1,
          "page": 3,
          "box": [
            45,
            527.26,
            555.28,
            550.85
          ],
          "sha256": "5a45a125e7152187e869229b5f48815fff5a1b662d9b971bcdd6225afc4f5797"
        }
      ],
      "solutionLocations": [
        {
          "fileId": 2,
          "page": 6,
          "box": [
            45,
            603.22,
            555.28,
            779.75
          ],
          "sha256": "aa0aee7a8c2a5a28c622f9bbb01bdb30d83d6d94887a51ffdc4e8e30acaf9369"
        },
        {
          "fileId": 2,
          "page": 7,
          "box": [
            45,
            68,
            555.28,
            93.17
          ],
          "sha256": "733f999156f4a513e8655236628c3dc28a276f33a4a42376dacd66efc00aaa71"
        }
      ],
      "header": "24．（25-26七年级上·上海·期中）因式分解：a2xyyx ．",
      "module": "formula",
      "level": 2,
      "kind": "expression",
      "mode": "factor",
      "start": "a^2(x-y)+(y-x)",
      "target": "(x-y)(a-1)(a+1)",
      "steps": [
        "(x-y)(a-1)(a+1)"
      ],
      "bank": "original",
      "active": true,
      "pendingReason": null,
      "origin": "文件夹原题 · 原稿展示",
      "source": "25-26七年级上·上海·期中｜【七上专题】 因式分解综合应用（七大题型）.pdf 第3页 · A第24题",
      "title": "A · 原题 24",
      "family": "公式-平方差",
      "prompt": "按上方原题要求作答，题干、条件与图示均以原稿为准。",
      "context": "",
      "checkpoint": "保留支撑结论的关键变形；过程检查不等于官方步骤分。",
      "hints": []
    },
    {
      "id": "seven-A-25",
      "number": 25,
      "section": "A",
      "citation": "24-25七年级上·上海·期中",
      "questionFile": "【七上专题】 因式分解综合应用（七大题型）.pdf",
      "questionPage": 3,
      "answerFile": "【七上专题解析】 因式分解综合应用（七大题型）.pdf",
      "answerPage": 7,
      "questionImages": [
        "original-assets/seven-A-25-q-1.webp"
      ],
      "solutionImages": [
        "original-assets/seven-A-25-a-1.webp"
      ],
      "questionLocations": [
        {
          "fileId": 1,
          "page": 3,
          "box": [
            45,
            551.85,
            555.28,
            649.2
          ],
          "sha256": "7c073c7846a2baf3e73c06602561b01b6b42a7883fc377c5819c0478d07f8cc4"
        }
      ],
      "solutionLocations": [
        {
          "fileId": 2,
          "page": 7,
          "box": [
            45,
            94.17,
            555.28,
            238.44
          ],
          "sha256": "4bd427d88dbb46d84f1059c2d5501fe1b5535279f62b55e4de87eeca3d866054"
        }
      ],
      "header": "25．（24-25七年级上·上海·期中）因式分解：2a4b232b2",
      "module": "formula",
      "level": 3,
      "kind": "expression",
      "mode": "factor",
      "start": "2a^4b^2-32b^2",
      "target": "2b^2(a^2+4)(a+2)(a-2)",
      "steps": [
        "2b^2(a^2+4)(a+2)(a-2)"
      ],
      "bank": "original",
      "active": true,
      "pendingReason": null,
      "origin": "文件夹原题 · 原稿展示",
      "source": "24-25七年级上·上海·期中｜【七上专题】 因式分解综合应用（七大题型）.pdf 第3页 · A第25题",
      "title": "A · 原题 25",
      "family": "公式-多次分解",
      "prompt": "按上方原题要求作答，题干、条件与图示均以原稿为准。",
      "context": "",
      "checkpoint": "保留支撑结论的关键变形；过程检查不等于官方步骤分。",
      "hints": []
    },
    {
      "id": "seven-A-26",
      "number": 26,
      "section": "A",
      "citation": "24-25七年级上·上海·期中",
      "questionFile": "【七上专题】 因式分解综合应用（七大题型）.pdf",
      "questionPage": 3,
      "answerFile": "【七上专题解析】 因式分解综合应用（七大题型）.pdf",
      "answerPage": 7,
      "questionImages": [
        "original-assets/seven-A-26-q-1.webp"
      ],
      "solutionImages": [
        "original-assets/seven-A-26-a-1.webp"
      ],
      "questionLocations": [
        {
          "fileId": 1,
          "page": 3,
          "box": [
            45,
            650.2,
            555.28,
            779.75
          ],
          "sha256": "c1bfdaf1de9c18425191342e2e3d86f71588541132bc75eaeaed3e3024c615b2"
        }
      ],
      "solutionLocations": [
        {
          "fileId": 2,
          "page": 7,
          "box": [
            45,
            239.44,
            555.28,
            354.24
          ],
          "sha256": "9e31c57b5a1af7d6c3c5bd4be922302c1f49d8a5991367c35fb1812054226b07"
        }
      ],
      "header": "26．（24-25七年级上·上海·期中）因式分解：3x2y318xy227y",
      "module": "formula",
      "level": 2,
      "kind": "expression",
      "mode": "factor",
      "start": "3x^2y^3-18xy^2+27y",
      "target": "3y(xy-3)^2",
      "steps": [
        "3y(xy-3)^2"
      ],
      "bank": "original",
      "active": true,
      "pendingReason": null,
      "origin": "文件夹原题 · 原稿展示",
      "source": "24-25七年级上·上海·期中｜【七上专题】 因式分解综合应用（七大题型）.pdf 第3页 · A第26题",
      "title": "A · 原题 26",
      "family": "公式-完全平方",
      "prompt": "按上方原题要求作答，题干、条件与图示均以原稿为准。",
      "context": "",
      "checkpoint": "保留支撑结论的关键变形；过程检查不等于官方步骤分。",
      "hints": []
    },
    {
      "id": "seven-A-27",
      "number": 27,
      "section": "A",
      "citation": "25-26七年级上·上海普陀·期中",
      "questionFile": "【七上专题】 因式分解综合应用（七大题型）.pdf",
      "questionPage": 4,
      "answerFile": "【七上专题解析】 因式分解综合应用（七大题型）.pdf",
      "answerPage": 7,
      "questionImages": [
        "original-assets/seven-A-27-q-1.webp"
      ],
      "solutionImages": [
        "original-assets/seven-A-27-a-1.webp"
      ],
      "questionLocations": [
        {
          "fileId": 1,
          "page": 4,
          "box": [
            45,
            70.48,
            555.28,
            168.04
          ],
          "sha256": "625ee2b948a90dbdb91a28f25bbe453ee041c0af5d2e7da6dc6dc37528a2c3dc"
        }
      ],
      "solutionLocations": [
        {
          "fileId": 2,
          "page": 7,
          "box": [
            45,
            355.24,
            555.28,
            441.48
          ],
          "sha256": "4c64a8e5e89f586f523e1e17f944037bd75d81abc7cea4cd0c532687ff55479f"
        }
      ],
      "header": "27．（25-26七年级上·上海普陀·期中）因式分解：a2(ab)4(ba)．",
      "module": "formula",
      "level": 2,
      "kind": "expression",
      "mode": "factor",
      "start": "a^2(a-b)+4(b-a)",
      "target": "(a-b)(a+2)(a-2)",
      "steps": [
        "(a-b)(a+2)(a-2)"
      ],
      "bank": "original",
      "active": true,
      "pendingReason": null,
      "origin": "文件夹原题 · 原稿展示",
      "source": "25-26七年级上·上海普陀·期中｜【七上专题】 因式分解综合应用（七大题型）.pdf 第4页 · A第27题",
      "title": "A · 原题 27",
      "family": "公式-平方差",
      "prompt": "按上方原题要求作答，题干、条件与图示均以原稿为准。",
      "context": "",
      "checkpoint": "保留支撑结论的关键变形；过程检查不等于官方步骤分。",
      "hints": []
    },
    {
      "id": "seven-A-28",
      "number": 28,
      "section": "A",
      "citation": "25-26七年级上·上海浦东新·期中",
      "questionFile": "【七上专题】 因式分解综合应用（七大题型）.pdf",
      "questionPage": 4,
      "answerFile": "【七上专题解析】 因式分解综合应用（七大题型）.pdf",
      "answerPage": 7,
      "questionImages": [
        "original-assets/seven-A-28-q-1.webp"
      ],
      "solutionImages": [
        "original-assets/seven-A-28-a-1.webp"
      ],
      "questionLocations": [
        {
          "fileId": 1,
          "page": 4,
          "box": [
            45,
            169.04,
            555.28,
            270.2
          ],
          "sha256": "a7f26ad948c69ab2c1dc55a5d9119c0a2c21af48213b9ae95460c0b9143fa4b0"
        }
      ],
      "solutionLocations": [
        {
          "fileId": 2,
          "page": 7,
          "box": [
            45,
            442.48,
            555.28,
            615.92
          ],
          "sha256": "def035cb005ff7dffa8ec3a357e38c794a46e37674e6e0cefb0568ab71e5f260"
        }
      ],
      "header": "28．（25-26七年级上·上海浦东新·期中）因式分解：2xyx618y",
      "module": "formula",
      "level": 2,
      "kind": "expression",
      "mode": "factor",
      "start": "-2xy(x-6)-18y",
      "target": "-2y(x-3)^2",
      "steps": [
        "-2y(x-3)^2"
      ],
      "bank": "original",
      "active": true,
      "pendingReason": null,
      "origin": "文件夹原题 · 原稿展示",
      "source": "25-26七年级上·上海浦东新·期中｜【七上专题】 因式分解综合应用（七大题型）.pdf 第4页 · A第28题",
      "title": "A · 原题 28",
      "family": "公式-完全平方",
      "prompt": "按上方原题要求作答，题干、条件与图示均以原稿为准。",
      "context": "",
      "checkpoint": "保留支撑结论的关键变形；过程检查不等于官方步骤分。",
      "hints": []
    },
    {
      "id": "seven-A-29",
      "number": 29,
      "section": "A",
      "citation": "25-26七年级上·上海杨浦·期中",
      "questionFile": "【七上专题】 因式分解综合应用（七大题型）.pdf",
      "questionPage": 4,
      "answerFile": "【七上专题解析】 因式分解综合应用（七大题型）.pdf",
      "answerPage": 7,
      "questionImages": [
        "original-assets/seven-A-29-q-1.webp"
      ],
      "solutionImages": [
        "original-assets/seven-A-29-a-1.webp"
      ],
      "questionLocations": [
        {
          "fileId": 1,
          "page": 4,
          "box": [
            45,
            271.2,
            555.28,
            369.72
          ],
          "sha256": "dc43cca9519c89a0e445424b22b6a5b983ceae65917b1841cf71ca5ca41586a5"
        }
      ],
      "solutionLocations": [
        {
          "fileId": 2,
          "page": 7,
          "box": [
            45,
            616.92,
            555.28,
            779.75
          ],
          "sha256": "f5f02230e5a504848d799934b7a3081764e6b4bfdb2d372f557a0964be7c9af1"
        }
      ],
      "header": "29．（25-26七年级上·上海杨浦·期中）因式分解：x2y2x2y21．",
      "module": "group",
      "level": 2,
      "kind": "expression",
      "mode": "factor",
      "start": "x^2y^2-x^2-y^2+1",
      "target": "(x-1)(x+1)(y-1)(y+1)",
      "steps": [
        "(x-1)(x+1)(y-1)(y+1)"
      ],
      "bank": "original",
      "active": true,
      "pendingReason": null,
      "origin": "文件夹原题 · 原稿展示",
      "source": "25-26七年级上·上海杨浦·期中｜【七上专题】 因式分解综合应用（七大题型）.pdf 第4页 · A第29题",
      "title": "A · 原题 29",
      "family": "分组-平方结构",
      "prompt": "按上方原题要求作答，题干、条件与图示均以原稿为准。",
      "context": "",
      "checkpoint": "保留支撑结论的关键变形；过程检查不等于官方步骤分。",
      "hints": []
    },
    {
      "id": "seven-A-30",
      "number": 30,
      "section": "A",
      "citation": "25-26七年级上·上海·期中",
      "questionFile": "【七上专题】 因式分解综合应用（七大题型）.pdf",
      "questionPage": 4,
      "answerFile": "【七上专题解析】 因式分解综合应用（七大题型）.pdf",
      "answerPage": 8,
      "questionImages": [
        "original-assets/seven-A-30-q-1.webp"
      ],
      "solutionImages": [
        "original-assets/seven-A-30-a-1.webp"
      ],
      "questionLocations": [
        {
          "fileId": 1,
          "page": 4,
          "box": [
            45,
            370.72,
            555.28,
            469.32
          ],
          "sha256": "2f96e6b79b6c153b7c290f3c8d6e11769cbf459a45ef8c54c7f15501d4fb8a0d"
        }
      ],
      "solutionLocations": [
        {
          "fileId": 2,
          "page": 8,
          "box": [
            45,
            70.48,
            555.28,
            189.36
          ],
          "sha256": "bc6d839e10b6b2c509832a4090b1d064006668bdc9dd4bd631fc62a293cad74e"
        }
      ],
      "header": "30．（25-26七年级上·上海·期中）因式分解：4x24xy y29",
      "module": "formula",
      "level": 2,
      "kind": "expression",
      "mode": "factor",
      "start": "4x^2-4xy+y^2-9",
      "target": "(2x-y+3)(2x-y-3)",
      "steps": [
        "(2x-y+3)(2x-y-3)"
      ],
      "bank": "original",
      "active": true,
      "pendingReason": null,
      "origin": "文件夹原题 · 原稿展示",
      "source": "25-26七年级上·上海·期中｜【七上专题】 因式分解综合应用（七大题型）.pdf 第4页 · A第30题",
      "title": "A · 原题 30",
      "family": "公式-平方差",
      "prompt": "按上方原题要求作答，题干、条件与图示均以原稿为准。",
      "context": "",
      "checkpoint": "保留支撑结论的关键变形；过程检查不等于官方步骤分。",
      "hints": []
    },
    {
      "id": "seven-A-31",
      "number": 31,
      "section": "A",
      "citation": "25-26七年级上·上海·期中",
      "questionFile": "【七上专题】 因式分解综合应用（七大题型）.pdf",
      "questionPage": 4,
      "answerFile": "【七上专题解析】 因式分解综合应用（七大题型）.pdf",
      "answerPage": 8,
      "questionImages": [
        "original-assets/seven-A-31-q-1.webp"
      ],
      "solutionImages": [
        "original-assets/seven-A-31-a-1.webp"
      ],
      "questionLocations": [
        {
          "fileId": 1,
          "page": 4,
          "box": [
            45,
            470.32,
            555.28,
            567.89
          ],
          "sha256": "e8bd6899d88dd6ef599cd79516a8df804a0af8d7cb9d64110b20f3ee18d52712"
        }
      ],
      "solutionLocations": [
        {
          "fileId": 2,
          "page": 8,
          "box": [
            45,
            190.36,
            555.28,
            286.01
          ],
          "sha256": "68559b244a52b4b6c752bb98ec925cb909c689f0ea11bd5c96104874e04d9f70"
        }
      ],
      "header": "31．（25-26七年级上·上海·期中）因式分解：x23yxy3x",
      "module": "group",
      "level": 1,
      "kind": "expression",
      "mode": "factor",
      "start": "x^2+3y-xy-3x",
      "target": "(x-3)(x-y)",
      "steps": [
        "(x-3)(x-y)"
      ],
      "bank": "original",
      "active": true,
      "pendingReason": null,
      "origin": "文件夹原题 · 原稿展示",
      "source": "25-26七年级上·上海·期中｜【七上专题】 因式分解综合应用（七大题型）.pdf 第4页 · A第31题",
      "title": "A · 原题 31",
      "family": "分组-平方结构",
      "prompt": "按上方原题要求作答，题干、条件与图示均以原稿为准。",
      "context": "",
      "checkpoint": "保留支撑结论的关键变形；过程检查不等于官方步骤分。",
      "hints": []
    },
    {
      "id": "seven-A-32",
      "number": 32,
      "section": "A",
      "citation": "25-26七年级上·上海杨浦·期中",
      "questionFile": "【七上专题】 因式分解综合应用（七大题型）.pdf",
      "questionPage": 4,
      "answerFile": "【七上专题解析】 因式分解综合应用（七大题型）.pdf",
      "answerPage": 8,
      "questionImages": [
        "original-assets/seven-A-32-q-1.webp",
        "original-assets/seven-A-32-q-2.webp"
      ],
      "solutionImages": [
        "original-assets/seven-A-32-a-1.webp"
      ],
      "questionLocations": [
        {
          "fileId": 1,
          "page": 4,
          "box": [
            45,
            568.89,
            555.28,
            779.75
          ],
          "sha256": "25c54be4870c10ffc9b22ba97e696d7048aa87bc709d57312eb4f8282f82d629"
        },
        {
          "fileId": 1,
          "page": 5,
          "box": [
            45,
            68,
            555.28,
            103.61
          ],
          "sha256": "034c40cb21367dfcde3350f2c876dda9e6a8effc3fd9790e6a0837ecd7501d57"
        }
      ],
      "solutionLocations": [
        {
          "fileId": 2,
          "page": 8,
          "box": [
            45,
            287.01,
            555.28,
            582.76
          ],
          "sha256": "223964486fad368ead03a6b9ea184bcbb39dc04eedc1b8dce91ffb36b01473c8"
        }
      ],
      "header": "32．（25-26七年级上·上海杨浦·期中）以下是小明因式分解的过程：",
      "module": "group",
      "level": 3,
      "kind": "parts",
      "parts": [
        {
          "label": "从第几步出错",
          "target": "3",
          "mode": "value",
          "start": null
        },
        {
          "label": "正确的因式分解结果",
          "target": "(4-a+2b)(4+a-2b)",
          "mode": "factor",
          "start": "16-a^2+4ab-4b^2"
        }
      ],
      "requiresReason": true,
      "bank": "original",
      "active": true,
      "pendingReason": null,
      "origin": "文件夹原题 · 原稿展示",
      "source": "25-26七年级上·上海杨浦·期中｜【七上专题】 因式分解综合应用（七大题型）.pdf 第4页 · A第32题",
      "title": "A · 原题 32",
      "family": "分组-阅读辨析",
      "prompt": "按上方原题要求作答，题干、条件与图示均以原稿为准。",
      "context": "",
      "checkpoint": "保留支撑结论的关键变形；过程检查不等于官方步骤分。",
      "hints": []
    },
    {
      "id": "seven-A-33",
      "number": 33,
      "section": "A",
      "citation": "25-26七年级上·上海·阶段练习",
      "questionFile": "【七上专题】 因式分解综合应用（七大题型）.pdf",
      "questionPage": 5,
      "answerFile": "【七上专题解析】 因式分解综合应用（七大题型）.pdf",
      "answerPage": 8,
      "questionImages": [
        "original-assets/seven-A-33-q-1.webp"
      ],
      "solutionImages": [
        "original-assets/seven-A-33-a-1.webp"
      ],
      "questionLocations": [
        {
          "fileId": 1,
          "page": 5,
          "box": [
            45,
            104.61,
            555.28,
            125.56
          ],
          "sha256": "8e6c0b0ee4050c9a28fd28dd24edd4b97a69f10badf2bcd2610e5fcd266a3795"
        }
      ],
      "solutionLocations": [
        {
          "fileId": 2,
          "page": 8,
          "box": [
            45,
            599.37,
            555.28,
            684.16
          ],
          "sha256": "be5c328d000aa50894369fd5a622ac519d5d9d9eded7a0948b2edf9dec5f6454"
        }
      ],
      "header": "33．（25-26七年级上·上海·阶段练习）因式分解：m22m1n2  ．",
      "module": "formula",
      "level": 1,
      "kind": "expression",
      "mode": "factor",
      "start": "m^2-2m+1-n^2",
      "target": "(m-1+n)(m-1-n)",
      "steps": [
        "(m-1+n)(m-1-n)"
      ],
      "bank": "original",
      "active": true,
      "pendingReason": null,
      "origin": "文件夹原题 · 原稿展示",
      "source": "25-26七年级上·上海·阶段练习｜【七上专题】 因式分解综合应用（七大题型）.pdf 第5页 · A第33题",
      "title": "A · 原题 33",
      "family": "公式-平方差",
      "prompt": "按上方原题要求作答，题干、条件与图示均以原稿为准。",
      "context": "",
      "checkpoint": "保留支撑结论的关键变形；过程检查不等于官方步骤分。",
      "hints": []
    },
    {
      "id": "seven-A-34",
      "number": 34,
      "section": "A",
      "citation": "25-26七年级上·上海闵行·期中",
      "questionFile": "【七上专题】 因式分解综合应用（七大题型）.pdf",
      "questionPage": 5,
      "answerFile": "【七上专题解析】 因式分解综合应用（七大题型）.pdf",
      "answerPage": 8,
      "questionImages": [
        "original-assets/seven-A-34-q-1.webp"
      ],
      "solutionImages": [
        "original-assets/seven-A-34-a-1.webp",
        "original-assets/seven-A-34-a-2.webp"
      ],
      "questionLocations": [
        {
          "fileId": 1,
          "page": 5,
          "box": [
            45,
            124,
            555.28,
            138.73
          ],
          "sha256": "48607a5549dc622f043f9ff84130f7f4f3c5fed27b7958f042567159c7b881aa"
        }
      ],
      "solutionLocations": [
        {
          "fileId": 2,
          "page": 8,
          "box": [
            45,
            685.16,
            555.28,
            779.75
          ],
          "sha256": "742fe6be29fbc2412c0fbc70382006afb646b1b121acc6e52924710472b4b8bf"
        },
        {
          "fileId": 2,
          "page": 9,
          "box": [
            45,
            68,
            555.28,
            182.69
          ],
          "sha256": "4bda0db4df93d518ef98307bb1217b400ab1572d96e6d9e0800232ebfa087266"
        }
      ],
      "header": "34．（25-26七年级上·上海闵行·期中）已知a23a10，则a2  ．",
      "module": "apply",
      "level": 2,
      "kind": "parts",
      "parts": [
        {
          "label": "原题填空",
          "target": "7",
          "mode": "value",
          "start": null
        }
      ],
      "requiresReason": false,
      "bank": "original",
      "active": true,
      "pendingReason": null,
      "origin": "文件夹原题 · 原稿展示",
      "source": "25-26七年级上·上海闵行·期中｜【七上专题】 因式分解综合应用（七大题型）.pdf 第5页 · A第34题",
      "title": "A · 原题 34",
      "family": "应用-条件与结论",
      "prompt": "按上方原题要求作答，题干、条件与图示均以原稿为准。",
      "context": "",
      "checkpoint": "保留支撑结论的关键变形；过程检查不等于官方步骤分。",
      "hints": []
    },
    {
      "id": "seven-A-35",
      "number": 35,
      "section": "A",
      "citation": "24-25七年级上·上海·阶段练习",
      "questionFile": "【七上专题】 因式分解综合应用（七大题型）.pdf",
      "questionPage": 5,
      "answerFile": "【七上专题解析】 因式分解综合应用（七大题型）.pdf",
      "answerPage": 9,
      "questionImages": [
        "original-assets/seven-A-35-q-1.webp"
      ],
      "solutionImages": [
        "original-assets/seven-A-35-a-1.webp"
      ],
      "questionLocations": [
        {
          "fileId": 1,
          "page": 5,
          "box": [
            45,
            139.73,
            555.28,
            179.33
          ],
          "sha256": "e8bd187c0438970bf05553d3d147de5a49238b25978c8cc951c2afd14e9764b1"
        }
      ],
      "solutionLocations": [
        {
          "fileId": 2,
          "page": 9,
          "box": [
            45,
            183.69,
            555.28,
            520.49
          ],
          "sha256": "4dd004133a32d767dea963b1d0797df544520cca6228832df240c823da1ea032"
        }
      ],
      "header": "35．（24-25七年级上·上海·阶段练习）分解因式：a47a21 ．",
      "module": "apply",
      "level": 3,
      "kind": "reference",
      "bank": "original",
      "active": false,
      "pendingReason": "原解析采用含根式的实数因式分解；当前输入引擎不支持根式，保留原稿，不改写为另一份答案。",
      "origin": "文件夹原题 · 原稿展示",
      "source": "24-25七年级上·上海·阶段练习｜【七上专题】 因式分解综合应用（七大题型）.pdf 第5页 · A第35题",
      "title": "A · 原题 35",
      "family": "待配置",
      "prompt": "按上方原题要求作答，题干、条件与图示均以原稿为准。",
      "context": "",
      "checkpoint": "保留支撑结论的关键变形；过程检查不等于官方步骤分。",
      "hints": []
    },
    {
      "id": "seven-A-36",
      "number": 36,
      "section": "A",
      "citation": "25-26七年级上·上海松江·阶段练习",
      "questionFile": "【七上专题】 因式分解综合应用（七大题型）.pdf",
      "questionPage": 5,
      "answerFile": "【七上专题解析】 因式分解综合应用（七大题型）.pdf",
      "answerPage": 9,
      "questionImages": [
        "original-assets/seven-A-36-q-1.webp"
      ],
      "solutionImages": [
        "original-assets/seven-A-36-a-1.webp"
      ],
      "questionLocations": [
        {
          "fileId": 1,
          "page": 5,
          "box": [
            45,
            180.33,
            555.28,
            278.16
          ],
          "sha256": "7158d4c8ce6b56b2d5b60c2111bebcbeb6a27ca38eb34ea06d773780d110da35"
        }
      ],
      "solutionLocations": [
        {
          "fileId": 2,
          "page": 9,
          "box": [
            45,
            521.49,
            555.28,
            640.92
          ],
          "sha256": "12ec460dc724dc792c6ac2c4a92b55e86cbe8c3e1a0df45080e22c8cb2bc704a"
        }
      ],
      "header": "36．（25-26七年级上·上海松江·阶段练习）因式分解：x481",
      "module": "formula",
      "level": 2,
      "kind": "expression",
      "mode": "factor",
      "start": "x^4-81",
      "target": "(x^2+9)(x+3)(x-3)",
      "steps": [
        "(x^2+9)(x+3)(x-3)"
      ],
      "bank": "original",
      "active": true,
      "pendingReason": null,
      "origin": "文件夹原题 · 原稿展示",
      "source": "25-26七年级上·上海松江·阶段练习｜【七上专题】 因式分解综合应用（七大题型）.pdf 第5页 · A第36题",
      "title": "A · 原题 36",
      "family": "公式-多次分解",
      "prompt": "按上方原题要求作答，题干、条件与图示均以原稿为准。",
      "context": "",
      "checkpoint": "保留支撑结论的关键变形；过程检查不等于官方步骤分。",
      "hints": []
    },
    {
      "id": "seven-A-37",
      "number": 37,
      "section": "A",
      "citation": "25-26七年级上·上海浦东新·期中",
      "questionFile": "【七上专题】 因式分解综合应用（七大题型）.pdf",
      "questionPage": 5,
      "answerFile": "【七上专题解析】 因式分解综合应用（七大题型）.pdf",
      "answerPage": 9,
      "questionImages": [
        "original-assets/seven-A-37-q-1.webp"
      ],
      "solutionImages": [
        "original-assets/seven-A-37-a-1.webp",
        "original-assets/seven-A-37-a-2.webp"
      ],
      "questionLocations": [
        {
          "fileId": 1,
          "page": 5,
          "box": [
            45,
            279.16,
            555.28,
            383.07
          ],
          "sha256": "0ecca839461bb05b94a36cf618c9d38495646f3c4d9027d13286fb70670e2c5e"
        }
      ],
      "solutionLocations": [
        {
          "fileId": 2,
          "page": 9,
          "box": [
            45,
            641.92,
            555.28,
            779.75
          ],
          "sha256": "484cf3d9ff5ce52801a7dd527f0fd231486e463abc419aab4271fcdbd0ec4d78"
        },
        {
          "fileId": 2,
          "page": 10,
          "box": [
            45,
            68,
            555.28,
            180.39
          ],
          "sha256": "ae07829266f20036c68e2dc7e818b1e27e8438958acfc6cc996ab366839a0572"
        }
      ],
      "header": "37．（25-26七年级上·上海浦东新·期中）因式分解： x27 2 4  7x2 4",
      "module": "formula",
      "level": 3,
      "kind": "expression",
      "mode": "factor",
      "start": "(x^2-7)^2+4(7-x^2)+4",
      "target": "(x+3)^2(x-3)^2",
      "steps": [
        "(x+3)^2(x-3)^2"
      ],
      "bank": "original",
      "active": true,
      "pendingReason": null,
      "origin": "文件夹原题 · 原稿展示",
      "source": "25-26七年级上·上海浦东新·期中｜【七上专题】 因式分解综合应用（七大题型）.pdf 第5页 · A第37题",
      "title": "A · 原题 37",
      "family": "公式-完全平方",
      "prompt": "按上方原题要求作答，题干、条件与图示均以原稿为准。",
      "context": "",
      "checkpoint": "保留支撑结论的关键变形；过程检查不等于官方步骤分。",
      "hints": []
    },
    {
      "id": "seven-A-38",
      "number": 38,
      "section": "A",
      "citation": "25-26七年级上·上海·期中",
      "questionFile": "【七上专题】 因式分解综合应用（七大题型）.pdf",
      "questionPage": 5,
      "answerFile": "【七上专题解析】 因式分解综合应用（七大题型）.pdf",
      "answerPage": 10,
      "questionImages": [
        "original-assets/seven-A-38-q-1.webp"
      ],
      "solutionImages": [
        "original-assets/seven-A-38-a-1.webp"
      ],
      "questionLocations": [
        {
          "fileId": 1,
          "page": 5,
          "box": [
            45,
            384.07,
            555.28,
            506.81
          ],
          "sha256": "6d337b40eb241997d39ecaec20cdcb18e4f9a69cf5a2a1a4e24addca36aab07f"
        }
      ],
      "solutionLocations": [
        {
          "fileId": 2,
          "page": 10,
          "box": [
            45,
            181.39,
            555.28,
            371.69
          ],
          "sha256": "8f40f9c896d9d2d34f263c90c76e8b80684aabd3dcd24416f14dfff7b2a95417"
        }
      ],
      "header": "38．（25-26七年级上·上海·期中）分解因式： m21 2 6  m21  9",
      "module": "formula",
      "level": 3,
      "kind": "expression",
      "mode": "factor",
      "start": "(m^2-1)^2-6(m^2-1)+9",
      "target": "(m-2)^2(m+2)^2",
      "steps": [
        "(m-2)^2(m+2)^2"
      ],
      "bank": "original",
      "active": true,
      "pendingReason": null,
      "origin": "文件夹原题 · 原稿展示",
      "source": "25-26七年级上·上海·期中｜【七上专题】 因式分解综合应用（七大题型）.pdf 第5页 · A第38题",
      "title": "A · 原题 38",
      "family": "公式-完全平方",
      "prompt": "按上方原题要求作答，题干、条件与图示均以原稿为准。",
      "context": "",
      "checkpoint": "保留支撑结论的关键变形；过程检查不等于官方步骤分。",
      "hints": []
    },
    {
      "id": "seven-A-39",
      "number": 39,
      "section": "A",
      "citation": "25-26七年级上·上海·阶段练习",
      "questionFile": "【七上专题】 因式分解综合应用（七大题型）.pdf",
      "questionPage": 5,
      "answerFile": "【七上专题解析】 因式分解综合应用（七大题型）.pdf",
      "answerPage": 10,
      "questionImages": [
        "original-assets/seven-A-39-q-1.webp"
      ],
      "solutionImages": [
        "original-assets/seven-A-39-a-1.webp"
      ],
      "questionLocations": [
        {
          "fileId": 1,
          "page": 5,
          "box": [
            45,
            507.81,
            555.28,
            623.69
          ],
          "sha256": "1953de8402da93d29d79fb3f1505462e44f741aa2d8ec7aaddd8406968ee6540"
        }
      ],
      "solutionLocations": [
        {
          "fileId": 2,
          "page": 10,
          "box": [
            45,
            372.69,
            555.28,
            550.85
          ],
          "sha256": "7079e42ebb8c2df3afafe59bdc9835188a2b8d5954ad1ad68ccb346ee88662c8"
        }
      ],
      "header": "39．（25-26七年级上·上海·阶段练习）利用因式分解简便计算：18.9221.3218.7221.12．",
      "module": "apply",
      "level": 2,
      "kind": "expression",
      "mode": "value",
      "start": "18.9^2+21.3^2-18.7^2-21.1^2",
      "target": "16",
      "steps": [
        "(18.9^2-21.1^2)+(21.3^2-18.7^2)",
        "40*(-2.2)+40*2.6",
        "40*(-2.2+2.6)",
        "16"
      ],
      "bank": "original",
      "active": true,
      "pendingReason": null,
      "origin": "文件夹原题 · 原稿展示",
      "source": "25-26七年级上·上海·阶段练习｜【七上专题】 因式分解综合应用（七大题型）.pdf 第5页 · A第39题",
      "title": "A · 原题 39",
      "family": "应用-简便计算",
      "prompt": "按上方原题要求作答，题干、条件与图示均以原稿为准。",
      "context": "",
      "checkpoint": "保留支撑结论的关键变形；过程检查不等于官方步骤分。",
      "hints": []
    },
    {
      "id": "seven-A-40",
      "number": 40,
      "section": "A",
      "citation": "25-26七年级上·上海普陀·阶段练习",
      "questionFile": "【七上专题】 因式分解综合应用（七大题型）.pdf",
      "questionPage": 5,
      "answerFile": "【七上专题解析】 因式分解综合应用（七大题型）.pdf",
      "answerPage": 10,
      "questionImages": [
        "original-assets/seven-A-40-q-1.webp"
      ],
      "solutionImages": [
        "original-assets/seven-A-40-a-1.webp",
        "original-assets/seven-A-40-a-2.webp"
      ],
      "questionLocations": [
        {
          "fileId": 1,
          "page": 5,
          "box": [
            45,
            624.69,
            555.28,
            779.75
          ],
          "sha256": "83898a26fb0e41d0a73ec7de75eec98f5c76c4dd86a8b67af5a916d08e9eec14"
        }
      ],
      "solutionLocations": [
        {
          "fileId": 2,
          "page": 10,
          "box": [
            45,
            551.85,
            555.28,
            779.75
          ],
          "sha256": "fe0325179a66cb50edb77ab00f3254cded003b6f965767a4795e46b50be4df0a"
        },
        {
          "fileId": 2,
          "page": 11,
          "box": [
            45,
            68,
            555.28,
            169.25
          ],
          "sha256": "24ad3ee67b8ccd5f8e67aaeff6329002df920330ed7367b1eec10cda3ca1afa6"
        }
      ],
      "header": "40．（25-26七年级上·上海普陀·阶段练习）若a2013x2000，b2013x2002，c2013x2004，求代",
      "module": "apply",
      "level": 3,
      "kind": "parts",
      "parts": [
        {
          "label": "代数式的值",
          "target": "12",
          "mode": "value",
          "start": null
        }
      ],
      "requiresReason": true,
      "bank": "original",
      "active": true,
      "pendingReason": null,
      "origin": "文件夹原题 · 原稿展示",
      "source": "25-26七年级上·上海普陀·阶段练习｜【七上专题】 因式分解综合应用（七大题型）.pdf 第5页 · A第40题",
      "title": "A · 原题 40",
      "family": "应用-条件与结论",
      "prompt": "按上方原题要求作答，题干、条件与图示均以原稿为准。",
      "context": "",
      "checkpoint": "保留支撑结论的关键变形；过程检查不等于官方步骤分。",
      "hints": []
    },
    {
      "id": "seven-A-41",
      "number": 41,
      "section": "A",
      "citation": "25-26七年级上·上海·阶段练习",
      "questionFile": "【七上专题】 因式分解综合应用（七大题型）.pdf",
      "questionPage": 6,
      "answerFile": "【七上专题解析】 因式分解综合应用（七大题型）.pdf",
      "answerPage": 11,
      "questionImages": [
        "original-assets/seven-A-41-q-1.webp"
      ],
      "solutionImages": [
        "original-assets/seven-A-41-a-1.webp"
      ],
      "questionLocations": [
        {
          "fileId": 1,
          "page": 6,
          "box": [
            45,
            69.45,
            555.28,
            334.24
          ],
          "sha256": "763675bb492df906246588bee79795c00acd01d5a5741ba3fba4901df36565a9"
        }
      ],
      "solutionLocations": [
        {
          "fileId": 2,
          "page": 11,
          "box": [
            45,
            170.25,
            555.28,
            618.28
          ],
          "sha256": "b800f8dd2d4f46088ddb6b70c4dad124d6ff268f3a2c8e349b2a98f66e832801"
        }
      ],
      "header": "41．（25-26七年级上·上海·阶段练习）阅读下列解题过程：",
      "module": "group",
      "level": 3,
      "kind": "expression",
      "mode": "factor",
      "start": "(1-xy)^2+(x+y-2)(x+y-2xy)",
      "target": "(x-1)^2(y-1)^2",
      "steps": [
        "(x-1)^2(y-1)^2"
      ],
      "bank": "original",
      "active": true,
      "pendingReason": null,
      "origin": "文件夹原题 · 原稿展示",
      "source": "25-26七年级上·上海·阶段练习｜【七上专题】 因式分解综合应用（七大题型）.pdf 第6页 · A第41题",
      "title": "A · 原题 41",
      "family": "分组-多重整体",
      "prompt": "按上方原题要求作答，题干、条件与图示均以原稿为准。",
      "context": "",
      "checkpoint": "保留支撑结论的关键变形；过程检查不等于官方步骤分。",
      "hints": []
    },
    {
      "id": "seven-A-42",
      "number": 42,
      "section": "A",
      "citation": "25-26七年级上·上海·阶段练习",
      "questionFile": "【七上专题】 因式分解综合应用（七大题型）.pdf",
      "questionPage": 6,
      "answerFile": "【七上专题解析】 因式分解综合应用（七大题型）.pdf",
      "answerPage": 11,
      "questionImages": [
        "original-assets/seven-A-42-q-1.webp"
      ],
      "solutionImages": [
        "original-assets/seven-A-42-a-1.webp",
        "original-assets/seven-A-42-a-2.webp"
      ],
      "questionLocations": [
        {
          "fileId": 1,
          "page": 6,
          "box": [
            45,
            368.91,
            555.28,
            416.5
          ],
          "sha256": "ec6a8a8f100692e7a9008a636eaee040d40202019bae3f1c5aadb70c76e090fa"
        }
      ],
      "solutionLocations": [
        {
          "fileId": 2,
          "page": 11,
          "box": [
            45,
            633.75,
            555.28,
            779.75
          ],
          "sha256": "8c45f038a435b191ad1bcfa178f917e77116b139c26a782352764ed7733ab84c"
        },
        {
          "fileId": 2,
          "page": 12,
          "box": [
            45,
            68,
            555.28,
            334.18
          ],
          "sha256": "be6719843a951e0e73fbb8342e7e68708a1f48cf040f466278c7c5d0bfd394e0"
        }
      ],
      "header": "42．（25-26七年级上·上海·阶段练习）已知长方形周长8米，长方形的长x和宽y满足",
      "module": "apply",
      "level": 3,
      "kind": "parts",
      "parts": [
        {
          "label": "长方形面积（平方米）",
          "target": "2",
          "mode": "value",
          "start": null
        }
      ],
      "requiresReason": true,
      "bank": "original",
      "active": true,
      "pendingReason": null,
      "origin": "文件夹原题 · 原稿展示",
      "source": "25-26七年级上·上海·阶段练习｜【七上专题】 因式分解综合应用（七大题型）.pdf 第6页 · A第42题",
      "title": "A · 原题 42",
      "family": "应用-条件与结论",
      "prompt": "按上方原题要求作答，题干、条件与图示均以原稿为准。",
      "context": "",
      "checkpoint": "保留支撑结论的关键变形；过程检查不等于官方步骤分。",
      "hints": []
    },
    {
      "id": "seven-A-43",
      "number": 43,
      "section": "A",
      "citation": "25-26七年级上·上海·期中",
      "questionFile": "【七上专题】 因式分解综合应用（七大题型）.pdf",
      "questionPage": 6,
      "answerFile": "【七上专题解析】 因式分解综合应用（七大题型）.pdf",
      "answerPage": 12,
      "questionImages": [
        "original-assets/seven-A-43-q-1.webp"
      ],
      "solutionImages": [
        "original-assets/seven-A-43-a-1.webp"
      ],
      "questionLocations": [
        {
          "fileId": 1,
          "page": 6,
          "box": [
            45,
            417.5,
            555.28,
            526.13
          ],
          "sha256": "5104aed8b82c2bf4c40cc3c5da630b8710722dd9c8468a1c45eaf2fad1bf5d7b"
        }
      ],
      "solutionLocations": [
        {
          "fileId": 2,
          "page": 12,
          "box": [
            45,
            335.18,
            555.28,
            656.17
          ],
          "sha256": "b07f699101cf8225ccb670e825babfb725fe8d3cbbd02082e2c60ddf4b6edcb3"
        }
      ],
      "header": "43．（25-26七年级上·上海·期中）已知xy5，x2y2 13，求代数式 x4y2 x3y3 x2y4的值．",
      "module": "apply",
      "level": 3,
      "kind": "parts",
      "parts": [
        {
          "label": "代数式的值",
          "target": "300",
          "mode": "value",
          "start": null
        }
      ],
      "requiresReason": true,
      "bank": "original",
      "active": true,
      "pendingReason": null,
      "origin": "文件夹原题 · 原稿展示",
      "source": "25-26七年级上·上海·期中｜【七上专题】 因式分解综合应用（七大题型）.pdf 第6页 · A第43题",
      "title": "A · 原题 43",
      "family": "应用-条件与结论",
      "prompt": "按上方原题要求作答，题干、条件与图示均以原稿为准。",
      "context": "",
      "checkpoint": "保留支撑结论的关键变形；过程检查不等于官方步骤分。",
      "hints": []
    },
    {
      "id": "seven-A-44",
      "number": 44,
      "section": "A",
      "citation": "25-26七年级上·上海普陀·期中",
      "questionFile": "【七上专题】 因式分解综合应用（七大题型）.pdf",
      "questionPage": 6,
      "answerFile": "【七上专题解析】 因式分解综合应用（七大题型）.pdf",
      "answerPage": 12,
      "questionImages": [
        "original-assets/seven-A-44-q-1.webp"
      ],
      "solutionImages": [
        "original-assets/seven-A-44-a-1.webp",
        "original-assets/seven-A-44-a-2.webp"
      ],
      "questionLocations": [
        {
          "fileId": 1,
          "page": 6,
          "box": [
            45,
            527.13,
            555.28,
            779.75
          ],
          "sha256": "e5a4276d43514f360ff2e88e8d13e0c0ff4f57874c720c0c736656f81a1aa70e"
        }
      ],
      "solutionLocations": [
        {
          "fileId": 2,
          "page": 12,
          "box": [
            45,
            657.17,
            555.28,
            779.75
          ],
          "sha256": "3e99a891bb5cd78a291c3e6db9d918fe71c255396b64c110a66be38c0f6e95aa"
        },
        {
          "fileId": 2,
          "page": 13,
          "box": [
            45,
            68,
            555.28,
            442.61
          ],
          "sha256": "b31c79a44f310f720a8f2bd24fba73ff4faab366948cea958520e34fe3f1fd2d"
        }
      ],
      "header": "44．（25-26七年级上·上海普陀·期中）如图，长、宽分别为2a、b的长方形，它的周长为12，面积为7．求",
      "module": "apply",
      "level": 3,
      "kind": "parts",
      "parts": [
        {
          "label": "第(1)问",
          "target": "22",
          "mode": "value",
          "start": null
        },
        {
          "label": "第(2)问",
          "target": "48",
          "mode": "value",
          "start": null
        }
      ],
      "requiresReason": true,
      "bank": "original",
      "active": true,
      "pendingReason": null,
      "origin": "文件夹原题 · 原稿展示",
      "source": "25-26七年级上·上海普陀·期中｜【七上专题】 因式分解综合应用（七大题型）.pdf 第6页 · A第44题",
      "title": "A · 原题 44",
      "family": "应用-阅读多问",
      "prompt": "按上方原题要求作答，题干、条件与图示均以原稿为准。",
      "context": "",
      "checkpoint": "保留支撑结论的关键变形；过程检查不等于官方步骤分。",
      "hints": []
    },
    {
      "id": "seven-A-45",
      "number": 45,
      "section": "A",
      "citation": "22-23七年级上·上海青浦·期中",
      "questionFile": "【七上专题】 因式分解综合应用（七大题型）.pdf",
      "questionPage": 7,
      "answerFile": "【七上专题解析】 因式分解综合应用（七大题型）.pdf",
      "answerPage": 13,
      "questionImages": [
        "original-assets/seven-A-45-q-1.webp"
      ],
      "solutionImages": [
        "original-assets/seven-A-45-a-1.webp"
      ],
      "questionLocations": [
        {
          "fileId": 1,
          "page": 7,
          "box": [
            45,
            69.52,
            555.28,
            172.61
          ],
          "sha256": "67f8d808b408cfa4980c9f94731d91cedbe69cb6f656dbf197609a1f953f39c1"
        }
      ],
      "solutionLocations": [
        {
          "fileId": 2,
          "page": 13,
          "box": [
            45,
            443.61,
            555.28,
            779.75
          ],
          "sha256": "4edb55f7c42569747b22601d8eb4c2e041532d53b7812eeecf3684dad2650a45"
        }
      ],
      "header": "45．（22-23七年级上·上海青浦·期中）证明：  a2b2c2 x2y2z2 axbycz2",
      "module": "apply",
      "level": 3,
      "kind": "reference",
      "bank": "original",
      "active": false,
      "pendingReason": "完整不等式证明需要人工核验论证，不能用最终式子替代证明判分。",
      "origin": "文件夹原题 · 原稿展示",
      "source": "22-23七年级上·上海青浦·期中｜【七上专题】 因式分解综合应用（七大题型）.pdf 第7页 · A第45题",
      "title": "A · 原题 45",
      "family": "待配置",
      "prompt": "按上方原题要求作答，题干、条件与图示均以原稿为准。",
      "context": "",
      "checkpoint": "保留支撑结论的关键变形；过程检查不等于官方步骤分。",
      "hints": []
    },
    {
      "id": "seven-A-46",
      "number": 46,
      "section": "A",
      "citation": "24-25七年级上·上海·期中",
      "questionFile": "【七上专题】 因式分解综合应用（七大题型）.pdf",
      "questionPage": 7,
      "answerFile": "【七上专题解析】 因式分解综合应用（七大题型）.pdf",
      "answerPage": 14,
      "questionImages": [
        "original-assets/seven-A-46-q-1.webp"
      ],
      "solutionImages": [
        "original-assets/seven-A-46-a-1.webp",
        "original-assets/seven-A-46-a-2.webp"
      ],
      "questionLocations": [
        {
          "fileId": 1,
          "page": 7,
          "box": [
            45,
            173.61,
            555.28,
            662.44
          ],
          "sha256": "a33972e2367942fe17f2bc4a676a0b6566338f31728e4990ca7305c009227d20"
        }
      ],
      "solutionLocations": [
        {
          "fileId": 2,
          "page": 14,
          "box": [
            45,
            69.45,
            555.28,
            779.75
          ],
          "sha256": "24dad9277d0d666bb10917dc93a0a9bdb2518ced070bd568032d89c96ee53b21"
        },
        {
          "fileId": 2,
          "page": 15,
          "box": [
            45,
            68,
            555.28,
            351.64
          ],
          "sha256": "f5f8cd6f1b72bf1c0e2fd9ff29c582fed41c2d84bf61e3a799605f39ec8b8d51"
        }
      ],
      "header": "46．（24-25七年级上·上海·期中）阅读理解：",
      "module": "apply",
      "level": 3,
      "kind": "parts",
      "parts": [
        {
          "label": "第(1)问下确界",
          "target": "-5",
          "mode": "value",
          "start": null
        },
        {
          "label": "第(2)问m的值",
          "target": "-4,4",
          "mode": "set",
          "start": null
        },
        {
          "label": "第(3)问下确界",
          "target": "6",
          "mode": "value",
          "start": null
        }
      ],
      "requiresReason": true,
      "bank": "original",
      "active": true,
      "pendingReason": null,
      "origin": "文件夹原题 · 原稿展示",
      "source": "24-25七年级上·上海·期中｜【七上专题】 因式分解综合应用（七大题型）.pdf 第7页 · A第46题",
      "title": "A · 原题 46",
      "family": "应用-阅读多问",
      "prompt": "按上方原题要求作答，题干、条件与图示均以原稿为准。",
      "context": "",
      "checkpoint": "保留支撑结论的关键变形；过程检查不等于官方步骤分。",
      "hints": []
    },
    {
      "id": "seven-A-47",
      "number": 47,
      "section": "A",
      "citation": "25-26七年级上·上海闵行·期中",
      "questionFile": "【七上专题】 因式分解综合应用（七大题型）.pdf",
      "questionPage": 7,
      "answerFile": "【七上专题解析】 因式分解综合应用（七大题型）.pdf",
      "answerPage": 15,
      "questionImages": [
        "original-assets/seven-A-47-q-1.webp"
      ],
      "solutionImages": [
        "original-assets/seven-A-47-a-1.webp"
      ],
      "questionLocations": [
        {
          "fileId": 1,
          "page": 7,
          "box": [
            45,
            679.77,
            555.28,
            720.93
          ],
          "sha256": "ffa039a8c1fecab185dad2950ad51b8132274675d8655009bd4ed6f31a25b104"
        }
      ],
      "solutionLocations": [
        {
          "fileId": 2,
          "page": 15,
          "box": [
            45,
            368.97,
            555.28,
            593.73
          ],
          "sha256": "73969a461423ed2439c8be16a1b1ba7e3a47ceae70ddd66461e6f6b38ed5faa0"
        }
      ],
      "header": "47．（25-26七年级上·上海闵行·期中）已知A2x24y23xyy6，Bx23xy2y22x3y，则A",
      "module": "apply",
      "level": 2,
      "kind": "parts",
      "parts": [
        {
          "label": "A与B之间的符号",
          "target": ">",
          "mode": "text",
          "start": null,
          "accept": [
            ">",
            "＞"
          ]
        }
      ],
      "requiresReason": false,
      "bank": "original",
      "active": true,
      "pendingReason": null,
      "origin": "文件夹原题 · 原稿展示",
      "source": "25-26七年级上·上海闵行·期中｜【七上专题】 因式分解综合应用（七大题型）.pdf 第7页 · A第47题",
      "title": "A · 原题 47",
      "family": "应用-条件与结论",
      "prompt": "按上方原题要求作答，题干、条件与图示均以原稿为准。",
      "context": "",
      "checkpoint": "保留支撑结论的关键变形；过程检查不等于官方步骤分。",
      "hints": []
    },
    {
      "id": "seven-A-48",
      "number": 48,
      "section": "A",
      "citation": "25-26七年级上·上海松江·期中",
      "questionFile": "【七上专题】 因式分解综合应用（七大题型）.pdf",
      "questionPage": 7,
      "answerFile": "【七上专题解析】 因式分解综合应用（七大题型）.pdf",
      "answerPage": 15,
      "questionImages": [
        "original-assets/seven-A-48-q-1.webp"
      ],
      "solutionImages": [
        "original-assets/seven-A-48-a-1.webp"
      ],
      "questionLocations": [
        {
          "fileId": 1,
          "page": 7,
          "box": [
            45,
            721.93,
            555.28,
            779.75
          ],
          "sha256": "e5392dc41c28e32c6cfb59e38405b23fdecb78f29ac58f4ca93bf18acf70e666"
        }
      ],
      "solutionLocations": [
        {
          "fileId": 2,
          "page": 15,
          "box": [
            45,
            594.73,
            555.28,
            779.75
          ],
          "sha256": "69c929d014cf32e3128724013e84722cc8c5aebefaa9a9b5481f8a9236f9e6e4"
        }
      ],
      "header": "48．（25-26七年级上·上海松江·期中）已知一个长方形公园的面积为2a28b2a2b0，若长方形公园",
      "module": "apply",
      "level": 1,
      "kind": "parts",
      "parts": [
        {
          "label": "宽",
          "target": "a-2b",
          "mode": "expand",
          "start": null
        }
      ],
      "requiresReason": false,
      "bank": "original",
      "active": true,
      "pendingReason": null,
      "origin": "文件夹原题 · 原稿展示",
      "source": "25-26七年级上·上海松江·期中｜【七上专题】 因式分解综合应用（七大题型）.pdf 第7页 · A第48题",
      "title": "A · 原题 48",
      "family": "应用-条件与结论",
      "prompt": "按上方原题要求作答，题干、条件与图示均以原稿为准。",
      "context": "",
      "checkpoint": "保留支撑结论的关键变形；过程检查不等于官方步骤分。",
      "hints": []
    },
    {
      "id": "seven-A-49",
      "number": 49,
      "section": "A",
      "citation": "25-26七年级上·上海普陀·期中",
      "questionFile": "【七上专题】 因式分解综合应用（七大题型）.pdf",
      "questionPage": 8,
      "answerFile": "【七上专题解析】 因式分解综合应用（七大题型）.pdf",
      "answerPage": 16,
      "questionImages": [
        "original-assets/seven-A-49-q-1.webp"
      ],
      "solutionImages": [
        "original-assets/seven-A-49-a-1.webp"
      ],
      "questionLocations": [
        {
          "fileId": 1,
          "page": 8,
          "box": [
            45,
            69.69,
            555.28,
            135.41
          ],
          "sha256": "06b6ab4f3ae31138e05f1278a74aa58652899b4dac670bce09f2e4ed74040bb0"
        }
      ],
      "solutionLocations": [
        {
          "fileId": 2,
          "page": 16,
          "box": [
            45,
            69.69,
            555.28,
            278.93
          ],
          "sha256": "e417596af10b3d925a7e62050f10226e05eede53796c16bd5e1265387f4ad7c3"
        }
      ],
      "header": "49．（25-26七年级上·上海普陀·期中）在对整式x2axb进行因式分解时，甲同学看错了常数项b，因式",
      "module": "cross",
      "level": 3,
      "kind": "parts",
      "parts": [
        {
          "label": "原题填空",
          "target": "(x+3)^2",
          "mode": "factor",
          "start": null
        }
      ],
      "requiresReason": true,
      "bank": "original",
      "active": true,
      "pendingReason": null,
      "origin": "文件夹原题 · 原稿展示",
      "source": "25-26七年级上·上海普陀·期中｜【七上专题】 因式分解综合应用（七大题型）.pdf 第8页 · A第49题",
      "title": "A · 原题 49",
      "family": "十字-参数条件",
      "prompt": "按上方原题要求作答，题干、条件与图示均以原稿为准。",
      "context": "",
      "checkpoint": "保留支撑结论的关键变形；过程检查不等于官方步骤分。",
      "hints": []
    },
    {
      "id": "seven-A-50",
      "number": 50,
      "section": "A",
      "citation": "24-25七年级上·上海·阶段练习",
      "questionFile": "【七上专题】 因式分解综合应用（七大题型）.pdf",
      "questionPage": 8,
      "answerFile": "【七上专题解析】 因式分解综合应用（七大题型）.pdf",
      "answerPage": 16,
      "questionImages": [
        "original-assets/seven-A-50-q-1.webp"
      ],
      "solutionImages": [
        "original-assets/seven-A-50-a-1.webp"
      ],
      "questionLocations": [
        {
          "fileId": 1,
          "page": 8,
          "box": [
            45,
            136.41,
            555.28,
            252.17
          ],
          "sha256": "6b332b1a7a478b5fcfd346f1e546e2cf1596ce67f98f53c5ec6bb04f21d2b3a3"
        }
      ],
      "solutionLocations": [
        {
          "fileId": 2,
          "page": 16,
          "box": [
            45,
            279.93,
            555.28,
            436.97
          ],
          "sha256": "ebf9b7ee15757fc59a81c7127dc90277a9374139a9e289f3382e57c94ee287fb"
        }
      ],
      "header": "50．（24-25七年级上·上海·阶段练习）试说明817 279913能被5整除．",
      "module": "apply",
      "level": 3,
      "kind": "reference",
      "bank": "original",
      "active": false,
      "pendingReason": "原题为整除证明，完整论证尚未配置核验。",
      "origin": "文件夹原题 · 原稿展示",
      "source": "24-25七年级上·上海·阶段练习｜【七上专题】 因式分解综合应用（七大题型）.pdf 第8页 · A第50题",
      "title": "A · 原题 50",
      "family": "待配置",
      "prompt": "按上方原题要求作答，题干、条件与图示均以原稿为准。",
      "context": "",
      "checkpoint": "保留支撑结论的关键变形；过程检查不等于官方步骤分。",
      "hints": []
    },
    {
      "id": "seven-A-51",
      "number": 51,
      "section": "A",
      "citation": "25-26七年级上·上海普陀·阶段练习",
      "questionFile": "【七上专题】 因式分解综合应用（七大题型）.pdf",
      "questionPage": 8,
      "answerFile": "【七上专题解析】 因式分解综合应用（七大题型）.pdf",
      "answerPage": 16,
      "questionImages": [
        "original-assets/seven-A-51-q-1.webp"
      ],
      "solutionImages": [
        "original-assets/seven-A-51-a-1.webp"
      ],
      "questionLocations": [
        {
          "fileId": 1,
          "page": 8,
          "box": [
            45,
            253.17,
            555.28,
            389.33
          ],
          "sha256": "cff85b20769aed6510319a6f934fc4a6288b51c57f4735c4be6bbd703fc5cde0"
        }
      ],
      "solutionLocations": [
        {
          "fileId": 2,
          "page": 16,
          "box": [
            45,
            437.97,
            555.28,
            634.97
          ],
          "sha256": "e7ef31b8745602357a461ace11476e1c5a938f23bedfb2601fe378abb6e57088"
        }
      ],
      "header": "51．（25-26七年级上·上海普陀·阶段练习）已知a、b为整数，x3ax2bx8可以分解成三个一次因式的",
      "module": "apply",
      "level": 3,
      "kind": "parts",
      "parts": [
        {
          "label": "a+b的值",
          "target": "21",
          "mode": "value",
          "start": null
        }
      ],
      "requiresReason": true,
      "bank": "original",
      "active": true,
      "pendingReason": null,
      "origin": "文件夹原题 · 原稿展示",
      "source": "25-26七年级上·上海普陀·阶段练习｜【七上专题】 因式分解综合应用（七大题型）.pdf 第8页 · A第51题",
      "title": "A · 原题 51",
      "family": "应用-条件与结论",
      "prompt": "按上方原题要求作答，题干、条件与图示均以原稿为准。",
      "context": "",
      "checkpoint": "保留支撑结论的关键变形；过程检查不等于官方步骤分。",
      "hints": []
    },
    {
      "id": "seven-A-52",
      "number": 52,
      "section": "A",
      "citation": "24-25七年级上·上海·阶段练习",
      "questionFile": "【七上专题】 因式分解综合应用（七大题型）.pdf",
      "questionPage": 8,
      "answerFile": "【七上专题解析】 因式分解综合应用（七大题型）.pdf",
      "answerPage": 16,
      "questionImages": [
        "original-assets/seven-A-52-q-1.webp"
      ],
      "solutionImages": [
        "original-assets/seven-A-52-a-1.webp",
        "original-assets/seven-A-52-a-2.webp"
      ],
      "questionLocations": [
        {
          "fileId": 1,
          "page": 8,
          "box": [
            45,
            390.33,
            555.28,
            779.75
          ],
          "sha256": "5f7a70945d30a2e884935a6c161b5dc5691b25dbb711dbd87562269990e37759"
        }
      ],
      "solutionLocations": [
        {
          "fileId": 2,
          "page": 16,
          "box": [
            45,
            635.97,
            555.28,
            779.75
          ],
          "sha256": "dc62a4513fd0d287c64d46a1796e76b5d5127a3f3f1bff79e0b0b88ab90b57e2"
        },
        {
          "fileId": 2,
          "page": 17,
          "box": [
            45,
            68,
            555.28,
            338.21
          ],
          "sha256": "af0912012905c1be51419ce274d02e18872377d1aab843b951fe0c526f5e374b"
        }
      ],
      "header": "52．（24-25七年级上·上海·阶段练习）阅读理解应用",
      "module": "apply",
      "level": 3,
      "kind": "parts",
      "parts": [
        {
          "label": "第(1)问a",
          "target": "1",
          "mode": "value",
          "start": null
        },
        {
          "label": "第(2)问另一因式",
          "target": "x^2+x+2",
          "mode": "expand",
          "start": null
        }
      ],
      "requiresReason": true,
      "bank": "original",
      "active": true,
      "pendingReason": null,
      "origin": "文件夹原题 · 原稿展示",
      "source": "24-25七年级上·上海·阶段练习｜【七上专题】 因式分解综合应用（七大题型）.pdf 第8页 · A第52题",
      "title": "A · 原题 52",
      "family": "应用-阅读多问",
      "prompt": "按上方原题要求作答，题干、条件与图示均以原稿为准。",
      "context": "",
      "checkpoint": "保留支撑结论的关键变形；过程检查不等于官方步骤分。",
      "hints": []
    },
    {
      "id": "seven-A-53",
      "number": 53,
      "section": "A",
      "citation": "25-26七年级上·上海松江·阶段练习",
      "questionFile": "【七上专题】 因式分解综合应用（七大题型）.pdf",
      "questionPage": 9,
      "answerFile": "【七上专题解析】 因式分解综合应用（七大题型）.pdf",
      "answerPage": 17,
      "questionImages": [
        "original-assets/seven-A-53-q-1.webp"
      ],
      "solutionImages": [
        "original-assets/seven-A-53-a-1.webp"
      ],
      "questionLocations": [
        {
          "fileId": 1,
          "page": 9,
          "box": [
            45,
            69.57,
            555.28,
            291.77
          ],
          "sha256": "60086bd5879de310ec9d77f4e57d008eb91727ead1435a60d0833cd293f0abd3"
        }
      ],
      "solutionLocations": [
        {
          "fileId": 2,
          "page": 17,
          "box": [
            45,
            339.21,
            555.28,
            661.97
          ],
          "sha256": "3f3a41176e12b99b88f1a5dcbfc0baed5fcc8e39fa8045310928e0b686911e03"
        }
      ],
      "header": "53．（25-26七年级上·上海松江·阶段练习）若一个整数能表示成a2b2（a、b是整数）的形式，则称这个",
      "module": "apply",
      "level": 3,
      "kind": "reference",
      "bank": "original",
      "active": false,
      "pendingReason": "原解析第17页第53题(2)开头写k=10，后续推导与结论写k=13；原稿存在冲突，暂不参与自动判分。",
      "origin": "文件夹原题 · 原稿展示",
      "source": "25-26七年级上·上海松江·阶段练习｜【七上专题】 因式分解综合应用（七大题型）.pdf 第9页 · A第53题",
      "title": "A · 原题 53",
      "family": "待配置",
      "prompt": "按上方原题要求作答，题干、条件与图示均以原稿为准。",
      "context": "",
      "checkpoint": "保留支撑结论的关键变形；过程检查不等于官方步骤分。",
      "hints": []
    },
    {
      "id": "seven-A-54",
      "number": 54,
      "section": "A",
      "citation": "25-26七年级上·上海杨浦·期中",
      "questionFile": "【七上专题】 因式分解综合应用（七大题型）.pdf",
      "questionPage": 9,
      "answerFile": "【七上专题解析】 因式分解综合应用（七大题型）.pdf",
      "answerPage": 17,
      "questionImages": [
        "original-assets/seven-A-54-q-1.webp"
      ],
      "solutionImages": [
        "original-assets/seven-A-54-a-1.webp",
        "original-assets/seven-A-54-a-2.webp"
      ],
      "questionLocations": [
        {
          "fileId": 1,
          "page": 9,
          "box": [
            45,
            292.77,
            555.28,
            779.75
          ],
          "sha256": "cd03726216cb3279bfc3e83a041c75339186bdc00322f768aba98044a957453e"
        }
      ],
      "solutionLocations": [
        {
          "fileId": 2,
          "page": 17,
          "box": [
            45,
            662.97,
            555.28,
            779.75
          ],
          "sha256": "a4ff813fd20a6c48476372cf9de91447e9dae1fd8b8a7aef4167ac5735bb12ce"
        },
        {
          "fileId": 2,
          "page": 18,
          "box": [
            45,
            68,
            555.28,
            667.01
          ],
          "sha256": "9cdead17a606f140e2e60a9ab20a98f8941f9b5879d1bd60b87b24375ab9a059"
        }
      ],
      "header": "54．（25-26七年级上·上海杨浦·期中）阅读材料",
      "module": "apply",
      "level": 3,
      "kind": "parts",
      "parts": [
        {
          "label": "第(1)问是否为因式",
          "target": "是",
          "mode": "text",
          "start": null,
          "accept": [
            "是",
            "是的",
            "是因式"
          ]
        },
        {
          "label": "第(2)问k",
          "target": "5",
          "mode": "value",
          "start": null
        },
        {
          "label": "第(3)问因式分解",
          "target": "(x+1)(x-2)(x^2-5)",
          "mode": "factor",
          "start": "x^4-x^3-7x^2+5x+10"
        }
      ],
      "requiresReason": true,
      "bank": "original",
      "active": true,
      "pendingReason": null,
      "origin": "文件夹原题 · 原稿展示",
      "source": "25-26七年级上·上海杨浦·期中｜【七上专题】 因式分解综合应用（七大题型）.pdf 第9页 · A第54题",
      "title": "A · 原题 54",
      "family": "应用-阅读多问",
      "prompt": "按上方原题要求作答，题干、条件与图示均以原稿为准。",
      "context": "",
      "checkpoint": "保留支撑结论的关键变形；过程检查不等于官方步骤分。",
      "hints": []
    },
    {
      "id": "seven-A-55",
      "number": 55,
      "section": "A",
      "citation": "25-26七年级上·上海普陀·期中",
      "questionFile": "【七上专题】 因式分解综合应用（七大题型）.pdf",
      "questionPage": 10,
      "answerFile": "【七上专题解析】 因式分解综合应用（七大题型）.pdf",
      "answerPage": 18,
      "questionImages": [
        "original-assets/seven-A-55-q-1.webp"
      ],
      "solutionImages": [
        "original-assets/seven-A-55-a-1.webp",
        "original-assets/seven-A-55-a-2.webp",
        "original-assets/seven-A-55-a-3.webp"
      ],
      "questionLocations": [
        {
          "fileId": 1,
          "page": 10,
          "box": [
            45,
            69.45,
            555.28,
            694.92
          ],
          "sha256": "33fb506c2ceaa296de5f398b53570785652f25d63e87a7910c679b280185fcce"
        }
      ],
      "solutionLocations": [
        {
          "fileId": 2,
          "page": 18,
          "box": [
            45,
            668.01,
            555.28,
            779.75
          ],
          "sha256": "ff376c5e2e346887ab93f62eb6bda2d879c8b1a83da4931a0e602a289100ccff"
        },
        {
          "fileId": 2,
          "page": 19,
          "box": [
            45,
            68,
            555.28,
            779.75
          ],
          "sha256": "3376d9b3a5bd6b37fcc3918dafa1a67c4a9696fa83730c4ead45a6b735515867"
        },
        {
          "fileId": 2,
          "page": 20,
          "box": [
            45,
            68,
            555.28,
            239.16
          ],
          "sha256": "94ceb96c7781b67886dceb37e318dd93cd12b87a687588a74a0ca8f4d1c97999"
        }
      ],
      "header": "55．（25-26七年级上·上海普陀·期中）数学活动课上，老师准备了若干张如图1所示的三种卡片，A种卡",
      "module": "apply",
      "level": 3,
      "kind": "reference",
      "bank": "original",
      "active": false,
      "pendingReason": "原题含卡片放置作图与证明，当前尚不能自动核验完整作图，保留全题与图示。",
      "origin": "文件夹原题 · 原稿展示",
      "source": "25-26七年级上·上海普陀·期中｜【七上专题】 因式分解综合应用（七大题型）.pdf 第10页 · A第55题",
      "title": "A · 原题 55",
      "family": "待配置",
      "prompt": "按上方原题要求作答，题干、条件与图示均以原稿为准。",
      "context": "",
      "checkpoint": "保留支撑结论的关键变形；过程检查不等于官方步骤分。",
      "hints": []
    },
    {
      "id": "seven-B-01",
      "number": 1,
      "section": "B",
      "citation": "25-26七年级上·上海·期中",
      "questionFile": "【七上专题】 因式分解综合应用（七大题型）.pdf",
      "questionPage": 10,
      "answerFile": "【七上专题解析】 因式分解综合应用（七大题型）.pdf",
      "answerPage": 20,
      "questionImages": [
        "original-assets/seven-B-01-q-1.webp"
      ],
      "solutionImages": [
        "original-assets/seven-B-01-a-1.webp"
      ],
      "questionLocations": [
        {
          "fileId": 1,
          "page": 10,
          "box": [
            45,
            695.92,
            555.28,
            779.75
          ],
          "sha256": "0c14abe53077410291a276a92365ccca159ca926c2db298e655e78f154e7b6f8"
        }
      ],
      "solutionLocations": [
        {
          "fileId": 2,
          "page": 20,
          "box": [
            45,
            240.16,
            555.28,
            515.21
          ],
          "sha256": "b785fe2909f807c9b2616edafe62f670ac0ad8178ad0febdedf18011f8c04882"
        }
      ],
      "header": "1．（25-26七年级上·上海·期中）对于任何正整数x，多项式4x321的值都能（ ）",
      "module": "apply",
      "level": 2,
      "kind": "choice",
      "options": [
        "",
        "",
        "",
        ""
      ],
      "answer": 3,
      "explain": "",
      "bank": "original",
      "active": true,
      "pendingReason": null,
      "origin": "文件夹原题 · 原稿展示",
      "source": "25-26七年级上·上海·期中｜【七上专题】 因式分解综合应用（七大题型）.pdf 第10页 · B第1题",
      "title": "B · 原题 1",
      "family": "apply-概念辨析",
      "prompt": "按上方原题要求作答，题干、条件与图示均以原稿为准。",
      "context": "",
      "checkpoint": "保留支撑结论的关键变形；过程检查不等于官方步骤分。",
      "hints": []
    },
    {
      "id": "seven-B-02",
      "number": 2,
      "section": "B",
      "citation": "25-26七年级上·上海·期中",
      "questionFile": "【七上专题】 因式分解综合应用（七大题型）.pdf",
      "questionPage": 11,
      "answerFile": "【七上专题解析】 因式分解综合应用（七大题型）.pdf",
      "answerPage": 20,
      "questionImages": [
        "original-assets/seven-B-02-q-1.webp"
      ],
      "solutionImages": [
        "original-assets/seven-B-02-a-1.webp",
        "original-assets/seven-B-02-a-2.webp"
      ],
      "questionLocations": [
        {
          "fileId": 1,
          "page": 11,
          "box": [
            45,
            69.45,
            555.28,
            178.85
          ],
          "sha256": "c579227ece0a19458419485098af873e76833cbce7092f9fa0a02631c95b01df"
        }
      ],
      "solutionLocations": [
        {
          "fileId": 2,
          "page": 20,
          "box": [
            45,
            516.21,
            555.28,
            779.75
          ],
          "sha256": "65ca37c36dcefed7f408a93f08a850ff8237bd9eefb0134d5c6c975ae22d9dc2"
        },
        {
          "fileId": 2,
          "page": 21,
          "box": [
            45,
            68,
            555.28,
            211.73
          ],
          "sha256": "c3629520e4c32d3f0a5bf1a45a5639eba371cc6e4d92063664c04bf7ca7ee058"
        }
      ],
      "header": "2．（25-26七年级上·上海·期中）数学服务于生活，灵活运用数学知识解决生活中的问题是需要倡导的重要",
      "module": "apply",
      "level": 3,
      "kind": "choice",
      "options": [
        "",
        "",
        "",
        ""
      ],
      "answer": 3,
      "explain": "",
      "bank": "original",
      "active": true,
      "pendingReason": null,
      "origin": "文件夹原题 · 原稿展示",
      "source": "25-26七年级上·上海·期中｜【七上专题】 因式分解综合应用（七大题型）.pdf 第11页 · B第2题",
      "title": "B · 原题 2",
      "family": "apply-概念辨析",
      "prompt": "按上方原题要求作答，题干、条件与图示均以原稿为准。",
      "context": "",
      "checkpoint": "保留支撑结论的关键变形；过程检查不等于官方步骤分。",
      "hints": []
    },
    {
      "id": "seven-B-03",
      "number": 3,
      "section": "B",
      "citation": "25-26七年级上·上海松江·期中",
      "questionFile": "【七上专题】 因式分解综合应用（七大题型）.pdf",
      "questionPage": 11,
      "answerFile": "【七上专题解析】 因式分解综合应用（七大题型）.pdf",
      "answerPage": 21,
      "questionImages": [
        "original-assets/seven-B-03-q-1.webp"
      ],
      "solutionImages": [
        "original-assets/seven-B-03-a-1.webp"
      ],
      "questionLocations": [
        {
          "fileId": 1,
          "page": 11,
          "box": [
            45,
            179.85,
            555.28,
            260.69
          ],
          "sha256": "b81e0929500e130fd299b3fa520a2d9d84ffb2e5d671cfce911d76bd71d719e7"
        }
      ],
      "solutionLocations": [
        {
          "fileId": 2,
          "page": 21,
          "box": [
            45,
            212.73,
            555.28,
            429.53
          ],
          "sha256": "c080219c2475e0db53177a0b328cc0b299e73cbaf067f62f5e042677c06d27ff"
        }
      ],
      "header": "3．（25-26七年级上·上海松江·期中）定义：如果一个正整数能表示为两个正整数m，n的平方差，且mn2，",
      "module": "apply",
      "level": 3,
      "kind": "parts",
      "parts": [
        {
          "label": "第2025个智慧优数",
          "target": "8104",
          "mode": "value",
          "start": null
        }
      ],
      "requiresReason": true,
      "bank": "original",
      "active": true,
      "pendingReason": null,
      "origin": "文件夹原题 · 原稿展示",
      "source": "25-26七年级上·上海松江·期中｜【七上专题】 因式分解综合应用（七大题型）.pdf 第11页 · B第3题",
      "title": "B · 原题 3",
      "family": "应用-条件与结论",
      "prompt": "按上方原题要求作答，题干、条件与图示均以原稿为准。",
      "context": "",
      "checkpoint": "保留支撑结论的关键变形；过程检查不等于官方步骤分。",
      "hints": []
    },
    {
      "id": "seven-B-04",
      "number": 4,
      "section": "B",
      "citation": "25-26七年级上·上海普陀·阶段练习",
      "questionFile": "【七上专题】 因式分解综合应用（七大题型）.pdf",
      "questionPage": 11,
      "answerFile": "【七上专题解析】 因式分解综合应用（七大题型）.pdf",
      "answerPage": 21,
      "questionImages": [
        "original-assets/seven-B-04-q-1.webp"
      ],
      "solutionImages": [
        "original-assets/seven-B-04-a-1.webp"
      ],
      "questionLocations": [
        {
          "fileId": 1,
          "page": 11,
          "box": [
            45,
            261.69,
            555.28,
            302.9
          ],
          "sha256": "3d269344b84f92dfb92921748508e0e1d9028a16ee7efa5f34beaa29f6f1c5da"
        }
      ],
      "solutionLocations": [
        {
          "fileId": 2,
          "page": 21,
          "box": [
            45,
            430.53,
            555.28,
            779.75
          ],
          "sha256": "77cafacf2ffb582dca40cbbaf76e380571b69edced98e0935e1839125f34b3d9"
        }
      ],
      "header": "4．（25-26七年级上·上海普陀·阶段练习）一个正整数如果加上50或减去31都是一个完全平方数，则这个",
      "module": "apply",
      "level": 3,
      "kind": "parts",
      "parts": [
        {
          "label": "所有符合条件的正整数",
          "target": "31,175,1631",
          "mode": "set",
          "start": null
        }
      ],
      "requiresReason": true,
      "bank": "original",
      "active": true,
      "pendingReason": null,
      "origin": "文件夹原题 · 原稿展示",
      "source": "25-26七年级上·上海普陀·阶段练习｜【七上专题】 因式分解综合应用（七大题型）.pdf 第11页 · B第4题",
      "title": "B · 原题 4",
      "family": "应用-条件与结论",
      "prompt": "按上方原题要求作答，题干、条件与图示均以原稿为准。",
      "context": "",
      "checkpoint": "保留支撑结论的关键变形；过程检查不等于官方步骤分。",
      "hints": []
    },
    {
      "id": "seven-B-05",
      "number": 5,
      "section": "B",
      "citation": "25-26七年级上·上海闵行·期中",
      "questionFile": "【七上专题】 因式分解综合应用（七大题型）.pdf",
      "questionPage": 11,
      "answerFile": "【七上专题解析】 因式分解综合应用（七大题型）.pdf",
      "answerPage": 22,
      "questionImages": [
        "original-assets/seven-B-05-q-1.webp"
      ],
      "solutionImages": [
        "original-assets/seven-B-05-a-1.webp"
      ],
      "questionLocations": [
        {
          "fileId": 1,
          "page": 11,
          "box": [
            45,
            303.9,
            555.28,
            406.97
          ],
          "sha256": "b60fab83eb21b97dcecf1842d0024f84bb1d02d6eb48cdf8b6f49a27b7dea725"
        }
      ],
      "solutionLocations": [
        {
          "fileId": 2,
          "page": 22,
          "box": [
            45,
            70.86,
            555.28,
            202.85
          ],
          "sha256": "443c8fec66baf4830a866e147d26896197e903915b971c4d8588c0054bfdf079"
        }
      ],
      "header": "5．（25-26七年级上·上海闵行·期中）因式分解： x24x 2 7  x24x  12",
      "module": "group",
      "level": 3,
      "kind": "expression",
      "mode": "factor",
      "start": "(x^2-4x)^2+7(x^2-4x)+12",
      "target": "(x-1)(x-2)^2(x-3)",
      "steps": [
        "(x-1)(x-2)^2(x-3)"
      ],
      "bank": "original",
      "active": true,
      "pendingReason": null,
      "origin": "文件夹原题 · 原稿展示",
      "source": "25-26七年级上·上海闵行·期中｜【七上专题】 因式分解综合应用（七大题型）.pdf 第11页 · B第5题",
      "title": "B · 原题 5",
      "family": "分组-平方结构",
      "prompt": "按上方原题要求作答，题干、条件与图示均以原稿为准。",
      "context": "",
      "checkpoint": "保留支撑结论的关键变形；过程检查不等于官方步骤分。",
      "hints": []
    },
    {
      "id": "seven-B-06",
      "number": 6,
      "section": "B",
      "citation": "25-26七年级上·上海松江·期中",
      "questionFile": "【七上专题】 因式分解综合应用（七大题型）.pdf",
      "questionPage": 11,
      "answerFile": "【七上专题解析】 因式分解综合应用（七大题型）.pdf",
      "answerPage": 22,
      "questionImages": [
        "original-assets/seven-B-06-q-1.webp"
      ],
      "solutionImages": [
        "original-assets/seven-B-06-a-1.webp"
      ],
      "questionLocations": [
        {
          "fileId": 1,
          "page": 11,
          "box": [
            45,
            407.97,
            555.28,
            545.93
          ],
          "sha256": "480eb5dd698be9f555f0de838597abacda775cab94a6a68e66c1cb53e3297ca7"
        }
      ],
      "solutionLocations": [
        {
          "fileId": 2,
          "page": 22,
          "box": [
            45,
            203.85,
            555.28,
            374.96
          ],
          "sha256": "4f6bbe28149e8751801670c012e55730b9ab0330f353a5b23cd5a11ff09bed29"
        }
      ],
      "header": "6．（25-26七年级上·上海松江·期中）分解因式：",
      "module": "formula",
      "level": 2,
      "kind": "parts",
      "parts": [
        {
          "label": "第(1)问",
          "target": "(x+2)(x-3)",
          "mode": "factor",
          "start": "x^2-x-6"
        },
        {
          "label": "第(2)问",
          "target": "a(a+3)(a-3)",
          "mode": "factor",
          "start": "a^3-9a"
        },
        {
          "label": "第(3)问",
          "target": "(x+3y+1)(x+3y-1)",
          "mode": "factor",
          "start": "x^2+6xy+9y^2-1"
        }
      ],
      "requiresReason": false,
      "bank": "original",
      "active": true,
      "pendingReason": null,
      "origin": "文件夹原题 · 原稿展示",
      "source": "25-26七年级上·上海松江·期中｜【七上专题】 因式分解综合应用（七大题型）.pdf 第11页 · B第6题",
      "title": "B · 原题 6",
      "family": "公式-多问综合",
      "prompt": "按上方原题要求作答，题干、条件与图示均以原稿为准。",
      "context": "",
      "checkpoint": "保留支撑结论的关键变形；过程检查不等于官方步骤分。",
      "hints": []
    },
    {
      "id": "seven-B-07",
      "number": 7,
      "section": "B",
      "citation": "25-26七年级上·上海·期中",
      "questionFile": "【七上专题】 因式分解综合应用（七大题型）.pdf",
      "questionPage": 11,
      "answerFile": "【七上专题解析】 因式分解综合应用（七大题型）.pdf",
      "answerPage": 22,
      "questionImages": [
        "original-assets/seven-B-07-q-1.webp"
      ],
      "solutionImages": [
        "original-assets/seven-B-07-a-1.webp",
        "original-assets/seven-B-07-a-2.webp"
      ],
      "questionLocations": [
        {
          "fileId": 1,
          "page": 11,
          "box": [
            45,
            546.93,
            555.28,
            779.75
          ],
          "sha256": "fcbd69d88a72bad851cc20b8c23648c14595c1ce0c16239f8147f6a3d1729ef7"
        }
      ],
      "solutionLocations": [
        {
          "fileId": 2,
          "page": 22,
          "box": [
            45,
            375.96,
            555.28,
            779.75
          ],
          "sha256": "83852fd384b3aa7695eb9d024c55887e64e08c57ce79ce0e70c5131d18abed92"
        },
        {
          "fileId": 2,
          "page": 23,
          "box": [
            45,
            68,
            555.28,
            94.37
          ],
          "sha256": "a65cfa23bb6d6d4ee7dfa33312dad259a0a74e415c1814581f2b87c201169822"
        }
      ],
      "header": "7．（25-26七年级上·上海·期中）因式分解：",
      "module": "formula",
      "level": 3,
      "kind": "parts",
      "parts": [
        {
          "label": "第(1)问",
          "target": "a^2(a^2+4)(a+2)(a-2)",
          "mode": "factor",
          "start": "a^6-16a^2"
        },
        {
          "label": "第(2)问",
          "target": "(x-y)(a+4)(a-4)",
          "mode": "factor",
          "start": "a^2(x-y)+16(y-x)"
        },
        {
          "label": "第(3)问",
          "target": "(a+b-4)(a-b+4)",
          "mode": "factor",
          "start": "a^2-16+8b-b^2"
        },
        {
          "label": "第(4)问",
          "target": "(x-3)(x+1)(x-1)^2",
          "mode": "factor",
          "start": "(x^2-2x)^2-2(x^2-2x)-3"
        }
      ],
      "requiresReason": false,
      "bank": "original",
      "active": true,
      "pendingReason": null,
      "origin": "文件夹原题 · 原稿展示",
      "source": "25-26七年级上·上海·期中｜【七上专题】 因式分解综合应用（七大题型）.pdf 第11页 · B第7题",
      "title": "B · 原题 7",
      "family": "公式-多问综合",
      "prompt": "按上方原题要求作答，题干、条件与图示均以原稿为准。",
      "context": "",
      "checkpoint": "保留支撑结论的关键变形；过程检查不等于官方步骤分。",
      "hints": []
    },
    {
      "id": "seven-B-08",
      "number": 8,
      "section": "B",
      "citation": "25-26七年级上·上海·期中",
      "questionFile": "【七上专题】 因式分解综合应用（七大题型）.pdf",
      "questionPage": 12,
      "answerFile": "【七上专题解析】 因式分解综合应用（七大题型）.pdf",
      "answerPage": 23,
      "questionImages": [
        "original-assets/seven-B-08-q-1.webp"
      ],
      "solutionImages": [
        "original-assets/seven-B-08-a-1.webp"
      ],
      "questionLocations": [
        {
          "fileId": 1,
          "page": 12,
          "box": [
            45,
            69.45,
            555.28,
            463.85
          ],
          "sha256": "e0e35a74afe6f07001e3b54451aa528aeeded51f13dce41d1f0ac700edb37013"
        }
      ],
      "solutionLocations": [
        {
          "fileId": 2,
          "page": 23,
          "box": [
            45,
            95.37,
            555.28,
            713.47
          ],
          "sha256": "1908fb7f75b84270412d85bb85e6ec8ac962a7f1f7b0c7b73531f9e22f249f6f"
        }
      ],
      "header": "8．（25-26七年级上·上海·期中）分解因式：",
      "module": "group",
      "level": 3,
      "kind": "parts",
      "parts": [
        {
          "label": "第(1)问",
          "target": "a(a+2b)^2",
          "mode": "factor",
          "start": "a^2(a+2b)-ab(-4b-2a)"
        },
        {
          "label": "第(2)问",
          "target": "(x-2)(x+2)(x^2+1)",
          "mode": "factor",
          "start": "(x^2-1)^2-x^2-5"
        },
        {
          "label": "第(3)问",
          "target": "x(2x+3y)(2x-3y-1)",
          "mode": "factor",
          "start": "4x^3-2x^2-9xy^2-3xy"
        },
        {
          "label": "第(4)问",
          "target": "(x-1)(x-3)(x-2)^2",
          "mode": "factor",
          "start": "(x^2-4x+2)(x^2-4x+5)+2"
        },
        {
          "label": "第(5)问",
          "target": "(2x-3)(3x-2)/6",
          "mode": "factor",
          "start": "x^2-13x/6+1"
        }
      ],
      "requiresReason": false,
      "bank": "original",
      "active": true,
      "pendingReason": null,
      "origin": "文件夹原题 · 原稿展示",
      "source": "25-26七年级上·上海·期中｜【七上专题】 因式分解综合应用（七大题型）.pdf 第12页 · B第8题",
      "title": "B · 原题 8",
      "family": "分组-阅读辨析",
      "prompt": "按上方原题要求作答，题干、条件与图示均以原稿为准。",
      "context": "",
      "checkpoint": "保留支撑结论的关键变形；过程检查不等于官方步骤分。",
      "hints": []
    },
    {
      "id": "seven-B-09",
      "number": 9,
      "section": "B",
      "citation": "25-26七年级上·上海·期中",
      "questionFile": "【七上专题】 因式分解综合应用（七大题型）.pdf",
      "questionPage": 12,
      "answerFile": "【七上专题解析】 因式分解综合应用（七大题型）.pdf",
      "answerPage": 23,
      "questionImages": [
        "original-assets/seven-B-09-q-1.webp"
      ],
      "solutionImages": [
        "original-assets/seven-B-09-a-1.webp",
        "original-assets/seven-B-09-a-2.webp"
      ],
      "questionLocations": [
        {
          "fileId": 1,
          "page": 12,
          "box": [
            45,
            464.85,
            555.28,
            779.75
          ],
          "sha256": "9825c196b6cc2b7fa9c3cd9047a520c4123e3d52a637e5853e2c69d52191adb1"
        }
      ],
      "solutionLocations": [
        {
          "fileId": 2,
          "page": 23,
          "box": [
            45,
            714.47,
            555.28,
            779.75
          ],
          "sha256": "74a674e59654f6f7cb61c1c175c78d5589474cb585974d00da1fa63393235f18"
        },
        {
          "fileId": 2,
          "page": 24,
          "box": [
            45,
            68,
            555.28,
            477.0
          ],
          "sha256": "3bc9221fa47962deeaced424f908b76ea4089773545cccfa76af2357dd82c30e"
        }
      ],
      "header": "9．（25-26七年级上·上海·期中）因式分解",
      "module": "apply",
      "level": 3,
      "kind": "reference",
      "bank": "original",
      "active": false,
      "pendingReason": "原题第(3)问含字母指数n，不拆除该问，也不以另编题补位。",
      "origin": "文件夹原题 · 原稿展示",
      "source": "25-26七年级上·上海·期中｜【七上专题】 因式分解综合应用（七大题型）.pdf 第12页 · B第9题",
      "title": "B · 原题 9",
      "family": "待配置",
      "prompt": "按上方原题要求作答，题干、条件与图示均以原稿为准。",
      "context": "",
      "checkpoint": "保留支撑结论的关键变形；过程检查不等于官方步骤分。",
      "hints": []
    },
    {
      "id": "seven-B-10",
      "number": 10,
      "section": "B",
      "citation": "25-26七年级上·上海闵行·期中",
      "questionFile": "【七上专题】 因式分解综合应用（七大题型）.pdf",
      "questionPage": 13,
      "answerFile": "【七上专题解析】 因式分解综合应用（七大题型）.pdf",
      "answerPage": 24,
      "questionImages": [
        "original-assets/seven-B-10-q-1.webp"
      ],
      "solutionImages": [
        "original-assets/seven-B-10-a-1.webp"
      ],
      "questionLocations": [
        {
          "fileId": 1,
          "page": 13,
          "box": [
            45,
            70.48,
            555.28,
            347.57
          ],
          "sha256": "d0e964713449109bcc1e859a93e2afd6f6e767102b850239815e33272bddc1cb"
        }
      ],
      "solutionLocations": [
        {
          "fileId": 2,
          "page": 24,
          "box": [
            45,
            478.0,
            555.28,
            779.75
          ],
          "sha256": "77bd71f837c93d9124190e2b1591bafb43a6aa8d7b4d3770343424e720a72c3e"
        }
      ],
      "header": "10．（25-26七年级上·上海闵行·期中）乐乐在学习了因式分解之后，尝试对多项式x236y2x6y进行因",
      "module": "group",
      "level": 2,
      "kind": "parts",
      "parts": [
        {
          "label": "第(1)问第一个空（序号）",
          "target": "2",
          "mode": "text",
          "start": null,
          "accept": [
            "2",
            "②"
          ]
        },
        {
          "label": "第(1)问第二个空（序号）",
          "target": "1",
          "mode": "text",
          "start": null,
          "accept": [
            "1",
            "①"
          ]
        },
        {
          "label": "第(2)问",
          "target": "(x-3y)(x-3y-3)",
          "mode": "factor",
          "start": "x^2-6xy+9y^2-3x+9y"
        }
      ],
      "requiresReason": false,
      "bank": "original",
      "active": true,
      "pendingReason": null,
      "origin": "文件夹原题 · 原稿展示",
      "source": "25-26七年级上·上海闵行·期中｜【七上专题】 因式分解综合应用（七大题型）.pdf 第13页 · B第10题",
      "title": "B · 原题 10",
      "family": "分组-阅读辨析",
      "prompt": "按上方原题要求作答，题干、条件与图示均以原稿为准。",
      "context": "",
      "checkpoint": "保留支撑结论的关键变形；过程检查不等于官方步骤分。",
      "hints": []
    },
    {
      "id": "seven-B-11",
      "number": 11,
      "section": "B",
      "citation": "25-26七年级上·上海徐汇·期中",
      "questionFile": "【七上专题】 因式分解综合应用（七大题型）.pdf",
      "questionPage": 13,
      "answerFile": "【七上专题解析】 因式分解综合应用（七大题型）.pdf",
      "answerPage": 25,
      "questionImages": [
        "original-assets/seven-B-11-q-1.webp"
      ],
      "solutionImages": [
        "original-assets/seven-B-11-a-1.webp"
      ],
      "questionLocations": [
        {
          "fileId": 1,
          "page": 13,
          "box": [
            45,
            348.57,
            555.28,
            779.75
          ],
          "sha256": "4b0b333bd7710ad5e06e79252dd46d4eaeb5cb3e224125ddb49508daa1167169"
        }
      ],
      "solutionLocations": [
        {
          "fileId": 2,
          "page": 25,
          "box": [
            45,
            69.53,
            555.28,
            506.45
          ],
          "sha256": "06ab6ebb6ac4594d7981c9efa7018f0911a2e85dda98a9945fcd25c489e59c9b"
        }
      ],
      "header": "11．（25-26七年级上·上海徐汇·期中）阅读：分解因式x22x3．",
      "module": "group",
      "level": 3,
      "kind": "parts",
      "parts": [
        {
          "label": "第(1)问",
          "target": "(2a+5)(2a-3)",
          "mode": "factor",
          "start": "4a^2+4a-15"
        },
        {
          "label": "第(2)问",
          "target": "(m^2+n^2-mn)(m^2+n^2+mn)",
          "mode": "factor",
          "start": "m^4+m^2n^2+n^4"
        }
      ],
      "requiresReason": true,
      "bank": "original",
      "active": true,
      "pendingReason": null,
      "origin": "文件夹原题 · 原稿展示",
      "source": "25-26七年级上·上海徐汇·期中｜【七上专题】 因式分解综合应用（七大题型）.pdf 第13页 · B第11题",
      "title": "B · 原题 11",
      "family": "分组-阅读辨析",
      "prompt": "按上方原题要求作答，题干、条件与图示均以原稿为准。",
      "context": "",
      "checkpoint": "保留支撑结论的关键变形；过程检查不等于官方步骤分。",
      "hints": []
    },
    {
      "id": "seven-B-12",
      "number": 12,
      "section": "B",
      "citation": "25-26七年级上·上海·期中",
      "questionFile": "【七上专题】 因式分解综合应用（七大题型）.pdf",
      "questionPage": 14,
      "answerFile": "【七上专题解析】 因式分解综合应用（七大题型）.pdf",
      "answerPage": 25,
      "questionImages": [
        "original-assets/seven-B-12-q-1.webp"
      ],
      "solutionImages": [
        "original-assets/seven-B-12-a-1.webp",
        "original-assets/seven-B-12-a-2.webp",
        "original-assets/seven-B-12-a-3.webp"
      ],
      "questionLocations": [
        {
          "fileId": 1,
          "page": 14,
          "box": [
            45,
            69.45,
            555.28,
            779.75
          ],
          "sha256": "22734818387c15727e49d495151b06a7d544c4d3675ef45dcc9eb3b5d9246bbc"
        }
      ],
      "solutionLocations": [
        {
          "fileId": 2,
          "page": 25,
          "box": [
            45,
            507.45,
            555.28,
            779.75
          ],
          "sha256": "b45b82f060e0e79ece0964fdabf28bd8531556c6efbecfc9bbda6adcc3bd5e0e"
        },
        {
          "fileId": 2,
          "page": 26,
          "box": [
            45,
            68,
            555.28,
            779.75
          ],
          "sha256": "9ca619f5ca46180bdab7d9eb94a4457f4767d2c6beda5dc82080d4cf050d0c9e"
        },
        {
          "fileId": 2,
          "page": 27,
          "box": [
            45,
            68,
            555.28,
            177.05
          ],
          "sha256": "3fb13fb4276751924cb85e01dacc9b71f4b57101d2970a6608571068524ae156"
        }
      ],
      "header": "12．（25-26七年级上·上海·期中）阅读下列材料：",
      "module": "group",
      "level": 3,
      "kind": "parts",
      "parts": [
        {
          "label": "第(1)问",
          "target": "(x-2)^4",
          "mode": "factor",
          "start": "(x^2-4x+1)(x^2-4x+7)+9"
        },
        {
          "label": "第(2)问",
          "target": "(x-1)^2(1-y)^2",
          "mode": "factor",
          "start": "(x+y-2xy)(x+y-2)+(xy-1)^2"
        }
      ],
      "requiresReason": true,
      "bank": "original",
      "active": true,
      "pendingReason": null,
      "origin": "文件夹原题 · 原稿展示",
      "source": "25-26七年级上·上海·期中｜【七上专题】 因式分解综合应用（七大题型）.pdf 第14页 · B第12题",
      "title": "B · 原题 12",
      "family": "分组-阅读辨析",
      "prompt": "按上方原题要求作答，题干、条件与图示均以原稿为准。",
      "context": "",
      "checkpoint": "保留支撑结论的关键变形；过程检查不等于官方步骤分。",
      "hints": []
    },
    {
      "id": "seven-B-13",
      "number": 13,
      "section": "B",
      "citation": "25-26七年级上·上海·期中",
      "questionFile": "【七上专题】 因式分解综合应用（七大题型）.pdf",
      "questionPage": 15,
      "answerFile": "【七上专题解析】 因式分解综合应用（七大题型）.pdf",
      "answerPage": 27,
      "questionImages": [
        "original-assets/seven-B-13-q-1.webp"
      ],
      "solutionImages": [
        "original-assets/seven-B-13-a-1.webp",
        "original-assets/seven-B-13-a-2.webp"
      ],
      "questionLocations": [
        {
          "fileId": 1,
          "page": 15,
          "box": [
            45,
            69.45,
            555.28,
            779.75
          ],
          "sha256": "b336d879dbfd48ef20b103186e87677aedf1c51ff17d91574467196aac39a56a"
        }
      ],
      "solutionLocations": [
        {
          "fileId": 2,
          "page": 27,
          "box": [
            45,
            178.05,
            555.28,
            779.75
          ],
          "sha256": "7bc8b9efe26e14953640fe8e831d1f84f8dc18327e94f7006a2d43944ea06bfe"
        },
        {
          "fileId": 2,
          "page": 28,
          "box": [
            45,
            68,
            555.28,
            779.75
          ],
          "sha256": "6391a44fcbdc2e5094e9a75d706fc3adc29b415c4cb3c23bbeda9562a0e24c88"
        }
      ],
      "header": "13．（25-26七年级上·上海·期中）阅读材料：",
      "module": "apply",
      "level": 3,
      "kind": "reference",
      "bank": "original",
      "active": false,
      "pendingReason": "原题包含等体积说理与完整等式，尚未配置全题过程核验。",
      "origin": "文件夹原题 · 原稿展示",
      "source": "25-26七年级上·上海·期中｜【七上专题】 因式分解综合应用（七大题型）.pdf 第15页 · B第13题",
      "title": "B · 原题 13",
      "family": "待配置",
      "prompt": "按上方原题要求作答，题干、条件与图示均以原稿为准。",
      "context": "",
      "checkpoint": "保留支撑结论的关键变形；过程检查不等于官方步骤分。",
      "hints": []
    },
    {
      "id": "addition-考点01-01",
      "number": 1,
      "section": "考点01",
      "citation": "25-26七年级上·上海青浦·期中",
      "questionFile": "【数学期中汇编】整式的加法和减法（原卷版）.pdf",
      "questionPage": 1,
      "answerFile": "【数学期中汇编】整式的加法和减法（解析版）.pdf",
      "answerPage": 1,
      "questionImages": [
        "original-assets/addition-考点01-01-q-1.webp"
      ],
      "solutionImages": [
        "original-assets/addition-考点01-01-a-1.webp"
      ],
      "questionLocations": [
        {
          "fileId": 11,
          "page": 1,
          "box": [
            45,
            253.16,
            555.28,
            309.16
          ],
          "sha256": "a5c96ddc6805f8da7599ad515c8b7f417d9fbafb77c060668c40c76a06f22199"
        }
      ],
      "solutionLocations": [
        {
          "fileId": 12,
          "page": 1,
          "box": [
            45,
            253.16,
            555.28,
            520.0
          ],
          "sha256": "e9b4fdbead751f5816c3f62cb7c8eb81be534dbfbd81b7328d59591ad340e4be"
        }
      ],
      "header": "1．（25-26七年级上·上海青浦·期中）已知某个整式与 的和是 ，则这个整式是_______",
      "module": "base",
      "level": 2,
      "kind": "parts",
      "parts": [
        {
          "label": "原题所求结果",
          "target": "-2x^2+xy-5y^2/2",
          "mode": "expand",
          "start": null
        }
      ],
      "requiresReason": false,
      "bank": "original",
      "active": true,
      "pendingReason": null,
      "origin": "文件夹原题 · 原稿展示",
      "source": "25-26七年级上·上海青浦·期中｜【数学期中汇编】整式的加法和减法（原卷版）.pdf 第1页 · 考点01第1题",
      "title": "考点01 · 原题 1",
      "family": "整式-条件列式",
      "prompt": "按上方原题要求作答，题干、条件与图示均以原稿为准。",
      "context": "",
      "checkpoint": "保留支撑结论的关键变形；过程检查不等于官方步骤分。",
      "hints": []
    },
    {
      "id": "addition-考点01-02",
      "number": 2,
      "section": "考点01",
      "citation": "25-26七年级上·上海金山·期中",
      "questionFile": "【数学期中汇编】整式的加法和减法（原卷版）.pdf",
      "questionPage": 1,
      "answerFile": "【数学期中汇编】整式的加法和减法（解析版）.pdf",
      "answerPage": 1,
      "questionImages": [
        "original-assets/addition-考点01-02-q-1.webp"
      ],
      "solutionImages": [
        "original-assets/addition-考点01-02-a-1.webp"
      ],
      "questionLocations": [
        {
          "fileId": 11,
          "page": 1,
          "box": [
            45,
            310.16,
            555.28,
            333.16
          ],
          "sha256": "07c56928fef1af6cae0936bf92d26d7cb4d91957066d7cbb22b315e55bb23053"
        }
      ],
      "solutionLocations": [
        {
          "fileId": 12,
          "page": 1,
          "box": [
            45,
            521.0,
            555.28,
            777.67
          ],
          "sha256": "3d24b26462d32e0a9cb883880f257caceb9a3b4f789f005884d71baaf7928834"
        }
      ],
      "header": "2．（25-26七年级上·上海金山·期中）如果整式M与整式 的和为 ，那么整式 ______．",
      "module": "base",
      "level": 1,
      "kind": "parts",
      "parts": [
        {
          "label": "原题所求结果",
          "target": "x^2+2x-1",
          "mode": "expand",
          "start": null
        }
      ],
      "requiresReason": false,
      "bank": "original",
      "active": true,
      "pendingReason": null,
      "origin": "文件夹原题 · 原稿展示",
      "source": "25-26七年级上·上海金山·期中｜【数学期中汇编】整式的加法和减法（原卷版）.pdf 第1页 · 考点01第2题",
      "title": "考点01 · 原题 2",
      "family": "整式-条件列式",
      "prompt": "按上方原题要求作答，题干、条件与图示均以原稿为准。",
      "context": "",
      "checkpoint": "保留支撑结论的关键变形；过程检查不等于官方步骤分。",
      "hints": []
    },
    {
      "id": "addition-考点01-03",
      "number": 3,
      "section": "考点01",
      "citation": "25-26七年级上·上海金山·期中",
      "questionFile": "【数学期中汇编】整式的加法和减法（原卷版）.pdf",
      "questionPage": 1,
      "answerFile": "【数学期中汇编】整式的加法和减法（解析版）.pdf",
      "answerPage": 2,
      "questionImages": [
        "original-assets/addition-考点01-03-q-1.webp"
      ],
      "solutionImages": [
        "original-assets/addition-考点01-03-a-1.webp"
      ],
      "questionLocations": [
        {
          "fileId": 11,
          "page": 1,
          "box": [
            45,
            334.16,
            555.28,
            382.0
          ],
          "sha256": "2ac2e301b5644a5243bd3a56c1a534fee9ebe3aa4fbc0c393adf5cb042b531c3"
        }
      ],
      "solutionLocations": [
        {
          "fileId": 12,
          "page": 2,
          "box": [
            45,
            67.76,
            555.28,
            404.56
          ],
          "sha256": "08b0f2bc453712c1d72f42f47b49b3596f2ffe945672121ddbf21918ce8f6679"
        }
      ],
      "header": "3．（25-26七年级上·上海金山·期中）若整式 减去另一个整式的差等于 ，那么这个整式",
      "module": "base",
      "level": 1,
      "kind": "parts",
      "parts": [
        {
          "label": "原题所求结果",
          "target": "2x^2",
          "mode": "expand",
          "start": null
        }
      ],
      "requiresReason": false,
      "bank": "original",
      "active": true,
      "pendingReason": null,
      "origin": "文件夹原题 · 原稿展示",
      "source": "25-26七年级上·上海金山·期中｜【数学期中汇编】整式的加法和减法（原卷版）.pdf 第1页 · 考点01第3题",
      "title": "考点01 · 原题 3",
      "family": "整式-条件列式",
      "prompt": "按上方原题要求作答，题干、条件与图示均以原稿为准。",
      "context": "",
      "checkpoint": "保留支撑结论的关键变形；过程检查不等于官方步骤分。",
      "hints": []
    },
    {
      "id": "addition-考点01-04",
      "number": 4,
      "section": "考点01",
      "citation": "25-26七年级上·上海·期中",
      "questionFile": "【数学期中汇编】整式的加法和减法（原卷版）.pdf",
      "questionPage": 1,
      "answerFile": "【数学期中汇编】整式的加法和减法（解析版）.pdf",
      "answerPage": 2,
      "questionImages": [
        "original-assets/addition-考点01-04-q-1.webp"
      ],
      "solutionImages": [
        "original-assets/addition-考点01-04-a-1.webp"
      ],
      "questionLocations": [
        {
          "fileId": 11,
          "page": 1,
          "box": [
            45,
            383.0,
            555.28,
            413.56
          ],
          "sha256": "405343cb2f66eefda88c67919130a1e6d879b022c23eca8ef650857afd8b8643"
        }
      ],
      "solutionLocations": [
        {
          "fileId": 12,
          "page": 2,
          "box": [
            45,
            405.56,
            555.28,
            661.96
          ],
          "sha256": "521ba0f1fc395dee2d7e9c743aa42bd353c3ab7761e534711523b38160767a0d"
        }
      ],
      "header": "4．（25-26七年级上·上海·期中）计算： ______．",
      "module": "base",
      "level": 1,
      "kind": "expression",
      "mode": "expand",
      "start": "3(a-2b)-2(a-3b)",
      "target": "a",
      "steps": [
        "a"
      ],
      "bank": "original",
      "active": true,
      "pendingReason": null,
      "origin": "文件夹原题 · 原稿展示",
      "source": "25-26七年级上·上海·期中｜【数学期中汇编】整式的加法和减法（原卷版）.pdf 第1页 · 考点01第4题",
      "title": "考点01 · 原题 4",
      "family": "整式-去括号合并",
      "prompt": "按上方原题要求作答，题干、条件与图示均以原稿为准。",
      "context": "",
      "checkpoint": "保留支撑结论的关键变形；过程检查不等于官方步骤分。",
      "hints": []
    },
    {
      "id": "addition-考点01-05",
      "number": 5,
      "section": "考点01",
      "citation": "25-26七年级上·上海·期中",
      "questionFile": "【数学期中汇编】整式的加法和减法（原卷版）.pdf",
      "questionPage": 1,
      "answerFile": "【数学期中汇编】整式的加法和减法（解析版）.pdf",
      "answerPage": 2,
      "questionImages": [
        "original-assets/addition-考点01-05-q-1.webp"
      ],
      "solutionImages": [
        "original-assets/addition-考点01-05-a-1.webp",
        "original-assets/addition-考点01-05-a-2.webp"
      ],
      "questionLocations": [
        {
          "fileId": 11,
          "page": 1,
          "box": [
            45,
            414.56,
            555.28,
            444.28
          ],
          "sha256": "2cec41cafd29d8d9a961c45dcd3191015e4c3b3813f3d627fbfb0ab2363dcefb"
        }
      ],
      "solutionLocations": [
        {
          "fileId": 12,
          "page": 2,
          "box": [
            45,
            662.96,
            555.28,
            785
          ],
          "sha256": "93fd494db89095b6b2fd72029b3bfdc8b4a66854dedee1b1cc95fda0874299ed"
        },
        {
          "fileId": 12,
          "page": 3,
          "box": [
            45,
            68,
            555.28,
            139.6
          ],
          "sha256": "838a5be496bc1fe84192eb701ac58863e19fc34cb3f563b1b0800358dafb7189"
        }
      ],
      "header": "5．（25-26七年级上·上海·期中）______",
      "module": "base",
      "level": 1,
      "kind": "parts",
      "parts": [
        {
          "label": "原题所求结果",
          "target": "5",
          "mode": "expand",
          "start": null
        }
      ],
      "requiresReason": false,
      "bank": "original",
      "active": true,
      "pendingReason": null,
      "origin": "文件夹原题 · 原稿展示",
      "source": "25-26七年级上·上海·期中｜【数学期中汇编】整式的加法和减法（原卷版）.pdf 第1页 · 考点01第5题",
      "title": "考点01 · 原题 5",
      "family": "整式-条件列式",
      "prompt": "按上方原题要求作答，题干、条件与图示均以原稿为准。",
      "context": "",
      "checkpoint": "保留支撑结论的关键变形；过程检查不等于官方步骤分。",
      "hints": []
    },
    {
      "id": "addition-考点01-06",
      "number": 6,
      "section": "考点01",
      "citation": "25-26七年级上·上海嘉定·期中",
      "questionFile": "【数学期中汇编】整式的加法和减法（原卷版）.pdf",
      "questionPage": 1,
      "answerFile": "【数学期中汇编】整式的加法和减法（解析版）.pdf",
      "answerPage": 3,
      "questionImages": [
        "original-assets/addition-考点01-06-q-1.webp"
      ],
      "solutionImages": [
        "original-assets/addition-考点01-06-a-1.webp"
      ],
      "questionLocations": [
        {
          "fileId": 11,
          "page": 1,
          "box": [
            45,
            445.28,
            555.28,
            473.56
          ],
          "sha256": "34e5e7e28c534a7b2b14109c348cfed8909bbb1d186250f720ac73450177621d"
        }
      ],
      "solutionLocations": [
        {
          "fileId": 12,
          "page": 3,
          "box": [
            45,
            140.6,
            555.28,
            317.44
          ],
          "sha256": "d5c3c5b2490c26020615c5518dbf635944dd49c32b9d08270479092de3418e12"
        }
      ],
      "header": "6．（25-26七年级上·上海嘉定·期中）计算： ___________．",
      "module": "base",
      "level": 1,
      "kind": "expression",
      "mode": "expand",
      "start": "3(a-b)-2(a+b)",
      "target": "a-5b",
      "steps": [
        "a-5b"
      ],
      "bank": "original",
      "active": true,
      "pendingReason": null,
      "origin": "文件夹原题 · 原稿展示",
      "source": "25-26七年级上·上海嘉定·期中｜【数学期中汇编】整式的加法和减法（原卷版）.pdf 第1页 · 考点01第6题",
      "title": "考点01 · 原题 6",
      "family": "整式-去括号合并",
      "prompt": "按上方原题要求作答，题干、条件与图示均以原稿为准。",
      "context": "",
      "checkpoint": "保留支撑结论的关键变形；过程检查不等于官方步骤分。",
      "hints": []
    },
    {
      "id": "addition-考点01-07",
      "number": 7,
      "section": "考点01",
      "citation": "25-26七年级上·上海·期中",
      "questionFile": "【数学期中汇编】整式的加法和减法（原卷版）.pdf",
      "questionPage": 1,
      "answerFile": "【数学期中汇编】整式的加法和减法（解析版）.pdf",
      "answerPage": 3,
      "questionImages": [
        "original-assets/addition-考点01-07-q-1.webp"
      ],
      "solutionImages": [
        "original-assets/addition-考点01-07-a-1.webp"
      ],
      "questionLocations": [
        {
          "fileId": 11,
          "page": 1,
          "box": [
            45,
            474.56,
            555.28,
            496.72
          ],
          "sha256": "9742651e063a073da41deea0b08fce9c778e5760b6cdf5f9cdd7776bdd3ab5ec"
        }
      ],
      "solutionLocations": [
        {
          "fileId": 12,
          "page": 3,
          "box": [
            45,
            318.44,
            555.28,
            488.56
          ],
          "sha256": "ec584967f9d4b8253e2e9d7788f3159fa8111192529df18f73747b985b1c2003"
        }
      ],
      "header": "7．（25-26七年级上·上海·期中）整式 与 的和是 ，那么 ___________．",
      "module": "base",
      "level": 1,
      "kind": "parts",
      "parts": [
        {
          "label": "原题所求结果",
          "target": "-12x-y",
          "mode": "expand",
          "start": null
        }
      ],
      "requiresReason": false,
      "bank": "original",
      "active": true,
      "pendingReason": null,
      "origin": "文件夹原题 · 原稿展示",
      "source": "25-26七年级上·上海·期中｜【数学期中汇编】整式的加法和减法（原卷版）.pdf 第1页 · 考点01第7题",
      "title": "考点01 · 原题 7",
      "family": "整式-条件列式",
      "prompt": "按上方原题要求作答，题干、条件与图示均以原稿为准。",
      "context": "",
      "checkpoint": "保留支撑结论的关键变形；过程检查不等于官方步骤分。",
      "hints": []
    },
    {
      "id": "addition-考点01-08",
      "number": 8,
      "section": "考点01",
      "citation": "25-26七年级上·上海·期中",
      "questionFile": "【数学期中汇编】整式的加法和减法（原卷版）.pdf",
      "questionPage": 1,
      "answerFile": "【数学期中汇编】整式的加法和减法（解析版）.pdf",
      "answerPage": 3,
      "questionImages": [
        "original-assets/addition-考点01-08-q-1.webp"
      ],
      "solutionImages": [
        "original-assets/addition-考点01-08-a-1.webp"
      ],
      "questionLocations": [
        {
          "fileId": 11,
          "page": 1,
          "box": [
            45,
            497.72,
            555.28,
            518.21
          ],
          "sha256": "a39e47be2629be41fd23e5d58b5e937948598d07b893dddd9d0a0a71677c84fe"
        }
      ],
      "solutionLocations": [
        {
          "fileId": 12,
          "page": 3,
          "box": [
            45,
            489.56,
            555.28,
            691.37
          ],
          "sha256": "119668a5aeb57465444dbae5c848e37eecfd2ff6afa790964771861e547248cc"
        }
      ],
      "header": "8．（25-26七年级上·上海·期中）整式 与整式 的和为 ，则 ________．",
      "module": "base",
      "level": 1,
      "kind": "parts",
      "parts": [
        {
          "label": "原题所求结果",
          "target": "4x^2-2x+3",
          "mode": "expand",
          "start": null
        }
      ],
      "requiresReason": false,
      "bank": "original",
      "active": true,
      "pendingReason": null,
      "origin": "文件夹原题 · 原稿展示",
      "source": "25-26七年级上·上海·期中｜【数学期中汇编】整式的加法和减法（原卷版）.pdf 第1页 · 考点01第8题",
      "title": "考点01 · 原题 8",
      "family": "整式-条件列式",
      "prompt": "按上方原题要求作答，题干、条件与图示均以原稿为准。",
      "context": "",
      "checkpoint": "保留支撑结论的关键变形；过程检查不等于官方步骤分。",
      "hints": []
    },
    {
      "id": "addition-考点01-09",
      "number": 9,
      "section": "考点01",
      "citation": "25-26七年级上·上海·期中",
      "questionFile": "【数学期中汇编】整式的加法和减法（原卷版）.pdf",
      "questionPage": 1,
      "answerFile": "【数学期中汇编】整式的加法和减法（解析版）.pdf",
      "answerPage": 3,
      "questionImages": [
        "original-assets/addition-考点01-09-q-1.webp"
      ],
      "solutionImages": [
        "original-assets/addition-考点01-09-a-1.webp",
        "original-assets/addition-考点01-09-a-2.webp"
      ],
      "questionLocations": [
        {
          "fileId": 11,
          "page": 1,
          "box": [
            45,
            539.72,
            555.28,
            595.84
          ],
          "sha256": "e9ebf6d2e0b310464f15662e6beb1217e45270b3698988d7b76b5600f7f14471"
        }
      ],
      "solutionLocations": [
        {
          "fileId": 12,
          "page": 3,
          "box": [
            45,
            711.68,
            555.28,
            779.95
          ],
          "sha256": "b4773cc414bdf4a83570bde9026579083ed454b4fe5b19acd4ff1052dbb51bd2"
        },
        {
          "fileId": 12,
          "page": 4,
          "box": [
            45,
            68,
            555.28,
            267.16
          ],
          "sha256": "f9409c93e12dd7c66299d1dac447b975a7b1492d271f93494be0196de8c3822d"
        }
      ],
      "header": "9．（25-26七年级上·上海·期中）已知整式A、B、C满足 ，其中 ，",
      "module": "base",
      "level": 3,
      "kind": "parts",
      "parts": [
        {
          "label": "原题所求结果",
          "target": "2px^3+qx-10",
          "mode": "expand",
          "start": null
        }
      ],
      "requiresReason": true,
      "bank": "original",
      "active": true,
      "pendingReason": null,
      "origin": "文件夹原题 · 原稿展示",
      "source": "25-26七年级上·上海·期中｜【数学期中汇编】整式的加法和减法（原卷版）.pdf 第1页 · 考点01第9题",
      "title": "考点01 · 原题 9",
      "family": "整式-条件列式",
      "prompt": "按上方原题要求作答，题干、条件与图示均以原稿为准。",
      "context": "",
      "checkpoint": "保留支撑结论的关键变形；过程检查不等于官方步骤分。",
      "hints": []
    },
    {
      "id": "addition-考点01-10",
      "number": 10,
      "section": "考点01",
      "citation": "25-26七年级上·上海·期中",
      "questionFile": "【数学期中汇编】整式的加法和减法（原卷版）.pdf",
      "questionPage": 1,
      "answerFile": "【数学期中汇编】整式的加法和减法（解析版）.pdf",
      "answerPage": 4,
      "questionImages": [
        "original-assets/addition-考点01-10-q-1.webp"
      ],
      "solutionImages": [
        "original-assets/addition-考点01-10-a-1.webp"
      ],
      "questionLocations": [
        {
          "fileId": 11,
          "page": 1,
          "box": [
            45,
            596.84,
            555.28,
            626.68
          ],
          "sha256": "1829a0f750f68a51e5448409f5868cf81dc1491569fe90dc5dbc83ef371a4a01"
        }
      ],
      "solutionLocations": [
        {
          "fileId": 12,
          "page": 4,
          "box": [
            45,
            268.16,
            555.28,
            480.05
          ],
          "sha256": "be72b6aa8d60c03956e7aed65cd9ca5b2a32357a4a80dc69e5e4d5507811ab8a"
        }
      ],
      "header": "10．（25-26七年级上·上海·期中）计算：",
      "module": "base",
      "level": 2,
      "kind": "expression",
      "mode": "expand",
      "start": "a^2/2-(2a^2-ab+b^2)+2b^2/3",
      "target": "-3a^2/2+ab-b^2/3",
      "steps": [
        "-3a^2/2+ab-b^2/3"
      ],
      "bank": "original",
      "active": true,
      "pendingReason": null,
      "origin": "文件夹原题 · 原稿展示",
      "source": "25-26七年级上·上海·期中｜【数学期中汇编】整式的加法和减法（原卷版）.pdf 第1页 · 考点01第10题",
      "title": "考点01 · 原题 10",
      "family": "整式-分数系数",
      "prompt": "按上方原题要求作答，题干、条件与图示均以原稿为准。",
      "context": "",
      "checkpoint": "保留支撑结论的关键变形；过程检查不等于官方步骤分。",
      "hints": []
    },
    {
      "id": "addition-考点01-11",
      "number": 11,
      "section": "考点01",
      "citation": "25-26七年级上·上海奉贤·期中",
      "questionFile": "【数学期中汇编】整式的加法和减法（原卷版）.pdf",
      "questionPage": 1,
      "answerFile": "【数学期中汇编】整式的加法和减法（解析版）.pdf",
      "answerPage": 4,
      "questionImages": [
        "original-assets/addition-考点01-11-q-1.webp"
      ],
      "solutionImages": [
        "original-assets/addition-考点01-11-a-1.webp"
      ],
      "questionLocations": [
        {
          "fileId": 11,
          "page": 1,
          "box": [
            45,
            627.68,
            555.28,
            656.68
          ],
          "sha256": "cb88a2bf5c5d6b8b260696df9e91cd3aaefea17bf9c7376674c54a7690aba543"
        }
      ],
      "solutionLocations": [
        {
          "fileId": 12,
          "page": 4,
          "box": [
            45,
            481.05,
            555.28,
            659.57
          ],
          "sha256": "cc804933bc132a48cc262e2816a5bedfabaa09fc8e490f35974483ca21f5f2da"
        }
      ],
      "header": "11．（25-26七年级上·上海奉贤·期中）计算：",
      "module": "base",
      "level": 2,
      "kind": "expression",
      "mode": "expand",
      "start": "x^2/2-(x^2-2xy+y^2/3)+y^2/6",
      "target": "-x^2/2+2xy-y^2/6",
      "steps": [
        "-x^2/2+2xy-y^2/6"
      ],
      "bank": "original",
      "active": true,
      "pendingReason": null,
      "origin": "文件夹原题 · 原稿展示",
      "source": "25-26七年级上·上海奉贤·期中｜【数学期中汇编】整式的加法和减法（原卷版）.pdf 第1页 · 考点01第11题",
      "title": "考点01 · 原题 11",
      "family": "整式-分数系数",
      "prompt": "按上方原题要求作答，题干、条件与图示均以原稿为准。",
      "context": "",
      "checkpoint": "保留支撑结论的关键变形；过程检查不等于官方步骤分。",
      "hints": []
    },
    {
      "id": "addition-考点01-12",
      "number": 12,
      "section": "考点01",
      "citation": "25-26七年级上·上海浦东新·期中",
      "questionFile": "【数学期中汇编】整式的加法和减法（原卷版）.pdf",
      "questionPage": 1,
      "answerFile": "【数学期中汇编】整式的加法和减法（解析版）.pdf",
      "answerPage": 4,
      "questionImages": [
        "original-assets/addition-考点01-12-q-1.webp"
      ],
      "solutionImages": [
        "original-assets/addition-考点01-12-a-1.webp",
        "original-assets/addition-考点01-12-a-2.webp"
      ],
      "questionLocations": [
        {
          "fileId": 11,
          "page": 1,
          "box": [
            45,
            657.68,
            555.28,
            688.96
          ],
          "sha256": "195aed54d896c86c21515aa8ff4007bd99b5335dcf540b7299566e57e84ec0d0"
        }
      ],
      "solutionLocations": [
        {
          "fileId": 12,
          "page": 4,
          "box": [
            45,
            660.57,
            555.28,
            785
          ],
          "sha256": "07531594c1f7d1e93d98ef8039fd20a072582ffac1dd0b398147dec85a9a9580"
        },
        {
          "fileId": 12,
          "page": 5,
          "box": [
            45,
            68,
            555.28,
            106.61
          ],
          "sha256": "a017667cbd0d02233d4a849c217cc1701b010dfb2cf719c758a82823115bbe77"
        }
      ],
      "header": "12．（25-26七年级上·上海浦东新·期中）计算： ．",
      "module": "base",
      "level": 2,
      "kind": "expression",
      "mode": "expand",
      "start": "a^2/3-(a^2-2ab+b^2/2)+b^2/6",
      "target": "-2a^2/3+2ab-b^2/3",
      "steps": [
        "-2a^2/3+2ab-b^2/3"
      ],
      "bank": "original",
      "active": true,
      "pendingReason": null,
      "origin": "文件夹原题 · 原稿展示",
      "source": "25-26七年级上·上海浦东新·期中｜【数学期中汇编】整式的加法和减法（原卷版）.pdf 第1页 · 考点01第12题",
      "title": "考点01 · 原题 12",
      "family": "整式-分数系数",
      "prompt": "按上方原题要求作答，题干、条件与图示均以原稿为准。",
      "context": "",
      "checkpoint": "保留支撑结论的关键变形；过程检查不等于官方步骤分。",
      "hints": []
    },
    {
      "id": "addition-考点01-13",
      "number": 13,
      "section": "考点01",
      "citation": "25-26七年级上·上海普陀·期中",
      "questionFile": "【数学期中汇编】整式的加法和减法（原卷版）.pdf",
      "questionPage": 1,
      "answerFile": "【数学期中汇编】整式的加法和减法（解析版）.pdf",
      "answerPage": 5,
      "questionImages": [
        "original-assets/addition-考点01-13-q-1.webp"
      ],
      "solutionImages": [
        "original-assets/addition-考点01-13-a-1.webp"
      ],
      "questionLocations": [
        {
          "fileId": 11,
          "page": 1,
          "box": [
            45,
            689.96,
            555.28,
            722.68
          ],
          "sha256": "b221b3bd02dbb9dfab9ccb6c9d95c29cb04974094c8eb3a76b95d39be3f98d39"
        }
      ],
      "solutionLocations": [
        {
          "fileId": 12,
          "page": 5,
          "box": [
            45,
            107.61,
            555.28,
            309.16
          ],
          "sha256": "fe8a1c93d2a972fa30180ca0b5db83035088955cbd08cdf442f8f86a034a8be9"
        }
      ],
      "header": "13．（25-26七年级上·上海普陀·期中）已知整式 ， ，求 ．",
      "module": "base",
      "level": 3,
      "kind": "parts",
      "parts": [
        {
          "label": "原题所求结果",
          "target": "7x^2-4xy+3y^2",
          "mode": "expand",
          "start": null
        }
      ],
      "requiresReason": true,
      "bank": "original",
      "active": true,
      "pendingReason": null,
      "origin": "文件夹原题 · 原稿展示",
      "source": "25-26七年级上·上海普陀·期中｜【数学期中汇编】整式的加法和减法（原卷版）.pdf 第1页 · 考点01第13题",
      "title": "考点01 · 原题 13",
      "family": "整式-条件列式",
      "prompt": "按上方原题要求作答，题干、条件与图示均以原稿为准。",
      "context": "",
      "checkpoint": "保留支撑结论的关键变形；过程检查不等于官方步骤分。",
      "hints": []
    },
    {
      "id": "addition-考点01-14",
      "number": 14,
      "section": "考点01",
      "citation": "25-26七年级上·上海普陀·期中",
      "questionFile": "【数学期中汇编】整式的加法和减法（原卷版）.pdf",
      "questionPage": 1,
      "answerFile": "【数学期中汇编】整式的加法和减法（解析版）.pdf",
      "answerPage": 5,
      "questionImages": [
        "original-assets/addition-考点01-14-q-1.webp"
      ],
      "solutionImages": [
        "original-assets/addition-考点01-14-a-1.webp"
      ],
      "questionLocations": [
        {
          "fileId": 11,
          "page": 1,
          "box": [
            45,
            723.68,
            555.28,
            747.4
          ],
          "sha256": "3a8acf8e0a20dc0ec31cc13110fac8a0b4929ac12c069bd26f79e316a3ffba46"
        }
      ],
      "solutionLocations": [
        {
          "fileId": 12,
          "page": 5,
          "box": [
            45,
            310.16,
            555.28,
            466.72
          ],
          "sha256": "e79518d8a05ade5449e888d882a3aae2fb3a74d202300c37f9817b14a55adbe4"
        }
      ],
      "header": "14．（25-26七年级上·上海普陀·期中）计算： ．",
      "module": "base",
      "level": 1,
      "kind": "expression",
      "mode": "expand",
      "start": "(3x^2-5xy)-(xy-2x^2)",
      "target": "5x^2-6xy",
      "steps": [
        "5x^2-6xy"
      ],
      "bank": "original",
      "active": true,
      "pendingReason": null,
      "origin": "文件夹原题 · 原稿展示",
      "source": "25-26七年级上·上海普陀·期中｜【数学期中汇编】整式的加法和减法（原卷版）.pdf 第1页 · 考点01第14题",
      "title": "考点01 · 原题 14",
      "family": "整式-去括号合并",
      "prompt": "按上方原题要求作答，题干、条件与图示均以原稿为准。",
      "context": "",
      "checkpoint": "保留支撑结论的关键变形；过程检查不等于官方步骤分。",
      "hints": []
    },
    {
      "id": "addition-考点01-15",
      "number": 15,
      "section": "考点01",
      "citation": "25-26七年级上·上海·期中",
      "questionFile": "【数学期中汇编】整式的加法和减法（原卷版）.pdf",
      "questionPage": 1,
      "answerFile": "【数学期中汇编】整式的加法和减法（解析版）.pdf",
      "answerPage": 5,
      "questionImages": [
        "original-assets/addition-考点01-15-q-1.webp",
        "original-assets/addition-考点01-15-q-2.webp"
      ],
      "solutionImages": [
        "original-assets/addition-考点01-15-a-1.webp"
      ],
      "questionLocations": [
        {
          "fileId": 11,
          "page": 1,
          "box": [
            45,
            748.4,
            555.28,
            778.75
          ],
          "sha256": "2ed75f281babe5eea781b2b1112a6a5b76edba97f6ff575020d6c44f85894caf"
        },
        {
          "fileId": 11,
          "page": 2,
          "box": [
            45,
            68,
            555.28,
            97.61
          ],
          "sha256": "299fbd65375d1538c564d7abe37e2b8474231419c599172efe543229c45db268"
        }
      ],
      "solutionLocations": [
        {
          "fileId": 12,
          "page": 5,
          "box": [
            45,
            467.72,
            555.28,
            624.28
          ],
          "sha256": "6ff55d21ba39ddd9090a85bc8856b3926e81f5ade9f7a3620eafb21c60dea5db"
        }
      ],
      "header": "15．（25-26七年级上·上海·期中）计算：",
      "module": "base",
      "level": 2,
      "kind": "expression",
      "mode": "expand",
      "start": "4a+(3-2a+a^2)-(2a^2+1)",
      "target": "-a^2+2a+2",
      "steps": [
        "-a^2+2a+2"
      ],
      "bank": "original",
      "active": true,
      "pendingReason": null,
      "origin": "文件夹原题 · 原稿展示",
      "source": "25-26七年级上·上海·期中｜【数学期中汇编】整式的加法和减法（原卷版）.pdf 第1页 · 考点01第15题",
      "title": "考点01 · 原题 15",
      "family": "整式-去括号合并",
      "prompt": "按上方原题要求作答，题干、条件与图示均以原稿为准。",
      "context": "",
      "checkpoint": "保留支撑结论的关键变形；过程检查不等于官方步骤分。",
      "hints": []
    },
    {
      "id": "factor-概念-01",
      "number": 1,
      "section": "概念",
      "citation": "25-26七年级上·上海金山·期中",
      "questionFile": "【期中汇编专题】因式分解（原卷版）.pdf",
      "questionPage": 5,
      "answerFile": "【期中汇编专题】因式分解（解析版）.pdf",
      "answerPage": 5,
      "questionImages": [
        "original-assets/factor-概念-01-q-1.webp"
      ],
      "solutionImages": [
        "original-assets/factor-概念-01-a-1.webp",
        "original-assets/factor-概念-01-a-2.webp"
      ],
      "questionLocations": [
        {
          "fileId": 13,
          "page": 5,
          "box": [
            45,
            397.77,
            555.28,
            480.41
          ],
          "sha256": "9605d544b5402c7cefe7d7d8d5bf192da9b3016e2bc085cd07b165b58d774bfe"
        }
      ],
      "solutionLocations": [
        {
          "fileId": 14,
          "page": 5,
          "box": [
            45,
            631.17,
            555.28,
            785
          ],
          "sha256": "8613ae362883ff6914afb82c8d4ffac8f85833dd04f598795db6c1ebc5174ae3"
        },
        {
          "fileId": 14,
          "page": 6,
          "box": [
            45,
            68,
            555.28,
            156.17
          ],
          "sha256": "00c3752b77710bde32418d02ab9cce28af0dbf9dd03d71ee5892407a1be9234c"
        }
      ],
      "header": "1．（25-26七年级上·上海金山·期中）下列等式中，从左到右的变形是因式分解的是（ ）",
      "module": "common",
      "level": 1,
      "kind": "choice",
      "options": [
        "",
        "",
        "",
        ""
      ],
      "answer": 2,
      "explain": "",
      "bank": "original",
      "active": true,
      "pendingReason": null,
      "origin": "文件夹原题 · 原稿展示",
      "source": "25-26七年级上·上海金山·期中｜【期中汇编专题】因式分解（原卷版）.pdf 第5页 · 概念第1题",
      "title": "概念 · 原题 1",
      "family": "common-概念辨析",
      "prompt": "按上方原题要求作答，题干、条件与图示均以原稿为准。",
      "context": "",
      "checkpoint": "保留支撑结论的关键变形；过程检查不等于官方步骤分。",
      "hints": []
    },
    {
      "id": "factor-概念-02",
      "number": 2,
      "section": "概念",
      "citation": "25-26七年级上·上海浦东新·期中",
      "questionFile": "【期中汇编专题】因式分解（原卷版）.pdf",
      "questionPage": 5,
      "answerFile": "【期中汇编专题】因式分解（解析版）.pdf",
      "answerPage": 6,
      "questionImages": [
        "original-assets/factor-概念-02-q-1.webp"
      ],
      "solutionImages": [
        "original-assets/factor-概念-02-a-1.webp"
      ],
      "questionLocations": [
        {
          "fileId": 13,
          "page": 5,
          "box": [
            45,
            481.41,
            555.28,
            553.01
          ],
          "sha256": "0e305d703903927731195faea321c4be1b1dc0342e44225f92e6332cf99f7621"
        }
      ],
      "solutionLocations": [
        {
          "fileId": 14,
          "page": 6,
          "box": [
            45,
            157.17,
            555.28,
            358.61
          ],
          "sha256": "be67454f3f66af20508c38dc1b1624c8c5faaf3171cce6e6963c4e0593e2a720"
        }
      ],
      "header": "2．（25-26七年级上·上海浦东新·期中）下列等式中，从左到右变形属于因式分解的是（ ）",
      "module": "common",
      "level": 1,
      "kind": "choice",
      "options": [
        "",
        "",
        "",
        ""
      ],
      "answer": 1,
      "explain": "",
      "bank": "original",
      "active": true,
      "pendingReason": null,
      "origin": "文件夹原题 · 原稿展示",
      "source": "25-26七年级上·上海浦东新·期中｜【期中汇编专题】因式分解（原卷版）.pdf 第5页 · 概念第2题",
      "title": "概念 · 原题 2",
      "family": "common-概念辨析",
      "prompt": "按上方原题要求作答，题干、条件与图示均以原稿为准。",
      "context": "",
      "checkpoint": "保留支撑结论的关键变形；过程检查不等于官方步骤分。",
      "hints": []
    },
    {
      "id": "factor-概念-03",
      "number": 3,
      "section": "概念",
      "citation": "25-26七年级上·上海·期中",
      "questionFile": "【期中汇编专题】因式分解（原卷版）.pdf",
      "questionPage": 5,
      "answerFile": "【期中汇编专题】因式分解（解析版）.pdf",
      "answerPage": 6,
      "questionImages": [
        "original-assets/factor-概念-03-q-1.webp"
      ],
      "solutionImages": [
        "original-assets/factor-概念-03-a-1.webp",
        "original-assets/factor-概念-03-a-2.webp"
      ],
      "questionLocations": [
        {
          "fileId": 13,
          "page": 5,
          "box": [
            45,
            554.01,
            555.28,
            647.09
          ],
          "sha256": "862efd56270d1efc884763a92a08dc836d0dc913483411e953610e91f13c9260"
        }
      ],
      "solutionLocations": [
        {
          "fileId": 14,
          "page": 6,
          "box": [
            45,
            359.61,
            555.28,
            625.97
          ],
          "sha256": "15ea1b9ff44ed22a4ab77cc133b9b9841c86131bc8f0ad251ac9f8fd9f7ee949"
        },
        {
          "fileId": 14,
          "page": 7,
          "box": [
            45,
            68,
            555.28,
            86.32
          ],
          "sha256": "95b7f96a7cf408a1c540183285f1be2bb6995e8f11bfc42a915c1d11ed8160be"
        }
      ],
      "header": "3．（25-26七年级上·上海·期中）下列从左到右变形，是因式分解的有（ ）",
      "module": "common",
      "level": 2,
      "kind": "choice",
      "options": [
        "",
        "",
        "",
        ""
      ],
      "answer": 1,
      "explain": "",
      "bank": "original",
      "active": true,
      "pendingReason": null,
      "origin": "文件夹原题 · 原稿展示",
      "source": "25-26七年级上·上海·期中｜【期中汇编专题】因式分解（原卷版）.pdf 第5页 · 概念第3题",
      "title": "概念 · 原题 3",
      "family": "common-概念辨析",
      "prompt": "按上方原题要求作答，题干、条件与图示均以原稿为准。",
      "context": "",
      "checkpoint": "保留支撑结论的关键变形；过程检查不等于官方步骤分。",
      "hints": []
    },
    {
      "id": "factor-提公因式-01",
      "number": 1,
      "section": "提公因式",
      "citation": "24-25七年级上·上海·期中",
      "questionFile": "【期中汇编专题】因式分解（原卷版）.pdf",
      "questionPage": 6,
      "answerFile": "【期中汇编专题】因式分解（解析版）.pdf",
      "answerPage": 7,
      "questionImages": [
        "original-assets/factor-提公因式-01-q-1.webp"
      ],
      "solutionImages": [
        "original-assets/factor-提公因式-01-a-1.webp"
      ],
      "questionLocations": [
        {
          "fileId": 13,
          "page": 6,
          "box": [
            45,
            67.04,
            555.28,
            89.32
          ],
          "sha256": "2e45a4595794255c2432acf9509f39316eda7131b004bf582ff63fb9ad71f5cb"
        }
      ],
      "solutionLocations": [
        {
          "fileId": 14,
          "page": 7,
          "box": [
            45,
            87.32,
            555.28,
            109.6
          ],
          "sha256": "bfd48bab1b90c38e5db8c95d4d13bd449156bcdecd4d3ac52109987b3b9165dc"
        }
      ],
      "header": "1．（24-25七年级上·上海·期中）整式 的公因式是_____．",
      "module": "common",
      "level": 1,
      "kind": "parts",
      "parts": [
        {
          "label": "原题公因式",
          "target": "2xy^2",
          "mode": "expand",
          "start": null
        }
      ],
      "requiresReason": false,
      "bank": "original",
      "active": true,
      "pendingReason": null,
      "origin": "文件夹原题 · 原稿展示",
      "source": "24-25七年级上·上海·期中｜【期中汇编专题】因式分解（原卷版）.pdf 第6页 · 提公因式第1题",
      "title": "提公因式 · 原题 1",
      "family": "公因式-确定公因式",
      "prompt": "按上方原题要求作答，题干、条件与图示均以原稿为准。",
      "context": "",
      "checkpoint": "保留支撑结论的关键变形；过程检查不等于官方步骤分。",
      "hints": []
    },
    {
      "id": "factor-提公因式-02",
      "number": 2,
      "section": "提公因式",
      "citation": "25-26七年级上·上海·期中",
      "questionFile": "【期中汇编专题】因式分解（原卷版）.pdf",
      "questionPage": 6,
      "answerFile": "【期中汇编专题】因式分解（解析版）.pdf",
      "answerPage": 7,
      "questionImages": [
        "original-assets/factor-提公因式-02-q-1.webp"
      ],
      "solutionImages": [
        "original-assets/factor-提公因式-02-a-1.webp"
      ],
      "questionLocations": [
        {
          "fileId": 13,
          "page": 6,
          "box": [
            45,
            90.32,
            555.28,
            115.6
          ],
          "sha256": "f14f0e0775ab0be140754fb082a0385b0adeb20e8fe12049b4d7b3c0c94564ae"
        }
      ],
      "solutionLocations": [
        {
          "fileId": 14,
          "page": 7,
          "box": [
            45,
            110.6,
            555.28,
            393.89
          ],
          "sha256": "b0ed6f85924a8267ed08983da6c9aad381f350dfb38e9a6ef133548b9b26e6b8"
        }
      ],
      "header": "2．（25-26七年级上·上海·期中）因式分解： _______．",
      "module": "common",
      "level": 3,
      "kind": "expression",
      "mode": "factor",
      "start": "3a(x-y)^2-a(y-x)^3",
      "target": "a(x-y)^2(x-y+3)",
      "steps": [
        "a(x-y)^2(x-y+3)"
      ],
      "bank": "original",
      "active": true,
      "pendingReason": null,
      "origin": "文件夹原题 · 原稿展示",
      "source": "25-26七年级上·上海·期中｜【期中汇编专题】因式分解（原卷版）.pdf 第6页 · 提公因式第2题",
      "title": "提公因式 · 原题 2",
      "family": "公因式-相反式",
      "prompt": "按上方原题要求作答，题干、条件与图示均以原稿为准。",
      "context": "",
      "checkpoint": "保留支撑结论的关键变形；过程检查不等于官方步骤分。",
      "hints": []
    },
    {
      "id": "factor-提公因式-03",
      "number": 3,
      "section": "提公因式",
      "citation": "25-26七年级上·上海青浦·期中",
      "questionFile": "【期中汇编专题】因式分解（原卷版）.pdf",
      "questionPage": 6,
      "answerFile": "【期中汇编专题】因式分解（解析版）.pdf",
      "answerPage": 7,
      "questionImages": [
        "original-assets/factor-提公因式-03-q-1.webp"
      ],
      "solutionImages": [
        "original-assets/factor-提公因式-03-a-1.webp",
        "original-assets/factor-提公因式-03-a-2.webp"
      ],
      "questionLocations": [
        {
          "fileId": 13,
          "page": 6,
          "box": [
            45,
            116.6,
            555.28,
            200.09
          ],
          "sha256": "e38a5133649e6f9429eb0fc755ecb83f004012f8c2cec30aa724679ffcc17d2f"
        }
      ],
      "solutionLocations": [
        {
          "fileId": 14,
          "page": 7,
          "box": [
            45,
            394.89,
            555.28,
            590.09
          ],
          "sha256": "82915d3bf961c92bf8aab62d90460ffc95165bb60abfb762bd51695cdd7f7250"
        },
        {
          "fileId": 14,
          "page": 8,
          "box": [
            45,
            68,
            555.28,
            204.89
          ],
          "sha256": "6bb1184f301755ce43e131a8fe1816abc49cb23ab2eacb6841c839184e4cd0b0"
        }
      ],
      "header": "3．（25-26七年级上·上海青浦·期中）分解因式： ．",
      "module": "common",
      "level": 2,
      "kind": "expression",
      "mode": "factor",
      "start": "(m-n)(x+3y)-(n-m)(x-y)",
      "target": "2(m-n)(x+y)",
      "steps": [
        "2(m-n)(x+y)"
      ],
      "bank": "original",
      "active": true,
      "pendingReason": null,
      "origin": "文件夹原题 · 原稿展示",
      "source": "25-26七年级上·上海青浦·期中｜【期中汇编专题】因式分解（原卷版）.pdf 第6页 · 提公因式第3题",
      "title": "提公因式 · 原题 3",
      "family": "公因式-整体因式",
      "prompt": "按上方原题要求作答，题干、条件与图示均以原稿为准。",
      "context": "",
      "checkpoint": "保留支撑结论的关键变形；过程检查不等于官方步骤分。",
      "hints": []
    },
    {
      "id": "factor-公式法-01",
      "number": 1,
      "section": "公式法",
      "citation": "25-26七年级上·上海金山·期中",
      "questionFile": "【期中汇编专题】因式分解（原卷版）.pdf",
      "questionPage": 6,
      "answerFile": "【期中汇编专题】因式分解（解析版）.pdf",
      "answerPage": 8,
      "questionImages": [
        "original-assets/factor-公式法-01-q-1.webp"
      ],
      "solutionImages": [
        "original-assets/factor-公式法-01-a-1.webp"
      ],
      "questionLocations": [
        {
          "fileId": 13,
          "page": 6,
          "box": [
            45,
            335.61,
            555.28,
            382.61
          ],
          "sha256": "925b87f74e1866006cb983a91c5ab981bf323a5c9744a996896169a1b7299b90"
        }
      ],
      "solutionLocations": [
        {
          "fileId": 14,
          "page": 8,
          "box": [
            45,
            205.89,
            555.28,
            444.65
          ],
          "sha256": "ca9c03da0aea2755469962cfc764416371a8704c23c8ae94f93c15df08e6395a"
        }
      ],
      "header": "1．（25-26七年级上·上海金山·期中）下列多项式中能用平方差公式分解因式的是（ ）",
      "module": "formula",
      "level": 1,
      "kind": "choice",
      "options": [
        "",
        "",
        "",
        ""
      ],
      "answer": 1,
      "explain": "",
      "bank": "original",
      "active": true,
      "pendingReason": null,
      "origin": "文件夹原题 · 原稿展示",
      "source": "25-26七年级上·上海金山·期中｜【期中汇编专题】因式分解（原卷版）.pdf 第6页 · 公式法第1题",
      "title": "公式法 · 原题 1",
      "family": "formula-概念辨析",
      "prompt": "按上方原题要求作答，题干、条件与图示均以原稿为准。",
      "context": "",
      "checkpoint": "保留支撑结论的关键变形；过程检查不等于官方步骤分。",
      "hints": []
    },
    {
      "id": "factor-公式法-02",
      "number": 2,
      "section": "公式法",
      "citation": "25-26七年级上·上海普陀·期中",
      "questionFile": "【期中汇编专题】因式分解（原卷版）.pdf",
      "questionPage": 6,
      "answerFile": "【期中汇编专题】因式分解（解析版）.pdf",
      "answerPage": 8,
      "questionImages": [
        "original-assets/factor-公式法-02-q-1.webp"
      ],
      "solutionImages": [
        "original-assets/factor-公式法-02-a-1.webp"
      ],
      "questionLocations": [
        {
          "fileId": 13,
          "page": 6,
          "box": [
            45,
            383.61,
            555.28,
            433.72
          ],
          "sha256": "6c301922f59c923383ecb8a0d7c74a26ac7ce3a649f3190826f027b164dc7de2"
        }
      ],
      "solutionLocations": [
        {
          "fileId": 14,
          "page": 8,
          "box": [
            45,
            445.65,
            555.28,
            646.73
          ],
          "sha256": "d5b1d0ade6ea8486e922e6c73f3024d9429158baff1e494e9a3f71e55e1013d1"
        }
      ],
      "header": "2．（25-26七年级上·上海普陀·期中）下列整式能用完全平方公式进行因式分解的是（ ）",
      "module": "formula",
      "level": 1,
      "kind": "choice",
      "options": [
        "",
        "",
        "",
        ""
      ],
      "answer": 2,
      "explain": "",
      "bank": "original",
      "active": true,
      "pendingReason": null,
      "origin": "文件夹原题 · 原稿展示",
      "source": "25-26七年级上·上海普陀·期中｜【期中汇编专题】因式分解（原卷版）.pdf 第6页 · 公式法第2题",
      "title": "公式法 · 原题 2",
      "family": "formula-概念辨析",
      "prompt": "按上方原题要求作答，题干、条件与图示均以原稿为准。",
      "context": "",
      "checkpoint": "保留支撑结论的关键变形；过程检查不等于官方步骤分。",
      "hints": []
    },
    {
      "id": "factor-公式法-03",
      "number": 3,
      "section": "公式法",
      "citation": "25-26七年级上·上海宝山·期中",
      "questionFile": "【期中汇编专题】因式分解（原卷版）.pdf",
      "questionPage": 6,
      "answerFile": "【期中汇编专题】因式分解（解析版）.pdf",
      "answerPage": 8,
      "questionImages": [
        "original-assets/factor-公式法-03-q-1.webp"
      ],
      "solutionImages": [
        "original-assets/factor-公式法-03-a-1.webp",
        "original-assets/factor-公式法-03-a-2.webp"
      ],
      "questionLocations": [
        {
          "fileId": 13,
          "page": 6,
          "box": [
            45,
            434.72,
            555.28,
            460.13
          ],
          "sha256": "7060f2bbc8b5ef09a07169546bd9abcdf2ace3c1463bf9a7deca7fd1b737104f"
        }
      ],
      "solutionLocations": [
        {
          "fileId": 14,
          "page": 8,
          "box": [
            45,
            647.73,
            555.28,
            785
          ],
          "sha256": "fc8ed925efe52fbfda9fa617f3d3a1499d3b47597a7ca5f2cf7a9c64cabd98ab"
        },
        {
          "fileId": 14,
          "page": 9,
          "box": [
            45,
            68,
            555.28,
            96.77
          ],
          "sha256": "bff514b4b4a3784914218d603f981420b3f71bde8723350f8d181e353c47da46"
        }
      ],
      "header": "3．（25-26七年级上·上海宝山·期中）因式分解： __________．",
      "module": "formula",
      "level": 1,
      "kind": "expression",
      "mode": "factor",
      "start": "(x-y)^2+12(x-y)+36",
      "target": "(x-y+6)^2",
      "steps": [
        "(x-y+6)^2"
      ],
      "bank": "original",
      "active": true,
      "pendingReason": null,
      "origin": "文件夹原题 · 原稿展示",
      "source": "25-26七年级上·上海宝山·期中｜【期中汇编专题】因式分解（原卷版）.pdf 第6页 · 公式法第3题",
      "title": "公式法 · 原题 3",
      "family": "公式-完全平方",
      "prompt": "按上方原题要求作答，题干、条件与图示均以原稿为准。",
      "context": "",
      "checkpoint": "保留支撑结论的关键变形；过程检查不等于官方步骤分。",
      "hints": []
    },
    {
      "id": "factor-十字相乘-01",
      "number": 1,
      "section": "十字相乘",
      "citation": "25-26七年级上·上海·期中",
      "questionFile": "【期中汇编专题】因式分解（原卷版）.pdf",
      "questionPage": 6,
      "answerFile": "【期中汇编专题】因式分解（解析版）.pdf",
      "answerPage": 9,
      "questionImages": [
        "original-assets/factor-十字相乘-01-q-1.webp"
      ],
      "solutionImages": [
        "original-assets/factor-十字相乘-01-a-1.webp"
      ],
      "questionLocations": [
        {
          "fileId": 13,
          "page": 6,
          "box": [
            45,
            628.4,
            555.28,
            648.4
          ],
          "sha256": "b75c10572e66a87793e0d72a479933b20bfccea34ad75e63558a9ae6d4b0d232"
        }
      ],
      "solutionLocations": [
        {
          "fileId": 14,
          "page": 9,
          "box": [
            45,
            269.6,
            555.28,
            387.77
          ],
          "sha256": "a9308bda399ce31ac86a67d7bcd2987a7210b54e4db4f02b084c65367645d72e"
        }
      ],
      "header": "1.（25-26七年级上·上海·期中）因式分解： _______．",
      "module": "cross",
      "level": 2,
      "kind": "expression",
      "mode": "factor",
      "start": "4x^2-15x+9",
      "target": "(4x-3)(x-3)",
      "steps": [
        "(4x-3)(x-3)"
      ],
      "bank": "original",
      "active": true,
      "pendingReason": null,
      "origin": "文件夹原题 · 原稿展示",
      "source": "25-26七年级上·上海·期中｜【期中汇编专题】因式分解（原卷版）.pdf 第6页 · 十字相乘第1题",
      "title": "十字相乘 · 原题 1",
      "family": "十字-一元三项式",
      "prompt": "按上方原题要求作答，题干、条件与图示均以原稿为准。",
      "context": "",
      "checkpoint": "保留支撑结论的关键变形；过程检查不等于官方步骤分。",
      "hints": []
    },
    {
      "id": "factor-十字相乘-02",
      "number": 2,
      "section": "十字相乘",
      "citation": "25-26七年级上·上海·期中",
      "questionFile": "【期中汇编专题】因式分解（原卷版）.pdf",
      "questionPage": 6,
      "answerFile": "【期中汇编专题】因式分解（解析版）.pdf",
      "answerPage": 9,
      "questionImages": [
        "original-assets/factor-十字相乘-02-q-1.webp"
      ],
      "solutionImages": [
        "original-assets/factor-十字相乘-02-a-1.webp"
      ],
      "questionLocations": [
        {
          "fileId": 13,
          "page": 6,
          "box": [
            45,
            649.4,
            555.28,
            709.96
          ],
          "sha256": "2edfc6fc25b748a0c209ad9de66df707ef7a52929b3abb305122b48bfd08a2de"
        }
      ],
      "solutionLocations": [
        {
          "fileId": 14,
          "page": 9,
          "box": [
            45,
            388.77,
            555.28,
            525.89
          ],
          "sha256": "b953f5325b60697f38e16291d2b0d0fcb1a3a5e207fd78c41840822b690d45de"
        }
      ],
      "header": "2．（25-26七年级上·上海·期中）因式分解：",
      "module": "cross",
      "level": 1,
      "kind": "expression",
      "mode": "factor",
      "start": "x^2-7xy+10y^2",
      "target": "(x-2y)(x-5y)",
      "steps": [
        "(x-2y)(x-5y)"
      ],
      "bank": "original",
      "active": true,
      "pendingReason": null,
      "origin": "文件夹原题 · 原稿展示",
      "source": "25-26七年级上·上海·期中｜【期中汇编专题】因式分解（原卷版）.pdf 第6页 · 十字相乘第2题",
      "title": "十字相乘 · 原题 2",
      "family": "十字-二元三项式",
      "prompt": "按上方原题要求作答，题干、条件与图示均以原稿为准。",
      "context": "",
      "checkpoint": "保留支撑结论的关键变形；过程检查不等于官方步骤分。",
      "hints": []
    },
    {
      "id": "factor-十字相乘-03",
      "number": 3,
      "section": "十字相乘",
      "citation": "25-26七年级上·上海宝山·期中",
      "questionFile": "【期中汇编专题】因式分解（原卷版）.pdf",
      "questionPage": 6,
      "answerFile": "【期中汇编专题】因式分解（解析版）.pdf",
      "answerPage": 9,
      "questionImages": [
        "original-assets/factor-十字相乘-03-q-1.webp",
        "original-assets/factor-十字相乘-03-q-2.webp"
      ],
      "solutionImages": [
        "original-assets/factor-十字相乘-03-a-1.webp",
        "original-assets/factor-十字相乘-03-a-2.webp"
      ],
      "questionLocations": [
        {
          "fileId": 13,
          "page": 6,
          "box": [
            45,
            710.96,
            555.28,
            785
          ],
          "sha256": "f8a39f0c0be28679cbdf4af6c31530c7bef21e46040377b59cf07985fcb09f45"
        },
        {
          "fileId": 13,
          "page": 7,
          "box": [
            45,
            68,
            555.28,
            109.25
          ],
          "sha256": "cd2a69ea3f8732acd1117b399aecdba50b353f92963581eb5f539ef229465573"
        }
      ],
      "solutionLocations": [
        {
          "fileId": 14,
          "page": 9,
          "box": [
            45,
            526.89,
            555.28,
            661.97
          ],
          "sha256": "2b9117c75ceea9cdae4a2636bfb27e31ca120005cc63f67584592b70e42f85d8"
        },
        {
          "fileId": 14,
          "page": 10,
          "box": [
            45,
            68,
            555.28,
            189.16
          ],
          "sha256": "b3230a1e0abf6eed3ad34828d9ac60e2c0b14c234f3eefb603dfd7f7fecf1e67"
        }
      ],
      "header": "3．（25-26七年级上·上海宝山·期中）因式分解： ．",
      "module": "cross",
      "level": 2,
      "kind": "expression",
      "mode": "factor",
      "start": "x^2-3xy-10y^2",
      "target": "(x-5y)(x+2y)",
      "steps": [
        "(x-5y)(x+2y)"
      ],
      "bank": "original",
      "active": true,
      "pendingReason": null,
      "origin": "文件夹原题 · 原稿展示",
      "source": "25-26七年级上·上海宝山·期中｜【期中汇编专题】因式分解（原卷版）.pdf 第6页 · 十字相乘第3题",
      "title": "十字相乘 · 原题 3",
      "family": "十字-二元三项式",
      "prompt": "按上方原题要求作答，题干、条件与图示均以原稿为准。",
      "context": "",
      "checkpoint": "保留支撑结论的关键变形；过程检查不等于官方步骤分。",
      "hints": []
    }
  ],
  "levels": {
    "1": "简易题",
    "2": "中档题",
    "3": "难 / 压轴题"
  },
  "scope": "只采用桌面“因式分解”文件夹中的原题与配套原解析。当前逐题配对95道原题（含多小问，按原题大题计数）；87道进入练习，8道因符号指数、根式、证明/作图核验或原稿冲突暂列原题阅览。尚未声称录入全部24份资料。难度标签由工作台整理，不是原卷难度标注。",
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
  ],
  "retired": [
    {
      "id": "base-1-1",
      "module": "base",
      "level": 1,
      "kind": "expression",
      "title": "同类项归队",
      "family": "同类项归队",
      "bank": "retired",
      "active": false
    },
    {
      "id": "base-1-2",
      "module": "base",
      "level": 1,
      "kind": "expression",
      "title": "负号穿过括号",
      "family": "负号穿过括号",
      "bank": "retired",
      "active": false
    },
    {
      "id": "base-1-3",
      "module": "base",
      "level": 1,
      "kind": "expression",
      "title": "一项乘两项",
      "family": "一项乘两项",
      "bank": "retired",
      "active": false
    },
    {
      "id": "base-2-1",
      "module": "base",
      "level": 2,
      "kind": "expression",
      "title": "双括号合并",
      "family": "双括号合并",
      "bank": "retired",
      "active": false
    },
    {
      "id": "base-2-2",
      "module": "base",
      "level": 2,
      "kind": "expression",
      "title": "乘积与同类项",
      "family": "乘积与同类项",
      "bank": "retired",
      "active": false
    },
    {
      "id": "base-2-3",
      "module": "base",
      "level": 2,
      "kind": "expression",
      "title": "多字母归类",
      "family": "多字母归类",
      "bank": "retired",
      "active": false
    },
    {
      "id": "base-3-1",
      "module": "base",
      "level": 3,
      "kind": "expression",
      "title": "乘方与减法嵌套",
      "family": "乘方与减法嵌套",
      "bank": "retired",
      "active": false
    },
    {
      "id": "base-3-2",
      "module": "base",
      "level": 3,
      "kind": "expression",
      "title": "多层括号",
      "family": "多层括号",
      "bank": "retired",
      "active": false
    },
    {
      "id": "base-3-3",
      "module": "base",
      "level": 3,
      "kind": "expression",
      "title": "乘积相消",
      "family": "乘积相消",
      "bank": "retired",
      "active": false
    },
    {
      "id": "common-1-1",
      "module": "common",
      "level": 1,
      "kind": "expression",
      "title": "系数与字母",
      "family": "系数与字母",
      "bank": "retired",
      "active": false
    },
    {
      "id": "common-1-2",
      "module": "common",
      "level": 1,
      "kind": "expression",
      "title": "不能漏掉1",
      "family": "不能漏掉1",
      "bank": "retired",
      "active": false
    },
    {
      "id": "common-1-3",
      "module": "common",
      "level": 1,
      "kind": "expression",
      "title": "先提负号",
      "family": "先提负号",
      "bank": "retired",
      "active": false
    },
    {
      "id": "common-2-1",
      "module": "common",
      "level": 2,
      "kind": "expression",
      "title": "最低次数",
      "family": "最低次数",
      "bank": "retired",
      "active": false
    },
    {
      "id": "common-2-2",
      "module": "common",
      "level": 2,
      "kind": "expression",
      "title": "把括号当整体",
      "family": "把括号当整体",
      "bank": "retired",
      "active": false
    },
    {
      "id": "common-2-3",
      "module": "common",
      "level": 2,
      "kind": "expression",
      "title": "先提再看公式",
      "family": "先提再看公式",
      "bank": "retired",
      "active": false
    },
    {
      "id": "common-3-1",
      "module": "common",
      "level": 3,
      "kind": "expression",
      "title": "负整体与平方差",
      "family": "负整体与平方差",
      "bank": "retired",
      "active": false
    },
    {
      "id": "common-3-2",
      "module": "common",
      "level": 3,
      "kind": "expression",
      "title": "统一相反因式",
      "family": "统一相反因式",
      "bank": "retired",
      "active": false
    },
    {
      "id": "common-3-3",
      "module": "common",
      "level": 3,
      "kind": "expression",
      "title": "多变量连续分解",
      "family": "多变量连续分解",
      "bank": "retired",
      "active": false
    },
    {
      "id": "formula-1-1",
      "module": "formula",
      "level": 1,
      "kind": "expression",
      "title": "平方差结构",
      "family": "平方差结构",
      "bank": "retired",
      "active": false
    },
    {
      "id": "formula-1-2",
      "module": "formula",
      "level": 1,
      "kind": "expression",
      "title": "核对中间项",
      "family": "核对中间项",
      "bank": "retired",
      "active": false
    },
    {
      "id": "formula-1-3",
      "module": "formula",
      "level": 1,
      "kind": "expression",
      "title": "减号完全平方",
      "family": "减号完全平方",
      "bank": "retired",
      "active": false
    },
    {
      "id": "formula-2-1",
      "module": "formula",
      "level": 2,
      "kind": "expression",
      "title": "整体平方差",
      "family": "整体平方差",
      "bank": "retired",
      "active": false
    },
    {
      "id": "formula-2-2",
      "module": "formula",
      "level": 2,
      "kind": "expression",
      "title": "再分一次",
      "family": "再分一次",
      "bank": "retired",
      "active": false
    },
    {
      "id": "formula-2-3",
      "module": "formula",
      "level": 2,
      "kind": "expression",
      "title": "先提常数",
      "family": "先提常数",
      "bank": "retired",
      "active": false
    },
    {
      "id": "formula-3-1",
      "module": "formula",
      "level": 3,
      "kind": "expression",
      "title": "两次平方差",
      "family": "两次平方差",
      "bank": "retired",
      "active": false
    },
    {
      "id": "formula-3-2",
      "module": "formula",
      "level": 3,
      "kind": "expression",
      "title": "整体公式转换",
      "family": "整体公式转换",
      "bank": "retired",
      "active": false
    },
    {
      "id": "formula-3-3",
      "module": "formula",
      "level": 3,
      "kind": "expression",
      "title": "整体再平方差",
      "family": "整体再平方差",
      "bank": "retired",
      "active": false
    },
    {
      "id": "cross-1-1",
      "module": "cross",
      "level": 1,
      "kind": "expression",
      "title": "和与积同查",
      "family": "和与积同查",
      "bank": "retired",
      "active": false
    },
    {
      "id": "cross-1-2",
      "module": "cross",
      "level": 1,
      "kind": "expression",
      "title": "两数都为负",
      "family": "两数都为负",
      "bank": "retired",
      "active": false
    },
    {
      "id": "cross-1-3",
      "module": "cross",
      "level": 1,
      "kind": "expression",
      "title": "常数项为负",
      "family": "常数项为负",
      "bank": "retired",
      "active": false
    },
    {
      "id": "cross-2-1",
      "module": "cross",
      "level": 2,
      "kind": "expression",
      "title": "首项系数不是1",
      "family": "首项系数不是1",
      "bank": "retired",
      "active": false
    },
    {
      "id": "cross-2-2",
      "module": "cross",
      "level": 2,
      "kind": "expression",
      "title": "不被首尾骗过",
      "family": "不被首尾骗过",
      "bank": "retired",
      "active": false
    },
    {
      "id": "cross-2-3",
      "module": "cross",
      "level": 2,
      "kind": "expression",
      "title": "双字母配对",
      "family": "双字母配对",
      "bank": "retired",
      "active": false
    },
    {
      "id": "cross-3-1",
      "module": "cross",
      "level": 3,
      "kind": "expression",
      "title": "先提再交叉",
      "family": "先提再交叉",
      "bank": "retired",
      "active": false
    },
    {
      "id": "cross-3-2",
      "module": "cross",
      "level": 3,
      "kind": "expression",
      "title": "换整体变量",
      "family": "换整体变量",
      "bank": "retired",
      "active": false
    },
    {
      "id": "cross-3-3",
      "module": "cross",
      "level": 3,
      "kind": "expression",
      "title": "复杂系数异号",
      "family": "复杂系数异号",
      "bank": "retired",
      "active": false
    },
    {
      "id": "group-1-1",
      "module": "group",
      "level": 1,
      "kind": "expression",
      "title": "两组出现共同因式",
      "family": "两组出现共同因式",
      "bank": "retired",
      "active": false
    },
    {
      "id": "group-1-2",
      "module": "group",
      "level": 1,
      "kind": "expression",
      "title": "负号分组",
      "family": "负号分组",
      "bank": "retired",
      "active": false
    },
    {
      "id": "group-1-3",
      "module": "group",
      "level": 1,
      "kind": "expression",
      "title": "乘法逆向组装",
      "family": "乘法逆向组装",
      "bank": "retired",
      "active": false
    },
    {
      "id": "group-2-1",
      "module": "group",
      "level": 2,
      "kind": "expression",
      "title": "一眼看作差",
      "family": "一眼看作差",
      "bank": "retired",
      "active": false
    },
    {
      "id": "group-2-2",
      "module": "group",
      "level": 2,
      "kind": "expression",
      "title": "三次式里藏结构",
      "family": "三次式里藏结构",
      "bank": "retired",
      "active": false
    },
    {
      "id": "group-2-3",
      "module": "group",
      "level": 2,
      "kind": "expression",
      "title": "分组制造平方差",
      "family": "分组制造平方差",
      "bank": "retired",
      "active": false
    },
    {
      "id": "group-3-1",
      "module": "group",
      "level": 3,
      "kind": "expression",
      "title": "四项组合再提净",
      "family": "四项组合再提净",
      "bank": "retired",
      "active": false
    },
    {
      "id": "group-3-2",
      "module": "group",
      "level": 3,
      "kind": "expression",
      "title": "平方整体拼接",
      "family": "平方整体拼接",
      "bank": "retired",
      "active": false
    },
    {
      "id": "group-3-3",
      "module": "group",
      "level": 3,
      "kind": "expression",
      "title": "不同分组也可行",
      "family": "不同分组也可行",
      "bank": "retired",
      "active": false
    },
    {
      "id": "apply-1-1",
      "module": "apply",
      "level": 1,
      "kind": "expression",
      "title": "邻近数的平方差",
      "family": "邻近数的平方差",
      "bank": "retired",
      "active": false
    },
    {
      "id": "apply-1-2",
      "module": "apply",
      "level": 1,
      "kind": "expression",
      "title": "正方形面积差",
      "family": "正方形面积差",
      "bank": "retired",
      "active": false
    },
    {
      "id": "apply-1-3",
      "module": "apply",
      "level": 1,
      "kind": "expression",
      "title": "先组装再代入",
      "family": "先组装再代入",
      "bank": "retired",
      "active": false
    },
    {
      "id": "apply-2-1",
      "module": "apply",
      "level": 2,
      "kind": "expression",
      "title": "日程中的整体差",
      "family": "日程中的整体差",
      "bank": "retired",
      "active": false
    },
    {
      "id": "apply-2-2",
      "module": "apply",
      "level": 2,
      "kind": "expression",
      "title": "两条线索拼回原式",
      "family": "两条线索拼回原式",
      "bank": "retired",
      "active": false
    },
    {
      "id": "apply-2-3",
      "module": "apply",
      "level": 2,
      "kind": "expression",
      "title": "三项平方的简便求值",
      "family": "三项平方的简便求值",
      "bank": "retired",
      "active": false
    },
    {
      "id": "apply-3-1",
      "module": "apply",
      "level": 3,
      "kind": "expression",
      "title": "整体式的连续分解",
      "family": "整体式的连续分解",
      "bank": "retired",
      "active": false
    },
    {
      "id": "apply-3-2",
      "module": "apply",
      "level": 3,
      "kind": "expression",
      "title": "大数背后的不变量",
      "family": "大数背后的不变量",
      "bank": "retired",
      "active": false
    },
    {
      "id": "apply-3-3",
      "module": "apply",
      "level": 3,
      "kind": "expression",
      "title": "对称大数计算",
      "family": "对称大数计算",
      "bank": "retired",
      "active": false
    },
    {
      "id": "base-concept-1",
      "module": "base",
      "level": 1,
      "kind": "choice",
      "title": "结构侦探 · 同类项",
      "family": "同类项",
      "bank": "retired",
      "active": false
    },
    {
      "id": "base-concept-2",
      "module": "base",
      "level": 2,
      "kind": "choice",
      "title": "结构侦探 · 负号分配",
      "family": "负号分配",
      "bank": "retired",
      "active": false
    },
    {
      "id": "base-concept-3",
      "module": "base",
      "level": 3,
      "kind": "choice",
      "title": "结构侦探 · 平方展开",
      "family": "平方展开",
      "bank": "retired",
      "active": false
    },
    {
      "id": "common-concept-1",
      "module": "common",
      "level": 1,
      "kind": "choice",
      "title": "结构侦探 · 漏1",
      "family": "漏1",
      "bank": "retired",
      "active": false
    },
    {
      "id": "common-concept-2",
      "module": "common",
      "level": 2,
      "kind": "choice",
      "title": "结构侦探 · 最小指数",
      "family": "最小指数",
      "bank": "retired",
      "active": false
    },
    {
      "id": "common-concept-3",
      "module": "common",
      "level": 3,
      "kind": "choice",
      "title": "结构侦探 · 相反因式",
      "family": "相反因式",
      "bank": "retired",
      "active": false
    },
    {
      "id": "formula-concept-1",
      "module": "formula",
      "level": 1,
      "kind": "choice",
      "title": "结构侦探 · 公式条件",
      "family": "公式条件",
      "bank": "retired",
      "active": false
    },
    {
      "id": "formula-concept-2",
      "module": "formula",
      "level": 2,
      "kind": "choice",
      "title": "结构侦探 · 彻底分解",
      "family": "彻底分解",
      "bank": "retired",
      "active": false
    },
    {
      "id": "formula-concept-3",
      "module": "formula",
      "level": 3,
      "kind": "choice",
      "title": "结构侦探 · 整体方向",
      "family": "整体方向",
      "bank": "retired",
      "active": false
    },
    {
      "id": "cross-concept-1",
      "module": "cross",
      "level": 1,
      "kind": "choice",
      "title": "结构侦探 · 和积约束",
      "family": "和积约束",
      "bank": "retired",
      "active": false
    },
    {
      "id": "cross-concept-2",
      "module": "cross",
      "level": 2,
      "kind": "choice",
      "title": "结构侦探 · 交叉核验",
      "family": "交叉核验",
      "bank": "retired",
      "active": false
    },
    {
      "id": "cross-concept-3",
      "module": "cross",
      "level": 3,
      "kind": "choice",
      "title": "结构侦探 · 异号交叉",
      "family": "异号交叉",
      "bank": "retired",
      "active": false
    },
    {
      "id": "group-concept-1",
      "module": "group",
      "level": 1,
      "kind": "choice",
      "title": "结构侦探 · 分组目标",
      "family": "分组目标",
      "bank": "retired",
      "active": false
    },
    {
      "id": "group-concept-2",
      "module": "group",
      "level": 2,
      "kind": "choice",
      "title": "结构侦探 · 分组符号",
      "family": "分组符号",
      "bank": "retired",
      "active": false
    },
    {
      "id": "group-concept-3",
      "module": "group",
      "level": 3,
      "kind": "choice",
      "title": "结构侦探 · 结构转换",
      "family": "结构转换",
      "bank": "retired",
      "active": false
    },
    {
      "id": "apply-concept-1",
      "module": "apply",
      "level": 1,
      "kind": "choice",
      "title": "结构侦探 · 恒等依据",
      "family": "恒等依据",
      "bank": "retired",
      "active": false
    },
    {
      "id": "apply-concept-2",
      "module": "apply",
      "level": 2,
      "kind": "choice",
      "title": "结构侦探 · 参数关系",
      "family": "参数关系",
      "bank": "retired",
      "active": false
    },
    {
      "id": "apply-concept-3",
      "module": "apply",
      "level": 3,
      "kind": "choice",
      "title": "结构侦探 · 一般性证明",
      "family": "一般性证明",
      "bank": "retired",
      "active": false
    }
  ]
};
