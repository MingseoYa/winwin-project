import {
  FetchTravelproductDocument,
  FetchTravelproductQuery,
} from "@/commons/graphql/graphql";
import { useQuery } from "@apollo/client";
import { useParams } from "next/navigation";

export default function useFetchTravelproduct() {
  const { serviceId } = useParams() as { serviceId: string };
  const { data } = useQuery<FetchTravelproductQuery>(
    FetchTravelproductDocument,
    {
      variables: { serviceId },
    }
  );
  return {
    serviceId,
    data,
  };
}
