import moment from "moment";
import { useDispatch } from "react-redux";
import { keyframes, styled } from "styled-components";
import { setMovieDetail } from "../store/actions";

function MoviesDetail(props){
   const {movie, showModal} = props
   const dispatch = useDispatch()
   const handleCloseModal = () => dispatch(setMovieDetail(null))
   
    return(
        <MoviesDetailModal>
            <div className={`MoviesDetailModal__backdrop ${showModal ? "showBackdrop" : "hideBackdrop"}`}
            onClick={handleCloseModal}
            >  
                <div 
                className={`MoviesDetailModal__backdrop--modal ${showModal ? "showModal" : "hideModal"}`}
                    style={
                        movie ? {
                        backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movie.backdrop_path || movie.poster_path})`,
                        backgroundSize: "cover",

                    }: {}}
                >  
                    <div className="MoviesDetailModal__backdrop--container">
                        <div className="MoviesDetailModal__container--movieInfo">
                            <h1 className="container__movieInfo--title">{movie && (movie.title || movie.name)}</h1>
                            <p className="container__movieInfo--statistical">
                                <span className="movieInfo__statistical--rating">Rating: {movie && movie.vote_average * 10}%</span>
                                <span className="movieInfo__statistical--popularity">Popularity: {movie && movie.popularity} </span>
                            </p>
                            <p className="movieInfo__statistical--releaseDate">Release Date: {movie &&
                                (moment(movie.release_date).format(`DD/MM/YYYY`) || 
                                moment(movie.first_air_date).format(`DD/MM/YYYY`))
                            }</p>
                            <p className="movieInfo__statistical--runtime">Original Language: {movie && movie.original_language}</p>
                            <p className="movieInfo__statistical--overview">{movie && (movie.overview)}</p>

                        </div>
                    </div>
                </div>
            </div>
        </MoviesDetailModal>
    )
}

export default MoviesDetail;

const fadeIn = keyframes`
    0% { background: rgba(0, 0, 0, 0) 
    100% { background: rgba(0,0,0,0.6}

`

const MoviesDetailModal = styled.div`
    .MoviesDetailModal__backdrop{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 200;
        background-color: rgba(0, 0, 0, 0.5);
        animation: ${fadeIn} 1s cubic-bezier(0.17, 0.85, 0.45, 1) forwards;
    }
    
    .showBackdrop{
        display: block;
    }
    .hideBackdrop{
        display: none;
    }

    .MoviesDetailModal__backdrop--modal{
        position: fixed;
        top: 25%;
        left: 0;
        width: 100%;
        height: 60%;
        z-index: 300;
        margin: 0 auto;
        color: white;
        box-shadow: 0 15px 40px rgba(var(--color-dark), 0.2);
        transition: all 0.3s ease;
        

        @media screen and (max-width: 1184px){
            height: 70%;
        }

        @media screen and (max-width: 600px){
            height: 80%;
        }

        .MoviesDetailModal__backdrop--container{
            position: relative;
            width: 70%;
            height: 100%;
            background: linear-gradient(90deg, 
                rgba(0, 0, 0, 0.94)
                60%, transparent);
        
            @media screen and (max-width: 1184px){
                background: linear-gradient(90deg, 
                rgba(0, 0, 0, 0.95)
                40%, rgba(0,0,0, 0.733), 
                transparent);
                width: 88%;
            }
    
            @media screen and (max-width: 980px){
                background: linear-gradient(90deg, 
                rgba(0, 0, 0, 0.94)
                50%, transparent);
                width: 100%;
            }

            @media screen and (max-width: 600px){
                background: linear-gradient(90deg, 
                rgba(0, 0, 0, 0.88)
                60%, transparent);
            }

            .MoviesDetailModal__container--movieInfo{
                width : 65%;
                height: 100%;
                padding-left: 24px;
                color: white;
                font-size: 20px; 
                padding-top: 30px;

                @media screen and (max-width: 600px){
                   font-size: 16px;
                   width: 80%;
                }

                .container__movieInfo--title{
                    margin-top: 30px;
                }

                .container__movieInfo--statistical{
                    margin-top: 20px;
                    display: flex;
                    align-items: center;

                    .movieInfo__statistical--rating{
                        color: var(--color-green);
                    }

                    .movieInfo__statistical--popularity{
                        color: white;
                    }

                    .movieInfo__statistical--popularity{
                        color: yellow;
                        margin-left: 20px;
                    }
                }

                .movieInfo__statistical--releaseDate, .movieInfo__statistical--runtime{
                    color: white;
                    margin-top: 12px;
                }
                .movieInfo__statistical--overview{
                    margin-top: 12px;
                    color: var(--color-white);
                    font-size: 18px;
                    line-height: 1.4;

                    @media screen and (max-width: 600px){
                        font-size: 14px;
                        line-height: 1.2;
                    }
                }
            }
        }
    }
    .showModal {
        top: 25%;
        opacity: 1;
        left: 0;
        visibility: visible;
        transition: 0.3s ease-out;
      }
      
      .hideModal {
        top: -100%; 
        opacity: 0;
        visibility: hidden;
        transition: 0.3s ease-out;
      }
      
`;