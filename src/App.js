import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/about';
import Alert from './components/Alert';



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
      < Navbar brand="TextUtils" mode={mode} toggleMode={toggleMode} />

      <Alert alert={alert} />

      <TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert} />
      {/* <About> </About> */}
    </>
  );
}



export default App;
