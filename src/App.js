import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

// import {useState} from 'react'; //import usestate hook

// const [text,setText] = useState("Enter text here"); // it means text is variable and its default value is "Enter text here" and we will set this value through setText function without reloading page

function App() {
  return (
    <>
      < Navbar brand="TextUtils" />

      {/* we want to keep whatever text user write in input field as an variable, so that whenever that change it changes everywhere . So using this as state */}
      <TextForm heading = "Enter the text to analyze below" />
    </>
  );
}



export default App;
