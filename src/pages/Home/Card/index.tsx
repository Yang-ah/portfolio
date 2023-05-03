import { Tag } from "../../../components";
import styles from "./card.module.scss";
import cx from "classnames";

interface ICard {
  children: string;
  project: string;
  title: string;
  className?: string;
  imgSrc: string;
}

const Card = ({ title, children, className, imgSrc, project }: ICard) => {
  return (
    <article className={cx(styles.wrap, className)}>
      <div className={styles.imgBox}>
        <img src={imgSrc} />
      </div>
      <h1 className={styles.title}>
        {title}
        <span>{project}</span>
      </h1>
      <p className={styles.description}>{children}</p>

      <div className={styles.tagWrap}>
        <Tag>태그1</Tag>
        <Tag>태그2</Tag>
        <Tag>태그3</Tag>
      </div>
    </article>
  );
};

export default Card;
