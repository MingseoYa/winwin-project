"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useLoadStore } from "../stores/load";
import { useAccessTokenStore } from "../stores/accessToken";

export const withAuth = (Component: any) => (props: any) => {
  const router = useRouter();
  const { isLoaded } = useLoadStore();
  const { accessToken } = useAccessTokenStore();

  useEffect(() => {
    // 아직 로딩 전이면 리턴
    if (!isLoaded) return;
    if (accessToken) return;

    // accessToken이 없으면(로그인 상태가 아니라면) 로그인 페이지로 이동 -> 애초에 로그인 안했거나 리프레시토큰 만료되었으면
    // TODO: 모달로 변경
    alert("로그인 후 이용해주세요.");
    router.push("/login");
  }, [isLoaded]);

  return <Component {...props} />;
};
