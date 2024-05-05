'use client';

import ShoppingProductsContext from '@/context/ShoppingContext';
import React from 'react';
import ProductCart from './components/ProductCart';
import { ProductProtocol } from '@/types/Product';
import {
  BtnCloseCartModal,
  BtnPurchase,
  Container,
  ContentProd,
  FormCart,
  HeadeCartModal,
  TitleCartContainer,
  TotalPriceCart,
} from './styles';

function CartContainer() {
  const { cartProducts, setShowCart } = React.useContext(ShoppingProductsContext);
  const [filteredCart, setFilteredCart] = React.useState<ProductProtocol[]>([]);
  const [count, setCount] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    const countProducts = {};
    cartProducts.forEach((prod) => {
      if (countProducts[prod.name]) {
        countProducts[prod.name]++;
      } else {
        countProducts[prod.name] = 1;
      }
    });

    const filterCarts = new Set(cartProducts);
    const newArrayFiltered: ProductProtocol[] = Array.from(filterCarts);
    setFilteredCart([...newArrayFiltered]);
    setCount(countProducts);
  }, [cartProducts]);

  const handleSubmit = () => {
    setLoading(true);

    // ...
    // Codigo para realizar o fetch method POST para api
    // ...

    console.log(cartProducts);
    console.log(loading);
    setLoading(false);
  };

  return (
    <Container>
      <HeadeCartModal>
        <TitleCartContainer>Carrinho de compras</TitleCartContainer>
        <BtnCloseCartModal onClick={() => setShowCart(false)}>X</BtnCloseCartModal>
      </HeadeCartModal>
      <FormCart action={handleSubmit}>
        <ContentProd>
          {filteredCart.length > 0
            ? filteredCart.map((prod) => <ProductCart key={prod.id} product={prod} count={count} />)
            : ''}
        </ContentProd>
        <TotalPriceCart>
          <p>Total:</p>
          <p>R${cartProducts.reduce((acc, prod) => acc + +prod.price, 0)}</p>
        </TotalPriceCart>
        <BtnPurchase>Finalizar Compra</BtnPurchase>
      </FormCart>
    </Container>
  );
}

export default CartContainer;
