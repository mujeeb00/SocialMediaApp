import React from 'react'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../Images/logo.svg'
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { TbBorderRadius, TbMessage } from 'react-icons/tb';
import { RiSettings5Fill } from 'react-icons/ri';
import { BsBellFill } from 'react-icons/bs';
import user from '../Images/user.jpg'


const Navhead = () => {


  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };



  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#">
          <img src={logo} alt="" />
        </Navbar.Brand>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
        </Form>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto  my-lg-0 "
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavDropdown title="Demo" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Account</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Pages" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Account</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="Account"
              id="navbarScrollingDropdown"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              show={isOpen}
            >
              <NavDropdown.Item href="#action3">create a page</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Settings
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                Notifications
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                Help center
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                Help details
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                Authentication
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                Error 404
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                Offline
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                Privacy & Terms
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#action1">My Network</Nav.Link>

            {/* Icons */}
            <div className="icons ms-1 me-2 mt-1">
              <Nav.Link href="#action1">
                <TbMessage size={19} />
              </Nav.Link>
            </div>
            <div className="icons me-2 mt-1">
              <Nav.Link href="#action1">
                <RiSettings5Fill size={18} />
              </Nav.Link>
            </div>
            <div className="icons me-2 mt-1">
              <Nav.Link href="#action1">
                <BsBellFill size={15} />
              </Nav.Link>
            </div>

            <NavDropdown
              title={<img src={user} className='rounded' style={{width:'30px'}}/>}
              id="navbarScrollingDropdown"
            >
              <NavDropdown.Item href="#action3">Account</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navhead
