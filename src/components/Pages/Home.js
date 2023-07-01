import { useSelector } from "react-redux";
import Contents from "../Contents/Contents";
import Intro from "../Intro/Intro";
import Menus from "../Menu/Menu";
import MoviesDetail from "../MoviesDetail/MoviesDetail";
import Navbar from "../Navbar/Navbar";
import { useEffect, useState } from "react";

function Home (props){
  const {MovieDetail} = useSelector(state => state.infoMovies)
  const [isShowMovieDetail , setIsShowMovieDetail] = useState(false)

  useEffect(() => {
    setIsShowMovieDetail(MovieDetail ? true : false)
  }, [MovieDetail])
    return (
        <div>
            <div>
                <Navbar />
                <Intro /> 
                <Contents />
                <Menus />
                <MoviesDetail movie={MovieDetail} showModal={isShowMovieDetail ? true : false} />
            </div>
        </div>
    )
}

export default Home;