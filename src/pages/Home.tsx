import { Link } from "react-router-dom";

function Home({ categories }) {
  interface Category {
    id: string;
    name: string;
    image: string;
  }

  const gradients: Record<string, string> = {
    electronics: "bg-grad-electronics",
    clothing: "bg-grad-clothing",
    books: "bg-grad-books",
    furniture: "bg-grad-furniture",
    outdoor: "bg-grad-outdoor",
    games: "bg-grad-games",
  };

  return (
    <main className="flex-1 px-10 py-12 bg-white">
      <h1 className="mb-10 text-5xl font-semibold text-center text-gray-700 font-heading">
        Categories
      </h1>
      <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
        {categories.map((category: Category) => {
          return (
            <Link
              to={`category/${category.name}`}
              key={category.id}
              className="relative flex items-center justify-center overflow-hidden text-3xl font-semibold text-white transition duration-300 cursor-pointer aspect-square rounded-xl hover:scale-105 hover:shadow-xl font-heading"
            >
              <img
                src={category.image}
                alt={category.name}
                className="absolute inset-0 object-cover w-full h-full "
              />
              <div
                className={`absolute inset-0 ${
                  gradients[category.id] || "bg-grad-default"
                } opacity-50`}
              />
              <span className="relative z-10 drop-shadow-md">
                {category.name}
              </span>
            </Link>
          );
        })}
      </div>
    </main>
  );
}

export default Home;
