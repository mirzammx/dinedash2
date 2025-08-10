import { Outlet } from "react-router-dom";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";

const RootLayout = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="container py-8">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
};

export default RootLayout;
