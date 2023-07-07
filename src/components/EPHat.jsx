import React from "react";
import MyCell from "./UI/cell/MyCell";

const EPList = () =>{
    return(
        <div className="Hat">
            <MyCell style={{width: 100}}><h4>Год набора</h4></MyCell>
            <MyCell><h4>Направления</h4></MyCell>
            <MyCell><h4>Название образовательной программы</h4></MyCell>
            <MyCell><h4>Тип документа</h4></MyCell>
            <MyCell><h4>Дата</h4></MyCell>
            <MyCell><h4>Статус</h4></MyCell>
          </div>
    );
};

export default EPList;