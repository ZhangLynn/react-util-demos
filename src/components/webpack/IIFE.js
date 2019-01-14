/**
 * created by LynnZhang on 2019/1/14
 */
let module = {
    exports: {}
}
!function(module) {
    const a = 'hhh';
    module.exports = a;
}(module);

// 延长作用域链
let longFun = function() {
    const name = 'lynn';
    return function() {
        return name
    }
}



export {module, longFun}
