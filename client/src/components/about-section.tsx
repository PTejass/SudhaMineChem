import { businessData } from "@/data/business-data";
import { Award } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">About Our Company</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            With decades of experience in industrial manufacturing, we've built our reputation on quality, reliability, and innovation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <img 
              src="https://pixabay.com/get/g1fb25c170a600a1c5ab6c4256d8aeaf66b4bbef151d9bfed51136fed2a315963d93b8ef7a69b92c839ab23eaa50f98658a3d767bde383126c0cace0e6ec49166_1280.jpg"
              alt="Modern industrial manufacturing facility" 
              className="rounded-xl shadow-2xl w-full h-auto hover-lift" 
            />
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {businessData.about.company.title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {businessData.about.company.description}
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-foreground mb-4">
                  {businessData.about.licenses.title}
                </h4>
                <div className="bg-card p-6 rounded-lg border border-border">
                  <ul className="space-y-2 text-muted-foreground">
                    {businessData.about.licenses.list.map((license, index) => (
                      <li key={index} className="flex items-center">
                        <Award className="text-primary mr-3 h-5 w-5" />
                        {license}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">{businessData.stats.experience}</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">{businessData.stats.products}</div>
                  <div className="text-sm text-muted-foreground">Products</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">{businessData.stats.clients}</div>
                  <div className="text-sm text-muted-foreground">Happy Clients</div>
                </div>
              </div>
              
              <div className="text-center">
                <a href="/about">
                  <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors font-medium inline-flex items-center hover-lift" data-testid="button-know-more">
                    Know More About Us
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
