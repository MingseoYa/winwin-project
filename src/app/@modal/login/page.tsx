import Login from "@/components/login/form";
import LoginModal from "@/components/login/modal";

export default function LoginPage(): JSX.Element {
  return (
    <LoginModal>
      <Login />
    </LoginModal>
  );
}
