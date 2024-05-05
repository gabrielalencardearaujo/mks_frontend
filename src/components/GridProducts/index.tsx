'use client';

import React, { useContext } from 'react';
import ProductCard from '../Products';
import ShoppingProductsContext from '@/context/ShoppingContext';
import { Grid } from './styles';
import { Skeleton } from '@mui/material';

function GridProducts() {
  const { listProducts, responsePending } = useContext(ShoppingProductsContext);
  const CardsSkeleton = new Array(8).fill('');

  return (
    <Grid>
      {responsePending
        ? CardsSkeleton.map((item, index) => (
            <Skeleton key={index} variant="rounded" animation="wave" width={218} height={285}>
              {item}
            </Skeleton>
          ))
        : listProducts.products?.map((item) => <ProductCard key={item.id} product={item} />)}
    </Grid>
  );
}

export default GridProducts;
