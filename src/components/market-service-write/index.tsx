"use client";

import "react-quill/dist/quill.snow.css";
import useMarketServiceWirte from "./hook";
import styles from "./styles.module.css";
import dynamic from "next/dynamic";
import { FormProvider } from "react-hook-form";
import { X } from "lucide-react";
import Image from "next/image";
import FieldWrapper from "@/commons/components/field-wrapper";
import ErrorMessage from "@/commons/components/error";
import { InputSoftMFull } from "@/commons/components/input2";
import {
  ButtonCancelMfit,
  ButtonPrimaryMFit,
} from "@/commons/components/button";

// ReactQuill을 dynamic으로 import
const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false, // SSR 비활성화
});

export default function MarketServiceWrite(props) {
  const {
    inputTag,
    fileRef,
    images,
    methods,
    onChangeContents,
    onChangeTag,
    addTag,
    removeTag,
    onChangeFile,
    onClickImage,
    onClickDelete,
    onClickSubmit,
  } = useMarketServiceWirte(props);

  return (
    <div className={styles.post_page_body}>
      <div className={styles.post_page}>
        <header className={styles.header}>서비스 등록하기</header>
        <FormProvider {...methods}>
          <form
            className={styles.post_main}
            onSubmit={methods.handleSubmit(onClickSubmit)}
          >
            {/* 상품명 입력 필드 */}
            <FieldWrapper label="상품명" isRequired={true}>
              <InputSoftMFull
                type="text"
                name="name"
                placeholder="상품명을 입력하세요."
              />
              <ErrorMessage name="name" />
            </FieldWrapper>

            <hr />

            {/* 한줄 요약 입력 필드 */}
            <FieldWrapper label="한줄 요약" isRequired={true}>
              <InputSoftMFull
                type="text"
                name="remarks"
                placeholder="상품을 한줄로 요약해 주세요."
              />
              <ErrorMessage name="remarks" />
            </FieldWrapper>

            <hr />

            {/* 상품 설명 입력 필드 */}
            <FieldWrapper label="상품 설명" isRequired={true}>
              <div style={{ paddingBottom: "43.86px", minHeight: "300px" }}>
                <ReactQuill
                  value={methods.getValues("contents")}
                  onChange={onChangeContents}
                  className={styles.quill_editor}
                />
              </div>
              <ErrorMessage name="contents" />
            </FieldWrapper>

            <hr />

            {/* 판매 가격 입력필드 */}
            <FieldWrapper label="판매 가격" isRequired={true}>
              <InputSoftMFull
                type="number"
                name="price"
                placeholder="판매 가격을 입력해 주세요. (원 단위)"
              />
              <ErrorMessage name="price" />
            </FieldWrapper>

            <hr />

            {/* 해시태그 입력 필드 */}
            <FieldWrapper label="해시태그 입력">
              <input
                className={styles.tag_input}
                type="text"
                value={inputTag}
                onChange={onChangeTag}
                onKeyDown={addTag}
                placeholder="해시태그를 입력해주세요. (Enter를 눌러 추가해 주세요.)"
              />
              <div className={styles.tags}>
                {methods.getValues("tags").map((tag, index) => (
                  <span key={index} className={styles.tag}>
                    {tag}
                    <X
                      onClick={() => removeTag(index)}
                      className={styles.remove_tag}
                    />
                  </span>
                ))}
              </div>
            </FieldWrapper>

            <hr />

            {/* TODO: 이미지 업로드 */}
            <FieldWrapper label="사진 첨부" isRequired={true}>
              <div className={styles.upload_button_group}>
                {images &&
                  images.map((image, index) => (
                    <div
                      key={`${image}_${index}`}
                      className={styles.upload_image_box}
                    >
                      <Image
                        className={styles.upload_image}
                        src={`https://storage.googleapis.com/${image}`}
                        width={0}
                        height={0}
                        sizes="100vw"
                        alt={"image"}
                      />
                      <Image
                        className={styles.delete_btn}
                        src="/images/close.svg"
                        width={16}
                        height={16}
                        alt="삭제버튼"
                        id={String(index)}
                        onClick={onClickDelete}
                      />
                    </div>
                  ))}

                {/* 이미지 업로드 버튼 */}
                <Image
                  src={"/images/addImage.svg"}
                  alt="파일업로드버튼"
                  width={160}
                  height={160}
                  className={styles.btn_upload}
                  onClick={onClickImage}
                />
                <input
                  type="file"
                  style={{ display: "none" }}
                  onChange={onChangeFile}
                  ref={fileRef}
                  accept="image/jpeg,image/png"
                />
              </div>
              <ErrorMessage name="images" />
            </FieldWrapper>

            <div className={styles.btn_group}>
              <ButtonCancelMfit>취소</ButtonCancelMfit>
              <button>{props.isEdit ? "수정" : "등록"}하기</button>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}
