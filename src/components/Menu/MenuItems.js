import React from "react"
import { RandomRgbaColor } from "../../uti";
import {Link} from "react-scroll"

function MenuItems(props){
    const {name, Icon, to} = props;
    return (
    <Link 
        activeClass="active"
        to={to}
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        className="Menu__subMenu"
    >
        <Icon className="Menu__subMenu--Icon" style={{color: RandomRgbaColor(1)}}>Icon</Icon>
        <span>{name}</span>
    </Link>
    )
}

export default MenuItems