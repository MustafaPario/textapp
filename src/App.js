import './App.css';
import React, {useState} from 'react'
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/TextForm';


function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#00002a';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';

    }
  }

  return (
    <>
    <Navbar title = "TextUtils" aboutText = "About" mode={mode} toggleMode={toggleMode}/>

    <div className="container my-5">
    <Textform heading ="Enter the text to analyze below" mode={mode}/>
    {/* <About/> */}
    </div>

    
    
    {/* <Navbar/> */}
    </>
  );
}

export default App;
 