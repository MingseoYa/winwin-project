"use client";

import "./custom.css";
import { Modal } from "antd";
import { useRouter } from "next/navigation";
import { ILoginModal } from "./types";

export default function LoginModal({ children }: ILoginModal) {
  const router = useRouter();
  const handleCancel = () => {
    router.back();
  };
  return (
    <Modal
      title=""
      open={true}
      onCancel={handleCancel}
      footer={null}
      width="22.5rem"
      className="custom-modal"
      centered
    >
      {children}
    </Modal>
  );
}
