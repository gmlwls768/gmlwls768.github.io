import "./globals.css";

export const metadata = {
  title: "김희진 - Portfolio",
  description: "백엔드 개발자 / 시스템 엔지니어 포트폴리오",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko" className="bg-slate-50">
      <body className="min-h-screen text-slate-600">{children}</body>
    </html>
  );
}
