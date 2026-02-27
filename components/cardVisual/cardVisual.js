import styles from "@/components/cardVisual/cardVisual.module.css";

export default function CardVisual({ children }) {
	return <div className={styles.cardVisual}>{children}</div>; // ✅ this must be here
}
