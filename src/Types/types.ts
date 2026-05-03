export type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
  categoryId: string;
};

export type Category = {
  id: string;
  name: string;
  image: string;
};

export type CartItem = Product & {
  quantity: number;
};
