"use client";

import { useRouter } from "next/navigation";
import { UseFormReturn } from "react-hook-form";
import { ILoginSchema } from "./form.schema";
import { ApolloError, useMutation } from "@apollo/client";
import { LOGIN_USER } from "@/commons/graphql/mutations/login-user";
import { useAccessTokenStore } from "@/commons/stores/accessToken";

export const useInitialize = (method: UseFormReturn<ILoginSchema>) => {
  const router = useRouter();
  const [loginUser] = useMutation(LOGIN_USER);
  const { setAccessToken } = useAccessTokenStore();

  const onSubmit = async (data) => {
    const { email, password } = data;
    try {
      // 1. 로그인 뮤테이션 날려서 accessToken 받아오기
      const result = await loginUser({
        variables: { email, password },
      });
      const accessToken = result.data?.loginUser.accessToken;

      // 2. 받아온 accessToken을 globalState에 저장하기
      if (accessToken === undefined) {
        alert("로그인에 실패하였습니다. 다시 시도해 주세요");
        return;
      }
      setAccessToken(accessToken);

      // 3. 로그인 성공 페이지로 이동하기
      router.back();
    } catch (error) {
      if (error instanceof ApolloError) {
        method.setError("password", {
          message: "로그인 정보가 일치하지 않습니다.",
        });
      }
      console.error(error);
    }
  };
  return { onSubmit };
};
