import React from 'react';

const Logo = () => {
    return (
        <div className='logo'>
            {/* import img with "<img>" are only usable in "public" */}
            <img src='./logo192.png' alt='logo react'/>
            {/* for img imagine u take it from "public" */}
            <h3>React world</h3>
        </div>
    );
};

export default Logo;