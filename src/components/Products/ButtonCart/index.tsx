import CartProductsSVG from '@/assets/CartProductsSVG';
import ShoppingProductsContext from '@/context/ShoppingContext';
import React from 'react';
import styled from 'styled-components';

const ButtonCart = styled.button`
  width: 90px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border: none;
  border-radius: 8px;
  gap: 16px;
  cursor: pointer;
`;

const CountProducts = styled.p`
  font-weight: 700;
  font-size: 18px;
`;

function ButtonCartProducts() {
  const { cartProducts, setShowCart } = React.useContext(ShoppingProductsContext);
  return (
    <ButtonCart onClick={() => setShowCart(true)}>
      <CartProductsSVG />
      <CountProducts>{cartProducts.length}</CountProducts>
    </ButtonCart>
  );
}

export default ButtonCartProducts;
