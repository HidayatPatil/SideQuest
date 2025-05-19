import styles from "@/components/segmentedButton/segmentedButton.module.css";
import { useState } from "react";

export default function SegmentedButton({ onToggle }) {
	const [selected, setSelected] = useState("explore");

	const handleSelect = (mode) => {
		setSelected(mode);
		onToggle(mode === "explore" ? "Explore" : "Saved"); // ⬅️ Important: call the parent function
	};

	return (
		<div className={styles.questList}>
			<div
				className={`${styles.questList_explore} ${
					selected === "explore" ? styles.selected : ""
				}`}
				onClick={() => handleSelect("explore")}
			>
				<h3 className={styles.exploreTitle}>Explore</h3>
				<img
					className={`${styles.exploreIcon} ${
						selected === "explore" ? styles.iconBlue : ""
					}`}
					src="/Icons/exploreIcon.svg"
					alt="Explore"
				/>
			</div>
			<div
				className={`${styles.questList_saved} ${
					selected === "saved" ? styles.selected : ""
				}`}
				onClick={() => handleSelect("saved")}
			>
				<h3 className={styles.savedTitle}>Saved</h3>
				<img
					className={`${styles.exploreIcon} ${
						selected === "saved" ? styles.iconBlue : ""
					}`}
					src="/Icons/save for later.svg"
					alt="Saved"
				/>
			</div>
		</div>
	);
}
