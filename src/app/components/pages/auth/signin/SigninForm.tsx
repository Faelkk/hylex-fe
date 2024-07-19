"use client";

import Link from "next/link";
import Input from "../Input";
import Button from "../Button";
import useSigninFormController from "./useSigninFormController";
import { useFormStatus } from "react-dom";

function FormButton({
  errors,
  isFormEmpty,
}: {
  errors: any;
  isFormEmpty: boolean;
}) {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button
          disabled={isFormEmpty || Object.keys(errors).length > 0 || pending}
        >
          Entrando...
        </Button>
      ) : (
        <Button
          disabled={isFormEmpty || Object.keys(errors).length > 0 || pending}
        >
          Entrar
        </Button>
      )}
    </>
  );
}

export default function SigninForm() {
  const { errors, register, handleSubmit, isFormEmpty } =
    useSigninFormController();

  return (
    <main className="flex flex-col flex-1 items-center justify-center">
      <h1 className="font-poppins font-semibold text-[2rem] text-black-0">
        Entre em sua conta
      </h1>
      <span className="font-roboto text-[18px] text-black-0 mt-5">
        Não tem uma conta?{" "}
        <Link href="/signup" className="text-green-400 font-medium">
          Criar uma
        </Link>
      </span>

      <form className="flex flex-col mt-8" onSubmit={handleSubmit}>
        <Input
          type="email"
          placeholder="Email"
          {...register("email")}
          className={errors.email ? "input-error" : ""}
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}

        <Input
          type="password"
          placeholder="Senha"
          {...register("password")}
          className={errors.password ? "input-error" : ""}
        />
        {errors.password && (
          <p className="text-red-500">{errors.password.message}</p>
        )}

        <FormButton errors={errors} isFormEmpty={isFormEmpty} />
      </form>
    </main>
  );
}
