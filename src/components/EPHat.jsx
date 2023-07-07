import React from "react";
import MyCell from "./UI/cell/MyCell";

const EPList = () =>{
    return(
        <div className="Hat">
            <MyCell style={{width: 100}}>Год набора</MyCell>
            <MyCell>Направления</MyCell>
            <MyCell>Название образовательной программы</MyCell>
            <MyCell>Тип документа</MyCell>
            <MyCell>Дата</MyCell>
            <MyCell>Статус</MyCell>
          </div>
    );
};

export default EPList;