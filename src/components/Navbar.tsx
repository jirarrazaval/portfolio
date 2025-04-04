import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Navbar = styled.nav`
  background: transparent;
  width: 80%;
  margin: 0 auto;
  padding: 1.2rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  border: 1.5px solid rgb(47, 34, 5);
  border-radius: 25px;
  position: relative;
  background: white;
  top: 0px;
`;

const Logo = styled(Link)`
  font-size: 1rem;
  font-weight: 700;
  text-decoration: none;
  color: #1a1a1a;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
`;

const NavLink = styled.a`
  color: #1a1a1a;
  text-decoration: none;
  margin: 0 1rem;
  font-weight: 500;
  font-size: 0.9rem;
  position: relative;

  &:hover {
    color: rgb(215, 58, 27);
    
    &::after {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      bottom: -5px;
      height: 3px;
      background-color: rgb(225, 66, 52);
      transition: all 0.3s ease;
    }
  }
`;

const NavbarComponent = () => {
  return (
    <Navbar>
      <Logo to="/">JAVONOSA 🧼</Logo>
      <NavLinks>
        <NavLink href="#about">About</NavLink>
        <NavLink href="#experience">Experience</NavLink>
        <NavLink href="#projects">Projects</NavLink>
        <NavLink href="#contact">Contact</NavLink>
      </NavLinks>
    </Navbar>
  );
};

export default NavbarComponent; 