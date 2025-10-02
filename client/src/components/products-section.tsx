import { useState } from "react";
import { businessData } from "@/data/business-data";
import { MessageCircle, ChevronDown, ChevronUp } from "lucide-react";
import { getQuoteWhatsAppMessage, openWhatsApp } from "@/lib/whatsapp";

const categoryIcons: Record<string, string> = {
  "Mineral Powders": "⚗️",
  "Clay Products": "🏺",
  "Chemical Compounds": "🧪",
  "Carbon Products": "⚫",
  "Food Grade": "🍯",
  "Feed Additives": "🌾",
  "Construction Materials": "🧱",
  "Feed Materials": "🌾",
};

export default function ProductsSection() {
  const [showAll, setShowAll] = useState(false);
  const displayedProducts = showAll ? businessData.products : businessData.products.slice(0, 9);
  const handleGetQuote = (productName: string) => {
    const message = getQuoteWhatsAppMessage(productName);
    openWhatsApp(businessData.contact.whatsapp, message);
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="products" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">Our Product Range</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our comprehensive range of high-quality industrial products. Contact us for detailed specifications and current pricing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProducts.map((product) => (
            <div 
              key={product.id} 
              className="bg-card rounded-xl overflow-hidden shadow-lg hover-lift border border-border"
            >
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105" 
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzZiNzI4MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIG5vdCBhdmFpbGFibGU8L3RleHQ+PC9zdmc+';
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-card-foreground mb-3">
                  {product.name}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-muted-foreground">
                    <span className="mr-1">{categoryIcons[product.category]}</span>
                    <span>{product.category}</span>
                  </div>
                  <button
                    onClick={() => handleGetQuote(product.name)}
                    className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors font-medium inline-flex items-center"
                    data-testid={`button-quote-${product.id}`}
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Get Quote
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-6">
            Prices vary based on specifications and market conditions. Contact us for current pricing and detailed quotations.
          </p>
          
          {businessData.products.length > 9 && (
            <div className="mb-6">
              <button
                onClick={() => setShowAll(!showAll)}
                className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors font-medium inline-flex items-center hover-lift"
                data-testid="button-show-more"
              >
                {showAll ? (
                  <>
                    <ChevronUp className="mr-2 h-5 w-5" />
                    Show Less
                  </>
                ) : (
                  <>
                    <ChevronDown className="mr-2 h-5 w-5" />
                    Show More Products ({businessData.products.length - 9} more)
                  </>
                )}
              </button>
            </div>
          )}
          
          <button
            onClick={scrollToContact}
            className="bg-accent text-accent-foreground px-8 py-4 rounded-lg hover:bg-accent/90 transition-colors font-semibold text-lg inline-flex items-center hover-lift"
            data-testid="button-bulk-pricing"
          >
            <MessageCircle className="mr-2" />
            Request Bulk Pricing
          </button>
        </div>
      </div>
    </section>
  );
}
