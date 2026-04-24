export const getProducts = async () => {
  const res = await fetch("/data/products.json");
  return res.json();
};

export const getCategories = async () => {
  const res = await fetch("/data/categories.json");
  return res.json();
};
