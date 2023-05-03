import { Outlet, useNavigate } from "react-router-dom";
import styles from "./layout.module.scss";
import { LogoIcon } from "../../assets";

const Layout = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.wrap}>
      <header>
        <nav className={styles.nav}>
          <div className={styles.logo}>
            <LogoIcon />
          </div>
          <button name="project" type="button" onClick={() => navigate("/")}>
            Project
          </button>
          <button
            name="about"
            type="button"
            onClick={() => {
              navigate("/about");
            }}
          >
            About
          </button>
        </nav>
        <button className={styles.contact} type="button">
          contact
        </button>
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
      <footer>©2023 Yang-ah. All Rights Reserved.</footer>
    </div>
  );
};

export default Layout;
