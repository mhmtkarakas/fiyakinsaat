
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import MainNavbar from './components/MainNavbar/MainNavbar';

function App() {
  return (
 <BrowserRouter>
   <Navbar />
   <MainNavbar />
   <Routes>
      {/* <Route path="/" element={<Anasayfa />} /> */}
 
   </Routes>
 </BrowserRouter>
  );
}

export default App;
