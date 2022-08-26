import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/about';
import Alert from './components/Alert';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//note npm i react-router-dom@6
// we want to load only some content to our site when user click , without loading whole site


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
      document.title = "Dark-mode";

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
      document.title = "Light-mode";
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
          <Route path="/" element={<TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert} />} />

          <Route path="/about" element={ <About />} />

          {/* error page if no routes are there */}
          {/* <Route path="*" element={<Error />} /> */}
        </Routes>
        {/* write footer here */}
      </Router>
    </>
  );
}



export default App;
