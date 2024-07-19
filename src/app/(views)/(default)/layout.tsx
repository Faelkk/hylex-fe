import React, { useState, useEffect } from "react";
import me from "@/actions/user/me";
import Container from "@/app/components/container/Container";
import Footer from "@/app/components/footer/Footer";
import Header from "@/app/components/header/Header";
import { UserContextProvider } from "@/app/contexts/UserContext";
import { InputContextProvider } from "@/app/contexts/InputContext";
import { CartContextProvider } from "@/app/contexts/CartProductsContext";
import { FavoriteContextProvider } from "@/app/contexts/FavoriteProductsContext";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { data } = await me();
  return (
    <UserContextProvider user={data}>
      <InputContextProvider>
        <CartContextProvider>
          <FavoriteContextProvider>
            <Container classname="flex-col bg-gray-0">
              <Header />
              {children}
              <Footer />
            </Container>
          </FavoriteContextProvider>
        </CartContextProvider>
      </InputContextProvider>
    </UserContextProvider>
  );
}
