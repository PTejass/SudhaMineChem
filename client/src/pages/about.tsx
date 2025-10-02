import { Link } from "wouter";
import { businessData } from "@/data/business-data";
import { Factory, Award, ArrowLeft, Users, Building, Shield, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <nav className="bg-card border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center space-x-4" data-testid="link-home-logo">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <Factory className="text-primary-foreground text-xl" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">
                  {businessData.company.name}
                </h1>
                <p className="text-sm text-muted-foreground">
                  {businessData.company.tagline}
                </p>
              </div>
            </Link>

            <Link href="/">
              <Button variant="outline" className="gap-2" data-testid="button-back-home">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">
              About <span className="text-primary">{businessData.company.name}</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Pioneering industrial manufacturing excellence for over 25 years with cutting-edge technology, 
              unwavering quality standards, and a commitment to innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">Our Manufacturing Excellence</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {businessData.about.company.description}
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-card rounded-lg border">
                  <div className="text-3xl font-bold text-primary mb-2">{businessData.stats.experience}</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center p-6 bg-card rounded-lg border">
                  <div className="text-3xl font-bold text-primary mb-2">{businessData.stats.products}</div>
                  <div className="text-sm text-muted-foreground">Products</div>
                </div>
                <div className="text-center p-6 bg-card rounded-lg border">
                  <div className="text-3xl font-bold text-primary mb-2">{businessData.stats.clients}</div>
                  <div className="text-sm text-muted-foreground">Happy Clients</div>
                </div>
                <div className="text-center p-6 bg-card rounded-lg border">
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Countries Served</div>
                </div>
              </div>
            </div>
            
            <div>
              <img 
                src="https://pixabay.com/get/g1fb25c170a600a1c5ab6c4256d8aeaf66b4bbef151d9bfed51136fed2a315963d93b8ef7a69b92c839ab23eaa50f98658a3d767bde383126c0cace0e6ec49166_1280.jpg"
                alt="Manufacturing facility" 
                className="rounded-xl shadow-2xl w-full h-auto" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide our operations and define our commitment to excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover-lift">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Quality First</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Uncompromising quality standards in every product we manufacture.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover-lift">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Customer Focus</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Understanding and exceeding our customers' expectations every time.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover-lift">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Building className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Continuously advancing our technology and manufacturing processes.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover-lift">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Reliability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Dependable products and services you can trust for your business.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Licenses & Certifications */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              {businessData.about.licenses.title}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our commitment to compliance and quality is demonstrated through our comprehensive certifications and licenses.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Award className="h-6 w-6 text-primary" />
                  Quality Certifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {businessData.about.licenses.list.map((license, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <Award className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{license}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Shield className="h-6 w-6 text-primary" />
                  Compliance Standards
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">Environmental Management ISO 14001</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">Occupational Health & Safety ISO 45001</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">FDA Compliance for Medical Devices</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">CE Marking for European Markets</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-primary-foreground mb-6">
            Ready to Work with Us?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Experience the difference that quality manufacturing and exceptional service can make for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact">
              <Button size="lg" variant="secondary" className="px-8" data-testid="button-get-quote-cta">
                Get a Quote
              </Button>
            </Link>
            <Link href="/#products">
              <Button size="lg" variant="outline" className="px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" data-testid="button-view-products-cta">
                View Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <Factory className="text-primary-foreground text-xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold">{businessData.footer.company.name}</h3>
                <p className="text-background/70">{businessData.footer.company.tagline}</p>
              </div>
            </div>
            <p className="text-background/60 text-sm">
              {businessData.footer.copyright}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
