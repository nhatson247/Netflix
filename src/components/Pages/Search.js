import SearchMovies from "../SearchMovies/SearchMovies";
import MoviesDetail from "../MoviesDetail/MoviesDetail";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";


function Search (props){
    const {MovieDetail} = useSelector(state => state.infoMovies)
    const [isShowMovieDetail , setIsShowMovieDetail] = useState(false)
  
    useEffect(() => {
      setIsShowMovieDetail(MovieDetail ? true : false)
    }, [MovieDetail])
    return (
        <div>
            <SearchMovies />
            <MoviesDetail movie={MovieDetail} showModal={isShowMovieDetail ? true : false}/>
        </div>
    )
}

export default Search;