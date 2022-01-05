import logo from './logo.svg';
import './App.css';
import MyComponent from './components/MyComponent';
import MyRef from './components/refs/MyRef';
import Useref from './components/refs/Useref';
import { useState } from 'react';

function App() {
  const [isRender, setisRender] = useState(true)
  return (
    <div className="App">
     
      <button onClick={()=>setisRender(false)}>Remove component</button>

     {isRender && <MyComponent/>} 
      {/* <MyComponent/> */}
      <MyRef/>
      <Useref/> 
    </div>
  );
}

export default App;
