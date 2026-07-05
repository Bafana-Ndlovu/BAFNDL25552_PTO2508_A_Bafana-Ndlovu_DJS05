import { useContext } from "react";
import { PodcastContext } from "../context/PodcastContext";
import styles from "./Pagination.module.css";

/**
 * Numeric pagination bar.
 *
 * Renders one button per page and highlights the active one. The current page
 * and total page count come from <PodcastContext>, which derives them from the
 * filtered result set and the responsive page size.
 *
 * @returns {JSX.Element|null} The pagination bar, or null when there is only one page.
 */
export default function Pagination() {
  const { page, setPage, totalPages } = useContext(PodcastContext);

  // Nothing to paginate when the results fit on a single page.
  if (totalPages <= 1) return null;

  // Build a 1-based list of page numbers, e.g. [1, 2, 3, ...].
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className={styles.paginationWrapper}>
      {pages.map((p) => (
        <button
          key={p}
          className={`${styles.pageButton} ${p === page ? styles.active : ""}`}
          onClick={() => setPage(p)}
        >
          {p}
        </button>
      ))}
    </div>
  );
}
