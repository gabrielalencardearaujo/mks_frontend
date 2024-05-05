'use client';
import { ProductProtocol, ProductsResponseAPI } from '@/types/Product';
import React, { Dispatch, SetStateAction } from 'react';

type ShoppintContext = {
  showCart: boolean;
  setShowCart: Dispatch<SetStateAction<boolean>>;
  cartProducts: ProductProtocol[];
  setCartProducts: React.Dispatch<React.SetStateAction<ProductProtocol[]>>;
  listProducts: ProductsResponseAPI;
  setListProducts: React.Dispatch<React.SetStateAction<ProductsResponseAPI>>;
  responsePending: boolean;
};

const ShoppingProductsContext = React.createContext<ShoppintContext>({
  showCart: false,
  setShowCart: () => {},
  cartProducts: [],
  setCartProducts: () => {},
  listProducts: { products: [] },
  setListProducts: () => {},
  responsePending: false,
});

export default ShoppingProductsContext;
