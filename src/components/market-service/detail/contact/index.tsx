import { Modal } from "antd";
import styles from "./styles.module.css";
import Image from "next/image";
import { MarketServiceDetailContactModalProps } from "../types";
import Form from "@/commons/components/form";
import { contactSchema, IContactSchema } from "./form.schema";
import { useInitialize } from "./form.initialize";
import { TextareaStandardMFull } from "@/commons/components/textarea";
import { ButtonPrimaryMFull } from "@/commons/components/button";

export default function MarketServiceDetailContactModal({
  seller,
  isModalOpen,
  toggleModal,
}: MarketServiceDetailContactModalProps) {
  return (
    <div>
      <Modal open={isModalOpen} onCancel={toggleModal} footer={null}>
        <Form<IContactSchema>
          schema={contactSchema}
          useInitialize={(method) => useInitialize(method, toggleModal)}
        >
          <div className={styles.contact_modal}>
            <div className={styles.seller_info}>
              <Image
                src={
                  seller?.picture
                    ? `https://storage.googleapis.com/${seller.picture}`
                    : "/images/default-profile.png" // 기본 프로필 이미지
                }
                alt="판매자 프로필"
                width={64}
                height={64}
                className={styles.seller_image}
              />
              <div>
                <h3 className={styles.seller_name}>{seller?.name}</h3>
                <p className={styles.seller_title}>{seller?.email}</p>
              </div>
            </div>
            <TextareaStandardMFull
              name="contents"
              placeholder="정확하게 빠른 답변을 위해 요구사항을 상세하게 알려주세요."
            />
            <div className={styles.contact_button_container}>
              <ButtonPrimaryMFull>문의하기</ButtonPrimaryMFull>
            </div>
          </div>
        </Form>
      </Modal>
    </div>
  );
}
