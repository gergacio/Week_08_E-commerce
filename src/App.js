import React from "react";
//get it from same lavel (.)....not one level up(..)
import MainContainer from "./containers/MainContainer.js";



import './App.css';


function App() {
  //purpose of app is just to render mainContainer compoenent where we will keep the state
  return (
    <MainContainer />
  );
}

export default App;
