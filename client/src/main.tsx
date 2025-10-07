import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Disable right-click context menu on all images site-wide
document.addEventListener("contextmenu", (event) => {
  const target = event.target as HTMLElement | null;
  if (target && (target.tagName === "IMG" || target.closest("img"))) {
    event.preventDefault();
  }
});

// Scroll reveal for elements with .reveal
const initReveal = () => {
  // Prevent double initialization
  // @ts-ignore
  if ((window as any).__revealInitialized) return;
  // @ts-ignore
  (window as any).__revealInitialized = true;
  if (typeof window === "undefined") return;
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -15% 0px", threshold: 0.15 }
  );

  let rafId = 0;
  const observeAll = () => {
    if (rafId) cancelAnimationFrame(rafId);
    rafId = requestAnimationFrame(() => {
      document.querySelectorAll<HTMLElement>(".reveal").forEach((el) => {
    const rect = el.getBoundingClientRect();
    const inView = rect.top < window.innerHeight * 0.9 && rect.bottom > 0;
    if (inView) {
      el.classList.add("is-visible");
    } else {
      observer.observe(el);
    }
      });
    });
  };

  // Initial pass
  observeAll();

  // Observe DOM mutations to catch React-mounted elements
  const mo = new MutationObserver(() => observeAll());
  mo.observe(document.getElementById("root") as HTMLElement, {
    childList: true,
    subtree: true,
  });

  // Keep observing on scroll/resize for dynamic layouts
  window.addEventListener("scroll", observeAll, { passive: true });
  window.addEventListener("resize", observeAll);
};

if (document.readyState === "complete" || document.readyState === "interactive") {
  initReveal();
} else {
  window.addEventListener("DOMContentLoaded", initReveal);
  window.addEventListener("load", initReveal);
}

createRoot(document.getElementById("root")!).render(<App />);

// Set favicon from bundled logo
(() => {
  try {
    const href = new URL("./photos/logo.jpg", import.meta.url).toString();
    let link = document.querySelector<HTMLLinkElement>('link[rel="icon"]');
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.head.appendChild(link);
    }
    link.type = "image/jpeg";
    link.href = href;
  } catch {}
})();
