import styles from "./styles.module.css";

type IInputBaseProps = {
  errorMessage: string;
};

export default function InputErrorMessage({ errorMessage }: IInputBaseProps) {
  return <p className={styles.errorMessage}>{errorMessage}</p>;
}
