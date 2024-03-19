import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import './common.css'

import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Common() {

    let currentTime = new Date();
    let options = { timeStyle: 'short', hour12: true };
    let timeString = currentTime.toLocaleTimeString('en-US', options);
  

  return (
    <>
    <div className='box'>
        <h6 className='time'>{timeString}</h6>
       <Navbar key={false} expand={false} bg='primary' data-bs-theme='dark'>
          <Container fluid>
            <Navbar.Brand href="#"><img src='https://dragonflywellbeing.co.uk/wp-content/uploads/2021/02/Dragonfly-Wellbeing-Logo.png' alt='logo' width={130} id="logo" /></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${false}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${false}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${false}`}
              placement="end"
              style={{ backgroundColor: "lavenderblush" }}
            >
              <Offcanvas.Header closeButton style={{ backgroundColor: "lemonchiffon" }}>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${false}`}>
                <img src='https://dragonflywellbeing.co.uk/wp-content/uploads/2021/02/Dragonfly-Wellbeing-Logo.png' alt='logo' width={130} />
                  
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                <div className='comnprofile'>
                    <div className='profilepic'>
                      <i class="fa-solid fa-user" style={{ color: "#c0bfbc", }}></i>
                    </div>
                    <h5>Ajil</h5>
                  </div><hr></hr>
                  <div className='slidenav'>
                    {/* <Link to={`/msg`}> */}
                    <Nav.Link href="#action1">Home</Nav.Link>
                    {/* </Link> */}
                    </div>
                  <div className='slidenav'><Nav.Link href="#action2">Contact</Nav.Link></div>
                  <div className='slidenav'><Nav.Link href="#action3">About Us</Nav.Link></div>
                  <div className='slidenav'><Nav.Link href="#action4">Issue</Nav.Link></div>
                  <div className='slidenav'><Nav.Link href="#action5">Help</Nav.Link></div>

                  <Nav.Link href="#action2">Link</Nav.Link>
                  <NavDropdown
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand-${false}`}
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <div className='socialmedias'>
                  <hr></hr>
                  <a href='#'><i class="fa-brands fa-facebook"></i></a>
                  <a href='#'><i class="fa-brands fa-instagram"></i></a>
                  <a href='#'><i class="fa-brands fa-x-twitter"></i></a>
                  <a href='#'><i class="fa-brands fa-linkedin-in"></i></a>
                </div>
                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
       </div>
     
    </>
  );
}

export default Common;