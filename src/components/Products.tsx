
import { Button } from "./ui/button";

export const Products = () => {
  const products = [
    {
      image: "/placeholder.svg",
      title: "HydroMiner X1",
      hashrate: "110 TH/s",
      power: "3200W",
      algorithm: "SHA-256",
      price: "от 850 000 ₽",
      description: "Высокопроизводительный ASIC-майнер на гидроохлаждении с оптимальным соотношением цены и производительности.",
      features: ["Замкнутый контур охлаждения", "Интегрированный блок питания", "Компактные размеры"]
    },
    {
      image: "/placeholder.svg",
      title: "HydroMiner Pro",
      hashrate: "150 TH/s",
      power: "3900W",
      algorithm: "SHA-256",
      price: "от 1 250 000 ₽",
      description: "Профессиональный ASIC-майнер с расширенной системой мониторинга и улучшенной энергоэффективностью.",
      features: ["Двойной контур охлаждения", "Расширенная гарантия", "Удаленный мониторинг параметров"]
    },
    {
      image: "/placeholder.svg",
      title: "Майнинг-контейнер HydroFarm",
      capacity: "до 200 майнеров",
      power: "до 700 кВт",
      price: "от 6 800 000 ₽",
      description: "Готовое решение для размещения фермы ASIC-майнеров с комплексной системой жидкостного охлаждения.",
      features: ["Полная звукоизоляция", "Система пожаротушения", "Климат-контроль", "Система безопасности"]
    }
  ];

  return (
    <section id="products" className="py-20 bg-accent/30">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Наше оборудование</h2>
          <p className="text-muted-foreground">
            Профессиональные решения для майнинга с использованием передовых технологий жидкостного охлаждения
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div 
              key={index} 
              className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-48 object-cover"
                />
                {product.hashrate && (
                  <div className="absolute top-3 right-3 bg-primary/90 text-primary-foreground px-2 py-1 rounded text-xs font-medium">
                    {product.hashrate}
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{product.title}</h3>
                <p className="text-muted-foreground mb-4">{product.description}</p>
                
                <div className="space-y-3 mb-4">
                  {product.hashrate && (
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Хешрейт:</span>
                      <span className="font-medium">{product.hashrate}</span>
                    </div>
                  )}
                  
                  {product.power && (
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Энергопотребление:</span>
                      <span className="font-medium">{product.power}</span>
                    </div>
                  )}
                  
                  {product.algorithm && (
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Алгоритм:</span>
                      <span className="font-medium">{product.algorithm}</span>
                    </div>
                  )}
                  
                  {product.capacity && (
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Вместимость:</span>
                      <span className="font-medium">{product.capacity}</span>
                    </div>
                  )}
                </div>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold mb-2">Ключевые особенности:</h4>
                  <ul className="space-y-1">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 mr-2 text-primary"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-lg font-bold text-primary">{product.price}</div>
                  <Button variant="outline" size="sm">Подробнее</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="gap-2">
            Получить полный каталог
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Button>
        </div>
      </div>
    </section>
  );
};
