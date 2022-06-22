import React from 'react';
import PersistentDrawerLeft from '../Drawer/Drawer';
import "./header.css"

const Header = () => {
    return (
        <div className="App-header" onClick={() => window.scroll(0, 0)}>
            <PersistentDrawerLeft />
        </div>
    );
};

export default Header;
