import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Card } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, Instagram } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <WhatsAppButton />

      <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Entre em Contato
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Estamos prontos para atendê-lo
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Unidade Itapoã */}
          <Card className="p-8">
            <h2 className="text-2xl font-bold text-primary mb-6">
              Unidade Itapoã
            </h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold mb-1">Endereço</p>
                  <p className="text-foreground/80">
                    Rua Dr. Jair de Andrade, n.º 502 - Loja 03<br />
                    Itapoã - Vila Velha/ES
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold mb-1">Telefone / WhatsApp</p>
                  <p className="text-foreground/80">(27) 99999-9999</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold mb-1">E-mail</p>
                  <p className="text-foreground/80">hidronorte.comercial@hotmail.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Instagram className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold mb-1">Instagram</p>
                  <a 
                    href="https://instagram.com/hidronorte.comercial" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    @hidronorte.comercial
                  </a>
                </div>
              </div>
            </div>
          </Card>

          {/* Unidade Itaparica */}
          <Card className="p-8">
            <h2 className="text-2xl font-bold text-primary mb-6">
              Unidade Itaparica
            </h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold mb-1">Endereço</p>
                  <p className="text-foreground/80">
                    Rua Humberto Pereira, n.º 03<br />
                    Praia de Itaparica - Vila Velha/ES
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold mb-1">Telefone / WhatsApp</p>
                  <p className="text-foreground/80">(27) 99999-9999</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold mb-1">E-mail</p>
                  <p className="text-foreground/80">silveira.mat@hotmail.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Instagram className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold mb-1">Instagram</p>
                  <a 
                    href="https://instagram.com/hidronorteitaparica" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    @hidronorteitaparica
                  </a>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Horário de Funcionamento */}
        <Card className="p-8 max-w-3xl mx-auto mt-8 bg-secondary">
          <div className="flex items-start space-x-4">
            <Clock className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-primary mb-4">
                Horário de Funcionamento
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="font-semibold text-lg mb-2">Segunda a Sexta</p>
                  <p className="text-foreground/80 text-lg">08:00 às 18:00</p>
                </div>
                <div>
                  <p className="font-semibold text-lg mb-2">Sábados</p>
                  <p className="text-foreground/80 text-lg">08:00 às 12:00</p>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-border">
                <p className="font-semibold text-lg mb-2">Formas de Pagamento</p>
                <p className="text-foreground/80">
                  Aceitamos: Débito, Crédito, Pix e Dinheiro
                </p>
              </div>
            </div>
          </div>
        </Card>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
