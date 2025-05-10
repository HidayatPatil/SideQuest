import styles from "@/components/searchBar/search-bar.module.css";

export default function SearchBar() {
	return (
		<div className={styles.boardInteractions}>
			<div className={styles.searchBar}>
				<h5>Find your next adventure</h5>
				<img className={styles.searchIcon} src="\Icons\searchIcon.svg" />
			</div>
			<div className={styles.filter}>
				<img className={styles.filterIcon} src="\Icons\filterIcon.svg" />
			</div>
		</div>
	);
}
