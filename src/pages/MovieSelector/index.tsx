import { Link } from "react-router-dom";
import styles from "./movieSelector.module.scss";
import { GithubIcon, LogoIcon } from "../../assets";

const links = {
  gitHub: "https://github.com/Yang-ah/select_movie",
  siteLink: "http://test123bukit.s3-website.ap-northeast-2.amazonaws.com/",
};

const descriptions = {
  intro: `
✨ 평점/리뷰/댓글을 남길 수 있는 영화 평점 사이트입니다.

✨ 프론트엔드 4명으로 이루어진 팀과 백엔드 개발자 1명의 협업으로 만들어진 사이트이며, 
     api 통신을 통해 로그인/회원가입, 데이터 CRUD가 가능합니다.

✨ recoil을 통해 로그인 전역상태관리를 하였고, 
     사용자 경험을 고려한 직관적인 UI / UX를 구현하였습니다.
`,
  contribute: `▪️ 각 팀원 데일리 테스크 트래킹/리마인더를 담당하였습니다. 

▪️ 일정보다 일찍 프로젝트를 마무리하고, 전체 폴더구조 개선 & 리팩토링 & 테스트를 진행하였습니다. 
  
▪️ 페이지 개발 : 상세페이지, 검색페이지
  
▪️ 기능 개발 
  - recoil을 사용한 자동로그인(로그인 유지), 로그아웃, 영화검색
  - 조회·생성·수정·삭제 : 댓글(리뷰), 대댓글(댓글), 리뷰 공감/비공감, 좋아요, 북마크`,
  search: `✨ 페이지 상단 바의 검색어 입력 시, 검색페이지 접근 가능합니다.

✨ 상단 바의 검색 input, 검색페이지의 검색 input을 통해 검색 가능

✨ [검색중, 검색 결과, 검색 결과 없음]에 대응하여, 
    사용자에게 로딩중/검색결과에 대해 인지할 수 있도록 함`,
  detail: `✨ 영화 상세정보 조회, 별점과 함께 리뷰를 남길 수 있습니다.

✨ 최신순, 별점높은/낮은 순으로 리뷰 조회가능

✨ 댓글(리뷰) & 대댓글(댓글) 아코디언 구현

✨ 리뷰 공감 & 비공감 기능`,
  structure: `✨ Review, Comment, ReviewInput, Preview 컴포넌트의 공통된 부분이 많아, 
      Comment 폴더 안에 4가지 컴포넌트를 두고, 공통된 부분을 _shared 폴더에 정리하였습니다.

✨ 흩어져 있던 Carousel, Poster 등 캐러셀과 관련된 컴포넌트들은 Carousel 폴더에 정리하였습니다. 

✨ 컴포넌트의 특징에 맞게 이름을 수정하고, 사용된 곳에 재배치하였습니다. `,
};

const MovieSelector = () => {
  return (
    <>
      <section className={styles.introduction}>
        <article className={styles.introductionLeft}>
          <h1 className={styles.title}>무비셀렉터</h1>
          <p className={styles.description}>{descriptions.intro}</p>
        </article>
        <article className={styles.introductionRight}>
          <p>2023.03. - 2023.04.</p>
          <p>Front-end development · Team leader</p>
          <p>React, SCSS, Recoil</p>
          <Link to={links.gitHub} target="_blank">
            <GithubIcon />
          </Link>
          <Link to={links.siteLink} target="_blank">
            <LogoIcon />
          </Link>
        </article>
      </section>

      <section className={styles.main}>
        <h1>Contribute</h1>

        <article className={styles.contributeArticle}>
          <div className={styles.emoji}>
            <img src="https://user-images.githubusercontent.com/97151214/236447256-bae8f430-0379-41e3-8a1d-a308265d6947.png" />
          </div>
          <p className={styles.contribute}>{descriptions.contribute}</p>
        </article>

        <h2>검색페이지</h2>

        <article className={styles.searchArticle}>
          <p>{descriptions.search}</p>
          <div className={styles.videoWrap}>
            <video src="videos/search1.mp4" autoPlay muted loop />
          </div>
        </article>

        {/* <div className={styles.searchImgWrap}>
          <img src="https://user-images.githubusercontent.com/97151214/236463755-d92b81b8-6190-40d2-9c42-d3a77710fe6c.jpeg" />
          <img src="https://user-images.githubusercontent.com/97151214/236463745-e0122c93-f4ef-4c38-b029-945428797f18.jpeg" />
          <img src="https://user-images.githubusercontent.com/97151214/236463732-49705463-02d6-4162-9c7f-b3de0f487a88.jpeg" />
        </div> */}

        <h2>상세페이지</h2>

        <article className={styles.detailArticle}>
          <p>{descriptions.detail}</p>
          <div className={styles.videoWrap}>
            <video src="videos/detail1.mp4" autoPlay muted loop />
          </div>
        </article>

        <h2>폴더구조</h2>

        <article className={styles.folderStructure}>
          <p>{descriptions.structure}</p>

          <img src="https://user-images.githubusercontent.com/97151214/236623680-5ff7aa28-e3f5-41b5-86ec-5f59509aa219.png" />
        </article>
      </section>
    </>
  );
};

export default MovieSelector;
