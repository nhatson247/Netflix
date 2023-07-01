import NetflixLogo  from "../../assets/images/Netflix_Logo_RGB.png"
import {ImSearch} from "react-icons/im"
import { styled } from "styled-components";
import { useScroll } from "../hooks/useScroll";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { debounce } from "lodash";


function Navbar(props){
    const [scrollDimensions] = useScroll();
    const [keywords, setKeywords] = useState('');
    const navigate = useNavigate()

  
    const delayedNavigate = debounce((keywords) => {
        (keywords.length > 0) 
        ? navigate(`/search?keywords=${keywords.trim()}`)
        : navigate('/');
    },3200);

    const handleChangeInput = (e) => {
        let keywords = e.target.value;
        setKeywords(keywords);
        delayedNavigate(keywords)
      };

      const goHome = () => {
            navigate('/')
            setKeywords("")
      };
    return(
        <Navigation style={ scrollDimensions.scrollY < 50 
            ? { backgroundColor: "transparent" } 
            : { backgroundColor: "var(--color-background)" } }  >
            <div className="navContainer">
                <div className="navContainer__logo" onClick={goHome}>
                   <img src={NetflixLogo} alt="Logo"></img>
                </div>
                <div className="navContainer__search">
                    <ImSearch className="navContainer__search--icons" />
                    <input 
                    type="text"
                     placeholder="Nhập tìm kiếm"
                     onChange={handleChangeInput}
                     value={keywords}
                     />
                </div>
                <div className="navContainer__Login">
                    <div className="navContainer__Login--intro">UNLIMITED TV SHOWS & MOVIES</div>
                    <button className="navContainer__Login--button">JOIN NOW</button>
                    <button className="navContainer__Login--button buttonSign">SIGN IN</button>

                </div>
            </div>
        </Navigation>
    )
}
export default Navbar;

const Navigation = styled.div`
    width: 100%;
    height: 80px;
    position: fixed;
    top 0;
    transition-timing-function: ease-in;
    transition: all 1s;
    z-index: 10;
   

    @media only screen and (max-width: 600px) {
        flex-direction: column;
        height: 100px;
      }

    .navContainer {
        background-color: transparent;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        height: 100%;
        flex-direction: row;
        padding: 0 30px;

        .navContainer__logo {
            width: 120px;
            cursor: pointer;
            img {
                width: 100%;
            }
        }
        .navContainer__search{
            color: var(--color-white);
            padding-right: 20px;
            display: flex;
            justify-content: flex-end;

            &:hover .navContainer__search--icons{
                color: var(--color-white);
            }
            .navContainer__search--icons{
                witdh: 20px;
                height: 20px;
                cursor: pointer;
                transform: translateX(24px) translateY(10px);
                color: #bbb;
            }
            input{
                font-size: 14px;
                border: 1px solid #fff;
                color: var(--color-white);
                outline: none;
                width: 0;
                cursor: pointer;
                opacity: 0;
                padding: 10px;
                background: var(--color-background);
                transition: width 0.5s;

                &:focus {
                    padding-left: 26px;
                    width: 300px;
                    cursor: text;
                    opacity: 1;
                    border-radius: 4px;
                }
            }
        }
        .navContainer__Login{
            display: flex;
            align-items: center;
            flex-direction: row;
            font-size: 13px;
            color: var(--color-white);
            margin-left: auto;

            .navContainer__Login--intro{
                margin-right: 20px;
                font-weight: 600;

                @media screen and (max-width: 800px){
                    display: none;
                }
    
                @media screen and (max-width: 600px){
                    display: none;
                }
            }
            .navContainer__Login--button{
                min-width: 124px;
                height: 34px;
                border-radius: 2px;
                border: none;
                font-size: 13px;
                padding: 0 12px;
                outline: none;
                cursor: pointer;
                color:  #fff;
                text-align: center;
                background: #e10712;
                font-weight: 600;

                &:hover{
                    background: #f21111;
                }
            }
            .buttonSign{
                margin-left: 10px;
                border: 1px solid #888;
                border-radius: 2px;
                color: #fff;
                font-weight: 400;
                line-height: 13px;
                white-space: nowrap;
                background: var(--color-background);

                &:hover{
                    background: #636060;
                }
            }
        }
    }
`;