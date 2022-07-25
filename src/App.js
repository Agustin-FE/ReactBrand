import Navbar from "./Components/Navbar/Navbar";
import React from 'react';
import { Route, Routes } from "react-router-dom"
import ItemList from "./Components/Grid/ItemList";
import Productos from "./db.json"
import './App.css';
import ItemDetailContainer from "./Components/Details/ItemDetailContainer";
import Carrito from "./Components/Carrito/Carrito"
import Home from "./Components/Home/Home";
import CartProvider from "./Components/Carrito/CarritoContext"

function App() {

  const ropa = Productos.Ropa

  return (
    <CartProvider>
      <div>
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalogo" element={<ItemList elements={ropa} />} />
            <Route path='/catalogo/:id' element={<ItemDetailContainer />} />
            <Route path='/carrito' element={<Carrito />} />
          </Routes>
        </div>
      </div>
    </CartProvider>
  )
}

export default App;
