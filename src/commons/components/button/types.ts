import { ButtonHTMLAttributes } from "react";

export interface IIButtonBase extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  cssprop: string;
}

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
}
