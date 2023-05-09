import { Link, Outlet, useNavigate } from "react-router-dom";
import styles from "./layout.module.scss";
import { LogoIcon } from "../../assets";

const Layout = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.wrap}>
      <header>
        <nav className={styles.nav}>
          <div className={styles.logo} onClick={() => navigate("/")}>
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
        <Link to="mailto:yangah.career@gmail.com" className={styles.contact}>
          contact
        </Link>
      </header>
      <Outlet />
      <footer>
        <p>©2023 Yang-ah. All Rights Reserved.</p>
        <Link to="https://github.com/Yang-ah/portfolio">
          https://github.com/Yang-ah/portfolio
        </Link>
      </footer>
    </div>
  );
};

export default Layout;
