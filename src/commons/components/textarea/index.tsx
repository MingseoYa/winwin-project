import { FieldValues, useFormContext } from "react-hook-form";
import styles from "./styles.module.css";
import { ITextarea, ITextareaBase } from "./types";

function TextareaBase<T extends FieldValues>({
  cssprop,
  placeholder,
  name,
}: ITextareaBase<T>) {
  const { register } = useFormContext();
  return (
    <textarea
      placeholder={placeholder}
      className={cssprop}
      {...register(name)}
    />
  );
}

export function TextareaStandardMFull<T extends FieldValues>(
  rest: ITextarea<T>
) {
  return (
    <TextareaBase cssprop={styles.textarea__standard__m__full} {...rest} />
  );
}
