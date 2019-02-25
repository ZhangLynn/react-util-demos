/**
 * created by LynnZhang on 2019/1/24
 */
import React from 'react';

export default class MovieList extends React.Component{
    // /auth/projects
    // v2/movie/in_theaters
    constructor(props) {
        super(props);
        this.state = {
            title: 'init'
        }
        // this.setState({
        //     title: 'init2'
        // })
    }


    test = () => {
        this.setState({
            title: this.state.title + 'set'
        });
        this.setState({
            title: this.state.title + 'set'
        });
        console.log('will mount setState')
    }
    componentDidMount() {
        this.setState({})
    }
    render() {
        return <div>
            {
                this.state.title
            }
        </div>
    }
}
