import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/about';
import Alert from './components/Alert';

//now we want to manage all states through app.js -- like enable disable dark mode using app.js


function App() {
  const [mode, setMode] = useState("light"); // to check whether dark mode enabled or not

  //making alert as object
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    // so that alert disappears after 2s because if user dismiss alert then it will not be shown again without reloading site
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  function toggleMode() {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#052648';
      showAlert("Dark mode has been enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = '#fff';
      showAlert("Light mode has been enabled", "success");
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
