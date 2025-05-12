import { useState } from "react";
import styles from "@/components/searchBar/search-bar.module.css";

export default function SearchBar({ onSearch }) {
	const [query, setQuery] = useState("");

	const handleChange = (e) => {
		const value = e.target.value;
		setQuery(value);

		// Send value back to parent component (like QuestBoard)
		if (onSearch) onSearch(value);
	};

	return (
		<div className={styles.boardInteractions}>
			<div className={styles.searchBar}>
				<input
					type="text"
					value={query}
					onChange={handleChange}
					placeholder="Find your next adventure"
					className={styles.input}
				/>
				<img className={styles.searchIcon} src="/Icons/searchIcon.svg" />
			</div>
			<div className={styles.filter}>
				<img className={styles.filterIcon} src="/Icons/filterIcon.svg" />
			</div>
		</div>
	);
}
