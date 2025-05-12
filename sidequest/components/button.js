
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "@/components/button.module.css";

export default function Button({ 
    const router = useRouter();
}) {

    return (
        <div className={styles.button} onClick={onClick}>
            {icon && <img className={styles.icon} src={icon} alt="icon" />}
            <span className={styles.text}>{text}</span>
        </div>
    );
}



















