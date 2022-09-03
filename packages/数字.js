

const 基数映射表 = {
    十: 10,
    百: 100,
    千: 1000,
    万: 10000,
    亿: 100000000
}

const 是 = true;
const 否 = false;

Object.defineProperty(String.prototype, "长度", {
    get() {
        return this.length
    }
})

const 个数映射表 = {
    一: 1,
    二: 2,
    三: 3,
    四: 4,
    五: 5,
    六: 6,
    七: 7,
    八: 8,
    九: 9,
    零: 0
}
const 基数组 = Object.keys(基数映射表)
const 个数组 = Object.keys(个数映射表)

const 是基数吗 = 值 => 基数组.includes(值)
const 是个数吗 = 值 => 个数组.includes(值)

module.exports = new Proxy({}, {
    get(_, 中文数字) {
        let 个数 = 0;
        let 总数 = 0;
        const 总长度 = 中文数字.长度
        let 基数 = 1
        for (let 序号 = 0; 序号 < 总长度; 序号++) {
            const 元素 = 中文数字[序号]
            if (是个数吗(元素)) {
                总数 += 个数 * 基数;
                个数 = 个数映射表[元素]
                if (序号 === 总长度 - 1) {
                    总数 += 个数
                }else{
                    基数 = 1
                }
            } else if (是基数吗(元素)) {
                基数 = 基数 * 基数映射表[元素]
                if (序号 === 总长度 - 1) {
                    总数 += 基数
                }
            }
        }
        return 总数
    }
})