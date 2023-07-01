import { FaHotjar, FaStar } from "react-icons/fa";
import { GiAutogun } from "react-icons/gi";
import { FcLike } from "react-icons/fc";
import {SiNetflix} from "react-icons/si"
import {MdTipsAndUpdates} from "react-icons/md";
import { styled } from "styled-components";
import MenuItems from "./MenuItems";

function Menus(props){
    return (
        <MenusPane>
            <MenuItems name="Netflix Originals" Icon={SiNetflix} to="netflix"/>
            <MenuItems name="Trending Movies" Icon={FaHotjar} to="trending" />
            <MenuItems name="Popular Movies" Icon={FaStar} to="popular"/>
            <MenuItems name="TopRated Movies" Icon={FcLike} to="topRated"/>
            <MenuItems name="UpComing Movies" Icon={MdTipsAndUpdates} to="upComing"/>
            <MenuItems name="Newreleases Movies" Icon={GiAutogun} to="newreleases" />
        </MenusPane>
    )
}

export default Menus;

const MenusPane = styled.div`
    position: fixed;
    width: 40px;
    overflow: hidden;
    top: 20%;
    left: 0;
    padding: 4px 0;
    background: rgba(0,0,0,0.3);
    z-index: 100;
    display: flex;
    flex-direction: column;
    transform-origin: left center;
    transition: all 0.3s linear;
    &:hover{
        width: 180px;
        background: rgba(0,0,0,0.5);
    }
    .Menu__subMenu{
        display: flex; 
        align-items: center;
        width: max-content;
        margin-left: 2px;
        padding: 4px 6px;
        cursor: pointer;

        .Menu__subMenu--Icon{
            font-size: 24px;
            margin-right: 8px;
        }

        span{
            font-size: 16px;
            font-weight: 400;
            color: rgba(255,255,255,0.6);
            &:hover{
                color: white;
            }
        }
    }
`;