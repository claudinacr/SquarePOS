import React from 'react';
import {Row, Col, Clearfix} from 'react-bootstrap';
import './../../index.css';

const Recibo = () => (
  <div className='containerRecibido'>
    <Row className='show-grid'>
      <Col xs={12} md={12}>
        <h1>Recibo</h1>
      </Col>
    </Row>
    <Row className='show-grid containerDetail'>
      <Row className='show-grid'>
        <Col xs={12} md={4}>
          <h3>Compra realizada: </h3>
        </Col>
      </Row>
      <Row className='show-grid'>
        <Col xs={12} md={5}>
          <p>Libro de Flores </p>
          <p>Libro de cocina </p>
        </Col>
      </Row>
      <Row className='show-grid'>
        <Col xs={12} md={4}>
          <p>IVA: $5.000</p>
        </Col>
      </Row>
    </Row>
    <Row className='show-grid'>
       <Col xs={12} md={12}>
        <h2>Total:   $3.000</h2>
      </Col>
    </Row>
    <Row className='show-grid buttons'>
      <Col xs={12} md={4}>
        <button>Imprimir</button>
      </Col>
      <Col xs={12} md={4}>
        <button>Enviar al correo</button>
      </Col>
    </Row>
  </div>
)

export default Recibo;