import React from "react";
import styles from "./form.module.scss";

interface DateInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const DateInput: React.FC<DateInputProps> = ({ value, onChange }) => {
  const today = new Date().toISOString().split("T")[0];

  return (
    <div className={styles.surveyLabelWrapper}>
      <label className={styles.surveyLabel} htmlFor="deadlineDate">
        Deadline for responses
      </label>
      <input
        className={`${styles.surveyInput} ${styles.inputDate}`}
        type="date"
        name="deadlineDate"
        id="deadlineDate"
        value={value}
        onChange={onChange}
        min={today}
        required
      />
      <p className={styles.surveyLabelText}>
        This will be presented to recipients
      </p>
    </div>
  );
};

export default DateInput;
