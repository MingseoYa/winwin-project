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
  const [createTravelproductQuestion] = useMutation(
    CreateTravelproductQuestionAnswerDocument
  );

  const onSubmit = async (data: IAnswerSchema) => {
    const { contents } = data;
    try {
      const result = await createTravelproductQuestion({
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
