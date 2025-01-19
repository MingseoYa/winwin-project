import { InputHTMLAttributes } from "react";
import { Path } from "react-hook-form";

export interface IInputBase<T> extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  isRequired?: boolean;
  name: Path<T>;
}

export interface IInput<T> extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name: Path<T>;
}
