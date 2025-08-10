import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Seo } from "@/components/Seo";

const mapSrc = `https://www.google.com/maps?q=Central%20Park%20New%20York&output=embed`;

const Locate = () => {
  return (
    <div className="space-y-6">
      <Seo title="Locate Us — DineDash" description="Find our restaurant and see our opening hours." />
      <h1 className="text-3xl font-bold">Locate Us</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Address</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-muted-foreground">
            <p>123 Flavor Street</p>
            <p>Food City, FC 10001</p>
            <p>Phone: (555) 012-3456</p>
            <p>Email: hello@dinedash.local</p>
            <p>Hours: Mon–Sun 10:00–22:00</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Map</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="aspect-video rounded-lg overflow-hidden border">
              <iframe
                title="DineDash Location Map"
                src={mapSrc}
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Locate;
