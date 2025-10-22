import { MapPin, Clock, Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Unidade Itapoã */}
          <div>
            <h3 className="text-xl font-bold mb-4">Unidade Itapoã</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <p className="text-sm">
                  Rua Dr. Jair de Andrade, n.º 502 - Loja 03<br />
                  Itapoã - Vila Velha/ES
                </p>
              </div>
              <p className="text-sm">hidronorte.comercial@hotmail.com</p>
              <a 
                href="https://instagram.com/hidronorte.comercial" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:text-secondary transition-colors"
              >
                <Instagram className="w-5 h-5" />
                <span className="text-sm">@hidronorte.comercial</span>
              </a>
            </div>
          </div>

          {/* Unidade Itaparica */}
          <div>
            <h3 className="text-xl font-bold mb-4">Unidade Itaparica</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <p className="text-sm">
                  Rua Humberto Pereira, n.º 03<br />
                  Praia de Itaparica - Vila Velha/ES
                </p>
              </div>
              <p className="text-sm">silveira.mat@hotmail.com</p>
              <a 
                href="https://instagram.com/hidronorteitaparica" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:text-secondary transition-colors"
              >
                <Instagram className="w-5 h-5" />
                <span className="text-sm">@hidronorteitaparica</span>
              </a>
            </div>
          </div>

          {/* Horário de Funcionamento */}
          <div>
            <h3 className="text-xl font-bold mb-4">Horário de Funcionamento</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <Clock className="w-5 h-5 mt-1 flex-shrink-0" />
                <div className="text-sm">
                  <p className="font-semibold">Segunda a Sexta</p>
                  <p>08:00 às 18:00</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <Clock className="w-5 h-5 mt-1 flex-shrink-0" />
                <div className="text-sm">
                  <p className="font-semibold">Sábados</p>
                  <p>08:00 às 12:00</p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-primary-foreground/20">
                <p className="text-sm font-semibold">Formas de Pagamento</p>
                <p className="text-sm">Débito, Crédito, Pix e Dinheiro</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Hidronorte Comercial. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
