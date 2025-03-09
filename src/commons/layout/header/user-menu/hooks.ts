import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAccessTokenStore } from "@/commons/stores/accessToken";
import { useApolloClient, useMutation, useQuery } from "@apollo/client";
import { v4 as uuidv4 } from "uuid";
import * as PortOne from "@portone/browser-sdk/v2";
import {
  CreatePointTransactionOfLoadingDocument,
  FetchUserLoggedInDocument,
  LogoutUserDocument,
} from "@/commons/graphql/graphql";
import { Modal } from "antd";

const CHARGE_OPTIONS = [
  { value: 10000, label: "10,000원" },
  { value: 30000, label: "30,000원" },
  { value: 50000, label: "50,000원" },
  { value: 100000, label: "100,000원" },
];

export const useUserMenuDropdown = (toggleUserMenu: () => void) => {
  const { data } = useQuery(FetchUserLoggedInDocument);
  const router = useRouter();
  const client = useApolloClient();
  const { setAccessToken } = useAccessTokenStore();
  // 포인트 모달 열기/닫기
  const [isModalOpen, setIsModalOpen] = useState(false);
  // 충전할 포인트 금액 선택
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);

  // 로그아웃 뮤테이션
  const [logoutUser] = useMutation(LogoutUserDocument, {
    onCompleted: () => {
      setAccessToken("");
      client.cache.evict({ fieldName: "fetchUserLoggedIn" });
      client.cache.gc();
      router.push("/products");
    },
    onError: (error) => console.error("Logout Error:", error),
  });

  // 포인트 충전 뮤테이션
  const [createPointTransactionOfLoading] = useMutation(
    CreatePointTransactionOfLoadingDocument
  );

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const handleAmountClick = (amount: number) => setSelectedAmount(amount);

  const pointMutation = async (paymentId?: string) => {
    if (!paymentId) return;
    try {
      await createPointTransactionOfLoading({
        variables: { paymentId },
        refetchQueries: [{ query: FetchUserLoggedInDocument }],
      });
    } catch (error) {
      console.error(error);
    }
  };

  const onClickPoint = async () => {
    if (!data) return;
    try {
      const result = await PortOne.requestPayment({
        storeId: "store-abc39db7-8ee1-4898-919e-0af603a68317",
        channelKey: "channel-key-1dc10cea-ec89-471d-aedf-f4bd68993f33",
        paymentId: uuidv4(),
        orderName: "Point",
        totalAmount: Number(selectedAmount),
        currency: "CURRENCY_KRW",
        payMethod: "EASY_PAY",
        customer: {
          fullName: "ming",
          phoneNumber: "010-1234-5678",
          email: "aabbcc@naver.com",
          address: {
            country: "COUNTRY_KR",
            addressLine1: "서울시",
            addressLine2: "3층",
          },
          zipcode: "11111",
        },
        redirectUrl: "http://localhost:3000",
      });

      pointMutation(result?.paymentId);
      setIsModalOpen(false);
      Modal.success({ content: "충전이 완료되었습니다." });
    } catch (error) {
      console.error("결제 요청 중 오류 발생:", error);
    }
  };

  const onClickMyInfo = () => {
    router.push("/my/info");
    toggleUserMenu();
  };

  const onClickLogout = async () => {
    try {
      await logoutUser();
    } catch (error) {
      console.error(error);
    }
  };

  return {
    data,
    CHARGE_OPTIONS,
    isModalOpen,
    selectedAmount,
    openModal,
    closeModal,
    handleAmountClick,
    onClickPoint,
    onClickMyInfo,
    onClickLogout,
  };
};
