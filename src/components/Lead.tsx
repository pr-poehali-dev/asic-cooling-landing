
import { Button } from "@/components/ui/button";

export const Lead = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Фоновый градиент */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-background -z-10"></div>
      
      {/* Декоративный элемент */}
      <div className="absolute -right-96 -top-96 w-[800px] h-[800px] rounded-full bg-primary/5 blur-3xl -z-10"></div>
      
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
                ASIC-майнеры <br/>
                <span className="text-primary">на гидроохлаждении</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-md">
                Современные высокоэффективные решения для майнинга
                с увеличенным сроком службы и сниженным энергопотреблением
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg">Получить консультацию</Button>
              <Button size="lg" variant="outline">Смотреть каталог</Button>
            </div>
            
            <div className="grid grid-cols-3 gap-8 py-4 border-t border-border/40">
              <div>
                <div className="text-3xl font-bold text-primary">-40%</div>
                <p className="text-sm text-muted-foreground">Снижение тепловыделения</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">+30%</div>
                <p className="text-sm text-muted-foreground">Увеличение срока службы</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">24/7</div>
                <p className="text-sm text-muted-foreground">Техническая поддержка</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl border border-border/40 bg-card">
              <img 
                src="/placeholder.svg" 
                alt="ASIC майнер на гидроохлаждении" 
                className="w-full h-auto object-cover aspect-[4/3]"
              />
            </div>
            
            {/* Декоративные элементы */}
            <div className="absolute -bottom-8 -right-8 w-64 h-64 rounded-lg border border-primary/20 -z-0"></div>
            <div className="absolute -top-8 -left-8 w-64 h-64 rounded-lg border border-primary/20 -z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
