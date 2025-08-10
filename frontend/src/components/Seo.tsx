import { useEffect } from "react";

interface SeoProps {
  title: string;
  description?: string;
}

export const Seo = ({ title, description }: SeoProps) => {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = title;

    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    if (description) meta.setAttribute("content", description);

    return () => {
      document.title = prevTitle;
    };
  }, [title, description]);

  return null;
};
