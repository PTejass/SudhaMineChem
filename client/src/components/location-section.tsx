import { businessData } from "@/data/business-data";
import { MapPin, Clock, Phone } from "lucide-react";
import GoogleMaps from "./google-maps";

export default function LocationSection() {
  return (
    <section id="location" className="py-20 bg-background border-t border-border/60 dark:border-border/40">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">Our Location</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Visit our state-of-the-art manufacturing facility and experience our commitment to quality firsthand.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 reveal">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                {businessData.location.title}
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <MapPin className="text-primary text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Address</h4>
                    <p className="text-muted-foreground whitespace-pre-line">
                      {businessData.location.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Clock className="text-primary text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Working Hours</h4>
                    <p className="text-muted-foreground whitespace-pre-line">
                      {businessData.location.hours}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Phone className="text-primary text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Contact Numbers</h4>
                    <p className="text-muted-foreground whitespace-pre-line">
                      {businessData.location.phones}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <GoogleMaps
            latitude={businessData.location.coordinates.latitude}
            longitude={businessData.location.coordinates.longitude}
            height="400px"
            zoom={15}
            className="shadow-lg"
            apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
            forceEmbed={true}
          />
        </div>
      </div>
    </section>
  );
}