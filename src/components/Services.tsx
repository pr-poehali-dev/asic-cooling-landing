
import { Button } from "@/components/ui/button";

export const Services = () => {
  const services = [
    {
      image: "/placeholder.svg",
      title: "Контейнерные решения",
      description: "Готовые модульные контейнеры с системой гидроохлаждения для размещения майнинг-оборудования. Быстрый монтаж и запуск.",
      features: ["Вместимость до 300 ASIC", "Собственная система охлаждения", "Полный контроль климата", "Система пожаротушения"]
    },
    {
      image: "/placeholder.svg",
      title: "Монтаж и пусконаладка",
      description: "Профессиональная установка и настройка майнинг-оборудования с гидроохлаждением «под ключ».",
      features: ["Проектирование системы", "Монтаж оборудования", "Настройка и тестирование", "Запуск и обучение персонала"]
    },
    {
      image: "/placeholder.svg",
      title: "Техническое обслуживание",
      description: "Регулярное обслуживание и оперативное решение технических проблем для обеспечения бесперебойной работы оборудования.",
      features: ["Круглосуточный мониторинг", "Плановое обслуживание", "Оперативный выезд специалистов", "Расширенная гарантия"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Комплексные услуги</h2>
          <p className="text-muted-foreground">
            Полный спектр услуг по установке, настройке и обслуживанию майнинг-оборудования с гидроохлаждением
          </p>
        </div>
        
        <div className="space-y-16">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="rounded-lg overflow-hidden border border-border">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
              
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
                
                <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-primary shrink-0"></span>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button>Подробнее</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
