import { TextareaHTMLAttributes } from "react";
import { Path } from "react-hook-form";

export interface ITextareaBase<T>
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  cssprop: string;
  name: Path<T>;
}

export interface ITextarea<T>
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  name: Path<T>;
}
