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
  const [createTravelproductQuestion] = useMutation(
    CreateTravelproductQuestionDocument
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
