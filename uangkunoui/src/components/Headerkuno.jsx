import React, { Component } from 'react';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';
    
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Cookies from 'universal-cookie';
import { onUserLogout, keepLogin } from '../actions';

const cookies = new Cookies();

class Headerkuno extends Component {

    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }

      onLogOutSelect = () => {
        this.props.onUserLogout();
        cookies.remove('Ferguso');
    }

    render() {
      if(this.props.username === "") {
        return(
            <div>
                <Navbar color="light" light expand="md">
          {/* <NavbarBrand href="/">reactstrap</NavbarBrand> */}
          <NavbarBrand href="/">{this.props.navBrand}</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>

            <Nav className="ml-auto" navbar>
              <NavItem>
                {/* <NavLink href="/components/">Components</NavLink> */}
                <Link to="/popoklist"><NavLink>Browse Popok</NavLink></Link>
              </NavItem>
              <NavItem>
                {/* <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink> */}
                <Link to="/register"><NavLink>Register</NavLink></Link>
              </NavItem>
              <NavItem>
                <Link to="/login"><NavLink>Login</NavLink></Link>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                {/* <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu> */}
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
            </div>
        )
    }
    return (
      <div>
         <Navbar color="light" light expand="md">
                <NavbarBrand href="/">{this.props.navBrand}</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/popoklist">Browse Popok</NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Hello, {this.props.username}
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    <Link to="/managepopok">Manage Popok</Link>
                                </DropdownItem>
                                <DropdownItem>
                                    <Link to="/cart">Cart</Link>
                                </DropdownItem>
                                <DropdownItem>
                                    <Link to="/history">History</Link>
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem onClick={this.onLogOutSelect}>
                                    Logout
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                </Collapse>
                </Navbar>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return { username: state.auth.username }
}

export default connect(mapStateToProps, { onUserLogout, keepLogin })(Headerkuno);
