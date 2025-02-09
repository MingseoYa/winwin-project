"use client";
import { z } from "zod";

export interface IAnswerSchema {
  contents: string;
}

export const answerSchema = z.object({
  contents: z.string().min(1, { message: "내용을 입력하세요." }),
});
