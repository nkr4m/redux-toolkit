import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Dashboard from './components/dashboard/Dashboard';
import Cart from './components/cart/Cart';
import Navbar from './components/navbar/Navbar';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route exact path="cart" element={<Cart />} />
        </Routes>


      </Router>
    </>
  );
}

export default App;
