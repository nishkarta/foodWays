import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.css';
import './styles/App.css';

import NavbarEl from './components/NavbarEl';
import { LoginContext } from './components/Contexts/LoginContext';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from 'react';

import Home from './pages/Home';
import Cart from './pages/Cart';
import Profile from './pages/Profile';
import EditEl from './components/EditEl';
import Details from './pages/Details';
import AddProduct from './pages/AddProduct';
import Transactions from './pages/Transactions';




function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <LoginContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>

      <Router>
        <NavbarEl />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/details" element={<Details />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/edit-profile" element={<EditEl />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/add-product" element={<AddProduct />} />
          <Route exact path="/transactions" element={<Transactions />} />
        </Routes>
      </Router>
    </LoginContext.Provider>
  );
}

export default App;
