import { useState } from "react";
import { businessData } from "@/data/business-data";
import { MessageCircle, Mail, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { formatWhatsAppMessage, openWhatsApp } from "@/lib/whatsapp";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    productInterest: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    const whatsappMessage = formatWhatsAppMessage(formData);
    openWhatsApp(businessData.contact.whatsapp, whatsappMessage);
    
    toast({
      title: "Redirecting to WhatsApp",
      description: "Opening WhatsApp with your message...",
    });
  };

  const handleDirectWhatsApp = () => {
    openWhatsApp(businessData.contact.whatsapp, "Hello! I'm interested in your industrial products. Please provide more information.");
  };

  return (
    <section id="contact" className="py-20 bg-muted/30 border-t border-border/60 dark:border-border/40">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to discuss your industrial requirements? Contact us for personalized quotes and technical consultation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                {businessData.contact.title}
              </h3>
              <p className="text-lg text-muted-foreground mb-8">
                {businessData.contact.description}
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-primary/10 p-4 rounded-lg">
                  <MessageCircle className="text-primary text-2xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">WhatsApp Business</h4>
                  <p className="text-muted-foreground">{businessData.contact.whatsapp}</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-primary/10 p-4 rounded-lg">
                  <Mail className="text-primary text-2xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Email Address</h4>
                  <p className="text-muted-foreground">{businessData.contact.email}</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-primary/10 p-4 rounded-lg">
                  <Phone className="text-primary text-2xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Phone Number</h4>
                  <p className="text-muted-foreground">{businessData.contact.phone}</p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <Button
                onClick={handleDirectWhatsApp}
                className="bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-all duration-300 font-semibold text-lg w-full hover-lift"
                data-testid="button-whatsapp-direct"
              >
                <MessageCircle className="mr-3 text-xl" />
                Chat on WhatsApp
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card p-8 rounded-xl shadow-lg border border-border reveal reveal-delay-2">
            <h3 className="text-xl font-bold text-card-foreground mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">Full Name *</label>
                  <Input
                    type="text"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    data-testid="input-name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">Company</label>
                  <Input
                    type="text"
                    placeholder="Company name"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    data-testid="input-company"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">Phone Number *</label>
                  <Input
                    type="tel"
                    placeholder="+91 98765-43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    data-testid="input-phone"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">Email *</label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    data-testid="input-email"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-card-foreground mb-2">Product Interest</label>
                <Select value={formData.productInterest} onValueChange={(value) => setFormData({ ...formData, productInterest: value })}>
                  <SelectTrigger data-testid="select-product">
                    <SelectValue placeholder="Select a product category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Mineral Powders">Mineral Powders</SelectItem>
                    <SelectItem value="Clay Products">Clay Products</SelectItem>
                    <SelectItem value="Chemical Compounds">Chemical Compounds</SelectItem>
                    <SelectItem value="Carbon Products">Carbon Products</SelectItem>
                    <SelectItem value="Food Grade">Food Grade</SelectItem>
                    <SelectItem value="Feed Additives">Feed Additives</SelectItem>
                    <SelectItem value="Construction Materials">Construction Materials</SelectItem>
                    <SelectItem value="Feed Materials">Feed Materials</SelectItem>
                    <SelectItem value="General Inquiry">General Inquiry</SelectItem>
                    <SelectItem value="Bulk Pricing">Bulk Pricing</SelectItem>
                    <SelectItem value="Custom Requirements">Custom Requirements</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-card-foreground mb-2">Message *</label>
                <Textarea
                  rows={4}
                  placeholder="Tell us about your requirements..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  data-testid="textarea-message"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground px-6 py-4 rounded-lg hover:bg-primary/90 transition-colors font-semibold text-lg"
                data-testid="button-send-whatsapp"
              >
                <Send className="mr-2" />
                Send via WhatsApp
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
