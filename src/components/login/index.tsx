"use client";

import styles from "./styles.module.css";
import Link from "next/link";
import Image from "next/image";
import Form from "@/commons/components/form";
import { ILoginSchema, loginSchema } from "./form.schema";
import { InputNormal, InputPassword } from "@/commons/components/input";
import { useInitialize } from "./form.initialize";
import { ButtonPrimaryMFull } from "@/commons/components/button";
export default function Login(): JSX.Element {
  return (
    <div className={styles.login_page_body}>
      <div className={styles.main_box}>
        <Image
          src="/images/WINWIN.svg"
          width={0}
          height={0}
          sizes="100vw"
          alt="WINWIN"
          className={styles.logo}
        />
        <Form<ILoginSchema> schema={loginSchema} useInitialize={useInitialize}>
          <div className={styles.main_form}>
            <div className={styles.input_form}>
              <InputNormal placeholder="이메일을 입력해 주세요." name="email" />
              <InputPassword
                placeholder="비밀번호를 입력해 주세요."
                name="password"
              />
            </div>
            <ButtonPrimaryMFull>로그인</ButtonPrimaryMFull>
          </div>
        </Form>
        <div className={styles.signup_box}>
          <div className={styles.question}>아직 계정이 없으신가요?</div>
          <Link href="/signup" className={styles.signup_button}>
            회원가입하러 가기
          </Link>
        </div>
      </div>
    </div>
  );
}
