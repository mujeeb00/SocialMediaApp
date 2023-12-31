import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './Images/logo.svg';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { TbBorderRadius, TbMessage } from 'react-icons/tb';
import { RiSettings5Fill } from 'react-icons/ri';
import { BsBellFill } from 'react-icons/bs';
import user from './Images/user.jpg';
import { database } from '../Authentication/firebaseconfig';
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";



const Navhead = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };
  
  const history = useNavigate()

    const handleClick = () =>{
        signOut(database).then(val=>{
            console.log(val,"val")
            history('/')
        })
    }
  return (
    <>
      <Navbar 
        style={{ backgroundColor: '#141519' }}
        expand="md"
        variant="dark"
        sticky="top" 
      >
        <Container>
          <Navbar.Brand href="#">
            <img src={logo} alt="" />
          </Navbar.Brand>
          <Form className="d-flex ms-auto">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
          </Form>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto my-lg-0" navbarScroll>
              <NavDropdown title="Demo" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3"><Link to="/home">  Home default</Link></NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Home classic
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Home post
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Pages" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Albums</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                celeberations
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Messaging               
                   </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="Account"
                id="navbarScrollingDropdown"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                show={isOpen}
              >
                <NavDropdown.Item >
                  <Link className="text-dark mt-1" to='/createpage'>
                  create a page
                  </Link>
                </NavDropdown.Item>
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
                <NavDropdown.Item href="#action5">Error 404</NavDropdown.Item>
                <NavDropdown.Item href="#action5">Offline</NavDropdown.Item>
                <NavDropdown.Item href="#action5">
                  Privacy & Terms
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#action1 ">Network</Nav.Link>

              {/* Icons */}
              <div className="icons ms-1 me-2  ">
                <Nav.Link href="#action1">
                  <TbMessage size={19} />
                </Nav.Link>
              </div>
              <div className="icons me-2 mt-2">
              <Link to="/settings" style={{color:'silver'}} >
                  <RiSettings5Fill size={19} />
                </Link>
              </div>
              <div className="icons me-2 ">
                <Nav.Link href="#action1">
                  <BsBellFill size={15} />
                </Nav.Link>
              </div>

              <NavDropdown
                title={
                  <img
                    src={user}
                    className="rounded"
                    style={{ width: '30px' }}
                  />
                }
                id="navbarScrollingDropdown"
              >
                <NavDropdown.Item href="#action3">Account</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                <Link to="/settings" className='text-dark' >
                 Settings
                </Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5" >
                <button className='btn btn-outline-danger' onClick={handleClick}>SignOut</button>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navhead;
