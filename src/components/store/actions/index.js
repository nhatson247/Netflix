import axios from "axios";
import * as Types from '../types'

const API_KEY = '80e5f8bdc55021dd1fa3c7a7803906d6'
const BASE_URL = 'https://api.themoviedb.org/3'

export const getNetflixOriginals = () => async dispatch => {
    try {
        const result = await axios.get(
           `${BASE_URL}/discover/movie?api_key=${API_KEY}`
        )
        dispatch({type: Types.GET_NETFLIX_ORIGINALS, payload: result.data.results})
    } catch (error) {
        console.log("Get Netflix Api error", error)
    }
} 

export const getTrendingMovies = () => async dispatch => {
    try {
        const result = await axios.get(
           `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
        )
        dispatch({type: Types.GET_TRENDING_MOVIES, payload: result.data.results})
    } catch (error) {
        console.log("Get TrendingMovies Api error", error)
    }
} 

export const getPopularMovies = () => async dispatch => {
    try {
        const result = await axios.get(
           `${BASE_URL}/movie/popular?api_key=${API_KEY}`
        )
        dispatch({type: Types.GET_POPULAR_MOVIES, payload: result.data.results})
    } catch (error) {
        console.log("Get PopularMovies Api error", error)
    }
} 

export const getTopratedMovies = () => async dispatch => {
    try {
        const result = await axios.get(
           `${BASE_URL}/movie/top_rated?api_key=${API_KEY}`
        )
        dispatch({type: Types.GET_TOPRATED_MOVIES, payload: result.data.results})
    } catch (error) {
        console.log("Get TopRated Api error", error)
    }
} 

export const getUpcomingMovies = () => async dispatch => {
    try {
        const result = await axios.get(
           `${BASE_URL}/movie/upcoming?api_key=${API_KEY}`
        )
        dispatch({type: Types.GET_UPCOMING_MOVIES, payload: result.data.results})
    } catch (error) {
        console.log("Get Upcoming Api error", error)
    }

} 

export const getNewreleasesMovies = () => async dispatch => {
    try {
        const result = await axios.get(
           `${BASE_URL}/discover/tv?api_key=${API_KEY}`
        )
        dispatch({type: Types.GET_NEWRELEASES_MOVIES, payload: result.data.results})
    } catch (error) {
        console.log("Get Newreleases Api error", error)
    }
} 
 
export const setMovieDetail = (movie) => dispatch => {      
    dispatch({type: Types.SET_MOVIE_DETAIL, payload: movie});
}

export const getSearchMovies = (keywords) => async (dispatch) => {
    try {
        const result = await axios.get(
           `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&include_adult=false&query=${keywords}`
        )
        dispatch({type: Types.GET_SEARCH_MOVIES, payload: result.data.results})
    } catch (error) {
        console.log("Get Search Movie Api error", error)
    }

}