import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import "../styles/contact.css";
import Iframe from 'react-iframe';

function TextControlsExample() {
  return (
    <>
        <div className="formContact w-100 d-flex flex-wrap-reverse justify-content-around">
            <div className="mapBox w-lg-50 w-sm-100">
                <Iframe src="https://www.google.com/maps/embed/v1/place?q=A+Cara+de+Perro, Malvinas+1361,+B1842+Monte+Grande,+Provincia+de+Buenos+Aires,+Argentina&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8" width="463" height="454" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></Iframe>
            </div>
            <Form className="formContactBox w-lg-50 w-sm-100">
                <h2>Formulario de contacto</h2>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Mensaje</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
            </Form>
        </div>
        <section className="contactanos">
        <div className="contactanosTexto">
            <div className="contactanosTextoInt">
                <h2>Tenemos lo mejor para tu mascota</h2>
                <Link to={"/contact"} className="btn" id="btnHover">¡Contactanos!</Link>
            </div>
        </div>
    </section>
  </>
  );
}

export default TextControlsExample;