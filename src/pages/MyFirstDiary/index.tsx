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

  theme: ``,
  home: ``,
  photo: ``,
  scheduler: ``,
  diary: ``,
  sideTracker: ``,
  tracker: ``,
  // structure: ``,
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
        <h2>RNV(theme, RNV)</h2>
        <article className={styles.themeArticle}>
          <p>{descriptions.theme}</p>
          <div className={styles.videoWrap}>
            <video src="videos/rnv.mp4" autoPlay muted loop />
          </div>
        </article>

        <h2>홈페이지</h2>
        <article className={styles.homeArticle}>
          <p>{descriptions.home}</p>
          <div className={styles.videoWrap}>
            <video src="videos/home.mp4" autoPlay muted loop />
          </div>
        </article>

        <h2>포토페이지</h2>
        <article className={styles.photoArticle}>
          <p>{descriptions.photo}</p>
          <div className={styles.videoWrap}>
            <video src="videos/photo.mp4" autoPlay muted loop />
          </div>
        </article>

        <h2>스케줄러 페이지</h2>
        <article className={styles.schedulerArticle}>
          <p>{descriptions.scheduler}</p>
          <div className={styles.videoWrap}>
            <video src="videos/scheduler1.mp4" autoPlay muted loop />
          </div>
        </article>

        <h2>다이어리 페이지</h2>
        <article className={styles.diaryArticle}>
          <p>{descriptions.diary}</p>
          <div className={styles.videoWrap}>
            <video src="videos/diary.mp4" autoPlay muted loop />
          </div>
        </article>

        <h2>사이드 트래커(스케줄러 & 다이어리 페이지)</h2>
        <article className={styles.sideTrackerArticle}>
          <p>{descriptions.sideTracker}</p>
          <div className={styles.videoWrap}>
            <video src="videos/sidetracker.mp4" autoPlay muted loop />
          </div>
        </article>

        <h2>트래커 페이지</h2>
        <article className={styles.trackerArticle}>
          <p>{descriptions.tracker}</p>
          <div className={styles.videoWrap}>
            <video src="videos/tracker.mp4" autoPlay muted loop />
          </div>
        </article>
      </section>
    </>
  );
};

export default MyFirstDiary;
