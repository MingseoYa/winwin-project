"use client";
import { z } from "zod";

export interface IContactSchema {
  contents: string;
}

export const contactSchema = z.object({
  contents: z.string().min(1, { message: "내용을 입력하세요." }),
});
