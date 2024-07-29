import React from "react";
import styles from "./pages.module.scss";
import { useNavigate } from "react-router-dom";

interface PageProps {
  title: string;
}

const Page: React.FC<PageProps> = ({ title }) => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  return (
    <main className={styles.pagesWrapper}>
      <header className={styles.title}>
        <h1>{title}</h1>
      </header>
      <section className={styles.pageSection}>
        <p>Loading...</p>
        <button onClick={goHome} className={styles.pageBtn}>
          Back
        </button>
      </section>
    </main>
  );
};

export default Page;
