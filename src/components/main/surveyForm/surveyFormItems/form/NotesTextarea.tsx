import React from "react";
import styles from "./form.module.scss";

interface NotesTextareaProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const NotesTextarea: React.FC<NotesTextareaProps> = ({ value, onChange }) => (
  <div className={styles.surveyLabelWrapper}>
    <label className={styles.surveyLabel} htmlFor="notesForRecipients">
      Notes for recipients (optional)
    </label>
    <textarea
      className={`${styles.surveyTextarea}`}
      name="notesForRecipients"
      id="notesForRecipients"
      rows={5}
      value={value}
      onChange={onChange}
    />
    <p className={styles.surveyLabelText}>
      This will be presented to recipients
    </p>
  </div>
);

export default NotesTextarea;
