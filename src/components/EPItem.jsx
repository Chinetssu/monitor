import React from "react";
import MyCell from "./UI/cell/MyCell";
import BlueIcon from './UI/icons/BlueIcon';
import RedIcon from './UI/icons/RedIcon';
import GreenIcon from './UI/icons/GreenIcon';
import OrangeIcon from './UI/icons/OrangeIcon';

const EPItem = (props) =>{
    const icon = (status)=>{
        switch(status){
            case("Требует корректировки"):

            return (
                <OrangeIcon/>
            );
            case("Не просмотрено"):
            return(
                <BlueIcon/>
            );
            case("Актуально"):

            return(
                <GreenIcon/>
            );
            case(null):
            return(
                <RedIcon/>
            );
        }
    }
    return(
        <div className="EPItem">
            <MyCell style={{width: 100}}>{props.EPData.year}</MyCell>
            <MyCell>{props.EPData.course}</MyCell>
            <MyCell>{props.EPData.name}</MyCell>
            <div>
            <div className="EPFileData">
                <MyCell>Схема</MyCell>
                <MyCell>{props.EPData.schemeDate}</MyCell>
                <MyCell>{icon(props.EPData.schemeStatus)}</MyCell>
            </div>
            <div className="EPFileData">
                <MyCell>Матрица</MyCell>
                <MyCell>{props.EPData.matrixDate}</MyCell>
                <MyCell>{icon(props.EPData.matrixStatus)}</MyCell>
            </div>
            <div className="EPFileData">
                <MyCell>Паспорт</MyCell>
                <MyCell>{props.EPData.passportDate}</MyCell>
                <MyCell>{icon(props.EPData.passportStatus)}</MyCell>
            </div>
            </div>
        </div>
    );
};

export default EPItem;