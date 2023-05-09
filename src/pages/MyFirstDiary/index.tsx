import { Link } from "react-router-dom";
import styles from "./myFirstDiary.module.scss";
import { GithubIcon, LogoIcon } from "../../assets";
import { Helmet } from "react-helmet-async";

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

  theme: `✨ 오른편에 위치한 메뉴바(RNB)의 핀셋(thumbTack) 클릭을 통해, 
      RNB를 열고 닫을 수 있습니다.

✨ RNB의 아이콘에 마우스를 올려, 테마 변경 가능합니다.

✨ Peach, Tree, Apple(default), Dark 4가지 테마를 제공합니다.`,

  home: `✨ 사이트 접속 시, 가장 먼저 보이는 홈페이지 입니다.

✨ 로그인 / 회원가입 /'테스트 계정으로 둘러볼게요' 클릭 시 
      테스트 계정으로 로그인 됩니다.

✨ 로그인 후 서비스 이용 가능합니다.     

✨ 화면 상단 오른편의, [유저 아이콘] 클릭 시, [로그아웃 / 정보수정] 
     드롭다운이 활성화되며 로그아웃 가능합니다.

✨ 추후 서버 연동 시, [validation / 로그인 / 회원가입 / 정보수정] 기능 
      추가 예정입니다.
`,
  photo: `✨ 달력 양쪽에 위치한 화살표(chevron)를 통해 월별 달력 조회 가능합니다.

✨ 테스트 데이터(default) / 데이터 초기화 버튼을 통해 작성 예시/초기 상태를 
      확인할 수 있습니다. 

✨ 각 날짜 칸 클릭 시, 사진을 등록/수정할 수 있도록 file 입력 창이 나타납니다. 

✨ 현재 사진 미리보기만 가능하며, 추후 서버 연동 시 기능 활성화 예정입니다.
  
  `,
  scheduler: `✨ [plan / work] 두 가지 카테고리를 제공합니다. 
      표 상단의 체크박스를 통해 카테고리별 스케줄 조회 가능합니다.
      
✨ 날짜 별 [line] 끝에 위치한 [자물쇠] 클릭 시, 잠금이 해제되며
     해당 날짜의 side tracker 수정 & 스케줄 삭제 가능합니다.

✨ category, date, content, importance 항목은 필수 입력해야 합니다. 

✨ category:work, date:오늘, importance:4로 초기값 설정 되어있습니다.

✨ time, with, place는 +버튼을 클릭하여 추가할 수 있는 옵션입니다. 

✨ 옵션값이 있는 경우, 해당 스케줄 박스(cell) 위에 마우스를 올리면, 
     확인 가능합니다.

✨ 중요도/카테고리에 따라 각 스케줄 박스(cell)에 위치한 별(⭐️) 아이콘의 
     색깔과 숫자가 다르게 나타납니다.
`,
  diary: `✨ 날짜 별 [line] 끝에 위치한 [자물쇠] 클릭 시, 잠금이 해제되며
      해당 날짜의 side tracker 수정 & 다이어리 수정 가능합니다.

✨ 다이어리 수정 후 [저장]버튼 클릭 / 또는 [enter] 키를 누르면, 
      저장 후 [잠김] 설정됩니다.
  `,
  sideTracker: `✨ 운동 여부 / 감정 상태를 체크할 수 있습니다.

✨ 다이어리 / 스케줄러 페이지에서 접근 가능합니다.

✨ [자물쇠]를 클릭 하여 잠김 해제 시 sideTracker 이용 가능합니다. 

✨ 체크 시 상태 업데이트 후 잠김 상태가 됩니다. `,

  tracker: `✨ 1년 동안 체크한 운동 여부 / 감정 상태를 모아서 볼 수 있는 페이지 입니다.

✨ 표 상단에 위치한 [emotion / exercise] 체크 박스 클릭을 통해 
     각각 확인 가능합니다. `,
  // structure: ``,
};

const MyFirstDiary = () => {
  return (
    <>
      <Helmet>
        <title>Project | My First Diary</title>
      </Helmet>
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
        <h2>RNB, Theme</h2>
        <article className={styles.themeArticle}>
          <p>{descriptions.theme}</p>
          <div className={styles.videoWrap}>
            <video src="videos/rnb.mp4" autoPlay muted loop />
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
