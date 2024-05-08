import { typePrimary, typeSecond } from "@/functions/font";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${typePrimary.variable} ${typeSecond.variable}`}>
        {children}
      </body>
    </html>
  );
}
