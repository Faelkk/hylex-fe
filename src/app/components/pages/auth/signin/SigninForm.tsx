import Link from "next/link";
import Input from "../Input";
import Button from "../Button";

export default function SigninForm() {
  return (
    <main className=" flex-col flex-1 flex items-center justify-center">
      <h1 className="font-poppins font-semibold text-[2rem] text-black-0">
        Entre em sua conta
      </h1>
      <span className="font-roboto text-[18px] text-black-0 mt-5">
        Não tem uma conta ?{" "}
        <Link href="/signup" className="text-green-400 font-medium">
          Criar uma
        </Link>
      </span>

      <form className="flex flex-col mt-8">
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Senha" />
        <Button>Entrar</Button>
      </form>
    </main>
  );
}
