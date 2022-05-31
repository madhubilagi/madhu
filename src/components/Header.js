import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

const Header = () => {
    return (
        <div>
            <Router>
                <div>
                    <div>
                        <Container>
                            <Row className="align-items-center">
                                <Col sm={2}><a className="logo"></a></Col>
                                <Col sm={8} className="d-flex justify-content-end">
                                    <nav className="navbar navbar-expand-lg navbar-light ">
                                        <ul className="navbar-nav mr-auto">
                                            <li><Link to={'/'} className="nav-link"> Home </Link></li>
                                            <li><Link to={'/about'} className="nav-link">About</Link></li>
                                            <li><Link to={'/contact'} className="nav-link">Contact</Link></li>
                                        </ul>
                                    </nav>
                                </Col>
                            </Row>
                        </Container>
                      
                        <Switch>
                            <Route 
                            exact path='/' 
                            component={Home} 
                            />
                            <Route 
                            path='/about' 
                            component={About} 
                            />
                            <Route 
                            path='/contact' 
                            component={Contact} 
                            />
                            
                        </Switch>
                        </div>
                    </div>
        </Router>
      </div>
    );
};

export default Header;