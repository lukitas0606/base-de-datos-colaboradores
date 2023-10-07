import React, { useState } from 'react';
import Alert from './Alert';
import { Form, InputGroup, Button } from 'react-bootstrap';

const Formulario = ({ agregarColaborador }) => {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [edad, setEdad] = useState('');
  const [cargo, setCargo] = useState('');
  const [telefono, setTelefono] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [tipoAlerta, setTipoAlerta] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nombre && correo && edad && cargo && telefono) {
      const nuevoColaborador = {
        id: Math.random().toString(36).substring(7),
        nombre,
        correo,
        edad,
        cargo,
        telefono,
      };
      agregarColaborador(nuevoColaborador);
      setNombre('');
      setCorreo('');
      setEdad('');
      setCargo('');
      setTelefono('');
      setMensaje('Colaborador agregado exitosamente');
      setTipoAlerta('success');
    } else {
      setMensaje('Todos los campos son obligatorios');
      setTipoAlerta('danger');
    }
  };

  return (
    <div>
      <h2>Agregar Colaborador</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <InputGroup size="lg">
            <InputGroup.Text id="nombre">Nombre:</InputGroup.Text>
            <Form.Control
              aria-label="Nombre"
              aria-describedby="nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </InputGroup>
        </Form.Group>
        <Form.Group className="mb-3">
          <InputGroup size="lg">
            <InputGroup.Text id="correo">Correo:</InputGroup.Text>
            <Form.Control
              type="email"
              aria-label="Correo"
              aria-describedby="correo"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
            />
          </InputGroup>
        </Form.Group>
        <Form.Group className="mb-3">
          <InputGroup size="lg">
            <InputGroup.Text id="edad">Edad:</InputGroup.Text>
            <Form.Control
              type="number"
              aria-label="Edad"
              aria-describedby="edad"
              value={edad}
              onChange={(e) => setEdad(e.target.value)}
            />
          </InputGroup>
        </Form.Group>
        <Form.Group className="mb-3">
          <InputGroup size="lg">
            <InputGroup.Text id="cargo">Cargo:</InputGroup.Text>
            <Form.Control
              aria-label="Cargo"
              aria-describedby="cargo"
              value={cargo}
              onChange={(e) => setCargo(e.target.value)}
            />
          </InputGroup>
        </Form.Group>
        <Form.Group className="mb-3">
          <InputGroup size="lg">
            <InputGroup.Text id="telefono">Teléfono:</InputGroup.Text>
            <Form.Control
              type="tel"
              aria-label="Teléfono"
              aria-describedby="telefono"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
            />
          </InputGroup>
        </Form.Group>
        <Button variant="danger" type="submit">
          Agregar Colaborador
        </Button>
      </Form>
      {mensaje && (
        <div className="mt-3">
          <Alert mensaje={mensaje} tipoAlerta={tipoAlerta} />
        </div>
      )}
    </div>
  );
};

export default Formulario;