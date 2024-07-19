import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import signup from "@/actions/user/signup";

export const signupSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
  name: z.string(),
  username: z.string(),
});

export type FormData = z.infer<typeof signupSchema>;

const useSignupFormController = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit: HookFormSubmit,
    formState: { errors },
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(signupSchema),
  });

  const handleSubmit = HookFormSubmit(async (dataSignup) => {
    try {
      const { error, ok } = await signup(dataSignup);

      if (ok) {
        toast.success("Conta cadastrada com sucesso");

        router.push("/");
      } else {
        throw new Error(error);
      }
    } catch (err: any) {
      if (err.response && err.response.data) {
        toast.error(err.response.data);
      } else {
        toast.error("Erro ao cadastrar conta");
      }
    }
  });

  const values = watch();
  const isFormEmpty =
    !values.email || !values.password || !values.name || !values.username;

  return { errors, handleSubmit, register, isFormEmpty };
};

export default useSignupFormController;
