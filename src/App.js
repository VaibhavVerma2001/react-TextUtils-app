import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/about';

//now we want to manage all states through app.js -- like enable disable dark mode using app.js


function App() {
  const [mode, setMode] = useState("light"); // to check whether dark mode enabled or not

  function toggleMode() {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#052648';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = '#fff';
    }
  }
  return (
    <>
      {/* to set dark mode in navbar */}
      {/* toggleMode so that when someone click change mode button in changes state */}
      < Navbar brand="TextUtils" mode={mode} toggleMode={toggleMode} />

      <TextForm heading="Enter the text to analyze below" mode={mode} />
      {/* <About> </About> */}
    </>
  );
}



export default App;
