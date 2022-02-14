import './App.css';
import Navbar from './Component/Navbar'
import TextEntry from './Component/TextEntry';
import Alert from './Component/Alert';
import About from './Component/About';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { useState } from 'react';
function App() {

  const [mode, setMode] = useState("light");

  const removeAllList=()=>{
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-light');
  }
  const toggleMode = (cls) => {
    console.log("toggling ",cls);
    removeAllList();
    document.body.classList.add('bg-'+cls);
    if(cls===null){
      if (mode === "light") {
        setMode("dark");
        document.body.style.backgroundColor = "#2F326D";
        document.title = "React TEXT App-DARK MODE";
      }
      else {
        setMode("light");
        document.body.style.backgroundColor = "white";
        document.title = "React TEXT App";
      }
    }
  }

  const [alert, setAlert] = useState({ message: "hello i am praved", type: "success" });
  const setMessage = (message, type) => {
    setAlert({
      message: message,
      type: type
    });
    setTimeout(() => {
      setAlert({
        message: "",
        type: null
      });
    }, 2000);
  }
  return (
    <>
      {/* <Navbar title="Praved Converter" detail="this is string converter" mode={mode} toggle={toggleMode} /> */}
       {/* <Alert alert={alert} /> */}
      {/* <TextEntry mode={mode} updateAlert={setMessage} /> */}
       {/* <About/> */}
       <Router> 
        <Switch> 
           <Route path="/About">
             <Navbar title="Text Utils" detail="This is utility app developed by Praved" mode={mode} toggle={toggleMode} />
             <About/>
          </Route> 
           <Route path="/">
            <Navbar title="Text Utils" detail="This is utility app developed by Praved" mode={mode} toggle={toggleMode} />
            <Alert alert={alert} />
            <TextEntry mode={mode} updateAlert={setMessage} /> 
          </Route>
         </Switch> 
      </Router>
    </>
  );
}

export default App;

