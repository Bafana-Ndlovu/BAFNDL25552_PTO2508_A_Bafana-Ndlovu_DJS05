import { useState, useEffect, useContext } from "react";
import { PodcastContext } from "../context/PodcastContext";
import styles from "./SearchBar.module.css";

/**
 * Search input for filtering podcasts by title.
 *
 * Keeps its own local `value` state for instant typing feedback, then pushes
 * that value into the shared <PodcastContext> only after the user pauses
 * typing. Debouncing avoids re-filtering the whole list on every keystroke.
 *
 * @returns {JSX.Element}
 */
export default function SearchBar() {
  // Committed search term lives in context; `value` is the live input state.
  const { search, setSearch } = useContext(PodcastContext);
  const [value, setValue] = useState(search);

  // Debounce: wait 300ms after the last keystroke before updating context,
  // and cancel the pending timer whenever the input changes again.
  useEffect(() => {
    const id = setTimeout(() => setSearch(value), 300);
    return () => clearTimeout(id);
  }, [value]);

  return (
    <input
      type="search"
      placeholder="Search podcasts…"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className={styles.searchInput}
    />
  );
}
