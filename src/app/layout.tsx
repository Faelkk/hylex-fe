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
        <div className="flex flex-col min-h-screen">
          <main className="flex-1 flex">{children}</main>
        </div>
      </body>
    </html>
  );
}
