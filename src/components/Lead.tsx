
import { Button } from "@/components/ui/button";

export const Lead = () => {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[500px] h-[500px] -right-40 -top-40 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute w-[800px] h-[800px] -left-80 -bottom-80 bg-primary/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-6">
                ASIC-майнинг на <span className="text-primary">гидроохлаждении</span> нового поколения
              </h1>
              <p className="text-xl text-muted-foreground max-w-md">
                Максимальная производительность, минимальное энергопотребление, надёжность и масштабируемость
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg">Получить консультацию</Button>
              <Button size="lg" variant="outline">Каталог оборудования</Button>
            </div>
            
            <div className="flex gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground">Эффективность охлаждения</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">-40%</div>
                <div className="text-sm text-muted-foreground">Снижение энергозатрат</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Техническая поддержка</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10 rounded-lg overflow-hidden border border-border shadow-lg">
              <img 
                src="/placeholder.svg" 
                alt="ASIC-майнеры на гидроохлаждении" 
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
            <div className="absolute top-8 -right-8 z-0 w-2/3 h-full rounded-lg border border-border bg-accent/50 -rotate-6"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
