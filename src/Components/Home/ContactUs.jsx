import React from "react";
import "./ContactUs.css";
import { useRef} from "react";
import { Form, Button } from "react-bootstrap";


const ContactUs = () => { 
    
  const formRef = useRef();

  return (
    <div className="info-container">
      <div className="info">
        <h1 className="title">¡Trabajemos juntos!</h1>
        <h3 className="title">¡Hablemos de tus Diseños!</h3>
        <div className="redes">
        <p>
          <b>Hola, ¿como están?</b>
          <br/>
          No duden en dejarme un mensaje por si quieren conversar sobre algún diseño que quieras que produzca.
        </p>
        </div>
      </div>
      <div className="formulario">
        <Form ref={formRef}>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label> Nombre </Form.Label>
            <Form.Control type="text" placeholder="Name" name="user_name" required="true" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label> Tema </Form.Label>
            <Form.Control type="text" placeholder="Subject" name="user_subject" required="true" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label> Email </Form.Label>
            <Form.Control type="text" placeholder="Email" name="user_email" required="true" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label> Texto </Form.Label>
            <Form.Control rows="5" as="textarea" placeholder="Message" name="message" required="true" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default ContactUs;
