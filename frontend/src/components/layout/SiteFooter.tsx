export const SiteFooter = () => {
  return (
    <footer className="border-t">
      <div className="container py-8 grid gap-4 md:grid-cols-3 text-sm">
        <div>
          <p className="font-semibold">DineDash</p>
          <p className="text-muted-foreground">Fresh flavors, fast service.</p>
        </div>
        <div>
          <p className="font-semibold mb-2">Hours</p>
          <p className="text-muted-foreground">Mon–Sun: 10:00–22:00</p>
        </div>
        <div>
          <p className="font-semibold mb-2">Contact</p>
          <p className="text-muted-foreground">hello@dinedash.local • (555) 012-3456</p>
        </div>
      </div>
      <div className="container pb-8 text-xs text-muted-foreground">© {new Date().getFullYear()} DineDash. All rights reserved.</div>
    </footer>
  );
};
