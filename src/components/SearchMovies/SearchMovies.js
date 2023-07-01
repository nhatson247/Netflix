import { styled } from "styled-components"
import { useViewport } from "../hooks";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { getSearchMovies, setMovieDetail } from "../store/actions";


const useQuery = () => new URLSearchParams(useLocation().search)

function SearchMovies(props){
    const [windowDimensions] = useViewport()
    const dispatch = useDispatch()
    const {SearchMovies} = useSelector(state => state.infoMovies)
    const keywords = useQuery().get('keywords')


    useEffect(() => {
        if(keywords) dispatch(getSearchMovies(keywords))
    },[keywords, dispatch])

    return (
    <SearchPane>
       {
        SearchMovies && SearchMovies.length > 0 ? (
            <div 
            className="SearchContent"
            style={{
                gridTemplateColumns: `repeat(${
                    windowDimensions.width > 1200 ? 5 
                    : windowDimensions.width > 992 ? 4
                    : windowDimensions.width > 768 ? 3 
                    : windowDimensions.width > 576 ? 2 : 1
                }, auto)`
            }}
            >
            {
                SearchMovies.map((movie,index) => {
                    if(movie.backdrop_path !== null &&
                        movie.media_type !== 'person'){
                        const imageURL = `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`
                            return (
                                <div className="SearchContent__ItemMovie"
                                 key={index}
                                 onClick={() => dispatch(setMovieDetail(movie))}
                                 >
                                    <img src={imageURL} alt={movie.title || movie.name} loading="lazy"></img>
                                    <span>{movie.title || movie.name}</span>
                                </div>    
                            )
                        }
                    })
                }
                </div> 
            ) : (
            <NotFound>
                <h1>Your search for "{keywords}" did not have any matches</h1>
            </NotFound>
            )
        }
    </SearchPane>
    )
}

export default SearchMovies

const SearchPane = styled.div`
    width: 100%;
    min-height: 92vh;
    padding-top: 80px;
    background: var(--color-background);
    transition: all 0.3s linear;

    .SearchContent{
        padding: 40px 60px;
        display: grid;
        gap: 10px;

        &:hover .SearchContent__ItemMovie{
            opacity: 0.7;
        }

        .SearchContent__ItemMovie{
            position: relative;
            max-width: 400px;
            width: 100%;
            height: 200px;
            border-radius: 10px;
            margin: 12px 0;
            overflow: hidden;
            transform: scale(1);
            transition: all 0.3s linear;

            &:hover {
                transform: scale(1.1);
                opacity: 1;
                z-index: 10;
            }

            img{
                width: 100%;
                height: 100%;
                object-fit: cover;
            }

            span{
                font-size: 14px;
                position: absolute;
                left: 0;
                right: 0;
                bottom: 0;
                text-align: center;
                padding: 4px;
                background: rgba(0,0,0,0.5);
                color: white;
            }
        }
    }
`;

const NotFound = styled.div`
    padding: 5rem 8rem;
    color: white;
`