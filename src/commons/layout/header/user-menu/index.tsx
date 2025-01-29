import styles from "./styles.module.css";
import { LogoutUserDocument } from "@/commons/graphql/graphql";
import { useAccessTokenStore } from "@/commons/stores/accessToken";
import { useApolloClient, useMutation } from "@apollo/client";
import { useRouter } from "next/navigation";

export default function UserMenuDropdown({ data, toggleUserMenu }) {
  const router = useRouter();
  const { setAccessToken } = useAccessTokenStore();
  const client = useApolloClient();
  const [logoutUser] = useMutation(LogoutUserDocument, {
    onCompleted: () => {
      setAccessToken("");
      client.cache.evict({ fieldName: "fetchUserLoggedIn" });
      client.cache.gc();
      router.push("/products");
    },
    onError: (error) => {
      console.error("Logout Error:", error);
    },
  });
  const onClickMyPoints = () => {
    router.push("/my/points");
    toggleUserMenu();
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
  return (
    <div className={styles.user_menu_dropdown}>
      <div className={styles.user_info}>
        <h4 className={styles.user_name}>
          {data.fetchUserLoggedIn.name} 고객님
        </h4>
        <div className={styles.user_point}>
          <p className={styles.point_label}>포인트</p>
          <div className={styles.point}>
            <span className={styles.amount}>
              {data.fetchUserLoggedIn.userPoint?.amount}
            </span>
            <span className={styles.point_unit}>P</span>
          </div>
        </div>
      </div>
      <nav className={styles.user_menu_nav}>
        <div className={styles.menu}>
          <button onClick={onClickMyPoints}>포인트 관리</button>
        </div>
        <div className={styles.menu}>
          <button onClick={onClickMyInfo}>내 정보 관리</button>
        </div>
      </nav>
      <button onClick={onClickLogout} className={styles.logout}>
        로그아웃
      </button>
    </div>
  );
}
