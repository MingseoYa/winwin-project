"use client";
import { FieldValues, useFormContext } from "react-hook-form";
import styles from "./styles.module.css";
import InputErrorMessage from "./input-error-message";
import { IInput, IInputBase } from "./types";

function InputBase<T extends FieldValues>({
  type,
  label,
  isRequired,
  name,
  ...rest
}: IInputBase<T>) {
  const { register, formState } = useFormContext();
  const hasError = !!formState.errors[name];
  return (
    <div className={styles.container}>
      {label && (
        <div className={styles.label}>
          <label className={styles.label_text}>{label}</label>
          {isRequired && <div className={styles.star}>*</div>}
        </div>
      )}

      <input
        className={`${hasError ? styles.error : styles.normal}`}
        type={type}
        {...register(name)}
        {...rest}
      />
      <InputErrorMessage
        errorMessage={formState.errors[name]?.message?.toString() ?? ""}
      />
    </div>
  );
}

export function InputNormal<T extends FieldValues>({
  name,
  ...rest
}: IInput<T>) {
  return <InputBase isRequired={false} name={name} {...rest} />;
}

export function InputNormalWithLabel<T extends FieldValues>({
  label,
  name,
  ...rest
}: IInput<T>) {
  return <InputBase label={label} isRequired={false} name={name} {...rest} />;
}

export function InputNormalWithRequired<T extends FieldValues>({
  label,
  name,
  ...rest
}: IInput<T>) {
  return <InputBase label={label} isRequired={true} name={name} {...rest} />;
}

export function InputPassword<T extends FieldValues>({
  name,
  ...rest
}: IInput<T>) {
  return <InputBase type="password" isRequired={false} name={name} {...rest} />;
}

export function InputPasswordWithLabelRequired<T extends FieldValues>({
  label,
  name,
  ...rest
}: IInput<T>) {
  return (
    <InputBase
      type="password"
      label={label}
      isRequired={true}
      name={name}
      {...rest}
    />
  );
}
