"use client";

import { useRouter } from "next/navigation";
import { UseFormReturn } from "react-hook-form";
import { ISignupSchema } from "./form.schema";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "@/commons/graphql/mutations/create-user";

export const useInitialize = (method: UseFormReturn<ISignupSchema>) => {
  const router = useRouter();
  const [createUser] = useMutation(CREATE_USER);
  const onSubmit = async (data: ISignupSchema) => {
    const { name, email, password } = data;
    try {
      const result = await createUser({
        variables: { createUserInput: { name, email, password } },
      });
      console.log(result.data.createUser);
      // TODO: 나중에 모달로 바꾸기
      alert("회원가입에 성공하였습니다😊");
      router.push("/");
    } catch (error) {
      console.error(error);
    }
  };
  return { onSubmit, method };
};
