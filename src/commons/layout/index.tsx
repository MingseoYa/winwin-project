"use client";
import { usePathname } from "next/navigation";
import Header from "./header";

const HIDDEN_HEADER = ["/signup"];
export default function LayoutComponent({ children }) {
  const pathname = usePathname();

  const isHiddenHeader = HIDDEN_HEADER.includes(pathname);

  return (
    <>
      {!isHiddenHeader && <Header />}
      <div>{children}</div>
    </>
  );
}
