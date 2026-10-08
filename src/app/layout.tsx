import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dr. Nome Sobrenome | Advocacia",
  description:
    "Modelo demonstrativo de site institucional para advocacia, com apresentação profissional, áreas de atuação, conteúdo informativo e canais de contato.",

  icons: {
    icon: "/favicon.svg?v=2",
  },
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
};

const themeBoot = `
(function(){
  try {
    var saved = localStorage.getItem('adv-theme');
    var systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.dataset.theme = saved || (systemDark ? 'dark' : 'light');
  } catch (e) {}
})();`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: themeBoot }} /></head>
      <body>{children}</body>
    </html>
  );
}
