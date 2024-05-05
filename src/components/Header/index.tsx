'use client';
import React from 'react';
import styled from 'styled-components';
import Logo from '../Logo';
import ShoppingProductsContext from '@/context/ShoppingContext';
import CartContainer from '../Products/Cart';
import ButtonCartProducts from '../Products/ButtonCart';

const HeaderContainer = styled.header`
  background-color: #0f52ba;
  width: 100%;
  height: 101px;
`;

const HeaderDiv = styled.div`
  width: 89.3%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  color: white;
  align-items: center;
  margin: 0 auto;
`;

function Header() {
  const { showCart } = React.useContext(ShoppingProductsContext);

  return (
    <HeaderContainer>
      {showCart && <CartContainer />}
      <HeaderDiv>
        <Logo />
        <ButtonCartProducts />
      </HeaderDiv>
    </HeaderContainer>
  );
}

export default Header;
