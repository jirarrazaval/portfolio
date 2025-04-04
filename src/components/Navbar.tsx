import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Navbar = styled.nav`
  background: transparent;
  width: 70%;
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
  top: 10px;
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

  &:hover {
    color: #666; /* Color al pasar el mouse */
  }
`;

const NavbarComponent = () => {
  return (
    <Navbar>
      <Logo to="/">JAVO</Logo>
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