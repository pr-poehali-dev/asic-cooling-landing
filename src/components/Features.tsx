
import { 
  Droplets, 
  Gauge, 
  BarChart3, 
  Thermometer,
  Scaling,
  Shield
} from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: <Droplets className="h-10 w-10 text-primary" />,
      title: "Гидроохлаждение",
      description: "Технология иммерсионного охлаждения обеспечивает оптимальный температурный режим для ASIC-майнеров"
    },
    {
      icon: <Gauge className="h-10 w-10 text-primary" />,
      title: "Производительность",
      description: "Повышение хешрейта до 30% по сравнению с воздушным охлаждением"
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-primary" />,
      title: "Энергоэффективность",
      description: "Снижение затрат на электроэнергию до 40% при увеличении прибыльности майнинга"
    },
    {
      icon: <Thermometer className="h-10 w-10 text-primary" />,
      title: "Бесшумная работа",
      description: "Отсутствие шумных вентиляторов и систем кондиционирования"
    },
    {
      icon: <Scaling className="h-10 w-10 text-primary" />,
      title: "Масштабируемость",
      description: "Модульные контейнерные решения для быстрого масштабирования майнинг-фермы"
    },
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: "Надёжность",
      description: "Увеличение срока службы оборудования и снижение риска выхода из строя"
    }
  ];

  return (
    <section id="features" className="py-20 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Преимущества гидроохлаждения</h2>
          <p className="text-muted-foreground">
            Инновационные технологии охлаждения ASIC-майнеров, которые обеспечивают оптимальный температурный режим и максимальную производительность
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="p-6 rounded-lg border border-border bg-card transition-all hover:shadow-md hover:border-primary/50"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
