import React from 'react';
import styled from 'styled-components';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { IoLogoReact } from "react-icons/io5";

const FooterContainer = styled.footer`
  background-color: #072b52;
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

function Footer() {
  return (
    <FooterContainer>
      <SocialIcons>
        <a href="https://www.google.com.br" aria-label="Instagram"><FaInstagram /></a>
        <a href="https://www.linkedin.com/company/almeida-werneck-2005" aria-label="LinkedIn"><FaLinkedin /></a>
      </SocialIcons>
      <Copyright>© 2025 Copyright: almeidawerneck.com.br</Copyright>
      <p>Built with <IoLogoReact /></p>
    </FooterContainer>
  );
}

export default Footer;
