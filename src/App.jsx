import React, { useState } from 'react';
import './App.css';
import Listado from './assets/components/Listado';
import Formulario from './assets/components/Formulario';
import Buscador from './assets/components/Buscador';
import { BaseColaboradores } from './assets/data/BaseColaboradores';

function App() {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [filtro, setFiltro] = useState('');

  const agregarColaborador = (nuevoColaborador) => {
    const numeroColaborador = colaboradores.length + 1;
    nuevoColaborador.id = numeroColaborador.toString();
    setColaboradores([...colaboradores, nuevoColaborador]);
  };

  const filtrarColaboradores = (busqueda) => {
    setFiltro(busqueda);
  };

  const eliminarColaborador = (id) => {
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id);
    setColaboradores(nuevosColaboradores);
  };

  const colaboradoresFiltrados = colaboradores.filter((colaborador) => {
    const valores = Object.values(colaborador).join(' ').toLowerCase();
    return valores.includes(filtro.toLowerCase());
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <Buscador filtrarColaboradores={filtrarColaboradores} />
        </div>
        <div className="col-md-8">
          <Listado colaboradores={colaboradoresFiltrados} eliminarColaborador={eliminarColaborador} />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Formulario agregarColaborador={agregarColaborador} />
        </div>
      </div>
    </div>
  );
}

export default App;