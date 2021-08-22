import { Fragment } from "react";
import style from "./index.module.css";

const Box = (props) => {
  return (
    <Fragment>
      <div className={style.Box}>{props.children}</div>
    </Fragment>
  );
};

const BoxHeader = (props) => {
  return (
    <Fragment>
      <div className={style.BoxHeader}>{props.children}</div>
    </Fragment>
  );
};

const BoxTitle = (props) => {
  return (
    <Fragment>
      <h2 className={style.BoxTitle}>{props.children}</h2>
    </Fragment>
  );
};

const BoxBody = (props) => {
  return (
    <Fragment>
      <div className={style.BoxBody}>{props.children}</div>
    </Fragment>
  );
};

const BoxFooter = (props) => {
  return (
    <Fragment>
      <div className={style.BoxFooter}>{props.children}</div>
    </Fragment>
  );
};

export default Box;
export { Box, BoxHeader, BoxTitle, BoxBody, BoxFooter };
