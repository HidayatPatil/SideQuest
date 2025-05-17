import styles from "@/components/questTag/quest-tag.module.css";

export default function QuestTags({ tagName }) {
	return <div className={styles.tag}>{tagName}</div>;
}
