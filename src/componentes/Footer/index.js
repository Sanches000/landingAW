import React from 'react';
import styled from 'styled-components';
import { FaInstagram } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: #343a40;
  color: white;
  text-align: center;
  padding: 20px 0;
`;

const SocialIcons = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
    color: white;
    margin: 0 10px;
    font-size: 24px;
`;

const Copyright = styled.p`
    margin-top: 10px;
`;

function Footer () {
  return (
    <FooterContainer>
      <SocialIcons>
        <a href="#" aria-label="Instagram"><FaInstagram /></a>
      </SocialIcons>
      <Copyright>© 2025 Copyright: almeidawerneck.com.br</Copyright>
    </FooterContainer>
  );
};

export default Footer;