import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";

import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import signin from "@/actions/user/signin";

export const signinSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

export type FormData = z.infer<typeof signinSchema>;

const useSigninFormController = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit: HookFormSubmit,
    formState: { errors },
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(signinSchema),
  });

  const handleSubmit = HookFormSubmit(async (dataSignin) => {
    try {
      const { error, ok } = await signin(dataSignin);

      if (ok) {
        toast.success("Conta logada com sucesso");
        router.push("/");
      } else {
        throw new Error(error);
      }
    } catch (err: any) {
      if (err.response && err.response.data) {
        toast.error(err.response.data);
      } else {
        toast.error("Erro ao fazer login");
      }
    }
  });

  const values = watch();
  const isFormEmpty = !values.email || !values.password;

  return { errors, handleSubmit, register, isFormEmpty };
};

export default useSigninFormController;
