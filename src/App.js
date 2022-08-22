import './App.css';
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      {/* can set our own variable in props -> properties */}
      {/* now we need to give values otherwise nothing will be printed if we dont use default props */}
      {/* <Navbar brand="TextUtils" about ="About TextUtils"/>  */}
      {/* <Navbar brand={3} about ="About TextUtils"/>  */} {/* warning because we set proptype as string*/}
      <Navbar brand="TextUtils" />
    </>
  );
}



export default App;
