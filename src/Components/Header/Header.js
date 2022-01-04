import react from "react";
import "./header.css";
import { Container, Navbar, Nav, NavDropdown, Button, Form, FormControl, InputGroup, Row, Col } from "react-bootstrap";
import MyntraLogo from "../../Assets/MyntraLogo.png";
import { AiOutlineUser,AiOutlineHeart,AiOutlineShopping} from "react-icons/ai";


export default function Header() {
    return (
        <Navbar bg="light" expand="lg" className="navbar-css" sticky="top">
            <Container fluid>
                <Navbar.Brand href="#"><img className="myntra-logo" src={MyntraLogo} height="4vh" width="100%" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="/men" className="nav-links">Men</Nav.Link>
                        <Nav.Link href="#action2" className="nav-link" disabled>Women</Nav.Link>
                        <Nav.Link href="#" className="nav-link" disabled>
                            Kids
                        </Nav.Link>
                        <Nav.Link href="#" className="nav-link" disabled>
                            Offers
                        </Nav.Link>
                    </Nav>
                    <Form className="d-flex">

                        <FormControl
                            type="search"
                            placeholder="Search for products brands and more"
                            className="me-2"
                            aria-label="Search"
                        />


                    </Form>
                    <Row>
                        <Col lg={4} className="Nav-col">
                            <AiOutlineUser size={20}/>
                            <span className="Nav-span">Profile</span>
                        </Col>
                        <Col lg={4} className="Nav-col">
                            <AiOutlineHeart size={20}/>
                            <span className="Nav-span">Wishlist</span>
                        </Col>
                        <Col lg={4} className="Nav-col">
                            <AiOutlineShopping size={20}/>
                            <span className="Nav-span">Bag</span>
                        </Col>

                    </Row>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}