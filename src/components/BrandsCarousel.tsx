import { useEffect, useState } from "react";

const brands = [
  "Lorenzetti",
  "Weg",
  "Fortlev",
  "Astra",
  "Kian",
  "LG Metais",
  "Fabrimar",
  "Planeta Água",
  "Censi",
];

export const BrandsCarousel = () => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => (prev - 1) % (brands.length * 200));
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
          Marcas que Trabalhamos
        </h2>
        <div className="overflow-hidden relative">
          <div
            className="flex space-x-12 whitespace-nowrap"
            style={{ transform: `translateX(${position}px)` }}
          >
            {[...brands, ...brands, ...brands].map((brand, index) => (
              <div
                key={index}
                className="inline-flex items-center justify-center bg-white rounded-lg px-8 py-6 min-w-[200px] shadow-md"
              >
                <span className="text-xl font-semibold text-primary">
                  {brand}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
