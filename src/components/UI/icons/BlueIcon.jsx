import React from "react";
import BlueImage from './../../../sprites/blue.png';
import classes from './icons.module.css'


const BlueIcon = () =>{
    return(
        <img className={classes.blueIcn} src={BlueImage} alt="Не просмотрено"/>
    );
};

export default BlueIcon;