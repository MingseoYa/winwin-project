import { ReactNode } from "react";
import styles from "./styles.module.css";

export interface IFieldWrapperProps {
  children: ReactNode;
  label?: string;
  isRequired?: boolean;
}

const FieldWrapper: React.FC<IFieldWrapperProps> = ({
  children,
  label,
  isRequired = false,
}) => {
  return (
    <div className={styles.input_group}>
      <div className={styles.input_label}>
        {label}
        {isRequired && <span className={styles.require}> *</span>}
      </div>
      {children}
    </div>
  );
};

export default FieldWrapper;
