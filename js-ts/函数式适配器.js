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


global.状态 = (状态) => {
    return {
        状态,
        执行(指令) {
            指令(状态)
            return this
        }
    }
}

global.函数 = (定义,) => new Function('状态', 定义)
global.参数 = global.函数
