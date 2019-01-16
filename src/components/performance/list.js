/**
 * created by LynnZhang on 2019/1/15
 */
import React , { Fragment } from 'react';
import ListItem from './listItem'
export default class ListWrap extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            list: [{id: 1, name: 'first'}, {id: 2, name: 'second'}]
        }
    }
    // shouldComponentUpdate(nextProps, nextState) {
    //     if (this.props.data !== nextProps.data) {
    //         return true
    //     }
    //     return false
    // }
    sortList = () => {
        let list = this.state.list;
        list.sort((pre, cur) => {
            return cur.id - pre.id
        });
        // // list = [...list, {id: 3}]
        // console.log(list)
        // console.log(this.state.list);

        // list.splice(0, 0, {id: 3, name: 'new'})
        // this.setState({
        //     list
        // })
    }
    render() {
        return <Fragment>
            {this.state.list.map((item, index) => (<ListItem key={index} data={item.name}/>))}
            <button onClick={this.sortList}>test key</button>
        </Fragment>
    }
}
