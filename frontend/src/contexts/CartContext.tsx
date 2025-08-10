import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

export type CartItem = {
  id: string;
  name: string;
  price: number;
  qty: number;
};

interface CartContextValue {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "qty">, qty?: number) => void;
  removeItem: (id: string) => void;
  clear: () => void;
  total: number;
  count: number;
}

const CartContext = createContext<CartContextValue | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const raw = localStorage.getItem("dinedash_cart");
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("dinedash_cart", JSON.stringify(items));
  }, [items]);

  const addItem: CartContextValue["addItem"] = (item, qty = 1) => {
    setItems((prev) => {
      const existing = prev.find((p) => p.id === item.id);
      if (existing) {
        return prev.map((p) => (p.id === item.id ? { ...p, qty: p.qty + qty } : p));
      }
      return [...prev, { ...item, qty }];
    });
  };

  const removeItem = (id: string) => setItems((prev) => prev.filter((p) => p.id !== id));
  const clear = () => setItems([]);

  const { total, count } = useMemo(() => {
    return {
      total: items.reduce((sum, i) => sum + i.price * i.qty, 0),
      count: items.reduce((sum, i) => sum + i.qty, 0),
    };
  }, [items]);

  const value: CartContextValue = { items, addItem, removeItem, clear, total, count };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
};
