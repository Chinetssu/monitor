import React from "react";
import classes from './MyCell.module.css'

const MyCell = ({children, ...props}) =>{
    return(
        <button {...props}className={classes.myCell}>
            {children}
        </button>
    );
};

export default MyCell;