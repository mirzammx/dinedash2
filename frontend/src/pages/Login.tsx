import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Seo } from "@/components/Seo";
import { toast } from "sonner";

const Login = () => {
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = String(form.get("email") || "");
    const password = String(form.get("password") || "");

    const apiBase = (import.meta as any).env?.VITE_API_BASE_URL || "http://localhost:8081";

    try {
      setIsSubmitting(true);
      const res = await fetch(`${apiBase}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: email, password }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      localStorage.setItem("auth.username", data.username ?? email);
      localStorage.setItem("auth.token", data.token ?? "");
      toast("Logged in", { description: `Welcome, ${data.username ?? email}` });
      navigate("/");
    } catch (err) {
      toast("Login failed", { description: "Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <Seo title="Login — DineDash" description="Access your DineDash account or create a new one." />
      <Card>
        <CardHeader>
          <CardTitle>{mode === "login" ? "Login" : "Create account"}</CardTitle>
          <CardDescription>
            {mode === "login" ? "Welcome back!" : "Join us for faster checkout and order history."}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4" onSubmit={onSubmit}>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" required placeholder="you@example.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" name="password" type="password" required placeholder="••••••••" />
            </div>
            <div className="flex items-center justify-between">
              <Button type="submit" variant="hero" size="lg" disabled={isSubmitting}>
                {isSubmitting ? "Please wait..." : mode === "login" ? "Login" : "Sign Up"}
              </Button>
              <Button type="button" variant="link" onClick={() => setMode(mode === "login" ? "signup" : "login")}>{mode === "login" ? "Create account" : "Have an account? Login"}</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
