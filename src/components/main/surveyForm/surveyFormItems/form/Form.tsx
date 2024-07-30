import styles from "./form.module.scss";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";

const Form = () => {
  return (
    <form>
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
          required
        />
        <p className={styles.surveyLabelText}>
          This will be presented to recipients
        </p>
      </div>

      <div className={styles.surveyLabelWrapper}>
        <label className={styles.surveyLabel} htmlFor="form">
          Form
        </label>
        <select
          name="form"
          id="form"
          className={`${styles.surveyInput} ${styles.surveySelect}`}>
          <option value="first-option">First option</option>
          <option value="second-option">Second option</option>
          <option value="third-option">Third option</option>
        </select>
        <p className={styles.surveyLabelText}>
          Your survey recipients will be asked to fill in these form
        </p>
      </div>
      <div className={styles.surveyLabelWrapper}>
        <p className={styles.surveyLabelText}>Recipients</p>
        <section className={styles.surveyInputRadio}>
          <div>
            <input
              type="radio"
              name="recipients"
              id="oneServerPerUser"
              value="oneServerPerUser"
            />
            <label htmlFor="oneServerPerUser">One Server Per User</label>
          </div>
          <div>
            <input
              type="radio"
              name="recipients"
              id="oneServerPerContributor"
              value="oneServerPerContributor"
            />
            <label htmlFor="oneServerPerContributor">
              One Server Per Contributor
            </label>
          </div>
          <div>
            <ErrorOutlineOutlinedIcon fontSize="large" />
          </div>
        </section>
        <div className={styles.surveyCheckbox}>
          <input
            type="checkbox"
            name="sendMail"
            value="sendMail"
            id="sendMail"
          />
          <label htmlFor="sendMail">
            Send to all listed contributors and users via email
          </label>
        </div>
      </div>
      <div className={styles.surveyLabelWrapper}>
        <label className={styles.surveyLabel} htmlFor="deadlineDate">
          Deadline for responses
        </label>
        <input
          className={`${styles.surveyInput} ${styles.inputDate}`}
          type="date"
          name="deadlineDate"
          id="deadlineDate"
          required
        />
        <p className={styles.surveyLabelText}>
          This will be presented to recipients
        </p>
      </div>
      <div className={styles.surveyLabelWrapper}>
        <label className={styles.surveyLabel} htmlFor="notesForRecipients">
          Notes for recipients(optional)
        </label>
        <textarea
          className={`${styles.surveyTextarea} `}
          name="notesForRecipients"
          id="notesForRecipients"
          rows={5}
        />
        <p className={styles.surveyLabelText}>
          This will be presented to recipients
        </p>
      </div>
      <div className={styles.surveyLabelWrapper}>
        <button className={styles.surveyBtn} type="submit">
          Create Survey
        </button>
        <p className={styles.surveyLabelText}>
          This will send the survey to your recipients
        </p>
      </div>
    </form>
  );
};

export default Form;
