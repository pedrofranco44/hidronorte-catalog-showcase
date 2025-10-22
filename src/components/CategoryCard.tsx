import { useNavigate } from "react-router-dom";
import { Card } from "./ui/card";

interface CategoryCardProps {
  title: string;
  image: string;
  path: string;
}

export const CategoryCard = ({ title, image, path }: CategoryCardProps) => {
  const navigate = useNavigate();

  return (
    <Card
      className="overflow-hidden cursor-pointer group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary"
      onClick={() => navigate(path)}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <h3 className="absolute bottom-4 left-4 text-white font-bold text-lg">
          {title}
        </h3>
      </div>
    </Card>
  );
};
