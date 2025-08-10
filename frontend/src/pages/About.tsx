import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Seo } from "@/components/Seo";

const About = () => {
  return (
    <div className="space-y-8">
      <Seo title="About Us — DineDash" description="Learn about DineDash: our story, our ingredients, and our commitment to great service." />
      <header>
        <h1 className="text-3xl font-bold mb-2">About DineDash</h1>
        <p className="text-muted-foreground">Quality ingredients, crafted with care.</p>
      </header>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Our Story</CardTitle>
            <CardDescription>From a small kitchen to your table.</CardDescription>
          </CardHeader>
          <CardContent>
            We started DineDash to bring delicious, dependable meals to our community. Our chefs blend tradition with modern tastes to create memorable dishes.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Fresh Ingredients</CardTitle>
            <CardDescription>Local, seasonal, sustainable.</CardDescription>
          </CardHeader>
          <CardContent>
            We partner with local suppliers to source the freshest produce and meats, supporting sustainable practices and exceptional flavor.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Service First</CardTitle>
            <CardDescription>Fast, friendly, reliable.</CardDescription>
          </CardHeader>
          <CardContent>
            Whether dining in or ordering out, our staff focuses on delivering a seamless experience you can count on.
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;
