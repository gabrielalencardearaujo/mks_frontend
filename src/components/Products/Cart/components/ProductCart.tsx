import ShoppingProductsContext from '@/context/ShoppingContext';
import { ProductProtocol } from '@/types/Product';
import { formatPrice } from '@/utils/formatPrices';
import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: white;
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  place-items: center;
  padding: 20px 24px;
  border-radius: 8px;
  box-shadow: -2px 2px 10px rgb(0 0 0 / 0.05);
  width: 380px;
`;

const BtnRemoveProduct = styled.div`
  position: absolute;
  right: -6px;
  top: -5px;
  background-color: black;
  color: white;
  width: 20px;
  height: 20px;
  border-radius: 100%;
  display: grid;
  place-items: center;
  font-size: 10px;
  cursor: pointer;
`;

const QuantProduct = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  place-items: center;
  margin: auto;
  background-color: #ffffff;
  border: 0.3px solid #e5e5e5;
  filter: drop-shadow(0px 1px 0px #efefef) drop-shadow(0px 1px 0.5px rgba(239, 239, 239, 0.5));
  width: 50px;
  height: 19px;
  top: 44px;
  left: 212px;
  gap: 0px;
  border-radius: 4px;
  opacity: 0px;
  font-size: 10px;
`;

const BtnQuant = styled.div`
  background-color: white;
  font-size: 14px;
  width: 14px;
  border: none;
  display: grid;
  place-items: center;
  cursor: pointer;
`;

const PriceUnit = styled.div`
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
  text-align: center;
`;

function ProductCart({ product, count }: { product: ProductProtocol; count: object }) {
  const { cartProducts, setCartProducts } = React.useContext(ShoppingProductsContext);

  const handleRemove = () => {
    const newArray = [...cartProducts];
    for (const idx in newArray) {
      if (newArray[idx].id === product.id) {
        newArray.splice(+idx, 1);
        setCartProducts(newArray);
        return;
      }
    }
  };
  const handleAdd = () => {
    setCartProducts([...cartProducts, product]);
  };

  return (
    <Container>
      <BtnRemoveProduct
        onClick={() => setCartProducts(cartProducts.filter((prod) => prod.id !== product.id))}
      >
        X
      </BtnRemoveProduct>
      <Image src={product.photo} width={68} height={57} quality={40} alt={product?.name} />
      <p style={{ fontSize: '13px' }}>{product.name}</p>
      <QuantProduct>
        <BtnQuant onClick={handleRemove}>-</BtnQuant>
        {count[product.name]}
        <BtnQuant onClick={handleAdd}>+</BtnQuant>
      </QuantProduct>
      <PriceUnit>{formatPrice(product.price)}</PriceUnit>
    </Container>
  );
}

export default ProductCart;
