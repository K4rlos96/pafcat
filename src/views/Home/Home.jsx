// src/views/Home.jsx

import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Bienvenido a FAPCAT</h1>
      <Link to="/registro">Regístrate</Link>
    </div>
  );
}

export default Home;
