import ProductCardSkeleton from "./ProductCardSkeleton";

export default function Loading() {
  return (
    <main className="px-6 py-10 mx-auto max-w-7xl">
      <div className="grid gap-5 grid-cols-[repeat(auto-fit,minmax(180px,1fr))]">
        {Array.from({ length: 8 }).map((_, i) => (
          <ProductCardSkeleton key={i} />
        ))}
      </div>
    </main>
  );
}
