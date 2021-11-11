import './App.css';
import SignInScreen from './Components/signin';
import Nav from './Components/header';
import Hero from './Components/hero_section';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Upload from "./Components/upload"


function App() {
  

  return (
  
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<SignInScreen />} />
        <Route path="home" element={<><Nav /><Hero /></>} />
        <Route path="upload" element={<Upload />} />
        
      </Routes>
      </BrowserRouter>
  );
}

export default App;
