"use client";
import { usePathname } from "next/navigation";
import Header from "./header";

const HIDDEN_HEADER = ["/signup"];
interface ILayoutComponentProps {
  children: React.ReactNode;
}
export default function LayoutComponent({ children }: ILayoutComponentProps) {
  const pathname = usePathname();

  const isHiddenHeader = HIDDEN_HEADER.includes(pathname);

  return (
    <>
      {!isHiddenHeader && <Header />}
      <div>{children}</div>
    </>
  );
}
