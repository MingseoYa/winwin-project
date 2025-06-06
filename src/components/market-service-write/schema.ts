import { z } from "zod";

export const schema = z.object({
  name: z.string().min(1, { message: "상품명을 입력해 주세요" }),
  remarks: z.string().min(1, { message: "한줄 요약을 입력해 주세요" }),
  contents: z.string().min(1, { message: "상품 설명을 입력해주세요" }),
  price: z.coerce.number().min(1, { message: "상품 가격을 입력해 주세요" }),
  tags: z.array(z.string()).optional(),
  images: z.array(z.string()).min(1, "이미지를 첨부해 주세요."),
});
