import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../images/logo1.png'

const Header = () => {
    const navigate = useNavigate();
    const navigateLogin =()=>{
        navigate('/login');
    }
    return (
        <div>
            <Navbar className='d-flex justify-content-between' bg="light" variant="light">
                <div>
                    <Container className='d-flex'>
                    <Navbar.Brand href="#home">
                        <img className='w-50' src={logo} alt="" />
                    </Navbar.Brand>
                    <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    {/* <Nav.Link  as={Link} href="">Brand Info</Nav.Link> */}
                    
                    <Nav.Link href="#pricing">Services</Nav.Link>
                    </Nav>
                    </Container>
                </div>
                <div className='me-5 d-flex justify-content-between decoration-none'>
                    <Link className='text-decoration-none me-3' to={'/login'}>Login</Link>
                    <Link className='text-decoration-none' to={'/signup'}>Signup</Link>
                    
                </div>
            </Navbar>
        </div>
    );
};

export default Header;