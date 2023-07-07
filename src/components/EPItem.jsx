import React from "react";
import MyCell from "./UI/cell/MyCell";

const EPItem = (EP) =>{
    return(
        <div className="EPItem">
            <MyCell style={{width: 100}}>2019</MyCell>
            <MyCell>АСУб</MyCell>
            <MyCell>09.01.13 Информационные системы и технологии</MyCell>
            <MyCell>Схема</MyCell>
            <MyCell>12.06.2023</MyCell>
            <MyCell>Не просмотренно</MyCell>
        </div>
    );
};

export default EPItem;