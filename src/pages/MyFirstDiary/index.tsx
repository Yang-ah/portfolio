import { Link } from "react-router-dom";
import styles from "./myFirstDiary.module.scss";
import { GithubIcon, LogoIcon } from "../../assets";

const links = {
  gitHub: "https://github.com/Yang-ah/my_first_diary",
  siteLink: "https://web-my-first-diary-1maxx2algssnb7w.sel3.cloudtype.app/",
};

const descriptions = {
  intro: `
✨ 일기/스케줄을 간단히 기록할 수 있는 온라인 다이어리/스케줄러 입니다. 

✨ 테마 : 4가지 테마를 제공합니다. 

✨ 스케줄러 : category(work/plan)와 중요도에 따라 스케줄의 아이콘 색을 다르게 반영합니다. 

✨ 일기 : 한 줄 일기를 기록할 수 있습니다. 

✨ 트래커 : emotion, exercise를 아이콘을 클릭하여 기록할 수 있으며, tracker 페이지에서 1년의 기록을 볼 수 있습니다.

✨ 포토일기 : 하루를 사진으로 기록할 수 있습니다. 
     현재, 서버/DB가 존재하지 않아 미리보기만 가능합니다. 추후 서버 개발자와 협업하여 기능 활성화 예정입니다. 
`,

  search: ``,
  detail: ``,
  structure: ``,
};

const MyFirstDiary = () => {
  return (
    <>
      <section className={styles.introduction}>
        <article className={styles.introductionLeft}>
          <h1 className={styles.title}>My First Diary</h1>
          <p className={styles.description}>{descriptions.intro}</p>
        </article>
        <article className={styles.introductionRight}>
          <p>2023.01. - 2023.05.</p>
          <p>Front-end development</p>
          <p>React, TypeScript, Styled-component, SCSS, Recoil</p>
          <Link to={links.gitHub} target="_blank">
            <GithubIcon />
          </Link>
          <Link to={links.siteLink} target="_blank">
            <LogoIcon />
          </Link>
        </article>
      </section>

      <section className={styles.main}>
        <h2>검색페이지</h2>

        <article className={styles.searchArticle}>
          <p>{descriptions.search}</p>
          <div className={styles.videoWrap}>
            <video src="" autoPlay muted loop />
          </div>
        </article>

        <h2>상세페이지</h2>

        <article className={styles.detailArticle}>
          <p>{descriptions.detail}</p>
          <div className={styles.videoWrap}>
            <video src="" autoPlay muted loop />
          </div>
        </article>

        <h2>폴더구조</h2>

        <article className={styles.folderStructure}>
          <p>{descriptions.structure}</p>

          <img src="" />
        </article>
      </section>
    </>
  );
};

export default MyFirstDiary;
