
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export const Products = () => {
  const products = [
    {
      title: "HydroMiner S19 Pro",
      image: "/placeholder.svg",
      description: "Высокопроизводительный ASIC-майнер на гидроохлаждении для профессионального майнинга Bitcoin",
      features: [
        "Хешрейт: 140 TH/s",
        "Энергопотребление: 2900W",
        "Эффективность: 21.5 J/TH",
        "Иммерсионное охлаждение",
        "Полный комплект для запуска"
      ],
      price: "₽ 820 000"
    },
    {
      title: "HydroMiner M50S",
      image: "/placeholder.svg",
      description: "Профессиональный ASIC-майнер с системой жидкостного охлаждения для майнинга Litecoin",
      features: [
        "Хешрейт: 2.2 GH/s",
        "Энергопотребление: 3100W",
        "Эффективность: 1.45 J/MH",
        "Иммерсионное охлаждение",
        "Комплект для монтажа"
      ],
      price: "₽ 750 000"
    },
    {
      title: "HydroMiner E12",
      image: "/placeholder.svg",
      description: "Энергоэффективный майнер на гидроохлаждении для майнинга Ethereum с повышенной надежностью",
      features: [
        "Хешрейт: 800 MH/s",
        "Энергопотребление: 1200W",
        "Эффективность: 1.5 J/MH",
        "Иммерсионное охлаждение",
        "Полностью настроенная система"
      ],
      price: "₽ 680 000"
    }
  ];

  return (
    <section id="products" className="py-20 bg-accent/30">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Оборудование для майнинга</h2>
          <p className="text-muted-foreground">
            Современные ASIC-майнеры с системой гидроохлаждения для эффективного майнинга криптовалют
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div 
              key={index} 
              className="rounded-lg border border-border bg-card overflow-hidden transition-all hover:shadow-md flex flex-col"
            >
              <div className="aspect-[4/3] relative">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{product.description}</p>
                
                <ul className="space-y-2 mb-6 flex-grow">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-auto">
                  <div className="text-2xl font-bold mb-4 text-primary">{product.price}</div>
                  <Button className="w-full">Заказать</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
