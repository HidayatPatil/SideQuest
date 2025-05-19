import styles from "@/components/iconButton/iconButton.module.css";

export default function IconButton({ icon, onClick, variant }) {
    return (
        <button className={`${styles.iconButton} ${styles[variant]}`} onClick={onClick}>
            <img src={icon}></img>
        </button>
    );
}
