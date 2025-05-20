import "./globals.css";

export const metadata = {
  title: "김희진 - Backend Developer",
  description: "백엔드 개발자 포트폴리오",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko" className="bg-white">
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
