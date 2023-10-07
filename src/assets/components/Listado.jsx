import React from 'react';
import Table from 'react-bootstrap/Table';
import { BsTrash } from 'react-icons/bs'; // Importa el ícono de eliminación

const Listado = ({ colaboradores, eliminarColaborador }) => {
  return (
    <div>
      <h2>Listado de Colaboradores</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Edad</th>
            <th>Cargo</th>
            <th>Teléfono</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {colaboradores.map((colaborador) => (
            <tr key={colaborador.id}>
              <td>{colaborador.id}</td>
              <td>{colaborador.nombre}</td>
              <td>{colaborador.correo}</td>
              <td>{colaborador.edad}</td>
              <td>{colaborador.cargo}</td>
              <td>{colaborador.telefono}</td>
              <td>
                <BsTrash
                  className="text-danger"
                  onClick={() => eliminarColaborador(colaborador.id)}
                  style={{ cursor: 'pointer' }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Listado;