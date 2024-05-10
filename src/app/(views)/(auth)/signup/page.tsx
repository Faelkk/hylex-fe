import Container from "@/app/components/container/Container";
import Footer from "@/app/components/pages/auth/Footer";
import Header from "@/app/components/pages/auth/Header";
import SignupForm from "@/app/components/pages/auth/signup/SignupForm";

export default function Signup() {
  return (
    <Container classname="bg-gray-100 flex-col items-center ">
      <Header />

      <SignupForm />

      <Footer />
    </Container>
  );
}
