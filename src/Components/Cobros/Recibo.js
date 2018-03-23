import React from 'react';
import {Row, Col, Clearfix} from 'react-bootstrap';
import './../../index.css';

const Recibo = () => (
  <div className='containerRecibido'>
    <Row className='show-grid titleRecibo'>
      <Col xs={12} md={12}>
        <h1>Recibo</h1>
      </Col>
    </Row>
    <Row className='show-grid containerDetail'>
      <Row className='show-grid'>
        <Col xs={12} md={6}>
          <h2>Compra realizada: </h2>
        </Col>
      </Row>
      <Row className='show-grid'>
        <Col xs={12} md={4} mdOffset={4}>
          <h3>Libro de Flores </h3>
          <h3>Libro de cocina </h3>
        </Col>
      </Row>
      <Row className='show-grid'>
        <Col xs={12} md={4} mdOffset={2}>
          <h4>IVA: $5.000</h4>
        </Col>
      </Row>
    </Row>
    <Row className='show-grid total'>
       <Col xs={12} md={12}>
        <h2>Total:   $3.000</h2>
      </Col>
    </Row>
    <Row className='show-grid buttons'>
      <Col xs={12} md={4} mdOffset={2}>
        <button className='print'>Imprimir</button>
      </Col>
      <Col xs={12} md={4}>
        <button className='mail'>Enviar al correo</button>
      </Col>
    </Row>
  </div>
)

export default Recibo;