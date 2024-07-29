import Sidebar from "../sideBar/Sidebar";
import SurveyForm from "../SurveyForm";
import styles from "./main.module.scss";

const Main = () => {
  return (
    <main className={styles.mainWrapper}>
      <Sidebar />
      <SurveyForm />
    </main>
  );
};

export default Main;
