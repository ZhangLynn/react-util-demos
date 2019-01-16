/**
 * created by LynnZhang on 2019/1/16
 */
import React from 'react';
const MemoComponent = React.memo(props => {
    return (
        <div>
            <div>使用react16新特性 memo 来做函数式组件的浅比较</div>
            {props.data}
        </div>
    )
})
// 使用以前的写法 会导致组件重复渲染
// const MemoComponent = (props) => (
//     <div>{props.data}</div>
// )
export default MemoComponent
