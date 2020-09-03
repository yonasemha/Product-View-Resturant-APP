import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/authentication';
import { withRouter } from 'react-router-dom';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';


class myNavbar extends Component {

    onLogout(e) {
        e.preventDefault();
        this.props.logoutUser(this.props.history);
    }

    render() {
        const { isAuthenticated, user } = this.props.auth;
        const authLinks = (

            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link className="nav-link" to="/adminList">AdminList</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/addtomenu">Admin Add Menu</Link>
                </li>
                <li>
                    <a href="" className="nav-link" onClick={this.onLogout.bind(this)}>
                        <img src={user.avatar} alt={user.name} title={user.name}
                            className="rounded-circle"
                            style={{ width: '25px', marginRight: '5px' }} />
                        Logout
                </a>
                </li>
            </ul>
        )

        const guestLinks = (
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link className="nav-link text-white text-uppercase ml-6" to="/comment">Review Us</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-white text-uppercase ml-6" to="/menulist">Menu List</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-white text-uppercase ml-6" to="/register">Sign Up</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-white text-uppercase ml-6" to="/login">Sign In</Link>
                </li>
            </ul>
        )
        return (
            <Navbar expand="lg" variant="dark" bg="primary">
                <Navbar.Brand className="nav-link text-white text-uppercase ml-6" to="#home">Eritrean-restaurant</Navbar.Brand>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    {isAuthenticated ? authLinks : guestLinks}
                </div>
            </Navbar>

        )
    }
}
Navbar.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps, { logoutUser })(withRouter(myNavbar));