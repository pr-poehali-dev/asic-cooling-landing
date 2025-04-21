
import { Button } from "@/components/ui/button";

export const Products = () => {
  const miners = [
    {
      name: "HydroMiner X7000",
      hash: "140 TH/s",
      power: "3200W",
      algorithm: "SHA-256",
      price: "8 500",
      features: ["Встроенная система гидроохлаждения", "Увеличенный срок гарантии", "Совместимость с контейнерами"]
    },
    {
      name: "HydroMiner A10 Pro",
      hash: "190 TH/s",
      power: "3600W",
      algorithm: "SHA-256",
      price: "11 900",
      features: ["Улучшенные теплообменники", "Система мониторинга параметров", "Автоматическая настройка производительности"],
      highlighted: true
    },
    {
      name: "HydroMiner E12",
      hash: "210 TH/s",
      power: "3800W",
      algorithm: "SHA-256",
      price: "14 300",
      features: ["Максимальная производительность", "Расширенная система безопасности", "Интеграция с облачным управлением"]
    }
  ];

  const containers = [
    {
      name: "Контейнер HydroBox 20",
      capacity: "до 120 ASIC-майнеров",
      power: "500 кВт",
      cooling: "Замкнутый контур гидроохлаждения",
      price: "от 4 200 000",
      features: ["Полная шумоизоляция", "Интегрированная система пожаротушения", "Климат-контроль"]
    },
    {
      name: "Контейнер HydroBox 40",
      capacity: "до 270 ASIC-майнеров",
      power: "1,2 МВт",
      cooling: "Многоконтурная система охлаждения",
      price: "от 9 800 000",
      features: ["Модульная система расширения", "Удаленный мониторинг параметров", "Автоматизированная система безопасности"],
      highlighted: true
    }
  ];

  return (
    <section id="products" className="py-20 bg-background">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Наше оборудование</h2>
          <p className="text-muted-foreground">
            Предлагаем полный спектр оборудования для майнинга — от отдельных ASIC-майнеров на жидкостном охлаждении до готовых контейнерных решений под ключ
          </p>
        </div>

        <div className="space-y-20">
          {/* ASIC-майнеры */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
              </svg>
              ASIC-майнеры на гидроохлаждении
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {miners.map((miner, index) => (
                <div 
                  key={index} 
                  className={`
                    rounded-lg overflow-hidden border 
                    ${miner.highlighted 
                      ? 'border-primary/50 shadow-lg shadow-primary/10' 
                      : 'border-border/40 shadow-sm'
                    }
                  `}
                >
                  <div className="relative">
                    <div className="bg-accent h-48 flex items-center justify-center">
                      <img src="/placeholder.svg" alt={miner.name} className="h-40 object-contain" />
                    </div>
                    {miner.highlighted && (
                      <div className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs font-bold py-1 px-2 rounded">
                        Рекомендуем
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6 space-y-4">
                    <h4 className="text-xl font-semibold">{miner.name}</h4>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Хешрейт</p>
                        <p className="font-semibold">{miner.hash}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Энергопотребление</p>
                        <p className="font-semibold">{miner.power}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Алгоритм</p>
                        <p className="font-semibold">{miner.algorithm}</p>
                      </div>
                    </div>
                    
                    <ul className="space-y-2">
                      {miner.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start gap-2 text-sm">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="pt-4 border-t border-border/40 flex justify-between items-center">
                      <div>
                        <p className="text-sm text-muted-foreground">Цена от</p>
                        <p className="text-2xl font-bold">{miner.price} $</p>
                      </div>
                      <Button variant="outline">Подробнее</Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Контейнеры */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
              Контейнерные решения
            </h3>

            <div className="grid md:grid-cols-2 gap-8">
              {containers.map((container, index) => (
                <div 
                  key={index} 
                  className={`
                    rounded-lg overflow-hidden border 
                    ${container.highlighted 
                      ? 'border-primary/50 shadow-lg shadow-primary/10' 
                      : 'border-border/40 shadow-sm'
                    }
                  `}
                >
                  <div className="relative">
                    <div className="bg-accent h-60 flex items-center justify-center">
                      <img src="/placeholder.svg" alt={container.name} className="h-48 object-contain" />
                    </div>
                    {container.highlighted && (
                      <div className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs font-bold py-1 px-2 rounded">
                        Популярное решение
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6 space-y-4">
                    <h4 className="text-xl font-semibold">{container.name}</h4>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Вместимость</p>
                        <p className="font-semibold">{container.capacity}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Мощность</p>
                        <p className="font-semibold">{container.power}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Охлаждение</p>
                        <p className="font-semibold">{container.cooling}</p>
                      </div>
                    </div>
                    
                    <ul className="space-y-2">
                      {container.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start gap-2 text-sm">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="pt-4 border-t border-border/40 flex justify-between items-center">
                      <div>
                        <p className="text-sm text-muted-foreground">Цена</p>
                        <p className="text-2xl font-bold">{container.price} ₽</p>
                      </div>
                      <Button variant="outline">Подробнее</Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <Button size="lg">Запросить полный каталог</Button>
        </div>
      </div>
    </section>
  );
};
