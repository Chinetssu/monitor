import React from "react";
import GreenImage from './../../../sprites/green.png';
import classes from './icons.module.css'


const GreenIcon = () =>{
    return(
        <img className={classes.greenIcn} src={GreenImage} alt="Актуально"/>
    );
};

export default GreenIcon;