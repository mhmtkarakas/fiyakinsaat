
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
 <BrowserRouter>
   <Navbar />
   <Routes>
      {/* <Route path="/" element={<Anasayfa />} /> */}
 
   </Routes>
 </BrowserRouter>
  );
}

export default App;
