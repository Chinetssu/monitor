import React from "react";
import classes from './MyCell.module.css'

const MyCell = ({children, ...props}) =>{
    return(
        <div {...props}className={classes.myCell}>
            {children}
        </div>
    );
};

export default MyCell;