import React from 'react'

export default class TwoWayBinding extends React.Component{
    constructor() {
        super()
        this.state = {
            bindingName: 'I am a initial name'
        }
    }
    onChange = (e) => {
        this.setState({
            bindingName: e.target.value
        })
    }
    render() {
        return <div>
            <p>{this.state.bindingName}</p>
            <input type="text" onChange={this.onChange}/>
        </div>
    }
}