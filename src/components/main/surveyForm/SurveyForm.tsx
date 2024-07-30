import styles from "./surveyForm.module.scss";
import Form from "./surveyFormItems/form/Form";
import Headers from "./surveyFormItems/header/Headers";

const SurveyForm = () => {
  return (
    <section className={styles.surveyWrapper}>
      <Headers />
      <Form />
    </section>
  );
};

export default SurveyForm;
