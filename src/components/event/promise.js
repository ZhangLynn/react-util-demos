/**
 * created by LynnZhang on 2019/1/14
 */
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        const p2 = new Promise((resolve, reject) => {

        })
        // resolve(1);
    }, 1000)
});

const foo = function() {
    p1.then(res => {
        return res
    }).then(response => {
        console.log(response)
    }).catch(err => {
        console.log(err)
    })
}
// 使用promise做一个实际问题解决
// 生活中的问题往往是复杂而异步的, 比如我希望保姆去买菜, 买好了菜之后做菜, 做完了之后给老婆送去, 送完了菜我就给保姆加奖金
// https://blog.csdn.net/weixin_42367621/article/details/80824277
function buyFood(resolve, reject) {
    setTimeout(function(){
        return resolve(['西红柿', '鸡蛋', '油菜']);
    },1000)
}
function cookFood(food) {
    const p = new Promise((resolve, reject) => {
        setTimeout(function(){
            if (food.length >= 3) {
                return reject('菜买的太多啦')
            } else {
                return resolve({
                    food: food
                })
            }
        },1000)
    })
    return p
}
function deliverFood(food){
    //对送饭的结果进行下一步处理
    const p = new Promise((resolve, reject) => {
        return resolve(`收到${food.food.length || 0}份菜`);
    })
    return p
}
function callMe(res){
    //电话通知我后的下一步处理
    return `${res}, 加奖金`
}

const promise = new Promise(buyFood);
promise.then(res => {
    return cookFood(res)
}).then(res => {
    return deliverFood(res)
}).then(res => {
    console.log(callMe(res))
}).catch(err => {
    console.log(err)
}).finally(() => {
    console.log('finally')
})

export default foo
