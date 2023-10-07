import React from 'react';
import Alert from 'react-bootstrap/Alert';

const CustomAlert = ({ mensaje, tipoAlerta }) => {
  return <Alert variant={tipoAlerta}>{mensaje}</Alert>;
};

export default CustomAlert;
