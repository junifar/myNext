import { Fragment } from "react";
import style from "./index.module.css";

const Box = (props) => {
  return (
    <Fragment>
      <div className={style.Box}>{props.children}</div>
    </Fragment>
  );
};

export default Box;
export { Box };
