import { Heart, MapPin, Pencil, Share2, Trash2 } from "lucide-react";
import styles from "./styles.module.css";
import {
  DeleteTravelproductDocument,
  FetchTravelproductDocument,
  ToggleTravelproductPickDocument,
} from "@/commons/graphql/graphql";
import { useParams, useRouter } from "next/navigation";
import { ApolloError, useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";

export default function MarketServiceDetailHeader() {
  const router = useRouter();
  const { serviceId } = useParams() as { serviceId: string };
  const [deleteTravelproduct] = useMutation(DeleteTravelproductDocument);
  // 현재 상품 정보 가져오기
  const { data } = useQuery(FetchTravelproductDocument, {
    variables: { serviceId },
  });
  const pickedCount = data?.fetchTravelproduct?.pickedCount ?? 0;

  const [toggleTravelproductPick] = useMutation(
    ToggleTravelproductPickDocument
  );

  const onClickPicked = () => {
    toggleTravelproductPick({
      variables: { serviceId },

      // Optimistic UI: 즉시 증가/감소 반영
      optimisticResponse: {
        toggleTravelproductPick: pickedCount + 1,
      },

      // 캐시 업데이트
      update: (cache, { data }) => {
        if (!data?.toggleTravelproductPick) return;

        // 기존 캐시 데이터 읽기
        const existingData = cache.readQuery({
          query: FetchTravelproductDocument,
          variables: { serviceId },
        });

        if (existingData?.fetchTravelproduct) {
          cache.writeQuery({
            query: FetchTravelproductDocument,
            variables: { serviceId },
            data: {
              fetchTravelproduct: {
                ...existingData.fetchTravelproduct, // 기존 데이터 유지
                pickedCount: data.toggleTravelproductPick, // 서버 응답값으로 `pickedCount` 업데이트
              },
            },
          });
        }
      },
    });
  };

  const onClickDelete = async () => {
    try {
      const result = await deleteTravelproduct({
        variables: { serviceId },
      });
      console.log(result);
      Modal.success({
        content: "삭제되었습니다.",
      });
      router.push("/market");
    } catch (error) {
      if (error instanceof ApolloError) {
        // console.error(error?.graphQLErrors[0].message);q
        Modal.error({
          content: error?.graphQLErrors[0].message,
        });
      }
    }
  };

  const onClickEdit = () => {
    router.push(`/market/${serviceId}/edit`);
  };
  return (
    <header className={styles.header}>
      <div className={styles.title_area}>
        <h2 className={styles.title}>{data?.fetchTravelproduct.name}</h2>
        <div className={styles.icon_area}>
          <Trash2
            color="#333333"
            className={styles.icon}
            onClick={onClickDelete}
          />
          <Pencil className={styles.icon} onClick={onClickEdit} />
          <button className={styles.pickedCount} onClick={onClickPicked}>
            <Heart color="#333333" className={styles.icon} />

            <p>{pickedCount}</p>
          </button>
        </div>
      </div>
      <h3 className={styles.remarks}>{data?.fetchTravelproduct.remarks}</h3>
      <h3 className={styles.tags}>
        {data?.fetchTravelproduct.tags?.length &&
          data.fetchTravelproduct.tags.join(" ")}
      </h3>
    </header>
  );
}
