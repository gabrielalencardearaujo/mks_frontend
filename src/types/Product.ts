export type ProductProtocol = {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: string;
  createdAt: Date;
  updatedAt: Date;
  count?: number;
};

export type ProductsResponseAPI = {
  products: ProductProtocol[];
};
