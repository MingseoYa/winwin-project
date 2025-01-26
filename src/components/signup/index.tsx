import Image from "next/image";
import styles from "./styles.module.css";
import Form from "@/commons/components/form";
import {
  InputNormalWithRequired,
  InputPasswordWithLabelRequired,
} from "@/commons/components/input";
import { ISignupSchema, signupSchema } from "./form.schema";
import { useInitialize } from "./form.initialize";
import { ButtonPrimaryMFull } from "@/commons/components/button";

export default function Signup() {
  return (
    <div className={styles.main_box}>
      <Image
        src="/images/WINWIN.svg"
        width={0}
        height={0}
        sizes="100vw"
        alt="WINWIN"
        className={styles.logo}
      />
      <div className={styles.title_area}>
        <h2>회원가입</h2>
        <p>윈윈에서 함께 성장하고, 함께 성공하세요✨</p>
      </div>
      <Form<ISignupSchema> schema={signupSchema} useInitialize={useInitialize}>
        <div className={styles.main_form}>
          <div className={styles.input_form}>
            <InputNormalWithRequired
              label="이름"
              placeholder="이름을 입력해 주세요"
              name="name"
            />
            <InputNormalWithRequired
              label="이메일"
              placeholder="이메일을 입력해 주세요"
              name="email"
            />
            <InputPasswordWithLabelRequired
              label="비밀번호"
              placeholder="비밀번호를 입력해 주세요"
              name="password"
            />
            <InputPasswordWithLabelRequired
              label="비밀번호 확인"
              placeholder="비밀번호를 입력해 주세요"
              name="confirmPassword"
            />
          </div>
          <ButtonPrimaryMFull>회원가입</ButtonPrimaryMFull>
        </div>
      </Form>
    </div>
  );
}
