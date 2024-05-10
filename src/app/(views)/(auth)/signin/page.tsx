import Container from "@/app/components/container/Container";
import Footer from "@/app/components/pages/auth/Footer";
import Header from "@/app/components/pages/auth/Header";
import SigninForm from "@/app/components/pages/auth/signin/SigninForm";

export default function Signin() {
  return (
    <Container classname="bg-gray-100 flex-col items-center">
      <Header />
      <SigninForm />
      <Footer />
    </Container>
  );
}
