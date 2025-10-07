import { Link, useLocation } from "wouter";
import { businessData } from "@/data/business-data";
import { Factory, Menu, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Header() {
  const [location] = useLocation();

  const scrollToSection = (sectionId: string) => {
    if (location !== "/") {
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navigation = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Products", id: "products" },
    { label: "Location", id: "location" },
  ];

  const isDark = typeof document !== "undefined" && document.documentElement.classList.contains("dark");
  const toggleTheme = () => {
    if (typeof document === "undefined") return;
    const root = document.documentElement;
    const next = root.classList.toggle("dark");
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
  };

  return (
    <nav className="bg-card border-b border-border sticky top-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Business Name Section */}
          <Link href="/" className="flex items-center space-x-4" data-testid="link-home">
            <div className="w-12 h-12 rounded-lg overflow-hidden bg-transparent flex items-center justify-center">
              <img
                src={new URL("../photos/logo.jpg", import.meta.url).toString()}
                alt={`${businessData.company.name} logo`}
                className="w-12 h-12 object-contain"
              />
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

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground hover:text-primary transition-colors font-medium"
                data-testid={`button-nav-${item.id}`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={toggleTheme}
              className="inline-flex items-center justify-center w-10 h-10 rounded-md border border-border hover:bg-muted/50 transition-colors"
              aria-label="Toggle Theme"
              data-testid="button-theme-toggle"
            >
              <Sun className="h-5 w-5 hidden dark:block" />
              <Moon className="h-5 w-5 block dark:hidden" />
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-primary text-primary-foreground px-6 py-2 rounded-md hover:bg-primary/90 transition-colors font-medium"
              data-testid="button-contact"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden" data-testid="button-mobile-menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col space-y-4 mt-8">
                {navigation.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-left text-foreground hover:text-primary transition-colors font-medium py-2"
                    data-testid={`button-mobile-nav-${item.id}`}
                  >
                    {item.label}
                  </button>
                ))}
                <button
                  onClick={() => scrollToSection("contact")}
                  className="bg-primary text-primary-foreground px-6 py-2 rounded-md hover:bg-primary/90 transition-colors font-medium w-full"
                  data-testid="button-mobile-contact"
                >
                  Contact
                </button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
