import Link from "next/link";
import Input from "../Input";
import Button from "../Button";

export default function SignupForm() {
  return (
    <main className=" flex-col flex-1 flex items-center justify-center">
      <h1 className="font-poppins font-semibold text-[1.6rem] 3pp:text-[2rem] text-black-0">
        Criar uma conta
      </h1>
      <span className="font-roboto text-[18px] text-black-0 mt-5">
        Já tem uma conta ?{" "}
        <Link href="/signin" className="text-green-400 font-medium">
          Entrar
        </Link>
      </span>

      <form className="flex flex-col mt-8">
        <Input type="text" placeholder="Nome completo" />
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Senha" />
        <Input type="password" placeholder="Repita novamente a senha" />
        <Button>Criar conta</Button>
      </form>
    </main>
  );
}
