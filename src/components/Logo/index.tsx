import React from 'react';
import styled from 'styled-components';

const LogoContainer = styled.div`
  font-size: 40px;
  line-height: 30px;
  font-weight: 600;
  display: flex;
  gap: 10px;
  align-items: end;
  justify-content: end;
`;

function Logo() {
  return (
    <LogoContainer>
      <p>MKS</p>
      <p style={{ fontSize: '20px', lineHeight: '20px', fontWeight: 300, alignSelf: 'end' }}>
        Sistemas
      </p>
    </LogoContainer>
  );
}

export default Logo;
