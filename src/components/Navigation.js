import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className='navigation'>
            <ul>
                <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    {/* give classname but i want this class only if active if yes give class: nav-active if not change nothing */}
                    <li>accueil</li>
                </NavLink>
                <NavLink to="/about">
                    <li>à propos</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navigation;