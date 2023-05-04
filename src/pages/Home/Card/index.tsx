import { Tag } from "../../../components";
import styles from "./card.module.scss";
import cx from "classnames";

interface ICard {
  children: any;
  project: string;
  title: string;
  className?: string;
  imgSrc: string;
  tags: string[];
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const Card = ({
  title,
  children,
  className,
  imgSrc,
  project,
  tags,
  onClick,
}: ICard) => {
  return (
    <button className={cx(styles.wrap, className)} onClick={onClick}>
      <div className={styles.imgBox}>
        <img src={imgSrc} />
      </div>
      <h1 className={styles.title}>
        {title}
        <span>{project}</span>
      </h1>
      <p className={styles.description}>{children}</p>

      <div className={styles.tagWrap}>
        {tags &&
          tags.map((tag, index) => {
            return <Tag key={tag + index}>{tag}</Tag>;
          })}
      </div>
    </button>
  );
};

export default Card;
