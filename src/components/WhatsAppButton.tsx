import { MessageCircle } from "lucide-react";

export const WhatsAppButton = () => {
  const phoneNumber = "5527999999999"; // Format: country code + area code + number
  const message = "Olá! Gostaria de mais informações sobre os produtos.";

  const handleClick = () => {
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 bg-success hover:bg-success/90 text-success-foreground rounded-full p-4 shadow-lg transition-all hover:scale-110 z-50"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </button>
  );
};
