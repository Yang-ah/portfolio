import Card from "./Card";
import styles from "./home.module.scss";

const Home = () => {
  return (
    <section className={styles.wrap}>
      <Card
        project="team"
        title="무비셀렉터"
        imgSrc="https://user-images.githubusercontent.com/122377401/232440342-4ff41ad6-b3ca-439c-8c71-35e27ddc322c.png"
      >
        영화 조회 : 사이트 내 Top10 영화와 카테고리 별 영화를 조회할 수
        있습니다. 프리뷰 : 메인페이지에서 포스터 클릭 시, 프리뷰 모달을 통해
        영화정보 및 최신 리뷰 확인 가능합니다. 리뷰 작성 및 부가 기능 :
        별점&코멘트를 포함하여 영화 리뷰를 남길 수 있으며, 리뷰에 대해
      </Card>
      <Card
        project="personal"
        title="My First Diary"
        imgSrc="https://user-images.githubusercontent.com/122377401/232440342-4ff41ad6-b3ca-439c-8c71-35e27ddc322c.png"
      >
        영화 조회 : 사이트 내 Top10 영화와 카테고리 별 영화를 조회할 수
        있습니다. 프리뷰 : 메인페이지에서 포스터 클릭 시, 프리뷰 모달을 통해
        영화정보 및 최신 리뷰 확인 가능합니다. 리뷰 작성 및 부가 기능 :
        별점&코멘트를 포함하여 영화 리뷰를 남길 수 있으며, 리뷰에 대해
      </Card>
    </section>
  );
};

export default Home;
