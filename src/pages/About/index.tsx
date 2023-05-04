import { Link } from "react-router-dom";
import {
  CompanyIcon,
  EducationIcon,
  GithubIcon,
  MailIcon,
  PhoneIcon,
} from "../../assets";
import styles from "./about.module.scss";

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
          <p>명료한 정리를 통해 성장을 만드는 FE 개발자 주양아입니다.</p>
          <p>성장, 소통, 공유의 핵심은 명료한 정리라고 생각합니다.</p>
          <p>차곡차곡 실력을 쌓아올려,</p>
          <p>지속적으로 가치를 창출하는 개발자가 되겠습니다.</p>
        </article>

        <article className={styles.introduceRight}>
          <p>
            <EducationIcon />
            <div>2023.01.-2023.04</div> | &nbsp;Code States ABC-Lab Web Frontend
            1기
          </p>
          <p>
            <EducationIcon />
            <div>2022.03.-2022.06</div> | &nbsp;SBS Academy Web Publishing
          </p>
          <p>
            <EducationIcon />
            <div>2021.03.-2022.02</div> | &nbsp;경상대학교 제약공학과 (중퇴)
          </p>
          <p>
            <CompanyIcon />
            <div>2015.09.-2018.03</div> | &nbsp;(주)하나투어 영남항공운영팀
            (퇴사)
          </p>

          <div className={styles.contact}>
            <p>
              <GithubIcon />
              <div>Github</div>|&nbsp;&nbsp;
              <Link to="https://github.com/Yang-ah">
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
        <h1>Skills : Frontend</h1>
        <article></article>
        <article>Tools</article>
      </section>
    </>
  );
};

export default About;
