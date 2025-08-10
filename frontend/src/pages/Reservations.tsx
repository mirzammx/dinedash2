import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Seo } from "@/components/Seo";
import { toast } from "sonner";

const Reservations = () => {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast("Reservation requires backend integration.", { description: "Connect Supabase to save reservations." });
  };
  return (
    <div className="max-w-2xl mx-auto">
      <Seo title="Reservations — DineDash" description="Book a table at DineDash." />
      <Card>
        <CardHeader>
          <CardTitle>Reserve a Table</CardTitle>
          <CardDescription>We’ll confirm by email once available.</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="grid gap-4 md:grid-cols-2" onSubmit={onSubmit}>
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" required placeholder="Your full name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="date">Date</Label>
              <Input id="date" type="date" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="time">Time</Label>
              <Input id="time" type="time" required />
            </div>
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="party">Party Size</Label>
              <Input id="party" type="number" min={1} max={20} defaultValue={2} required />
            </div>
            <div className="md:col-span-2">
              <Button type="submit" variant="hero" size="lg">Request Reservation</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Reservations;
