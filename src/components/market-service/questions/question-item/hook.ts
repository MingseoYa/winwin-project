import { useEffect, useState } from "react";
import { useLazyQuery, useQuery } from "@apollo/client";
import {
  FetchTravelproductDocument,
  FetchTravelproductQuestionAnswersDocument,
  FetchTravelproductQuestionAnswersQuery,
  FetchUserLoggedInDocument,
  UserFragmentFragment,
} from "@/commons/graphql/graphql";
import { useParams } from "next/navigation";

interface IQuestionUser {
  id: string;
  user: UserFragmentFragment;
}

export default function useQuestionItem({ id, user }: IQuestionUser) {
  const { serviceId } = useParams() as { serviceId: string };
  const [isAnswer, setIsAnswer] = useState(false); // 답변이 있는지
  const [isArrowDown, setIsArrowDown] = useState(false); // 답변 목록 볼 수 있는 화살표
  const [isQuestionUser, setIsQuestionUser] = useState(false); // 질문한 유저인지
  const [isSeller, setIsSeller] = useState(false); // 서비스 판매하는 유저인지

  // useLazyQuery를 사용하여 클릭 시에만 데이터 불러오기
  const [fetchAnswers, { data, loading }] =
    useLazyQuery<FetchTravelproductQuestionAnswersQuery>(
      FetchTravelproductQuestionAnswersDocument
    );

  const { data: loggedUserData } = useQuery(FetchUserLoggedInDocument);
  const { data: serviceData } = useQuery(FetchTravelproductDocument, {
    variables: { serviceId },
  });

  useEffect(() => {
    setIsQuestionUser(loggedUserData?.fetchUserLoggedIn._id === user._id);
    setIsSeller(
      loggedUserData?.fetchUserLoggedIn._id ===
        serviceData?.fetchTravelproduct.seller?._id
    );
  }, [loggedUserData, user]);

  // 답변 목록 토글
  const toggleArrowDown = async () => {
    if (!isArrowDown) {
      await fetchAnswers({ variables: { serviceQuestionId: id } }); // 버튼 클릭 시에만 데이터를 불러옴
    }
    setIsArrowDown((prev) => !prev);
  };

  // 답변하기 버튼
  const toggleAnswer = () => {
    setIsAnswer((prev) => !prev);
  };

  return {
    isAnswer,
    isArrowDown,
    isQuestionUser,
    isSeller,
    data,
    loading,
    toggleArrowDown,
    toggleAnswer,
  };
}
