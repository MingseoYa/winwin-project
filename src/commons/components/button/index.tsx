"use client";

import { useFormContext } from "react-hook-form";
import styles from "./styles.module.css";
import { IButton, IIButtonBase } from "./types";

// 1. 버튼뼈대 만들기
function ButtonBase({ cssprop, children, type, ...rest }: IIButtonBase) {
  const formContext = useFormContext();
  const isFormValid = formContext ? formContext.formState.isValid : true;
  return (
    <button
      className={`${styles.common} ${cssprop}`}
      disabled={type !== "button" && !isFormValid}
      {...rest}
    >
      {children}
    </button>
  );
}

export function ButtonPrimaryMFull({ children, ...rest }: IButton) {
  return (
    <ButtonBase cssprop={styles.button__primary__m__full} {...rest}>
      {children}
    </ButtonBase>
  );
}

export function ButtonPrimaryMFit({ children, ...rest }: IButton) {
  return (
    <ButtonBase cssprop={styles.button__primary__m__fit} {...rest}>
      {children}
    </ButtonBase>
  );
}

export function ButtonBlackSFit({ children, ...rest }: IButton) {
  return (
    <ButtonBase cssprop={styles.button__black__s__fit} {...rest}>
      {children}
    </ButtonBase>
  );
}

export function ButtonCancelMfit({ children, ...rest }: IButton) {
  return (
    <ButtonBase cssprop={styles.button__cancel__m__fit} type="button" {...rest}>
      {children}
    </ButtonBase>
  );
}

export function ButtonCancelSfit({ children, ...rest }: IButton) {
  return (
    <ButtonBase cssprop={styles.button__cancel__s__fit} type="button" {...rest}>
      {children}
    </ButtonBase>
  );
}
