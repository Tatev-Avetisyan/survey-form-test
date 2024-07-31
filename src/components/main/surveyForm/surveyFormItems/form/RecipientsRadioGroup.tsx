import React from "react";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import styles from "./form.module.scss";

interface RecipientsRadioGroupProps {
  selectedOption: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const RecipientsRadioGroup: React.FC<RecipientsRadioGroupProps> = ({
  selectedOption,
  onChange,
}) => (
  <div className={styles.surveyLabelWrapper}>
    <p className={styles.surveyLabelText}>Recipients</p>
    <section className={styles.surveyInputRadio}>
      <div>
        <input
          type="radio"
          name="recipients"
          id="oneServerPerUser"
          value="oneServerPerUser"
          checked={selectedOption === "oneServerPerUser"}
          onChange={onChange}
        />
        <label htmlFor="oneServerPerUser">One Server Per User</label>
      </div>
      <div>
        <input
          type="radio"
          name="recipients"
          id="oneServerPerContributor"
          value="oneServerPerContributor"
          checked={selectedOption === "oneServerPerContributor"}
          onChange={onChange}
        />
        <label htmlFor="oneServerPerContributor">
          One Server Per Contributor
        </label>
      </div>
      <div>
        <ErrorOutlineOutlinedIcon fontSize="large" />
      </div>
    </section>
  </div>
);

export default RecipientsRadioGroup;
