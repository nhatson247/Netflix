import { styled } from "styled-components";
import {FaChevronLeft, FaChevronRight} from "react-icons/fa"
import { useEffect, useRef, useState } from "react";
import {SmoothHorizontalScrolling} from "../../uti/index"
import { useViewport } from "../hooks/useViewport";
import { useDispatch } from "react-redux";
import { setMovieDetail } from "../store/actions";


function MoviesRow(props){
    const {movies , title, isNetflix, idSection} = props
    const movierRef = useRef();
    const sliderRef = useRef();
    const [dragDown , setdragDown] = useState(0)
    const [dragMove , setdragMove] = useState(0)
    const [isDrag , setisDrag] = useState(false)
    const [windowDimensions] = useViewport()
    
    const dispatch = useDispatch()

    const handSetMovie = (movie) => dispatch(setMovieDetail(movie))

   
    const handleScrollRight = () => {
        const maxScrollLeft =
        sliderRef.current.scrollWidth - sliderRef.current.clientWidth; // chieu rong (hien thi, an ) - chieu rong (hien thi)
      if (sliderRef.current.scrollLeft < maxScrollLeft)
        SmoothHorizontalScrolling(
          sliderRef.current,
          250,
          movierRef.current.clientWidth * 2,
          sliderRef.current.scrollLeft
        );
    }

    const handleScrollLeft = () => {
      if (sliderRef.current.scrollLeft > 0 )
        SmoothHorizontalScrolling(
          sliderRef.current,
          250,
          -movierRef.current.clientWidth * 2,
          sliderRef.current.scrollLeft
        );
    }

    useEffect(() => {
        if(isDrag){
            if(dragMove < dragDown) handleScrollRight();
            else handleScrollLeft();
        }
    },[dragDown,dragMove,isDrag])

    const onDragStart = e =>{
        setisDrag(true)
        setdragDown(e.screenX)

    }

    const onDragEnd = e =>{
        setisDrag(false)
    }

    const onDragEnter = e =>{
        setdragMove(e.screenX)
    }
    return (
        <MoviesRowContainer draggable="false" id={idSection}>
            <h1 className="Container__Movie--Heading">{title}</h1>
            <MoviesSlider 
            ref={sliderRef} 
            draggable="true"
            onDragStart={onDragStart}
            onDragEnd={onDragEnd}
            onDragEnter={onDragEnter}
            style = {
                movies && movies.length > 0 
                ? {
                    gridTemplateColumns: `repeat(${movies.length},
                        ${
                            windowDimensions.width > 1200 ? '360px'
                            : windowDimensions.width > 992 ? '300px'
                            : windowDimensions.width > 768 ? '250px' : '200px'
                        }
                    )`
                } 
                : {} 
            }
            >
                {
                   movies && movies.length > 0 && movies.map((movie , index) => {
                    if(movie.poster_path && movie.backdrop_path !== null){
                        let imageUrl = isNetflix 
                        ? `http://image.tmdb.org/t/p/original/${movie.poster_path}`
                        : `http://image.tmdb.org/t/p/w500/${movie.backdrop_path}`
                    return (
                        <div
                         key={index} 
                         className="Slider__Movie--Item" loading="lazy"
                          ref={movierRef} 
                          draggable="false"
                          onClick={() => handSetMovie(movie)}
                          >
                            <img src={imageUrl} alt="" draggable="false"></img>
                            <div className={`Slider__Movie--Name ${isNetflix && 'isNetflix'}`}>{movie.title || movie.name} </div>
                        </div>
                        )
                    };
                   })}
            </MoviesSlider>
            <div className={`Container__Movie-btnleft ${isNetflix && 'isNetflix'}`} onClick={handleScrollLeft}>
                <FaChevronLeft />
            </div>
            <div className={`Container__Movie-btnright ${isNetflix && 'isNetflix'}`} onClick={handleScrollRight}>
                <FaChevronRight />
            </div>
        </MoviesRowContainer>
    )
}

export default MoviesRow

const MoviesRowContainer = styled.div`
    background-color: var(--color-background);
    color: var(--color-white);
    padding: 20px 20px 0 20px;
    position: relative;
    width: 100%;
    height: 100%;

    .Container__Movie--Heading{
        font-size: 18px;
        font-weight: 600;
        color: white;
        user-select: none;
    }
    .Container__Movie-btnleft{
        position: absolute;
        top: 50%;
        left: 30px;
        z-index: 20;
        transform-origin: center;
        cursor: pointer;
        background-color: rgba(0,0,0,0.6);
        height: 50px;
        width: 40px;
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        transform: translateY(-20px);
        &:hover{
            background-color: rgba(0,0,0,0.8);
        }
        &:hover svg{
            opacity: 1;
            transform: scale(1.2);
        }
        
        svg{
            opacity: 0.7;
            font-size: 24px;
            transition: all 0.3s linear;
            color: red;
        }
        &.isNetflix{
            height: 100px;
            width: 50px;
        }
    }
    .Container__Movie-btnright{
        position: absolute;
        top: 50%;
        right: 30px;
        z-index: 20;
        transform-origin: center;
        cursor: pointer;
        background-color: rgba(0,0,0,0.6);
        height: 50px;
        width: 40px;
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        transform: translateY(-20px);
        &:hover{
            background-color: rgba(0,0,0,0.8);
        }
        &:hover svg{
            opacity: 1;
            transform: scale(1.2);
        }
        
        svg{
            opacity: 0.7;
            font-size: 24px;
            transition: all 0.3s linear;
            color: red;
        }
        &.isNetflix{
            height: 100px;
            width: 50px;
        }
`;
const MoviesSlider = styled.div`
    display: grid;    {/* tao ra cac dong */}
    gap: 6px;    {/* Khoang cach cua cac dong */}
    padding: 28px 0;
    transition: all 0.3s linear;
    user-select: none;
    overflow-y: hidden;
    overflow-x: auto;
    overflow: hidden;
    scroll-behavior: smooth;
    &:hover .Slider__Movie--Item{
        opacity: 0.5;
    }

    .Slider__Movie--Item{
        transform: scale(1);
        max-width: 400px;
        max-height: 500px;
        width: 100%;
        height: 100%;
        transition: all 0.3s linear;
        user-select: none;
        overflow: hidden;
        transform-origin: left center;
        border-radius: 6px;
        position: relative;
        &:hover {
            opacity: 1;
            transform: scale(1.1);
            z-index: 10;
        }

        img{
            max-width: 100%;
            height: 100%;
            object-fit: cover;
        }
        .Slider__Movie--Name{
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            text-align: center;
            padding: 4px;
            font-size: 14px;
            background-color: rgba(0,0,0,0.6);
            
            @media screen and (min-width: 1200px) {
                &.isNetflix{
                    right: 25px;
                }
            }
        }
    }
    
`;