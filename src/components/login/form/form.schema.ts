"use client";
import { z } from "zod";

export interface ILoginSchema {
  email: string;
  password: string;
}

export const loginSchema = z.object({
  email: z.string().min(1, { message: "이메일을 입력해 주세요." }),
  password: z.string().min(1, { message: "비밀번호를 입력해 주세요." }),
});
