"use client";
import Image from "next/image";
import styles from "./styles.module.css";
import Link from "next/link";
import UserMenuDropdown from "./user-menu";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useQuery } from "@apollo/client";
import { FetchUserLoggedInDocument } from "@/commons/graphql/graphql";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function Header() {
  const router = useRouter();
  // 유저메뉴 드롭다운
  const [isOpenUserMenu, SetIsOpenUserMenu] = useState(false);

  const toggleUserMenu = () => {
    SetIsOpenUserMenu((prev) => !prev);
  };

  const { data } = useQuery(FetchUserLoggedInDocument);

  const onClickLogin = () => {
    router.push("/login");
  };
  const onClickSingup = () => {
    router.push("/signup");
  };

  return (
    <header>
      <div className={styles.contents}>
        <div className={styles.left_area}>
          <Link href="/">
            <Image
              src="/images/WINWIN.svg"
              width={0}
              height={0}
              sizes="100vw"
              alt="logo"
              className={styles.logo}
            />
          </Link>
          <nav className={styles.nav}>
            <div className={styles.menu}>
              <Link href="/market">마켓</Link>
            </div>
            <div className={styles.menu}>
              <Link href="/comunity">커뮤니티</Link>
            </div>
          </nav>
        </div>
        {data?.fetchUserLoggedIn ? (
          // 로그인 했을 때
          <div className={styles.right_area}>
            <nav className={styles.sub_nav}>
              <span className={styles.menu}>알림</span>
              <div className={styles.menu}>
                <Link href="/my/bookmarks">찜목록</Link>
              </div>
              <div className={styles.menu}>
                <Link href="/my/transactions">거래내역</Link>
              </div>
            </nav>
            <div className={styles.profile}>
              <Image
                src={
                  data?.fetchUserLoggedIn?.picture
                    ? `https://storage.googleapis.com/${data.fetchUserLoggedIn.picture}`
                    : "/images/default-profile.png" // 기본 프로필 이미지
                }
                width={0}
                height={0}
                sizes="100vw"
                alt="profile"
                className={styles.profile_image}
              />
              {isOpenUserMenu ? (
                <ChevronUp
                  size={16}
                  color="#1a1a1a"
                  onClick={toggleUserMenu}
                  style={{ cursor: "pointer" }}
                />
              ) : (
                <ChevronDown
                  size={16}
                  color="#1a1a1a"
                  onClick={toggleUserMenu}
                  style={{ cursor: "pointer" }}
                />
              )}
            </div>
            {/* 유저메뉴 드롭다운 */}
            {isOpenUserMenu && (
              <UserMenuDropdown data={data} toggleUserMenu={toggleUserMenu} />
            )}
          </div>
        ) : (
          // 로그인 안했을 때
          <div className={styles.right_area}>
            <button onClick={onClickLogin} className={styles.toLogin}>
              로그인
            </button>
            <button onClick={onClickSingup} className={styles.toSignup}>
              회원가입
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
