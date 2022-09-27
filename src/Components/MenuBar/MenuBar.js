import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../images/main-logo.jpeg';
import LinkTo from '../../Common/Components/LinkTo';
import './MenuBar.css';

function MenuBar() {
    return (
        <Navbar bg="bg-white" expand="lg" className="shadow-sm bg-body">
            <Container fluid className="container">
                {/* <Navbar.Brand href="#"> */}
                <LinkTo to="/">
                    <img src={logo} alt="" style={{ width: 80 }} />
                </LinkTo>
                {/* </Navbar.Brand> */}
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse className="justify-content-lg-end" id="navbarScroll">
                    <Nav className="mr-auto" style={{ maxHeight: '100%' }} navbarScroll>
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
                        {/* <NavDropdown title="Pages" id="navbarScrollingDropdown">
                            <NavDropdown.Item>
                                <LinkTo to="page-1">Page 1</LinkTo>
                            </NavDropdown.Item>

                            <NavDropdown.Divider />
                            <NavDropdown.Item>
                                <LinkTo to="page-3">Page 3</LinkTo>
                            </NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MenuBar;
