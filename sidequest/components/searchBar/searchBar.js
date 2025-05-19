import { useState } from "react";
import styles from "@/components/searchBar/searchBar.module.css";

export default function SearchBar({ onSearch }) {
	const [query, setQuery] = useState("");

	const clearSearch = () => {
			setQuery("");
			if (onSearch) onSearch("");
		};

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
				{query ? (
					<img
						src="/Icons/X.svg" // ← use your 'X' icon here
						className={styles.clearIcon}
						onClick={clearSearch}
						alt="Clear search"
					/>
				) : (
					<img
						src="/Icons/searchIcon.svg"
						className={styles.searchIcon}
						alt="Search"
					/>
				)}
			</div>

			{/* <div className={styles.filter}>
				<img className={styles.filterIcon} src="/Icons/filterIcon.svg" />
			</div> */}
		</div>
	);
}
