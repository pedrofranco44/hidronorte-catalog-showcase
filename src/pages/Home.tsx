import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { CategoryCard } from "@/components/CategoryCard";
import { BrandsCarousel } from "@/components/BrandsCarousel";
import pipesImg from "@/assets/pipes.jpg";
import fittingsImg from "@/assets/fittings.jpg";
import faucetsImg from "@/assets/faucets.jpg";
import wiresImg from "@/assets/wires.jpg";
import outletsImg from "@/assets/outlets.jpg";
import bulbsImg from "@/assets/bulbs.jpg";
import pliersImg from "@/assets/pliers.jpg";
import wrenchesImg from "@/assets/wrenches.jpg";
import tapesImg from "@/assets/tapes.jpg";
import refillsImg from "@/assets/refills.jpg";

const categories = [
  {
    title: "Materiais Hidráulicos",
    subcategories: [
      { name: "Tubos", image: pipesImg, path: "/produtos?category=hydraulic&type=pipes" },
      { name: "Conexões", image: fittingsImg, path: "/produtos?category=hydraulic&type=fittings" },
      { name: "Torneiras", image: faucetsImg, path: "/produtos?category=hydraulic&type=faucets" },
    ],
  },
  {
    title: "Materiais Elétricos",
    subcategories: [
      { name: "Fios e Cabos", image: wiresImg, path: "/produtos?category=electrical&type=wires" },
      { name: "Tomadas e Interruptores", image: outletsImg, path: "/produtos?category=electrical&type=outlets" },
      { name: "Lâmpadas", image: bulbsImg, path: "/produtos?category=electrical&type=bulbs" },
    ],
  },
  {
    title: "Ferramentas",
    subcategories: [
      { name: "Alicates", image: pliersImg, path: "/produtos?category=tools&type=pliers" },
      { name: "Chaves", image: wrenchesImg, path: "/produtos?category=tools&type=wrenches" },
      { name: "Trenas", image: tapesImg, path: "/produtos?category=tools&type=tapes" },
    ],
  },
  {
    title: "Refis para Purificadores",
    subcategories: [
      { name: "Planeta Água", image: refillsImg, path: "/produtos?category=refills&brand=planeta-agua" },
      { name: "Lorenzetti", image: refillsImg, path: "/produtos?category=refills&brand=lorenzetti" },
      { name: "Outros", image: refillsImg, path: "/produtos?category=refills&brand=outros" },
    ],
  },
];

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hidronorte Comercial
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Sua loja especializada em materiais hidráulicos, elétricos e ferramentas
          </p>
        </div>
      </section>

      {/* Categories Section */}
      <section className="container mx-auto px-4 py-16">
        {categories.map((category, index) => (
          <div key={index} className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-primary border-b-4 border-primary pb-2 inline-block">
              {category.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {category.subcategories.map((sub, subIndex) => (
                <CategoryCard
                  key={subIndex}
                  title={sub.name}
                  image={sub.image}
                  path={sub.path}
                />
              ))}
            </div>
          </div>
        ))}
      </section>

      <BrandsCarousel />
      <Footer />
    </div>
  );
};

export default Home;
