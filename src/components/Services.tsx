
import { Button } from "@/components/ui/button";

export const Services = () => {
  const services = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Проектирование",
      description: "Разработка индивидуального проекта майнинг-фермы с учетом особенностей вашей площадки, требуемой мощности и специфики помещения.",
      items: [
        "Расчет необходимой мощности и количества оборудования",
        "Проектирование системы охлаждения и электроснабжения",
        "3D-моделирование размещения оборудования",
        "Подготовка технической документации"
      ]
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: "Монтаж и установка",
      description: "Полный комплекс работ по установке и настройке майнинг-оборудования на вашей площадке или в контейнерном решении.",
      items: [
        "Доставка и разгрузка оборудования",
        "Монтаж систем охлаждения и электроснабжения",
        "Установка и подключение ASIC-майнеров",
        "Прокладка кабельных трасс и организация серверных стоек"
      ]
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
      title: "Пусконаладочные работы",
      description: "Комплексная настройка и тестирование оборудования для обеспечения максимальной производительности и стабильности работы.",
      items: [
        "Настройка программного обеспечения и майнинг-пулов",
        "Конфигурация оптимальных параметров работы",
        "Тестирование систем охлаждения под нагрузкой",
        "Интеграция с системами мониторинга и управления"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-accent/10">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Наши услуги</h2>
          <p className="text-muted-foreground">
            Предоставляем полный комплекс услуг от проектирования до запуска майнинг-фермы на гидроохлаждении
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-card border border-border/40 rounded-lg overflow-hidden shadow-sm">
              <div className="p-6 bg-gradient-to-r from-accent/70 to-accent/30 flex justify-center">
                <div className="rounded-full bg-white/90 p-4 text-primary shadow-md">
                  {service.icon}
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
                
                <ul className="space-y-2 pt-4">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-card border border-border/40 rounded-lg p-8 shadow-md">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="lg:w-2/3">
              <h3 className="text-2xl font-bold mb-4">Комплексное решение под ключ</h3>
              <p className="text-muted-foreground mb-4">
                Мы берем на себя все этапы от проектирования до запуска майнинг-фермы. Вам не нужно искать подрядчиков для 
                отдельных работ и координировать их взаимодействие — мы сделаем все за вас.
              </p>
              <p className="font-medium">
                Оставьте заявку, и мы рассчитаем стоимость и сроки реализации вашего проекта.
              </p>
            </div>
            <div className="lg:w-1/3 flex justify-center">
              <Button size="lg" className="w-full lg:w-auto">Оставить заявку</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
