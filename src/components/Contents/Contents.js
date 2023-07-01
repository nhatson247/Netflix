
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import * as ACTION from "../store/actions"
import MoviesRow from "./MoviesRow"
import {FaArrowCircleUp} from "react-icons/fa"
import { styled } from "styled-components"
import { useScroll } from "../hooks";
import { animateScroll  as  scroll } from "react-scroll"

const ScrollToTop = () => {
    scroll.scrollToTop();
}

function Contents(props){
    const dispatch = useDispatch()
    const [scrollDimensions] = useScroll()
    const {
        NetflixOriginals,
        TrendingMovies, 
        PopularMovies,
        TopratedMovies,
        UpcomingMovies,
        NewreleasesMovies,
      } = useSelector(state => state.infoMovies)

      useEffect(() =>{
        dispatch(ACTION.getNetflixOriginals())
        dispatch(ACTION.getTrendingMovies())
        dispatch(ACTION.getPopularMovies())
        dispatch(ACTION.getTopratedMovies())
        dispatch(ACTION.getUpcomingMovies())
        dispatch(ACTION.getNewreleasesMovies())
      },[dispatch])
    return (
        <div>
            <MoviesRow movies={NetflixOriginals} title="Netflix Originals" isNetflix={true} idSection="netflix"/>
            <MoviesRow movies={TrendingMovies} title="Trending Movies" idSection="trending" />
            <MoviesRow movies={PopularMovies} title="Popular Movies" idSection="popular"/>
            <MoviesRow movies={TopratedMovies} title="TopRated Movies" idSection="topRated"/>
            <MoviesRow movies={UpcomingMovies} title="UpComing Movies" idSection="upComing"/>
            <MoviesRow movies={NewreleasesMovies} title="NewReleases Movies" idSection="newreleases"/>

            <GoToTop onClick={() => ScrollToTop()}
              style={{
                visibility: `${
                  scrollDimensions.scrollY > 800 ? "visible" : "hidden"
                }`,
              }}
            >
                <FaArrowCircleUp />
            </GoToTop>
        </div>
    )
}

export default Contents

const GoToTop = styled.div`
    position: fixed;
    z-index: 10;
    height: 50px;
    width: 50px;
    right: 70px;
    bottom: 58px;
    font-size: 50px;
    color: rgba(255,255,255,0.3);
    transition: all 0.3s  linear;
    cursor: pointer;
    transition-duration: 0.2s;
    border-radius: 100%;

    &:hover{
        color: rgba(255,255,255,0.8);
    }

    @media screen and (max-width: 800px){
        font-size: 40px;
        bottom: 145px;
        right: 10px;

    }

    @media screen and (max-width: 600px){
        font-size: 30px;
        right: 10px;
        bottom: 145px;
    }

    }
`;