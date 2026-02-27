import styles from "@/components/iconButton/iconButton.module.css";
import Link from "next/link";

export default function IconButton({ icon, onClick, variant, link }) {
    if (link) {
        return (
            <Link href={link} passHref>
                <div className={`${styles.iconButton} ${styles[variant]}`}>
                    <img src={icon} alt="icon" />
                </div>
            </Link>
        );
    }

    return (
        <button className={`${styles.iconButton} ${styles[variant]}`} onClick={onClick}>
            <img src={icon} alt="icon" />
        </button>
    );
}
