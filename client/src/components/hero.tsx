import { businessData } from "@/data/business-data";
import { Package, MessageCircle } from "lucide-react";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="hero-bg relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          <div className="fade-in-up">
            <h2 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Leading Industrial<br />
              <span className="text-accent">Manufacturing</span><br />
              Solutions
            </h2>
            <p className="text-xl lg:text-2xl text-white/90 mb-8 max-w-2xl leading-relaxed">
              {businessData.hero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection("products")}
                className="bg-primary text-primary-foreground px-8 py-4 rounded-lg hover:bg-primary/90 transition-all duration-300 font-semibold text-lg inline-flex items-center justify-center hover-lift"
                data-testid="button-view-products"
              >
                <Package className="mr-2" />
                View Products
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-lg hover:bg-white/20 transition-all duration-300 font-semibold text-lg inline-flex items-center justify-center hover-lift"
                data-testid="button-get-quote"
              >
                <MessageCircle className="mr-2" />
                Get Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
