import React from "react";
import MyCell from "./UI/cell/MyCell";

const EPItem = (props) =>{
    return(
        <div className="EPItem">
            <MyCell style={{width: 100}}>{props.EPData.year}</MyCell>
            <MyCell>{props.EPData.course}</MyCell>
            <MyCell>{props.EPData.name}</MyCell>
            <div>
                <MyCell>Схема</MyCell>
                <MyCell>Матрица</MyCell>
                <MyCell>Пасспорт</MyCell>
            </div>
            <div>
                <MyCell>{props.EPData.schemeDate}</MyCell>
                <MyCell>{props.EPData.matrixDate}</MyCell>
                <MyCell>{props.EPData.passportDate}</MyCell>
            </div>
            <div>
                <MyCell>{props.EPData.schemeStatus}</MyCell>
                <MyCell>{props.EPData.matrixStatus}</MyCell>
                <MyCell>{props.EPData.passportStatus}</MyCell>
            </div>
        </div>
    );
};

export default EPItem;