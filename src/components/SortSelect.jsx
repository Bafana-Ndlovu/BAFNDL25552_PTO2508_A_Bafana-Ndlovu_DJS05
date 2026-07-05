import { useContext } from "react";
import { SORT_OPTIONS, PodcastContext } from "../context/PodcastContext";
import styles from "./SortSelect.module.css";

/**
 * Dropdown for choosing the sort order of the podcast list.
 *
 * Options come from the shared SORT_OPTIONS list, and the selected key is
 * stored in <PodcastContext> so the sort order is preserved across navigation.
 *
 * @returns {JSX.Element}
 */
export default function SortSelect() {
  // Read and update the active sort key from shared context.
  const { sortKey, setSortKey } = useContext(PodcastContext);

  return (
    <select
      className={styles.select}
      value={sortKey}
      onChange={(e) => setSortKey(e.target.value)}
    >
      {SORT_OPTIONS.map((o) => (
        <option key={o.key} value={o.key}>
          {o.label}
        </option>
      ))}
    </select>
  );
}
