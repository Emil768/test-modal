import React,{useState} from "react";

import './App.css';

import Modal from "./components/Modal/Modal"
import ToggleButton from "./components/ToggleButton/ToggleButton";

function App() {
  const [activeModal,setActiveModal] = useState(true);
  return (
    <div className="App">
    <ToggleButton state={activeModal} setState = {setActiveModal}/>
     <Modal state={activeModal} setState={setActiveModal}/>
    </div>
  );
}

export default App;
