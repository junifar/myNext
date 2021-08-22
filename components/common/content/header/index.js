import { Fragment } from "react";
import styles from "./index.module.css";

const ContentHeader = (props) => {
  return (
    <Fragment>
      <section className={styles.ContentHeader}>
        <h1>
          {props.title}{" "}
          <small className={styles.ContentHeaderSubtitle}>
            {props.subtitle}
          </small>
        </h1>
      </section>
    </Fragment>
  );
};

export default ContentHeader;
