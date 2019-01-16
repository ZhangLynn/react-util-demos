/**
 * created by LynnZhang on 2019/1/14
 */
// 对于then链式promise对象的使用 详细介绍 https://segmentfault.com/a/1190000011652907
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('reject');
    }, 1000)
});
// promise对象错误捕获很有点东西
const foo = function() {
    p1.then(res => {
        console.log('res1')
    }).then(response => {
        console.log('res2');
        return 1
    }).catch(err => {
        console.log(err)
    }).then(res => {
        console.log('res3')
    })
}
// foo()
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

function bar() {
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
}
// bar()

async function asyncFun() {
    const p1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('p1')
        }, 1000)
    });
    const p2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('p2')
        }, 2000)
    });
    // 如果不存在继发关系, 同时触发会节省时间
    let [res1, res2] = await Promise.all([p1, p2]);
    console.log(res1)
}
asyncFun()
export default foo
