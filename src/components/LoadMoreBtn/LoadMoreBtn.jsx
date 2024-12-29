import css from "./LoadMoreBtn.module.css";

export default function LoadMoreBtn({ onClick }) {
  return (
    <div style={{ textAlign: "center", margin: "20px 0" }}>
      <button onClick={onClick} className={css.loadMoreBtn}>
        Load more
      </button>
    </div>
  );
};