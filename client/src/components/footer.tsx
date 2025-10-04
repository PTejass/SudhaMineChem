import { businessData } from "@/data/business-data";
import { Factory, MapPin, Phone, Mail, MessageCircle, PhoneCall, Clock } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleWhatsApp = () => {
    const whatsappUrl = `https://wa.me/${businessData.contact.whatsapp.replace(/[^0-9]/g, '')}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <Factory className="text-primary-foreground text-xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold">{businessData.footer.company.name}</h3>
                <p className="text-background/70">{businessData.footer.company.tagline}</p>
              </div>
            </div>
            <p className="text-background/80 mb-6 leading-relaxed">
              {businessData.footer.description}
            </p>
            <div className="flex space-x-4">
              <button 
                onClick={handleWhatsApp}
                className="bg-green-600 p-3 rounded-lg hover:bg-green-700 transition-colors"
                data-testid="button-footer-whatsapp"
              >
                <MessageCircle className="text-xl" />
              </button>
              <a
                href={`tel:${businessData.footer.phone}`}
                className="bg-background/10 p-3 rounded-lg hover:bg-background/20 transition-colors"
                data-testid="button-footer-call"
              >
                <PhoneCall className="text-xl" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection("home")}
                  className="text-background/80 hover:text-background transition-colors text-left"
                  data-testid="button-footer-home"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("about")}
                  className="text-background/80 hover:text-background transition-colors text-left"
                  data-testid="button-footer-about"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("products")}
                  className="text-background/80 hover:text-background transition-colors text-left"
                  data-testid="button-footer-products"
                >
                  Products
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("location")}
                  className="text-background/80 hover:text-background transition-colors text-left"
                  data-testid="button-footer-location"
                >
                  Location
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("contact")}
                  className="text-background/80 hover:text-background transition-colors text-left"
                  data-testid="button-footer-contact"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="text-background/60 mt-1" />
                <div>
                  <p className="text-background/80 text-sm whitespace-pre-line">
                    {businessData.footer.address}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-background/60" />
                <p className="text-background/80 text-sm">{businessData.footer.phone}</p>
              </div>
              <div className="flex items-center space-x-3">
                <MessageCircle className="text-background/60" />
                <p className="text-background/80 text-sm">{businessData.footer.whatsapp}</p>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="text-background/60 mt-1" />
                <p className="text-background/80 text-sm whitespace-pre-line">
                  {businessData.location.hours}
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-background/60" />
                <p className="text-background/80 text-sm">{businessData.footer.email}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-background/60 text-sm">
              {businessData.footer.copyright}
            </p>
            <p className="text-background/60 text-sm text-center md:text-right max-w-xl">
              We are committed to delivering reliable industrial solutions with integrity and customer-first service. For any queries, please reach out via phone, email, or WhatsApp.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
