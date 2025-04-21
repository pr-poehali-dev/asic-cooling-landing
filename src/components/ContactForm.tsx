
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Checkbox } from "./ui/checkbox";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    agreeToTerms: false,
    submitting: false,
    success: false,
    error: null as string | null
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, agreeToTerms: checked }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.agreeToTerms) {
      setFormData((prev) => ({
        ...prev,
        error: "Необходимо согласиться с условиями обработки персональных данных"
      }));
      return;
    }

    setFormData((prev) => ({ ...prev, submitting: true, error: null }));

    try {
      // Имитация отправки данных в AmoCRM
      console.log("Отправка данных в AmoCRM:", {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        message: formData.message
      });
      
      // Здесь должен быть реальный код отправки данных в AmoCRM через API
      
      // Имитация успешного ответа
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      setFormData((prev) => ({
        ...prev,
        submitting: false,
        success: true,
        name: "",
        phone: "",
        email: "",
        message: "",
        agreeToTerms: false
      }));
      
      // Сбрасываем статус успеха через 5 секунд
      setTimeout(() => {
        setFormData((prev) => ({ ...prev, success: false }));
      }, 5000);
      
    } catch (error) {
      setFormData((prev) => ({
        ...prev,
        submitting: false,
        error: "Произошла ошибка при отправке формы. Пожалуйста, попробуйте еще раз."
      }));
    }
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <h3 className="text-xl font-bold mb-4">Оставьте заявку</h3>
      
      {formData.success ? (
        <div className="p-4 bg-primary/10 border border-primary/20 rounded-md mb-4">
          <div className="flex items-center gap-2 text-primary font-medium">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            Спасибо! Ваша заявка успешно отправлена.
          </div>
          <p className="text-sm text-muted-foreground mt-2">
            Наш менеджер свяжется с вами в ближайшее время.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {formData.error && (
            <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-md mb-4">
              <p className="text-destructive text-sm">{formData.error}</p>
            </div>
          )}
          
          <div className="space-y-2">
            <Label htmlFor="name">Ваше имя *</Label>
            <Input
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Иван Иванов"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone">Телефон *</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="+7 (___) ___-__-__"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@mail.com"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="message">Сообщение</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Опишите ваш запрос или задайте вопрос"
              rows={4}
            />
          </div>
          
          <div className="flex items-start space-x-2">
            <Checkbox
              id="terms"
              checked={formData.agreeToTerms}
              onCheckedChange={handleCheckboxChange}
            />
            <div className="grid gap-1.5 leading-none">
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Я согласен с условиями обработки персональных данных
              </label>
              <p className="text-sm text-muted-foreground">
                Нажимая на кнопку, вы даете согласие на обработку персональных данных
              </p>
            </div>
          </div>
          
          <Button 
            type="submit" 
            className="w-full" 
            disabled={formData.submitting}
          >
            {formData.submitting ? "Отправка..." : "Отправить заявку"}
          </Button>
        </form>
      )}
      
      <div className="mt-4 pt-4 border-t border-border">
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>Интеграция с AmoCRM</span>
          <div className="flex items-center gap-1">
            <span className="inline-block h-2 w-2 rounded-full bg-primary"></span>
            <span>Безопасно</span>
          </div>
        </div>
      </div>
    </div>
  );
};
