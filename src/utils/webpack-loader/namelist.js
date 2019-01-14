/**
 * created by LynnZhang on 2018/12/10
 */
module.exports = function(source) {
    const result = `['` + source.replace(/\n/g, `','`) + `']`
    // 这里为什么要这么写？因为直接返回转换后的字符串会报语法错误，
    // 这么写import后转换成可以使用的字符串
    return `export default ${JSON.stringify(result)}`
}