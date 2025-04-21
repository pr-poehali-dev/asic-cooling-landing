
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    agreement: false,
    isSubmitting: false,
    isSuccess: false,
    error: null
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormState(prev => ({ ...prev, agreement: checked }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setFormState(prev => ({ ...prev, isSubmitting: true, error: null }));
    
    try {
      // Здесь будет интеграция с AmoCRM
      // Пример запроса к API
      /*
      const response = await fetch('https://your-amo-integration-endpoint.com/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          phone: formState.phone,
          message: formState.message,
        }),
      });
      
      if (!response.ok) {
        throw new Error('Ошибка при отправке заявки');
      }
      */
      
      // Имитация успешного запроса
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setFormState(prev => ({ 
        ...prev, 
        isSubmitting: false, 
        isSuccess: true,
        name: "",
        email: "",
        phone: "",
        message: "",
        agreement: false
      }));
      
      // Сброс сообщения об успехе через 3 секунды
      setTimeout(() => {
        setFormState(prev => ({ ...prev, isSuccess: false }));
      }, 3000);
      
    } catch (error) {
      setFormState(prev => ({ 
        ...prev, 
        isSubmitting: false,
        error: "Произошла ошибка при отправке формы. Пожалуйста, попробуйте снова."
      }));
    }
  };

  return (
    <div className="bg-card p-6 rounded-lg border border-border shadow-sm">
      <h3 className="text-xl font-semibold mb-6">Оставить заявку</h3>
      
      {formState.isSuccess ? (
        <div className="p-4 bg-green-50 text-green-600 rounded-md mb-4">
          Спасибо! Ваша заявка отправлена. Мы свяжемся с вами в ближайшее время.
        </div>
      ) : null}
      
      {formState.error ? (
        <div className="p-4 bg-red-50 text-red-600 rounded-md mb-4">
          {formState.error}
        </div>
      ) : null}
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Имя</Label>
          <Input
            id="name"
            name="name"
            placeholder="Ваше имя"
            value={formState.name}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="email@example.com"
            value={formState.email}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="phone">Телефон</Label>
          <Input
            id="phone"
            name="phone"
            placeholder="+7 (999) 123-45-67"
            value={formState.phone}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="message">Сообщение</Label>
          <Textarea
            id="message"
            name="message"
            placeholder="Ваше сообщение"
            value={formState.message}
            onChange={handleChange}
            rows={4}
          />
        </div>
        
        <div className="flex items-start space-x-2">
          <Checkbox 
            id="agreement" 
            checked={formState.agreement}
            onCheckedChange={handleCheckboxChange}
            required
          />
          <Label htmlFor="agreement" className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Я согласен с <a href="#" className="text-primary hover:underline">политикой конфиденциальности</a> и даю согласие на обработку персональных данных
          </Label>
        </div>
        
        <Button 
          type="submit" 
          className="w-full"
          disabled={formState.isSubmitting || !formState.agreement}
        >
          {formState.isSubmitting ? "Отправка..." : "Отправить заявку"}
        </Button>
      </form>
    </div>
  );
};
