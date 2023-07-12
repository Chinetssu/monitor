import React, { useEffect, useState } from "react";
import classes from './styles/App.css';
// import MyCell from './components/UI/cell/MyCell';
import EPHat from './components/EPHat';
import EPItem from './components/EPItem';

function App() {
  // const [isLoading, setIsLoading] = useState(false);
  // const [filter, setFilter] = useState({sort: '', query: ''});
  // const fileData = useState({updDate:"20.06.2023", status:"Не просмотрено"});
  const [EPsData, setEPsData] = useState([
    {year: "2019",
    course: "АСУб",
    name: "09.01.21 Информационные системы и технологии",
    schemeDate: "20.06.2023",
    schemeStatus: "Не просмотрено",
    matrixDate: "20.06.2023",
    matrixStatus: "Требует корректировки",
    passportDate: "20.06.2023",
    passportStatus: "Актуально"}
  ]);
  
  return (
    <div className="App">
      <div className="WorkingPane">
      <div className="MainPart">
        <div className="Content">
          <div className="EPList">
            <EPHat/>
            {EPsData.map(post =>
            <EPItem EPData = {post}/>
            )}
            {EPsData.map(post =>
            <EPItem EPData = {post}/>
            )}
            {EPsData.map(post =>
            <EPItem EPData = {post}/>
            )}
            {EPsData.map(post =>
            <EPItem EPData = {post}/>
            )}
          </div>
        </div>
      </div>
      <div className="SidePart">
        <div className="InfoPanel">
        </div>
      </div>
      <div className="PopupWindow"></div>
      </div>
    </div>
  );
}

export default App;
