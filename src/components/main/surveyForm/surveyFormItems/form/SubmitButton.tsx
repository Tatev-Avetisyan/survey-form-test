import React from "react";
import styles from "./form.module.scss";

interface SubmitButtonProps {}

const SubmitButton: React.FC<SubmitButtonProps> = () => (
  <div className={styles.surveyLabelWrapper}>
    <button className={styles.surveyBtn} type="submit">
      Create Survey
    </button>
    <p className={styles.surveyLabelText}>
      This will send the survey to your recipients
    </p>
  </div>
);

export default SubmitButton;
