import me from "@/actions/user/me";
import Container from "./components/container/Container";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

import BackToTop from "./components/pages/Home/BackToTop";

import HomeAnuncio from "./components/pages/Home/HomeAnuncio";
import ProdutosSection from "./components/pages/Produtos/ProdutosSection";
import { UserContextProvider } from "./contexts/UserContext";
import { InputContextProvider } from "./contexts/InputContext";
import { CartContextProvider } from "./contexts/CartProductsContext";
import { FavoriteContextProvider } from "./contexts/FavoriteProductsContext";

export default async function Home() {
  const { data } = await me();

  return (
    <UserContextProvider user={data}>
      <InputContextProvider>
        <CartContextProvider>
          <FavoriteContextProvider>
            <Container classname="flex-col bg-gray-0">
              <Header />
              <HomeAnuncio />

              <ProdutosSection />
              <BackToTop />

              <Footer />
            </Container>
          </FavoriteContextProvider>
        </CartContextProvider>
      </InputContextProvider>
    </UserContextProvider>
  );
}
