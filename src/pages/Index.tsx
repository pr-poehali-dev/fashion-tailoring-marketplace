import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const services = [
    {
      title: "Спортивная одежда",
      description: "Форма для команд, экипировка для спортивных мероприятий",
      icon: "Trophy"
    },
    {
      title: "Эстрадная одежда",
      description: "Сценические костюмы для артистов и коллективов",
      icon: "Music"
    },
    {
      title: "Танцевальная одежда",
      description: "Костюмы для танцевальных студий и выступлений",
      icon: "Sparkles"
    },
    {
      title: "Маркетплейс",
      description: "Пошив одежды для продажи на торговых площадках",
      icon: "ShoppingCart"
    },
    {
      title: "Корпоративная одежда",
      description: "Форма и фирменная одежда для сотрудников компаний",
      icon: "Briefcase"
    },
    {
      title: "Прокат костюмов",
      description: "Корсеты, платья, костюмы для мероприятий",
      icon: "Shirt"
    },
    {
      title: "Обучающие курсы",
      description: "Профессиональное обучение швейному мастерству",
      icon: "GraduationCap"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время."
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-muted/30">
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Scissors" size={32} className="text-accent" />
            <h1 className="text-2xl font-bold text-primary">Ателье Premium</h1>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#home" className="text-foreground hover:text-accent transition-colors font-medium">
              Главная
            </a>
            <a href="#services" className="text-foreground hover:text-accent transition-colors font-medium">
              Пошив одежды
            </a>
            <a href="#contacts" className="text-foreground hover:text-accent transition-colors font-medium">
              Контакты
            </a>
          </nav>
          <Button className="hidden md:inline-flex" onClick={() => document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' })}>
            Оставить заявку
          </Button>
        </div>
      </header>

      <section id="home" className="py-20 md:py-32 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h2 className="text-4xl md:text-6xl font-bold text-primary mb-6">
              Профессиональный пошив одежды мелким оптом
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Спортивная, эстрадная, танцевальная, корпоративная одежда высокого качества. 
              Прокат костюмов и обучающие курсы.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>
                <Icon name="Scissors" size={20} className="mr-2" />
                Наши услуги
              </Button>
              <Button size="lg" variant="outline" className="text-lg" onClick={() => document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' })}>
                <Icon name="Phone" size={20} className="mr-2" />
                Связаться с нами
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Наши услуги</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Полный спектр услуг по пошиву одежды для бизнеса, творчества и корпоративных нужд
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in border-2 hover:border-accent/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                    <Icon name={service.icon} size={28} className="text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-primary to-primary/90 text-white">
              <CardContent className="p-8 md:p-12">
                <div className="grid md:grid-cols-3 gap-8 text-center">
                  <div>
                    <Icon name="Users" size={40} className="mx-auto mb-4" />
                    <div className="text-3xl font-bold mb-2">500+</div>
                    <p className="text-white/80">Довольных клиентов</p>
                  </div>
                  <div>
                    <Icon name="Award" size={40} className="mx-auto mb-4" />
                    <div className="text-3xl font-bold mb-2">15 лет</div>
                    <p className="text-white/80">На рынке</p>
                  </div>
                  <div>
                    <Icon name="Clock" size={40} className="mx-auto mb-4" />
                    <div className="text-3xl font-bold mb-2">7-14 дней</div>
                    <p className="text-white/80">Срок изготовления</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Свяжитесь с нами</h2>
              <p className="text-lg text-muted-foreground">
                Оставьте заявку, и мы свяжемся с вами для обсуждения деталей заказа
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-6 text-primary">Контактная информация</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <Icon name="Phone" size={24} className="text-accent" />
                      </div>
                      <div>
                        <p className="font-medium text-primary mb-1">Телефон</p>
                        <p className="text-muted-foreground">+7 (XXX) XXX-XX-XX</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <Icon name="Mail" size={24} className="text-accent" />
                      </div>
                      <div>
                        <p className="font-medium text-primary mb-1">Email</p>
                        <p className="text-muted-foreground">info@atelier.ru</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <Icon name="MapPin" size={24} className="text-accent" />
                      </div>
                      <div>
                        <p className="font-medium text-primary mb-1">Адрес</p>
                        <p className="text-muted-foreground">г. Москва, ул. Примерная, д. 1</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <Icon name="Clock" size={24} className="text-accent" />
                      </div>
                      <div>
                        <p className="font-medium text-primary mb-1">Режим работы</p>
                        <p className="text-muted-foreground">Пн-Пт: 9:00 - 18:00</p>
                        <p className="text-muted-foreground">Сб-Вс: Выходной</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-6 text-primary">Форма обратной связи</h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Имя</label>
                      <Input 
                        placeholder="Ваше имя"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <Input 
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Телефон</label>
                      <Input 
                        type="tel"
                        placeholder="+7 (XXX) XXX-XX-XX"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Сообщение</label>
                      <Textarea 
                        placeholder="Опишите ваш заказ или вопрос"
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full" size="lg">
                      <Icon name="Send" size={20} className="mr-2" />
                      Отправить заявку
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Scissors" size={24} />
            <span className="text-xl font-semibold">Ателье Premium</span>
          </div>
          <p className="text-white/80">
            Профессиональный пошив одежды мелким оптом с 2010 года
          </p>
          <p className="text-white/60 text-sm mt-4">
            © 2024 Все права защищены
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
