import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/about';
import Alert from './components/Alert';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Note npm i react-router-dom@6
// AIM -- to fix some issues like
// 1 -- our layout is changing when alert coming (everything going down after alert)
//2 -- even when input is empty and someone click button it is showing success message
//3 -- word counter is saying 1 if there is no word and also count spaces

function App() {
  const [mode, setMode] = useState("light"); // to check whether dark mode enabled or not

  //making alert as object
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  function toggleMode() {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#052648';
      showAlert("Dark mode has been enabled", "success");
      // to change title dynamically
      // document.title = "Dark-mode";

      // to attract users like add sites do -- but very bad idea
      // setInterval(function(){
      //   document.title = "TextUtils is amazing";
      // },2000);
      // setInterval(function(){
      //   document.title = "Click to download now";
      // },1300);
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = '#fff';
      showAlert("Light mode has been enabled", "success");
      // document.title = "Light-mode";
    }
  }



  return (
    <>
      <Router>
        {/* WRITE THOSE COMPONENTS WHO REMAIN SAME FOR ALL PAGES HERE*/}
        {/* INSTEAD OF a and href USE LINK TO SO THAT PAGE DONT RELOAD WHEN USER CLICK THEM */}
        < Navbar brand="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />

        <Routes>
          {/* WRITE THOSE COMPONENTS WHO CHANGE FOR ALL PAGES HERE*/}
          <Route path="/" element={<TextForm heading="Try TextUtils - Word Counter, Character Counter and much more" mode={mode} showAlert={showAlert} />} />

          <Route path="/about" element={ <About mode={mode} />} />

        </Routes>
      </Router>
    </>
  );
}



export default App;
