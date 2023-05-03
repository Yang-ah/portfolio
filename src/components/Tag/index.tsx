import cx from "classnames";
import styles from "./tag.module.scss";

interface ITag {
  children: string;
  className?: string;
}

const Tag = ({ children, className }: ITag) => {
  return <div className={cx(styles.wrap, className)}>{children}</div>;
};

export default Tag;
