import React from "react";
import styles from "./form.module.scss";

interface SurveyNameInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SurveyNameInput: React.FC<SurveyNameInputProps> = ({
  value,
  onChange,
}) => (
  <div className={styles.surveyLabelWrapper}>
    <label className={styles.surveyLabel} htmlFor="surveyName">
      Survey name
    </label>
    <input
      className={styles.surveyInput}
      placeholder="e.g. ESG Assessment 2022"
      type="text"
      name="surveyName"
      id="surveyName"
      value={value}
      onChange={onChange}
      required
    />
    <p className={styles.surveyLabelText}>
      This will be presented to recipients
    </p>
  </div>
);

export default SurveyNameInput;
