'use client';

import React from 'react';
import ShoppingProductsContext from './ShoppingContext';
import { ProductProtocol, ProductsResponseAPI } from '@/types/Product';
import { useProductsData } from '@/hooks/useProductsData';

function ContextWrapper(props: React.PropsWithChildren) {
  const [showCart, setShowCart] = React.useState(false);
  const [cartProducts, setCartProducts] = React.useState<ProductProtocol[]>([]);
  const [listProducts, setListProducts] = React.useState<ProductsResponseAPI>({ products: [] });
  const [responsePending, setResponsePending] = React.useState<boolean>(false);
  const products = useProductsData();

  React.useEffect(() => {
    setResponsePending(products.isPending);
    if (products.data) setListProducts(products.data);
  }, [products]);

  return (
    <ShoppingProductsContext.Provider
      value={{
        showCart,
        setShowCart,
        cartProducts,
        setCartProducts,
        listProducts,
        setListProducts,
        responsePending,
      }}
    >
      {props.children}
    </ShoppingProductsContext.Provider>
  );
}

export default ContextWrapper;
