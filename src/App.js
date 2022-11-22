
import './App.css';
import Mabu from './components/Mabu';
import Jani from "./components/Jani"
import Shaik from './components/Shaik';
import {Routes,Route} from "react-router-dom";
function App() {
  return (
    <div className="App">
    
     <Jani/>
   
     <Routes>
    
        <Route path="/" element={ <Shaik />}/> 
        <Route path='/back' element={<Mabu/>}/>        
              
       </Routes>
        {/* <Mabu/>  */}
    </div>
  );
}

export default App;





