import React from "react";
import styles from "./form.module.scss";

interface FormSelectProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const FormSelect: React.FC<FormSelectProps> = ({ value, onChange }) => (
  <div className={styles.surveyLabelWrapper}>
    <label className={styles.surveyLabel} htmlFor="form">
      Form
    </label>
    <select
      name="form"
      id="form"
      value={value}
      onChange={onChange}
      className={`${styles.surveyInput} ${styles.surveySelect}`}>
      <option value="first-option">First option</option>
      <option value="second-option">Second option</option>
      <option value="third-option">Third option</option>
    </select>
    <p className={styles.surveyLabelText}>
      Your survey recipients will be asked to fill in this form
    </p>
  </div>
);

export default FormSelect;
