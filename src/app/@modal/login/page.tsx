import Login from "@/components/login/form";
import LoginModal from "@/components/login/modal";
import { JSX } from "react";
export default function LoginPage(): JSX.Element {
  return (
    <LoginModal>
      <Login />
    </LoginModal>
  );
}
