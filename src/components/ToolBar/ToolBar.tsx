import React from 'react';
import {NavLink} from "react-router-dom";
import './ToolBar.css';

const ToolBar = () => {
    return (
        <div className='toolBar'>
            <NavLink className="toolBar-title" to="/">
                Calorie tracker
            </NavLink>
        </div>
    );
};

export default ToolBar;