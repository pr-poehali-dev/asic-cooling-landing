
export const Footer = () => {
  return (
    <footer className="bg-accent/30 pt-12 pb-8 border-t border-border/40">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <img src="/logo-b.svg" alt="Логотип" className="h-8 w-8" />
              <span className="font-bold text-lg">CryptoTech</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Инновационные решения для майнинга криптовалют на гидроохлаждении с высокой энергоэффективностью и надежностью.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M21.91 8.12 18.3 4.5a1.05 1.05 0 0 0-1.48 0l-9.13 9.13a1.05 1.05 0 0 0 0 1.48l3.61 3.61c.41.41 1.08.41 1.48 0l9.13-9.13a1.05 1.05 0 0 0 0-1.48Z"></path>
                  <path d="m8.18 15.87-1.09-1.09"></path>
                  <path d="M13.95 10.1 7.65 3.8a1.05 1.05 0 0 0-1.48 0L2.7 7.27a1.05 1.05 0 0 0 0 1.48l6.3 6.3"></path>
                  <path d="m8.17 15.86-1.09-1.09"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Оборудование</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">ASIC-майнеры</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Системы гидроохлаждения</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Контейнерные решения</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Комплектующие и запчасти</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Системы мониторинга</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Проектирование</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Монтаж и установка</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Пусконаладочные работы</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Техническое обслуживание</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Обучение персонала</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-sm">+7 (495) 123-45-67</span>
              </li>
              <li className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-sm">info@cryptotech.ru</span>
              </li>
              <li className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-sm">г. Москва, ул. Технологическая, 42</span>
              </li>
              <li className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm">Пн-Пт: 9:00-18:00</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between gap-4">
          <div className="text-sm text-muted-foreground">
            © 2023 CryptoTech. Все права защищены.
          </div>
          <div className="flex flex-wrap gap-4">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Политика конфиденциальности</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Условия использования</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Карта сайта</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
