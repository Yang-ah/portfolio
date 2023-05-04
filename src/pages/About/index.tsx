import { Link } from "react-router-dom";
import {
  CompanyIcon,
  DiscordIcon,
  EducationIcon,
  GithubIcon,
  MailIcon,
  PhoneIcon,
  ReactIcon,
} from "../../assets";
import styles from "./about.module.scss";
import cx from "classnames";

const About = () => {
  return (
    <>
      <section className={styles.introduce}>
        <article className={styles.introduceLeft}>
          <div className={styles.profile}>
            <img
              src="https://user-images.githubusercontent.com/97151214/236126951-617277cb-ad38-4cd7-afd0-41e9cddb24ed.png"
              alt="profile"
            />
          </div>
          <h2>명료한 정리를 통해 성장을 만드는 FE 개발자 주양아입니다.</h2>
          <p>성장, 소통, 공유의 핵심은 명료한 정리라고 생각합니다.</p>
          <p>차곡차곡 실력을 쌓아올려,</p>
          <p>지속적으로 가치를 창출하는 개발자가 되겠습니다.</p>
        </article>

        <article className={styles.introduceRight}>
          <p>
            <EducationIcon />
            <div className={styles.duration}>2023.01.-2023.04</div> | &nbsp;Code
            States ABC-Lab Web Frontend 1기
          </p>
          <p>
            <EducationIcon />
            <div className={styles.duration}>2022.03.-2022.06</div> | &nbsp;SBS
            Academy Web Publishing
          </p>
          <p>
            <EducationIcon />
            <div className={styles.duration}>2021.03.-2022.02</div> |
            &nbsp;경상대학교 제약공학과 (중퇴)
          </p>
          <p>
            <CompanyIcon />
            <div className={styles.duration}>2015.09.-2018.03</div> |
            &nbsp;(주)하나투어 영남항공운영팀 (퇴사)
          </p>

          <div className={styles.contact}>
            <p>
              <GithubIcon />
              <div>Github</div>|&nbsp;&nbsp;
              <Link to="https://github.com/Yang-ah" target="_blank">
                https://github.com/Yang-ah
              </Link>
            </p>
            <p>
              <MailIcon />
              <div>Mail</div>| &nbsp;yangah.career@gmail.com
            </p>
            <p>
              <PhoneIcon />
              <div>Phone</div>| &nbsp;010-6367-8340
            </p>
          </div>
        </article>
      </section>

      <section className={styles.skills}>
        <article>
          <h1>Skills</h1>
          <div className={cx(styles.iconWrap, styles.skillIconWrap)}>
            <div className={styles.icon}>
              <ReactIcon />
              <p>React</p>
            </div>
            <div className={cx(styles.icon, styles.big)}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1024px-Typescript_logo_2020.svg.png" />
              <p>TypeScript</p>
            </div>
            <div className={cx(styles.icon, styles.big)}>
              <img
                src="https://sass-lang.com/assets/img/styleguide/seal-color-aef0354c.png"
                alt="scss"
              />
              <p>SCSS</p>
            </div>
            <div className={cx(styles.icon, styles.big)}>
              <img src="https://velog.velcdn.com/images/real-bird/post/db9add5d-bba1-43c2-899b-42d3ab972f6b/image.png" />{" "}
              <p>Recoil</p>
            </div>
            <div className={styles.icon}>
              <img
                src="https://miro.medium.com/v2/resize:fit:636/format:webp/1*7jRD5QhgARucFKvRHFxpOg.png"
                alt="styled-component"
              />
              <p>Styled-component</p>
            </div>
          </div>
        </article>

        <article>
          <h1>Tools</h1>
          <div className={styles.iconWrap}>
            <div className={styles.icon}>
              <img src="https://camo.githubusercontent.com/0288a850099e5a6192b90d766e7bc1d277d49b6beaa82eb0c9bc4bc7b7305e9e/68747470733a2f2f7777772e6e6f74696f6e2e736f2f63646e2d6367692f696d6167652f666f726d61743d6175746f2c77696474683d3634302c7175616c6974793d3130302f66726f6e742d7374617469632f7368617265642f69636f6e732f6e6f74696f6e2d6170702d69636f6e2d33642e706e67" />
              <p>Notion</p>
            </div>
            <div className={styles.icon}>
              <GithubIcon />
              <p>Github</p>
            </div>
            <div className={styles.icon}>
              <img src="https://camo.githubusercontent.com/b88450e8ce104cfce8ef3d218f857a762e5b86df07bda8b3c882d1df34b998c7/68747470733a2f2f692e70696e696d672e636f6d2f6f726967696e616c732f61352f35382f62342f61353538623432366362383937333532336633376262656439346366306630392e706e67" />
              <p>Figma</p>
            </div>
            <div className={styles.icon}>
              <DiscordIcon />
              <p>Discord</p>
            </div>
          </div>
        </article>
      </section>
    </>
  );
};

export default About;
