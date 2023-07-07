import React, { useState } from "react";
import classes from './styles/App.css';
import MyCell from './components/UI/cell/MyCell';
import EPHat from './components/EPHat';
import EPItem from './components/EPItem';

function App() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="App">
      <div className="WorkingPane">
      <div className="MainPart">
        <div className="Content">
          <div className="EPList">
            <EPHat/>
            <EPItem/>
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
