import React from 'react';
import "./MenuItem.css"

const MenuItem = (props) => {
    const title = props.title;
    return (
        <li className="menu-item">
            {title}
        </li>
    )
}

export default MenuItem;