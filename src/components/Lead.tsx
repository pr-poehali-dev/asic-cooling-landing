
import { Button } from "./ui/button";

export const Lead = () => {
  return (
    <section className="relative overflow-hidden bg-background py-20 md:py-28">
      {/* Градиентный фон */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5" />
      
      {/* Декоративные элементы */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-60 -left-60 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              ASIC-майнеры на&nbsp;гидроохлаждении — <span className="text-primary">будущее майнинга</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              Инновационные решения для профессионального майнинга с высокой производительностью, 
              энергоэффективностью и увеличенным сроком службы оборудования.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="animate-pulse">
                Получить консультацию
              </Button>
              <Button size="lg" variant="outline">
                Каталог оборудования
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-6 mt-12">
              <div>
                <div className="text-3xl font-bold text-primary">+40%</div>
                <div className="text-sm text-muted-foreground">производительности</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">-30%</div>
                <div className="text-sm text-muted-foreground">энергопотребления</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">техническая поддержка</div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="relative rounded-lg overflow-hidden border border-border/40 shadow-lg">
              <img 
                src="/placeholder.svg" 
                alt="ASIC-майнеры на гидроохлаждении" 
                className="w-full h-auto object-cover"
                style={{ aspectRatio: "4/3" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="flex items-center gap-2 text-sm font-medium">
                  <span className="inline-flex items-center gap-1">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                    </span>
                    Эффективное охлаждение
                  </span>
                </div>
              </div>
            </div>
            
            {/* Технические декоративные элементы */}
            <div className="hidden md:block absolute -right-6 -bottom-6 w-32 h-32 border border-border rounded-lg" style={{ zIndex: -1 }}></div>
            <div className="hidden md:block absolute -left-6 -top-6 w-20 h-20 border border-border rounded-lg" style={{ zIndex: -1 }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};
