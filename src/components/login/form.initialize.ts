import { useRouter } from "next/navigation";
import { UseFormReturn } from "react-hook-form";
import { ILoginSchema } from "./form.schema";

export const useInitialize = (method: UseFormReturn<ILoginSchema>) => {
  const router = useRouter();
  const onSubmit = async (data) => {
    // 로그인 로직
    router.push("/");
  };
  return { onSubmit };
};
