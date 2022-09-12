import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import LinkTo from '../../Common/Components/LinkTo';

function MenuBar() {
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid className="container">
                <Navbar.Brand href="#">
                    <img src="" alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="ml-auto" style={{ maxHeight: '100%' }} navbarScroll>
                        <Nav.Link>
                            <LinkTo to="/home">Home</LinkTo>
                        </Nav.Link>
                        <Nav.Link>
                            <LinkTo to="/about">About</LinkTo>
                        </Nav.Link>
                        <Nav.Link>
                            <LinkTo to="/qualityPlan">Quality Plan</LinkTo>
                        </Nav.Link>
                        <Nav.Link>
                            <LinkTo to="/review">Review</LinkTo>
                        </Nav.Link>
                        <Nav.Link>
                            <LinkTo to="/gallery">Gallery</LinkTo>
                        </Nav.Link>
                        <Nav.Link>
                            <LinkTo to="/contact-us">Contact Us</LinkTo>
                        </Nav.Link>
                        <NavDropdown title="Pages" id="navbarScrollingDropdown">
                            <NavDropdown.Item>
                                <LinkTo to="page-1">Page 1</LinkTo>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <LinkTo to="page-2">Page 2</LinkTo>
                            </NavDropdown.Item>

                            <NavDropdown.Divider />
                            <NavDropdown.Item>
                                <LinkTo to="page-3">Page 3</LinkTo>
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MenuBar;
