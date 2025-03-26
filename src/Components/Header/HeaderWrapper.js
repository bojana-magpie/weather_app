import React from 'react';
import Logo from "./Logo/Logo";
import Menu from "./Menu/Menu";
import MenuItem from "./Menu/MenuItem";
import Header from "./Header";

const HeaderWrapper = (props) => {
    const items = [
        {title: "GitHub"},
        {title: "About"}
    ]
    return (
        <Header>
            <Logo title="Weather by VicBox"></Logo>
            <Menu>
                {items.map((item, index) => (
                    <MenuItem key={index} title={item.title}></MenuItem>
                ))}
            </Menu>
        </Header>
    )
}

export default HeaderWrapper;