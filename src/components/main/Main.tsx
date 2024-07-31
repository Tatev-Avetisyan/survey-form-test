import Sidebar from "../sideBar/Sidebar";
import styles from "./main.module.scss";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <main className={styles.mainWrapper}>
      <Sidebar />
      <div className={styles.surveyWrapper}>
        <Outlet />
      </div>
    </main>
  );
};

export default Main;
