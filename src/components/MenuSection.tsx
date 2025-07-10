import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageCircle } from "lucide-react";

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState("doces");

  const categories = [
    { id: "doces", name: "Doces", icon: "🧁" },
    { id: "salgados", name: "Salgados", icon: "🥐" },
    { id: "veganos", name: "Veganos", icon: "🌱" },
    { id: "sazonais", name: "Sazonais", icon: "🎉" },
  ];

const products = {
    doces: [
      {
        id: 1,
        name: "Brigadeiro Gourmet",
        description: "Brigadeiro tradicional com chocolate belga e granulado especial",
        image: "placeholder-doce-1",
        badges: ["Sem Glúten"]
      },
      {
        id: 2,
        name: "Beijinho Premium",
        description: "Beijinho com coco fresco e leite condensado artesanal",
        image: "placeholder-doce-2",
        badges: ["Vegetariano"]
      },
      {
        id: 3,
        name: "Trufa de Maracujá",
        description: "Trufa cremosa com recheio de maracujá e cobertura de chocolate branco",
        image: "placeholder-doce-3",
        badges: ["Sem Lactose"]
      },
    ],
    salgados: [
      {
        id: 4,
        name: "Coxinha Gourmet",
        description: "Coxinha com recheio de frango desfiado e catupiry artesanal",
        image: "placeholder-salgado-1",
        badges: ["Tradicional"]
      },
      {
        id: 5,
        name: "Pastel de Queijo",
        description: "Pastel crocante com queijo derretido e orégano fresco",
        image: "placeholder-salgado-2",
        badges: ["Vegetariano"]
      },
    ],
    veganos: [
      {
        id: 6,
        name: "Brownie Vegano",
        description: "Brownie fudgy com chocolate 70% e nozes caramelizadas",
        image: "placeholder-vegano-1",
        badges: ["Vegano", "Sem Lactose"]
      },
    ],
    sazonais: [
      {
        id: 7,
        name: "Panetone Artesanal",
        description: "Panetone tradicional com frutas cristalizadas selecionadas",
        image: "placeholder-sazonal-1",
        badges: ["Edição Limitada"]
      },
    ],
  };

  const currentProducts = products[activeCategory as keyof typeof products] || [];

  return null;
};

export default MenuSection;