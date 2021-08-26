import React, { useState } from "react";
import styled from "styled-components";
import Theme from '../theme/Theme'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav>
      <Logo href="">
        <span>Crowdfund</span>
      </Logo>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
        <MenuLink href="">About</MenuLink>
        <MenuLink href="">Discover</MenuLink>
        <MenuLink href="">Get Started</MenuLink>
      </Menu>
    </Nav>
  );
};

export default Header;

const MenuLink = styled.a`
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: white;
  transition: all 0.3s ease-in;
  font-size: ${Theme.fontSize};
  &:hover {
    color: #7b7fda;
  }

`;

const Nav = styled.div`
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  background: white;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background-image: ${Theme.HeroImage.mobile};
  background-position: center top;
  height: 50%;
  background-repeat: no-repeat;
  background-size: cover;



  @media ${Theme.mediaQueries.desktop} {
    background-image: ${Theme.HeroImage.desktop};
    background-position: center top;
    background-repeat: no-repeat;
    height: 50%;
    background-size: cover;
  }
`;

const Logo = styled.a`
  padding: 4rem 0;
  color: white;
  text-decoration: none;

  span {
    font-weight: 700;
    font-size: 1.8rem;
  }
`;

const Menu = styled.div`
    padding:4rem 0;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  position: relative;
  @media (max-width: 768px) {
      margin-top:-4rem;
    overflow: hidden;
    display:${({isOpen}) => (!isOpen ? 'flex' : 'none')};
    flex-direction: column;
    border-radius:15px;
    background:${Theme.neutral.dark_gray};
    max-height: ${({ isOpen }) => (isOpen ? "200px" : "0")};
    transition: max-height 0.3s ease-in;
    width: 100%;
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 2px;
    width: 25px;
    background: white;
    margin-bottom: 4px;
    border-radius: 5px;
  }
  @media (max-width: 768px) {
    padding:4rem 0;
    display: flex;
  }
`;
