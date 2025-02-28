import styles from "./styles.module.css";
import { TextareaStandardMFull } from "@/commons/components/textarea";
import Form from "@/commons/components/form";
import { useInitialize } from "./form.initaillize";
import { answerSchema, IAnswerSchema } from "./form.schema";
import { ButtonCancelSfit, ButtonBlackSFit } from "@/commons/components/button";

interface IAnswerWrite {
  serviceQuestionId: string;
  isEdit: boolean;
  contents?: string;
  toggleAnswer: () => void;
  toggleArrowDown: () => void;
}

export default function AnswerWrite(props: IAnswerWrite) {
  return (
    <div className={styles.container}>
      <Form<IAnswerSchema>
        useInitialize={(method) =>
          useInitialize(method, props.serviceQuestionId, props.toggleAnswer)
        }
        schema={answerSchema}
      >
        <TextareaStandardMFull
          name="contents"
          placeholder="답변을 입력해 주세요."
        />
        <div className={styles.button_container}>
          <ButtonCancelSfit type="button" onClick={props.toggleAnswer}>
            취소
          </ButtonCancelSfit>
          <ButtonBlackSFit>
            {props.isEdit ? "수정" : "답변"}하기
          </ButtonBlackSFit>
        </div>
      </Form>
    </div>
  );
}
