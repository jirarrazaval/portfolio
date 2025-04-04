import styled from '@emotion/styled';

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #333;
  color: white;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const NavLink = styled.a`
  margin: 0 1rem;
  text-decoration: none;
  color: white;
  font-size: 1rem;

  &:hover {
    text-decoration: underline;
    color: brown;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin: 0.5rem 0;
    display: none; /* Hide links by default on mobile */
  }
`;

export const Hamburger = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const MobileMenu = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;
