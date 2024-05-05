import ShoppingBagSVG from '@/assets/ShoppingBagSVG';
import Image from 'next/image';
import React from 'react';
import { CardProduct, PriceLabel, NameLabel, DescriptionLabel, BuyButton } from './style';
import { ProductProtocol } from '@/types/Product';
import ShoppingProductsContext from '@/context/ShoppingContext';
import { formatPrice } from '@/utils/formatPrices';

function ProductCard({ product }: { product: ProductProtocol }) {
  const { setCartProducts, cartProducts } = React.useContext(ShoppingProductsContext);

  return (
    <CardProduct>
      <Image
        src={product.photo}
        alt={product.name}
        width={180}
        height={138}
        quality={50}
        sizes="100vw"
      />

      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
        <NameLabel>{product.name}</NameLabel>
        <PriceLabel>{formatPrice(product.price)}</PriceLabel>
      </div>
      <DescriptionLabel>{product.description}</DescriptionLabel>
      <BuyButton
        onClick={() => {
          setCartProducts([...cartProducts, product]);
        }}
      >
        <ShoppingBagSVG />
        <p>COMPRAR</p>
      </BuyButton>
    </CardProduct>
  );
}

export default ProductCard;
