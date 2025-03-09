import styles from "./styles.module.css";
import { Modal } from "antd";
import { ButtonCancelSfit } from "@/commons/components/button";
import { IUserMenuDropdownProps } from "./types";
import { useUserMenuDropdown } from "./hooks";

export default function UserMenuDropdown({
  toggleUserMenu,
}: IUserMenuDropdownProps) {
  const {
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
  } = useUserMenuDropdown(toggleUserMenu);

  return (
    <div className={styles.user_menu_dropdown}>
      <div className={styles.user_info}>
        <h4 className={styles.user_name}>
          {data?.fetchUserLoggedIn.name} 고객님
        </h4>
        <div className={styles.user_point}>
          <p className={styles.point_label}>포인트</p>
          <div className={styles.point}>
            <span className={styles.amount}>
              {data?.fetchUserLoggedIn.userPoint?.amount}
            </span>
            <span className={styles.point_unit}>P</span>
          </div>
        </div>
      </div>

      <nav className={styles.user_menu_nav}>
        <div className={styles.menu}>
          <button onClick={openModal}>포인트 관리</button>
        </div>

        {/* 포인트 충전 모달 */}
        {isModalOpen && (
          <Modal
            open={isModalOpen}
            onCancel={closeModal}
            footer={null}
            closable={false}
          >
            <h2 className={styles.modal_title}>포인트 충전</h2>
            <div className={styles.charge_options}>
              {CHARGE_OPTIONS.map((option) => (
                <button
                  key={option.value}
                  className={`${styles.charge_option} ${
                    selectedAmount === option.value ? styles.selected : ""
                  }`}
                  onClick={() => handleAmountClick(option.value)}
                >
                  {option.label}
                </button>
              ))}
            </div>
            <div className={styles.modal_actions}>
              <button
                className={styles.charge_button}
                onClick={onClickPoint}
                disabled={!selectedAmount}
              >
                충전하기
              </button>
              <ButtonCancelSfit type="button" onClick={closeModal}>
                취소
              </ButtonCancelSfit>
            </div>
          </Modal>
        )}

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
