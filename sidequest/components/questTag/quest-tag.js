import styles from "@/components/questTag/quest-tag.module.css";

export default function Tags({ tagName }) {
	return <div className={styles.tag}>{tagName}</div>;
}
