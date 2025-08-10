import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { useCart } from "@/contexts/CartContext";
import { Seo } from "@/components/Seo";

type MenuItem = {
  id: string;
  name: string;
  desc: string;
  price: number;
  category: "Starters" | "Mains" | "Sides" | "Desserts" | "Drinks";
};

const MENU: MenuItem[] = [
  { id: "bruschetta", name: "Bruschetta", desc: "Tomato, basil, garlic on toasted bread.", price: 6.5, category: "Starters" },
  { id: "ceasar", name: "Caesar Salad", desc: "Crisp romaine, parmesan, croutons.", price: 8.0, category: "Starters" },
  { id: "margherita", name: "Margherita Pizza", desc: "Tomato, mozzarella, basil.", price: 12.0, category: "Mains" },
  { id: "alfredo", name: "Fettuccine Alfredo", desc: "Creamy parmesan sauce.", price: 14.5, category: "Mains" },
  { id: "fries", name: "Truffle Fries", desc: "Crispy fries, truffle salt.", price: 5.5, category: "Sides" },
  { id: "gelato", name: "Vanilla Gelato", desc: "Classic creamy gelato.", price: 4.5, category: "Desserts" },
  { id: "tiramisu", name: "Tiramisu", desc: "Espresso-soaked layers, mascarpone.", price: 6.0, category: "Desserts" },
  { id: "spritz", name: "Aperol Spritz", desc: "Aperol, prosecco, soda.", price: 9.0, category: "Drinks" },
];

const categories: MenuItem["category"][] = ["Starters", "Mains", "Sides", "Desserts", "Drinks"];

const Menu = () => {
  const { addItem } = useCart();

  return (
    <div className="space-y-8">
      <Seo title="Menu — DineDash" description="Explore our menu: starters, mains, desserts, and drinks." />
      <header>
        <h1 className="text-3xl font-bold mb-2">Our Menu</h1>
        <p className="text-muted-foreground">Freshly prepared, made with love.</p>
      </header>

      {categories.map((cat) => (
        <section key={cat} className="space-y-4">
          <h2 className="text-xl font-semibold">{cat}</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {MENU.filter((m) => m.category === cat).map((item) => (
              <Card key={item.id} className="flex flex-col">
                <CardHeader>
                  <CardTitle>{item.name}</CardTitle>
                  <CardDescription>{item.desc}</CardDescription>
                </CardHeader>
                <CardContent className="mt-auto flex items-center justify-between">
                  <span className="font-semibold">${item.price.toFixed(2)}</span>
                  <Button
                    variant="hero"
                    size="sm"
                    onClick={() => addItem({ id: item.id, name: item.name, price: item.price })}
                    aria-label={`Add ${item.name} to cart`}
                  >
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default Menu;
