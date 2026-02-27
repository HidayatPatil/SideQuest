import styles from "@/components/questStatus/questStatus.module.css";

export default function QuestStatus() {
	return (
		<div className={styles.cardStatus}>
			<img className={styles.endingSoon} src="/Icons/endingSoon.svg" />
			Ending Soon
		</div>
	);
}
