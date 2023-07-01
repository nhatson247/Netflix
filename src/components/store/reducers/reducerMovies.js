import * as Types from "../types"

const reducersMoviesInitialState = {
    NetflixOriginals: null, 
    TrendingMovies : null,
    PopularMovies : null,
    TopratedMovies : null,
    UpcomingMovies : null,
    NewreleasesMovies: null,
    MovieDetail: null,
    SearchMovies: null,
}
const reducerMovies = (state = reducersMoviesInitialState, action) =>{
  const {type , payload} = action
    switch(type){
        case Types.GET_NETFLIX_ORIGINALS:
            return {...state, NetflixOriginals: payload}

        case Types.GET_TRENDING_MOVIES:
            return {...state, TrendingMovies: payload}

        case Types.GET_POPULAR_MOVIES:
            return {...state, PopularMovies: payload}

        case Types.GET_TOPRATED_MOVIES:
            return {...state, TopratedMovies: payload}

        case Types.GET_UPCOMING_MOVIES:
            return {...state, UpcomingMovies: payload}

        case Types.GET_NEWRELEASES_MOVIES:
            return {...state, NewreleasesMovies: payload}

        case Types.SET_MOVIE_DETAIL:
            return {...state, MovieDetail: payload}

        case Types.GET_SEARCH_MOVIES:
            return {...state, SearchMovies: payload}
        default:
        return state
    }
}

export default reducerMovies