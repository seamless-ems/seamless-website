import { useEffect } from "react";

type HeadProps = {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
};

const setMeta = (name: string, content: string | undefined, attr = "name") => {
  if (!content) return;
  let el = document.querySelector(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

export default function Head({ title, description, url, image }: HeadProps) {
  useEffect(() => {
    const prevTitle = document.title;
    if (title) document.title = title;

    setMeta("description", description);
    setMeta("og:title", title, "property");
    setMeta("og:description", description, "property");
    setMeta("og:url", url, "property");
    setMeta("og:image", image, "property");
    setMeta("twitter:card", image ? "summary_large_image" : "summary");
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);
    setMeta("twitter:image", image);

    return () => {
      document.title = prevTitle;
    };
  }, [title, description, url, image]);

  return null;
}
