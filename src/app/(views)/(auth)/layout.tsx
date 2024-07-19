import Container from "@/app/components/container/Container";
import Footer from "@/app/components/pages/auth/Footer";
import Header from "@/app/components/pages/auth/Header";
import { Toaster } from "react-hot-toast";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Container classname="bg-gray-100 flex-col items-center">
      <Header />
      {children}
      <Footer />
      <Toaster />
    </Container>
  );
}
