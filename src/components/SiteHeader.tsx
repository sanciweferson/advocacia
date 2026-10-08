"use client";

import { useEffect, useState } from "react";
import { Icon } from "./Icons";

const links = [
  ["#inicio", "Início"],
  ["#atuacao", "Áreas de atuação"],
  ["#sobre", "Sobre"],
  ["#conteudos", "Conteúdos"],
  ["#faq", "FAQ"],
  ["#contato", "Contato"],
] as const;

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const current = document.documentElement.dataset.theme === "dark" ? "dark" : "light";
    setTheme(current);

    const onResize = () => {
      if (window.innerWidth > 980) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    localStorage.setItem("adv-theme", next);
    setTheme(next);
  }

  function closeAndScroll() { setMenuOpen(false); }

  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="#inicio" aria-label="Início">
          <span className="brand-mark"><Icon name="scale" size={25} /></span>
          <span><strong>DR. NOME SOBRENOME</strong><small>ADVOCACIA</small></span>
        </a>

        <nav className="desktop-nav" aria-label="Navegação principal">
          {links.map(([href, label]) => <a key={href} href={href}>{label}</a>)}
        </nav>

        <div className="header-actions">
          <a className="contact-button desktop-only" href="#contato">Contato <Icon name="arrow" size={17} /></a>
          <button className="theme-button desktop-only" onClick={toggleTheme} aria-label="Alternar tema"><Icon name={theme === "dark" ? "sun" : "moon"} /></button>
          <button className="menu-button" onClick={() => setMenuOpen(v => !v)} aria-expanded={menuOpen} aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}><Icon name={menuOpen ? "close" : "menu"} /></button>
        </div>
      </div>

      <div className={`drawer-backdrop ${menuOpen ? "open" : ""}`} onMouseDown={(e) => { if (e.target === e.currentTarget) setMenuOpen(false); }}>
        <aside className={`mobile-drawer ${menuOpen ? "open" : ""}`} aria-hidden={!menuOpen}>
          <div className="drawer-top">
            <div><span className="mini-label">NAVEGAÇÃO</span><strong>Menu</strong></div>
            <button className="drawer-close" onClick={() => setMenuOpen(false)} aria-label="Fechar menu"><Icon name="close" /></button>
          </div>
          <nav className="drawer-nav">
            {links.map(([href, label], index) => <a key={href} href={href} onClick={closeAndScroll}><span>{String(index + 1).padStart(2,"0")}</span>{label}</a>)}
          </nav>
          <div className="drawer-footer">
            <button className="drawer-theme" onClick={toggleTheme}><span><Icon name={theme === "dark" ? "sun" : "moon"} /></span><div><strong>Aparência</strong><small>{theme === "dark" ? "Tema escuro" : "Tema claro"}</small></div><b>Trocar</b></button>
            <a className="drawer-contact" href="#contato" onClick={closeAndScroll}>Falar com o escritório <Icon name="arrow" size={18} /></a>
          </div>
        </aside>
      </div>
    </header>
  );
}
