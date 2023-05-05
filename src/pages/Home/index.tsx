import { useNavigate } from "react-router-dom";
import Card from "./Card";
import styles from "./home.module.scss";

const Home = () => {
  const navigate = useNavigate();

  return (
    <main className={styles.wrap}>
      <Card
        project="team"
        title="무비셀렉터"
        imgSrc="https://user-images.githubusercontent.com/122377401/232440342-4ff41ad6-b3ca-439c-8c71-35e27ddc322c.png"
        tags={["React", "Recoil", "SCSS"]}
        onClick={() => navigate("/movieselector")}
      >
        <p>영화 평점사이트 입니다.</p>
        <p>
          recoil을 통해 전역상태관리를 하였고, 사용자 경험을 고려한 직관적인 UI
          / UX를 구현하였습니다.
        </p>
      </Card>

      <Card
        project="personal"
        title="My First Diary"
        imgSrc="https://user-images.githubusercontent.com/97151214/236193556-5cb4bde6-094f-464e-910f-bc80103e89f1.png"
        tags={["React", "TypeScript", "Recoil", "Styled-component", "SCSS"]}
        onClick={() => navigate("/myfirstdiary")}
      >
        <p>다이어리 & 스케줄러 입니다.</p>
        <p>
          styled-component를 통해 4가지 테마를 제공하며, typeScript의
          interface를 활용했습니다. 또한, FileReader를 통해 사용자의 사진
          미리보기를 할 수 있습니다.
        </p>
      </Card>
    </main>
  );
};

export default Home;
