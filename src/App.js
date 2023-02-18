// import logo from './logo.svg';
import "./App.css";
import React, { useState } from "react";
import Input from "./Components/Input";
import List from "./Components/List";
// import PopUp from "./Components/PopUp";


function App() {
  const [dataFromInpt, setDataFromInpt] = useState([]);

  const getDataHandler = (theData) => {
    setDataFromInpt((prevdata) => [...prevdata, theData]);
  }

  return (
    <div className="App">
      <Input onGetData={getDataHandler} />
      <List items={dataFromInpt} />
    </div>
  );
}

export default App;
