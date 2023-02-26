import './App.css';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Recipes from './Components/Recipes';
import ContactUs from './Components/ContactUs';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Recipes" element={<Recipes />} />
          <Route path="/ContactUs" element={<ContactUs />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
