import React, { useState } from "react";
import classes from './styles/App.css';
import MyCell from './components/UI/cell/MyCell';
import EPHat from './components/EPHat';

function App() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="App">
      <div className="MainPart">
        <div className="Content">
          <div className="EPList">
            <EPHat/>
            <div className="EPItem">
              <div style={{width: 100}} className="Cell">Год набора</div>
              <div className="Cell">Ячейка</div>
              <div className="Cell">Ячейка</div>
              <div className="Cell">Ячейка</div>
              <div className="Cell">Ячейка</div>
              <div className="Cell">Ячейка</div>
            </div>
          </div>
        </div>
      </div>
      <div className="SidePart">
        <div className="InfoPanel">
        </div>
      </div>
      <div className="PopupWindow"></div>
    </div>
  );
}

export default App;
