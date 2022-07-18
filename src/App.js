import Navbar from "./Components/Navbar/Navbar";
import React from 'react';
import { Route, Routes } from "react-router-dom"
import ItemList from "./Components/Grid/ItemList";
import Productos from "./db.json"
import './App.css';
import ItemDetailContainer from "./Components/Details/ItemDetailContainer";
import Carrito from "./Components/Carrito/Carrito"

function App() {

  const ropa = Productos.Ropa

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/catalogo" element={<ItemList elements={ropa} />}/>
        <Route path='/catalogo/:id' element={<ItemDetailContainer />} />
        <Route path='/carrito' element={<Carrito />} />
      </Routes>
    </div>
  )
}

export default App;
