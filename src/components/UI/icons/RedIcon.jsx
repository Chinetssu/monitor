import React from "react";
import RedImage from './../../../sprites/red.png';
import classes from './icons.module.css';

const RedIcon = () =>{
    return(
        <img className={classes.redIcn} src={RedImage} alt="Отсутствует"/>
    );
};

export default RedIcon;