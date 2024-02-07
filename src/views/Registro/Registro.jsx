import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Registro.css';

function Registro() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [repetirContraseña, setRepetirContraseña] = useState('');
  const [terminosAceptados, setTerminosAceptados] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (contraseña !== repetirContraseña) {
      alert('Las contraseñas no coinciden');
      return;
    }
    if (!terminosAceptados) {
      alert('Debes aceptar los términos y condiciones para registrarte.');
      return;
    }
    // Asumimos que se realiza una validación de los términos aquí.
    try {
      const response = await fetch('http://localhost:8000/usuarios/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nombre, email, contraseña }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Usuario registrado:', data);
        navigate('/'); // Navegar al inicio o a la pantalla de "login"
      } else {
        const errorData = await response.json();
        alert(errorData.detail);
      }
    } catch (error) {
      console.error('Error al enviar datos a la API:', error);
      alert('Error al enviar datos a la API');
    }
  };

  return (
    <div className="contenedor">
      <div className="registro-container">
        <div className="card">
          <h2 className="text-center">Crea tu cuenta</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="nombre"
                placeholder="Nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Correo Electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                id="contraseña"
                placeholder="Contraseña"
                value={contraseña}
                onChange={(e) => setContraseña(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                id="repetirContraseña"
                placeholder="Repetir contraseña"
                value={repetirContraseña}
                onChange={(e) => setRepetirContraseña(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <input
                  type="checkbox"
                  id="terminos"
                  className="hidden-checkbox"
                  checked={terminosAceptados}
                  onChange={(e) => setTerminosAceptados(e.target.checked)}
                  required
                />
                <label htmlFor="terminos" style={{ fontSize: 'smaller', marginLeft: '0.5rem' }}className="checkbox-label">
                <span className="custom-checkbox"></span>
                  Al registrarte, aceptas nuestros <a href="/terminos-y-condiciones">Términos de servicio y Política de privacidad</a>, y confirmas que tienes al menos 18 años.
                </label>
              </div>
            </div>
            <div className="form-group text-center">
              <button type="submit" className="btn btn-primary">
                INSCRIBIRSE
              </button>
            </div>
          </form>
          <div className="text-center">
            ¿Ya tienes una cuenta? <a href="/login">Iniciar sesión</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registro;
