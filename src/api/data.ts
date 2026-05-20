// API fake delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const getProducts = async () => {
  await delay(1500);
  if (!navigator.onLine) {
    throw new Error("Please, check your internet connection.");
  }
  const res = await fetch("/data/products.json");
  if (!res.ok) {
    throw new Error(`Server error: failed to load products (${res.status})`);
  }
  return res.json();
};

export const getCategories = async () => {
  await delay(1000);
  if (!navigator.onLine) {
    throw new Error("Please, check your internet connection.");
  }
  const res = await fetch("/data/categories.json");
  if (!res.ok) {
    throw new Error(`Server error: failed to load categories (${res.status})`);
  }
  return res.json();
};
