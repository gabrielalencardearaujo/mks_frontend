'use client';

import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #eeeeee;
  display: grid;
  place-items: center;
  font-size: 12px;
  font-weight: 400;
  line-height: 14.63px;
  height: 34px;
`;

function Footer() {
  return <FooterContainer>MKS sistemas © Todos os direitos reservados</FooterContainer>;
}

export default Footer;
