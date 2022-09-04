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