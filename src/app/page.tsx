'use client';

import Footer from '@/components/Footer';
import GridProducts from '@/components/GridProducts';
import Header from '@/components/Header';
import ContextWrapper from '@/context/ShoppingWrapper';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';

const client = new QueryClient();

export default function Home() {
  return (
    <main>
      <QueryClientProvider client={client}>
        <ContextWrapper>
          <Header />
          <GridProducts />
          <Footer />
        </ContextWrapper>
      </QueryClientProvider>
    </main>
  );
}
