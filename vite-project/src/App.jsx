import Navbar from "./components/Navbar";
import Body from "./components/Body";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Order from "./pages/Order";
import Contact from "./pages/Contact";
// import "./App.css"


function App() {
  return (
    <>
    <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path="/" element={<Body/>}/>
      <Route path="/order" element={<Order/>}/>
      <Route path="/contact" element={<Contact/>}/>
     </Routes>
    
    
    </BrowserRouter>
    

    

    </>
  );
}

export default App;
