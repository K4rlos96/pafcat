import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Registro from './views/Registro/Registro';
import Home from './views/Home/Home';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registro" element={<Registro />} />
        {/* Añade más rutas según sea necesario */}
      </Routes>
    </div>
  );
}

export default App;