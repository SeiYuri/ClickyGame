import React from "react";
import Header from "./components/Header";
import MainGameContainer from "./components/MainGameContainer";
import "./App.css";


const App = () => (
  <div className="container-fluid mainContainer">
    <Header />
    <MainGameContainer /> 
  </div>
);

export default App;