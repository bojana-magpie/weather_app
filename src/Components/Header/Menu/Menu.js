import React from 'react';
import "./Menu.css"

const Menu = (props) => {
    return (
        <nav>
            <ul>
                {props.children}
            </ul>
        </nav>
    )
}

export default Menu;