/**
 * created by LynnZhang on 2019/1/24
 */
import React from 'react';

export default class MovieList extends React.Component{
    // /auth/projects
    // v2/movie/in_theaters
    componentDidMount() {
        this.props.movieActions.initData().then(res => {
            console.log(res)
        })

    }

    render() {
        return <div>
            {JSON.stringify(this.props.movie.list)}
        </div>
    }
}
