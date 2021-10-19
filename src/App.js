import './App.css';
import Navbar from './Component/Navbar'
import TextEntry from './Component/TextEntry';
import Alert from './Component/Alert';
import About from './Component/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import About from './Component/About';
import { useState } from 'react';
function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    console.log("toggling");
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
    hello this is react tutorial
    this is first branch of git tutorial
      <Navbar title="Praved Converter" detail="this is string converter" mode={mode} toggle={toggleMode} />
      {/* <Alert alert={alert} />
      <TextEntry mode={mode} updateAlert={setMessage} /> */}
      {/* <About/> */}
      <Router>
        <Switch>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/">
            {/* <Navbar title="Praved Converter" detail="this is string converter" mode={mode} toggle={toggleMode} /> */}
            <Alert alert={alert} />
            <TextEntry mode={mode} updateAlert={setMessage} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;

