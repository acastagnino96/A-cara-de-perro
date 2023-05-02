import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';
import "../styles/navbar.css";

function BasicExample() {
  return (
    <Navbar className="nvbar sticky-top" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img src="https://firebasestorage.googleapis.com/v0/b/a-cara-de-perro-5251e.appspot.com/o/logo.png?alt=media&token=149cf83b-bb52-4e73-8081-369d08519c94"  height={105}/>
          <div className="logoTexto">
            <p>A CARA DE PERRO <span className="d-block" id="logoDescription">PET SHOP & PELUQUERIA CANINA</span></p>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="menuInicio me-auto">
            <Nav.Link as={Link} to="/" className="linkTodos pt-5 pt-lg-0 pb-lg-0">Home</Nav.Link>
            <Nav.Link href="/us" className="linkTodos pt-5 pt-lg-0 pb-lg-0">Nosotros</Nav.Link>
            <Nav.Link href="/products" className="linkTodos pt-5 pt-lg-0 pb-lg-0">Productos</Nav.Link>
            <Nav.Link href="/hairstyle" className="linkTodos pt-5 pt-lg-0 pb-lg-0">Peluquería</Nav.Link>
            <Nav.Link href="/contact" className="linkTodos pt-5 pt-lg-0 pb-5 pb-lg-0">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
