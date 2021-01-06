import React, { useState } from 'react';
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
    DropdownItem,
    NavbarText,
    Container,
    Form,
    Button,
    Input
  } from 'reactstrap';import { Link } from "react-router-dom";
import './header.scss';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch } from '@fortawesome/free-solid-svg-icons';
//image
import logoHeader from './image/logo.png';
import logoHeaderMobile from './image/logo-mobile.png';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isClickSearch, setIsClickSearch] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (
        <Navbar className="header fixed-top" light expand="lg">
            <Container fluid>
                <NavbarBrand href="/">
                <picture>
                    <source media="(min-width:768px)" srcSet={logoHeader}/>
                    <source media="(max-width:767px)" srcSet={logoHeaderMobile}/>
                    <img src="img_orange_flowers.jpg" className="logoHeader" alt="Flowers"/>
                </picture>
                </NavbarBrand>
                <NavbarToggler className="btn-toggle" onClick={toggle}>
                    <i className="fas fa-bars"></i>
                </NavbarToggler>
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem className="px-2">
                            <NavLink tag={Link} className="nav-link" to="/">Trang Chủ</NavLink>
                        </NavItem>
                        <NavItem  className="px-2">
                            <NavLink tag={Link} className="nav-link" to="/fimlodd">Phim Mới</NavLink>
                        </NavItem>
                        <NavItem className="px-2">
                            <NavLink tag={Link} to="/fimlodd">Phim Bộ</NavLink>
                        </NavItem>
                        <NavItem className="px-2">
                            <NavLink tag={Link} to="/fimlodd">Phim Lẻ</NavLink>
                        </NavItem>
                        <NavItem className="px-2">
                            <NavLink tag={Link} to="/fimlodd">Phim Chiếu Rạp</NavLink>
                        </NavItem>
                        <NavItem className="px-2">
                            <NavLink tag={Link} to="/fimlodd">Thiếu Nhi </NavLink>
                        </NavItem>
                        <NavItem className="px-2">
                            <NavLink tag={Link} >Anime</NavLink>
                        </NavItem>
                        {/* <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
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
                        </DropdownMenu>
                        </UncontrolledDropdown> */}
                    </Nav>
                    <Nav navbar>
                        <NavItem className="searchbar">
                            <Input className="search_input" placeholder="Tìm kiếm..."/>
                            {/* co the dung tag={Link} trong NavLink */}
                            <NavLink><i className="fas fa-search"></i></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="pl-0" tag={Link} to="/login" >Đăng Nhập</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
        </Container>
      </Navbar>
    );
}

export default Header;
