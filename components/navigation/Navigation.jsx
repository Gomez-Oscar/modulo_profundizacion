import React from 'react';
import { useNavigate } from 'react-router-dom';
import './navigation.scss';

const Navigation = () => {
  const navigate = useNavigate();

  return (
    <nav>
      <button onClick={() => navigate('/micomponente')}>Mi Componente</button>
      <button onClick={() => navigate('/micontador')}>Mi Contador</button>
      <button onClick={() => navigate('/misproductos')}>Mis Productos</button>
    </nav>
  );
};

export default Navigation;
