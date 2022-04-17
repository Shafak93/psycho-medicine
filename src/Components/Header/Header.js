import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/logo1.png'

const Header = () => {
    const [user] = useAuthState(auth)
    const handleSignOut = ()=>{
        signOut(auth);
        
      }
    return (
        <div>
            <Navbar className='d-flex justify-content-between align-iems-center' bg="light" variant="light">
                <div>
                    <Container className='d-flex align-items-center'>
                    <Navbar.Brand as={Link} to="/">
                        <img className='w-50' src={logo} alt="" />
                    </Navbar.Brand>
                    <Nav className="me-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link  as={Link} to='banner'>Brand Info</Nav.Link>
                    
                    <Nav.Link href="#pricing">Services</Nav.Link>
                    </Nav>
                    </Container>
                </div>
                <div className='me-5 d-flex justify-content-between decoration-none'>
                <Nav>
                        {
                            user 
                            ? <Nav.Link as={Link} to='login' onClick={handleSignOut}>Sign out</Nav.Link>
                            :
                            <div className='me-5 d-flex justify-content-between'>
                                <Nav.Link as={Link} to="login">
                                    Login
                                </Nav.Link>
                                <Nav.Link as={Link} to="signup">
                                    Signup
                                </Nav.Link>
                            </div>
                        }
                 </Nav>
                    
                </div>
            </Navbar>
        </div>
    );
};

export default Header;