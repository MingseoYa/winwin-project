"use client";

import { UseFormReturn } from "react-hook-form";
import { IContactSchema } from "./form.schema";
import { useMutation } from "@apollo/client";
import { CreateTravelproductQuestionDocument } from "@/commons/graphql/graphql";
import { useParams } from "next/navigation";

export const useInitialize = (
  method: UseFormReturn<IContactSchema>,
  toggleModal: () => void
) => {
  const { serviceId } = useParams() as { serviceId: string };
  // 캐시 직접 수정으로 문의 등록 시 새로고침 없이 자동으로 리스트에 반영되도록 함
  const [createTravelproductQuestion] = useMutation(
    CreateTravelproductQuestionDocument,
    {
      update(cache, { data }) {
        const newQuestion = data?.createTravelproductQuestion; // 추가된 문의

        if (!newQuestion) return;

        cache.modify({
          fields: {
            fetchTravelproductQuestions(existingQuestions = []) {
              return [newQuestion, ...existingQuestions]; // 기존 캐시에 추가
            },
          },
        });
      },
    }
  );

  const onSubmit = async (data: IContactSchema) => {
    const { contents } = data;
    try {
      const result = await createTravelproductQuestion({
        variables: {
          createTravelproductQuestionInput: { contents },
          serviceId,
        },
      });
      toggleModal();
      console.log(result?.data?.createTravelproductQuestion);
    } catch (error) {
      console.error(error);
    }
  };
  return { onSubmit, method };
};
