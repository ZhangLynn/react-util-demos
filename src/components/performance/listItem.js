/**
 * created by LynnZhang on 2019/1/16
 */
import React from 'react';

// const ListItem = (props) => {
//     console.log('render input');
//     return (
//         <div>{props.data}</div>
//     )
// }
class ListItem extends React.Component{
    constructor(props) {
        super(props)
    }
    componentWillUnmount() {
        console.log('un')
    }
    componentDidMount() {
        console.log('mount')
    }
    render() {
        console.log('render')
        return <div>{this.props.data}</div>
    }
}
export default ListItem;
