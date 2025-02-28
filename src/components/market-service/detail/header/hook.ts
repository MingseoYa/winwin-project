import {
  DeleteTravelproductDocument,
  FetchTravelproductDocument,
  FetchUserLoggedInDocument,
  ToggleTravelproductPickDocument,
} from "@/commons/graphql/graphql";
import { useParams, useRouter } from "next/navigation";
import { ApolloError, useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useEffect, useState } from "react";
export const useMarketServiceDetailHeader = () => {
  const router = useRouter();
  const { serviceId } = useParams() as { serviceId: string };
  const [isLoggedUser, setIsLoggedUser] = useState(false);
  const [deleteTravelproduct] = useMutation(DeleteTravelproductDocument);
  // 현재 상품 정보 가져오기
  const { data } = useQuery(FetchTravelproductDocument, {
    variables: { serviceId },
  });
  // 로그인한 유저 정보
  const { data: loggedUserData } = useQuery(FetchUserLoggedInDocument);
  const pickedCount = data?.fetchTravelproduct?.pickedCount ?? 0;

  // 로그인한 유저와 서비스 작성자가 일치하는지 체크
  useEffect(() => {
    setIsLoggedUser(
      data?.fetchTravelproduct?.seller?._id ===
        loggedUserData?.fetchUserLoggedIn._id
    );
  }, [loggedUserData, data]);
  const [toggleTravelproductPick] = useMutation(
    ToggleTravelproductPickDocument
  );

  // 찜 토글
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

  // 서비스 삭제
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

  // 서비스 수정
  const onClickEdit = () => {
    router.push(`/market/${serviceId}/edit`);
  };

  return {
    data,
    pickedCount,
    isLoggedUser,
    onClickPicked,
    onClickDelete,
    onClickEdit,
  };
};
