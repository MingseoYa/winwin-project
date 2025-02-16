"use client";
import { FetchTravelproductDocument } from "@/commons/graphql/graphql";
import MarketServiceWrite from "@/components/market-service-write";
import { useQuery } from "@apollo/client";
import { useParams } from "next/navigation";

export default function MarketProductDetailEditPage() {
  const { serviceId } = useParams() as { serviceId: string };
  const { data } = useQuery(FetchTravelproductDocument, {
    variables: { serviceId },
  });
  return <MarketServiceWrite isEdit={true} data={data} />;
}
