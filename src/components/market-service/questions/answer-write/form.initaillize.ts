"use client";

import { UseFormReturn } from "react-hook-form";
import { IAnswerSchema } from "./form.schema";
import { useMutation } from "@apollo/client";
import { CreateTravelproductQuestionAnswerDocument } from "@/commons/graphql/graphql";

export const useInitialize = (
  method: UseFormReturn<IAnswerSchema>,
  serviceQuestionId: string,
  toggleAnswer: () => void
) => {
  const [createTravelproductQuestionAnswer] = useMutation(
    CreateTravelproductQuestionAnswerDocument,
    {
      update(cache, { data }) {
        const newAnswer = data?.createTravelproductQuestionAnswer; // 추가된 답변

        if (!newAnswer) return;

        cache.modify({
          fields: {
            fetchTravelproductQuestionAnswers(existingAnswers = []) {
              return [...existingAnswers, newAnswer]; // 기존 캐시에 추가
            },
          },
        });
      },
    }
  );

  const onSubmit = async (data: IAnswerSchema) => {
    const { contents } = data;
    try {
      const result = await createTravelproductQuestionAnswer({
        variables: {
          createServiceQuestionAnswerInput: { contents },
          serviceQuestionId: serviceQuestionId,
        },
      });
      toggleAnswer();
      console.log(result?.data?.createTravelproductQuestionAnswer);
    } catch (error) {
      console.error(error);
    }
  };
  return { onSubmit, method };
};
