import styles from "@/components/segmentedButton/segmented-button.module.css";

export default function SegmentedButton() {
	return (
		<div className={styles.questList}>
			<div className={styles.questList_explore}>
				<h3 className={styles.exploreTitle}>Explore</h3>
				<img className={styles.exploreIcon} src="\Icons\exploreIcon.svg" />
			</div>
			<div className={styles.questList_saved}>
				<h3 className={styles.savedTitle}>Saved</h3>
				<img className={styles.savedIcon} src="\Icons\save for later.svg" />
			</div>
		</div>
	);
}
