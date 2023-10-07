import React, { useState } from 'react';

const Buscador = ({ filtrarColaboradores }) => {
  const [busqueda, setBusqueda] = useState('');

  const handleChange = (e) => {
    setBusqueda(e.target.value);
    filtrarColaboradores(e.target.value);
  };

  return (
    <div>
      <h2>Buscar Colaboradores</h2>
      <input
        type="text"
        className="form-control"
        placeholder="Buscar..."
        value={busqueda}
        onChange={handleChange}
      />
    </div>
  );
};

export default Buscador;