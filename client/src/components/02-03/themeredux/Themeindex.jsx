import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { WINDOWDARK, WINDOWLIGHT } from '../../../actions/Themeindex';


const Themechanging = () => {
    const myState = useSelector((state)=>state.changeTheTheme);
    const dispatch = useDispatch();

    const handleLightTheme = () => {
        dispatch(WINDOWLIGHT());
    };

    const handleDarkTheme = () => {
        dispatch(WINDOWDARK());
    };

    return (
        <div>
            <h1  style={{ color: myState === "DARK" ? "white" : "black" }}>Change the Theme</h1>
            <h2  style={{ color: myState === "DARK" ? "white" : "black" }}>using redux</h2>
            <button onClick={handleLightTheme} disabled={myState === "LIGHT"}>Light Theme</button>
            <button onClick={handleDarkTheme} disabled={myState === "DARK"}>Dark Theme</button>
        </div>
    );
};

export default Themechanging;