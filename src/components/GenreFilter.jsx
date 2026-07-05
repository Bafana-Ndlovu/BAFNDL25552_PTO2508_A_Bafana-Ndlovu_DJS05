import { useContext } from "react";
import { PodcastContext } from "../context/PodcastContext";
import styles from "./GenreFilter.module.css";

/**
 * Dropdown for filtering the podcast list by genre.
 *
 * Renders an "All Genres" option followed by one option per genre. The selected
 * genre id is stored in <PodcastContext> so the filter survives navigation; the
 * special value "all" means no genre filter is applied.
 *
 * @param {Object} props
 * @param {{id:number, title:string}[]} props.genres - Genre definitions from data.
 * @returns {JSX.Element}
 */
export default function GenreFilter({ genres }) {
  // Read and update the active genre filter from shared context.
  const { genre, setGenre } = useContext(PodcastContext);

  return (
    <select
      className={styles.select}
      value={genre}
      onChange={(e) => setGenre(e.target.value)}
    >
      <option value="all">All Genres</option>
      {genres.map((g) => (
        <option key={g.id} value={g.id}>
          {g.title}
        </option>
      ))}
    </select>
  );
}
