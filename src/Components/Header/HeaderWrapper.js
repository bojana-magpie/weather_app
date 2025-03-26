import React from 'react';
import Logo from "./Logo/Logo";
import Menu from "./Menu/Menu";
import MenuItem from "./Menu/MenuItem";
import Header from "./Header";

const HeaderWrapper = (props) => {
    return (
        <Header>
            <Logo title="Weather by VicBox"></Logo>
            <Menu>
                <MenuItem title="GitHub"/>
                <MenuItem title="About"/>
            </Menu>
        </Header>
    )
}

export default HeaderWrapper;