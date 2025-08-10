import heroImage from "@/assets/dinedash-hero.jpg";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Seo } from "@/components/Seo";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="grid gap-14">
      <Seo title="DineDash — Restaurant" description="Fresh flavors, fast service. Explore our menu, reserve a table, or order now." />
      <section className="grid gap-10 md:grid-cols-2 items-center">
        <article>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Fresh flavors. Fast service.</h1>
          <p className="text-lg text-muted-foreground mb-6">
            Explore our seasonal menu, reserve a table, or order your favorites.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button variant="hero" size="xl" asChild>
              <Link to="/menu">See Menu</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/reservations">Reserve a Table</Link>
            </Button>
          </div>
        </article>
        <aside className="group perspective">
          <img
            src={heroImage}
            alt="DineDash dishes collage"
            loading="lazy"
            className="w-full h-auto rounded-lg border shadow-[var(--shadow-elegant)] transform-gpu transition-transform duration-300 ease-out group-hover:rotate-[-1.5deg] group-hover:scale-[1.02]"
          />
        </aside>
      </section>

      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card className="hover:shadow-[var(--shadow-elegant)] transition-shadow">
          <CardHeader>
            <CardTitle>Quality Ingredients</CardTitle>
            <CardDescription>Locally sourced and seasonal.</CardDescription>
          </CardHeader>
        </Card>
        <Card className="hover:shadow-[var(--shadow-elegant)] transition-shadow">
          <CardHeader>
            <CardTitle>Fast Pickup</CardTitle>
            <CardDescription>Order ahead and skip the line.</CardDescription>
          </CardHeader>
        </Card>
        <Card className="hover:shadow-[var(--shadow-elegant)] transition-shadow">
          <CardHeader>
            <CardTitle>Family Friendly</CardTitle>
            <CardDescription>Comfort for all ages.</CardDescription>
          </CardHeader>
        </Card>
        <Card className="hover:shadow-[var(--shadow-elegant)] transition-shadow">
          <CardHeader>
            <CardTitle>Secure Checkout</CardTitle>
            <CardDescription>Protected by modern standards.</CardDescription>
          </CardHeader>
        </Card>
      </section>
    </div>
  );
};

export default Index;
