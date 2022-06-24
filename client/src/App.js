import './App.css';
import Home from "./pages/Home/Home"
import Register from "./pages/Register/Register"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from './pages/Login/Login';
import SingleProduct from './pages/SingleProduct/SingleProduct';
import Cart from './pages/Cart/Cart';
import { useSelector } from 'react-redux';

function App() {
  const user= useSelector((state)=>state.user.currentUser);
  return (
    <BrowserRouter>
    <Routes>

      <Route path="/" element={<Home />}></Route>
      <Route path="/:category" element={<Home />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/login" element={user ? <Navigate to="/"/> : <Login />}></Route>
      <Route path="/product/:id" element={<SingleProduct/>}></Route>
      <Route path="/cart" element={<Cart />}></Route>

    </Routes>
  </BrowserRouter>
  );
}

export default App;
