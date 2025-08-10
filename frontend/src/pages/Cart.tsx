import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useCart } from "@/contexts/CartContext";
import { Seo } from "@/components/Seo";
import { toast } from "sonner";

const Cart = () => {
  const { items, removeItem, clear, total } = useCart();

  return (
    <div className="space-y-6">
      <Seo title="Your Cart — DineDash" description="Review your selected items and proceed to checkout." />
      <h1 className="text-3xl font-bold">Your Cart</h1>
      {items.length === 0 ? (
        <p className="text-muted-foreground">Your cart is empty. Explore our <a className="underline" href="/menu">menu</a>.</p>
      ) : (
        <>
          <div className="grid gap-4">
            {items.map((item) => (
              <Card key={item.id}>
                <CardHeader className="flex-row items-center justify-between">
                  <CardTitle className="text-lg">{item.name} × {item.qty}</CardTitle>
                  <div className="flex items-center gap-3">
                    <span className="font-semibold">${(item.price * item.qty).toFixed(2)}</span>
                    <Button variant="outline" size="sm" onClick={() => removeItem(item.id)}>Remove</Button>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
          <Card>
            <CardContent className="flex items-center justify-between py-6">
              <span className="text-lg font-semibold">Total</span>
              <span className="text-lg font-semibold">${total.toFixed(2)}</span>
            </CardContent>
          </Card>
          <div className="flex gap-3">
            <Button variant="outline" onClick={clear}>Clear Cart</Button>
            <Button variant="hero" onClick={() => toast("Checkout requires backend integration.", { description: "Connect Supabase to process orders securely." })}>
              Proceed to Checkout
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
