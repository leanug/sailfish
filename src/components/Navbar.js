import React from 'react'
import { Link } from 'gatsby'
import { FaBars } from 'react-icons/fa'
import Links from './Links'
import styled from 'styled-components'
import { 
  setBreakpoint, 
  setTransition } from '../styles/'
import logo from '../assets/logo.svg'

const Navbar = ({ toggleSidebar }) => {
  return (
    <Nav>
        <NavCenter>
            <div className="logo-wrap">
                <img src={ logo } alt="logo" />
                <Link to="/">
                    <span className="logo">Sailfish</span>
                </Link>
            </div>
            <div className="nav-links">
                <Links styleClass="navbar-links" />
            </div>
            <button onClick={ toggleSidebar } className="toggle-btn">
                <FaBars />
            </button>
        </NavCenter>    
    </Nav>
  )
}

const Nav = styled.nav`
    display: flex;
    background: transparent;
    justify-content: center;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 10;
`

const NavCenter = styled.div`
  align-items: center;
  width: 90vw;
  max-width: 1440px;
  min-height: 8rem;
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;

  .logo-wrap {
    display: grid;
    justify-content: start;
    grid-auto-flow: column;
    align-items: center;
  }

  .logo-icon {
    font-size: 2.5rem;
    margin-right: 1rem;
    line-height: normal;
  }

  img {
    margin-right: 1.5rem;
    max-height: 3rem;
  }

  .logo {
    font-weight: 700;
  }

  .nav-links {
    display: none;
  }

  .icons {
    display: flex;
    align-items: center;
    justify-content: end;
  }

  .toggle-btn {
    background: transparent;
    border-color: transparent;
    cursor: pointer;
    font-size: 2rem;
    margin-left: 3rem;
    ${ setTransition() };
    width: min-content;
  }

  .toggle-btn:hover {
    opacity: 0.6;
  }

  @media screen and (min-width: ${ setBreakpoint.medium }) {
    & {
        display: grid;
        grid-template-columns: repeat( 2, 1fr );
        column-gap: 2rem;
        align-items: center;
    }

    .toggle-btn {
        display: none;
    }

    .nav-links {
        justify-content: end;
        display: flex;
    }
  }
`

export default Navbar
