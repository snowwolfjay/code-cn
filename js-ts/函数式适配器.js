global.真假 = {
    真: {
        valueOf() {
            return true
        },
        toString() {
            return "真"
        }
    }
}
global.假如 = (条件) => {

    return {
        则(函数) {
            if (条件) {
                函数()
            }
            return this
        },
        否则(函数) {
            if (!条件) {
                函数()
            }
            return this
        }
    }

}


global.打印 = (...参数组) => {
    console.log(...参数组)
}


global.程序 = () => {
    const 状态 = {}
    const 环境 = global;
    const 程序 = {
        状态,
        执行(指令) {
            if (typeof 指令 === "string") {
                指令 = 函数(指令)
            }
            指令(状态, 程序, global)
            return 程序
        },
        令(键, 值) {
            const 路径 = 键.split(".")
            let 对象 = 状态
            while (路径.length > 1) {
                const 临时 = 路径.shift()
                if (!对象[临时]) {
                    对象[临时] = {}
                }
                对象 = 对象[临时]
            }
            对象[路径[0]] = 值
            return 程序
        },
        如果(条件声明) {
            const 甲 = []
            const 条件 = 函数("return " + 条件声明)(状态, 程序, 环境)
            const 条件对象 = {
                那么: (函数声明) => {
                    if (条件) {
                        函数(函数声明)(状态, 程序, 环境)
                    }
                    甲.push(1)
                    if (甲.length === 2) {
                        return 程序
                    }
                    return 条件对象
                },
                否则: (函数声明) => {
                    if (!条件) {
                        函数(函数声明)(状态, 程序, 环境)
                    }
                    甲.push(1)
                    if (甲.length === 2) {
                        return 程序
                    }
                    return 条件对象
                }
            }
            return 条件对象

        },
        修改状态(函数字符串) {
            return 程序.执行(函数(函数字符串))
        }
    }
    return 程序
}

global.函数 = (定义) => new Function('状态', '程序', '环境', 定义)
global.参数 = global.函数
