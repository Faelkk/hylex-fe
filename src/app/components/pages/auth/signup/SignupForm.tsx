"use client";

import Input from "../Input";
import Button from "../Button";

import useSignupFormController from "./useSignupFormController";
import Link from "next/link";
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

export default function SignupForm() {
  const { errors, register, handleSubmit, isFormEmpty } =
    useSignupFormController();
  return (
    <main className="flex flex-col flex-1 items-center justify-center">
      <h1 className="font-poppins font-semibold text-[1.6rem] 3pp:text-[2rem] text-black-0">
        Criar uma conta
      </h1>
      <span className="font-roboto text-[18px] text-black-0 mt-5">
        Já tem uma conta?{" "}
        <Link href="/signin" className="text-green-400 font-medium">
          Entrar
        </Link>
      </span>

      <form className="flex flex-col mt-8" onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Nome completo"
          {...register("name")}
          className={errors.name ? "input-error" : ""}
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}

        <Input
          type="text"
          placeholder="Nome de usuario"
          {...register("username")}
          className={errors.username ? "input-error" : ""}
        />
        {errors.username && (
          <p className="text-red-500">{errors.username.message}</p>
        )}

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
