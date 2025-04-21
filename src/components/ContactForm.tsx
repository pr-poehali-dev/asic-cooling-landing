
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  name: z.string().min(2, { message: "Имя должно содержать не менее 2 символов" }),
  phone: z.string().min(10, { message: "Введите корректный номер телефона" }),
  email: z.string().email({ message: "Введите корректный email" }),
  company: z.string().optional(),
  message: z.string().min(10, { message: "Сообщение должно содержать не менее 10 символов" }),
});

export const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      company: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    // Имитация отправки данных в AmoCRM
    try {
      // В реальном проекте здесь будет интеграция с AmoCRM API
      console.log("Отправка данных в AmoCRM:", values);
      
      // Имитация задержки запроса
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Заявка успешно отправлена",
        description: "Наш менеджер свяжется с вами в ближайшее время",
      });
      
      form.reset();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Ошибка при отправке заявки",
        description: "Пожалуйста, попробуйте еще раз или свяжитесь с нами по телефону",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-card border border-border/40 rounded-lg p-6 shadow-sm">
      <h3 className="text-xl font-semibold mb-4">Оставить заявку</h3>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Имя *</FormLabel>
                <FormControl>
                  <Input placeholder="Иван Иванов" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Телефон *</FormLabel>
                  <FormControl>
                    <Input placeholder="+7 (999) 123-45-67" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email *</FormLabel>
                  <FormControl>
                    <Input placeholder="example@mail.ru" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Компания</FormLabel>
                <FormControl>
                  <Input placeholder="Название компании" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Сообщение *</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Опишите ваш запрос или вопрос"
                    className="min-h-[120px]"
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="pt-2">
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Отправка..." : "Отправить заявку"}
            </Button>
          </div>
          
          <p className="text-xs text-muted-foreground mt-4">
            Нажимая кнопку "Отправить заявку", вы соглашаетесь с нашей политикой конфиденциальности
            и даете согласие на обработку персональных данных.
          </p>
        </form>
      </Form>
    </div>
  );
};
