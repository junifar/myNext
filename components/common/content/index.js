import { Fragment } from "react";
import style from "./index.module.css";

const Content = (props) => {
  return (
    <Fragment>
      <section className={style.Content}>{props.children}</section>
    </Fragment>
  );
};

const ContentWrapper = (props) => {
  return (
    <Fragment>
      <div className={style.ContentWrapper}>{props.children}</div>
    </Fragment>
  );
};

const ContentHeader = (props) => {
  return (
    <Fragment>
      <section className={style.ContentHeader}>
        <h1>
          {props.title}
          <small className={style.ContentHeaderSubtitle}>
            {props.subtitle}
          </small>
        </h1>
      </section>
    </Fragment>
  );
};

export default Content;
export { Content, ContentWrapper, ContentHeader };
