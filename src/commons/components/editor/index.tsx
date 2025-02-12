"use client";

import { Controller, useFormContext } from "react-hook-form";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // 스타일 적용
import styles from "./styles.module.css";

interface Props {
  name: string;
  label?: string;
  isRequired?: boolean;
}

export function QuillEditor({ name, label, isRequired }: Props) {
  const { control, formState } = useFormContext();
  const hasError = !!formState.errors[name];

  return (
    <div className={styles.container}>
      {/* 라벨 표시 */}
      {label && (
        <div className={styles.label}>
          <label className={styles.label_text}>{label}</label>
          {isRequired && <div className={styles.star}>*</div>}
        </div>
      )}

      {/* react-quill과 react-hook-form 연동 */}
      <Controller
        name={name}
        control={control}
        defaultValue=""
        rules={{
          required: isRequired ? "이 필드는 필수 입력 항목입니다." : false,
        }}
        render={({ field }) => (
          <ReactQuill
            {...field}
            theme="snow"
            className={`${hasError ? styles.error : styles.normal}`}
          />
        )}
      />

      {/* 에러 메시지 표시 */}
    </div>
  );
}
