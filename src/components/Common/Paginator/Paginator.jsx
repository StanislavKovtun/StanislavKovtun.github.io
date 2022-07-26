import React from "react";
import styles from "./Paginator.module.css";

let Paginator = (props) => {
  // debugger;
  let portionCount = Math.ceil(props.totalItemsCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= portionCount; i++) {
    pages.push(i);
  }

  let curP = props.currentPage;
  let curPF = curP - 10 < 0 ? 0 : curP - 10;
  let curPL = curP - 10 < 0 ? curP + 9 : curP + 10;
  let slicedPages = pages.slice(curPF, curPL);
  return (
    <div className={styles.paginator}>
      {slicedPages.map((p) => {
        return (
          <span
            key={p}
            className={props.currentPage === p ? styles.selectedPage : ""}
            onClick={(e) => {
              props.onPageChanged(p);
            }}
          >
            {p}
          </span>
        );
      })}
    </div>
  );
};

export default Paginator;
