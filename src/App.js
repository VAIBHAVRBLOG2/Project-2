import './App.css';
import SignInScreen from './Components/signin';
import Nav from './Components/header';
import Hero from './Components/hero_section';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Upload from "./Components/upload"
import User from './Components/user';
import Navbar from './Components/navbar';
import SignupScreen from './Components/signup';
function App() {
  

  return (
  
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<SignInScreen />} />
        <Route path="home" element={<><Nav /><Hero /></>} />
        <Route path="upload" element={<><Navbar /><Upload /></>} />
        <Route path="upload2" element={ <User />} />
        <Route path="signup" element={ <SignupScreen />} />
      </Routes>
      </BrowserRouter>
  );
}

export default App;
