import styles from "@/components/questTag/questTag.module.css";

export default function QuestTags({ tagName }) {
	return <div className={styles.tag}>{tagName}</div>;
}
