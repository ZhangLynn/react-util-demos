/**
 * created by LynnZhang on 2019/1/24
 */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import MovieActions from '../actions';
import MovieList from './movieList'
const mapStateToProps = (state) => {
    return {
        movie: state.movie
    };
}

const mapDispatchToProps = (dispatch) => ({
    movieActions: bindActionCreators(MovieActions, dispatch)
});

const MovieListCtnr = connect(
    mapStateToProps,
    mapDispatchToProps
)(MovieList);

export default MovieListCtnr;
