"use client";
import { z } from "zod";

const passwordSchema = z
  .string()
  .min(8, { message: "비밀번호는 최소 8자 이상이어야 합니다." })
  .max(16, { message: "비밀번호는 최대 16자 이하여야 합니다." })
  .regex(/[a-z]/, {
    message: "비밀번호에는 최소 하나의 소문자가 포함되어야 합니다.",
  })
  .regex(/[0-9]/, {
    message: "비밀번호에는 최소 하나의 숫자가 포함되어야 합니다.",
  })
  .regex(/[\W_]/, {
    message: "비밀번호에는 최소 하나의 특수문자가 포함되어야 합니다.",
  });

export interface ISignupSchema {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const signupSchema = z
  .object({
    email: z.string().email("올바른 이메일 형식이 아닙니다."),
    name: z.string().min(1, { message: "이름을 입력해 주세요." }),
    password: passwordSchema,
    confirmPassword: z.string().min(1, { message: "비밀번호를 입력해 주세요" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "비밀번호가 일치하지 않습니다.",
    path: ["confirmPassword"],
  });
