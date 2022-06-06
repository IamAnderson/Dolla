import React, { useEffect } from 'react'
import { Nav, NavbarContainer, NavLogo } from './NavbarElements'
import { useState } from 'react'
import {NavMenu, NavItem, NavLinks, MobileIcon, NavBtn} from './NavbarElements'
import {FaBars} from 'react-icons/fa'
import { NavBtnLink } from './NavbarElements'
import { animateScroll as scroll } from 'react-scroll'
import { IconContext } from 'react-icons'

//import { Link } from 'react-router-dom'

const Navbar = ({toggle}) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () =>{
    if(window.scrollY >= 80) {
      setScrollNav(true);
    } else{
      setScrollNav(false);
    }
  };

  const toggleHome = () =>{
    scroll.scrollToTop();
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);


  return (
  <>
    <IconContext.Provider value={{color: '#fff'}}>  
      <Nav scrollNav={scrollNav}>
          <NavbarContainer>
              <NavLogo to="/" onClick={toggleHome}>dolla</NavLogo>
              <MobileIcon onClick={toggle}>
                <FaBars />
              </MobileIcon>
              <NavMenu>
                <NavItem>
                  <NavLinks to='about'
                  smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass='active'
                  >About</NavLinks>
                </NavItem>

                <NavItem>
                  <NavLinks to='discover'
                    smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass='active'
                  >Discover</NavLinks>
                </NavItem>

                <NavItem>
                  <NavLinks to='services'
                    smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass='active'
                  >services</NavLinks>
                </NavItem>

                <NavItem>
                  <NavLinks to='signup'
                    smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass='active'
                  >Sign Up</NavLinks>
                </NavItem>
              </NavMenu>
              <NavBtn>
                <NavBtnLink to="/"
                  smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass='active'
                >Sign In</NavBtnLink>
              </NavBtn>
          </NavbarContainer>
      </Nav>
    </IconContext.Provider>
  </> 
  )
}

export default Navbar