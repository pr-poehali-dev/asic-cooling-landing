
import { Button } from "./ui/button";

export const Services = () => {
  const services = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <line x1="3" y1="9" x2="21" y2="9" />
          <line x1="9" y1="21" x2="9" y2="9" />
        </svg>
      ),
      title: "Контейнерные решения",
      description: "Модульные майнинг-контейнеры под ключ с интегрированной системой жидкостного охлаждения, готовые к размещению на любой локации.",
      features: [
        "Полностью оборудованные контейнеры с системами охлаждения",
        "Мониторинг и удаленное управление",
        "Системы безопасности и пожаротушения",
        "Быстрое развертывание на площадке заказчика"
      ]
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <polyline points="7.5 4.21 12 6.81 16.5 4.21" />
          <polyline points="7.5 19.79 7.5 14.6 3 12" />
          <polyline points="21 12 16.5 14.6 16.5 19.79" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
      ),
      title: "Монтаж и пусконаладка",
      description: "Профессиональный монтаж и настройка майнингового оборудования с гидроохлаждением, включая все коммуникации и системы контроля.",
      features: [
        "Проектирование системы охлаждения под ваши потребности",
        "Монтаж всего необходимого оборудования",
        "Настройка и тестирование всех систем",
        "Обучение персонала обслуживанию системы"
      ]
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        </svg>
      ),
      title: "Техническое сопровождение",
      description: "Комплексное обслуживание майнинговых ферм, включая регулярную профилактику, диагностику и оперативный ремонт оборудования.",
      features: [
        "Круглосуточный мониторинг работы системы",
        "Регулярное техническое обслуживание",
        "Оперативное устранение неисправностей",
        "Модернизация системы по мере необходимости"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Наши услуги</h2>
          <p className="text-muted-foreground">
            Полный комплекс услуг по внедрению и обслуживанию майнинговых систем с жидкостным охлаждением
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="p-6 bg-card border border-border rounded-lg hover:shadow-md transition-shadow"
            >
              <div className="text-primary mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>
              
              <h4 className="text-sm font-semibold mb-3">Что включено:</h4>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5"
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
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button variant="outline" className="w-full">
                Заказать
              </Button>
            </div>
          ))}
        </div>
        
        <div className="mt-16 p-8 bg-accent/50 rounded-lg border border-border">
          <div className="lg:flex items-center justify-between">
            <div className="lg:max-w-2xl mb-6 lg:mb-0">
              <h3 className="text-2xl font-bold mb-3">Нужно индивидуальное решение?</h3>
              <p className="text-muted-foreground">
                Мы разработаем оптимальную конфигурацию системы майнинга с жидкостным охлаждением специально под ваши требования и условия размещения.
              </p>
            </div>
            <Button size="lg">Получить консультацию</Button>
          </div>
        </div>
      </div>
    </section>
  );
};
