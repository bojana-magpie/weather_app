import React from 'react';

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