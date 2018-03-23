import React, {Component} from 'react';
import './../../index.css';
import { Row, Col, Clearfix} from 'react-bootstrap';
import Pago1 from './Paypal';
import Pago2 from './Webpay';

class Pagos extends Component {
  render() {
    return(
      <div className='containergral'>
        <Row className='show-grid title'>
          <Col xs={12} md={12}>
            <h1>Total: $3.000</h1>
          </Col>
        </Row>
        <div className='contentPago'>
          <Row className='show-grid'>
            <Col xs={12} md={6}>
              <h2>Método de pago: </h2>
            </Col>
          </Row>
          <Row className='show-grid'>
            <Col xs={12} md={2} mdOffset={2}>
              <h3>Efectivo: </h3>
            </Col>
          </Row>
          <Row className="show-grid">
            <Col xs={12} md={3} mdOffset={2}>
              <button className='btnActual'>$3.000</button>
            </Col>
            <Col xs={12} md={2}>
              <button className='btnOtro'>Otro monto</button>
            </Col>
          </Row>
          <Row className='show-grid'>
            <Col xs={12} md={2} mdOffset={2}>
              <h3>Tarjeta: </h3>
            </Col>
          </Row>
          <Row className="show-grid">
            <Col xs={12} md={3} mdOffset={2}>
              <a href="#">
                <Pago2 />
              </a>
            </Col>
            <Col xs={12} md={3}>
              <a href="#">
                <Pago1 />
              </a>
            </Col>
          </Row>
          <Row className="show-grid">
            <Col xs={12} md={3} mdOffset={9}>
              <input className="realizado" type="button" value="Realizar Pago" />
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

export default Pagos;