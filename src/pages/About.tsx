import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <WhatsAppButton />

      <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Sobre a Hidronorte
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Mais de 19 anos de tradição e qualidade
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-8">
          <Card className="p-8">
            <h2 className="text-3xl font-bold text-primary mb-6">Nossa História</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-foreground/90 mb-4">
                A <strong>Hidronorte Comercial</strong> nasceu em maio de 2006, do sonho do Sr. Américo 
                de ter seu próprio negócio.
              </p>
              <p className="text-lg text-foreground/90 mb-4">
                Apostando no mercado de reparos hidráulicos e elétricos, a empresa cresceu ao longo de 
                19 anos, tornando-se referência no bairro de Itapoã, em Vila Velha.
              </p>
              <p className="text-lg text-foreground/90 mb-4">
                Em setembro de 2024, a Hidronorte expandiu suas operações com a abertura de uma nova 
                loja no bairro de Itaparica, consolidando sua presença e compromisso com a qualidade.
              </p>
            </div>
          </Card>

          <Card className="p-8 bg-secondary">
            <h2 className="text-3xl font-bold text-primary mb-6">Nosso Diferencial</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl text-primary-foreground">✓</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Atendimento Excelente</h3>
                    <p className="text-foreground/80">
                      Buscamos sempre resolver as demandas dos clientes de forma acolhedora, rápida e eficiente.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl text-primary-foreground">✓</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Preços Justos</h3>
                    <p className="text-foreground/80">
                      Oferecemos produtos de qualidade com preços competitivos e justos para nossos clientes.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl text-primary-foreground">✓</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Confiança</h3>
                    <p className="text-foreground/80">
                      Construímos relacionamentos duradouros baseados em confiança e dedicação.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl text-primary-foreground">✓</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Satisfação</h3>
                    <p className="text-foreground/80">
                      A satisfação do cliente é nossa prioridade e compromisso diário.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
