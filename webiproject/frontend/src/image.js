import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Accordion from "react-bootstrap/Accordion";

export const Accordian = () => {
  return (
    <div className="container">
      <div className="row mt-4 me-3">
        <div className="col-3 ">
          <h4> All Category</h4>
          <Accordion defaultActiveKey="0" alwaysOpen>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Accessories</Accordion.Header>
              <Accordion.Body>Hydraulic</Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Lamp</Accordion.Header>
              <Accordion.Body>Cryotronics</Accordion.Body>
              <Accordion.Body>Induction</Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Avionics</Accordion.Header>
              <Accordion.Body>Circuits</Accordion.Body>
              <Accordion.Body>Electronics</Accordion.Body>
              <Accordion.Body>Handwatch</Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>

        <div className="col-9" >
        <img src="image/image1.jpeg" class="w-100" alt="photo is not uploaded"/>
        </div>
      </div>
    </div>
  );
};
