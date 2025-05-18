import styles from "@/components/chatCard/chatCard.module.css";
import Link from "next/link";

export default function ChatCard({ id, userImg, name, message, time }) {
    return (
        <div className={styles.chatCardContainer}>
            <Link
                href={`/chat/${id}`}
                className={styles.chatCard}
                passHref
            >
                <img
                    src={userImg}
                    alt="User"
                    className={styles.userImg}
                />
                <div className={styles.chatText}>
                    <div className={styles.chatUser}>
                        <div className={styles.userName}>{name}</div>
                        <div className={styles.time}>{time}</div>
                    </div>
                    <div className={styles.message}>{message}</div>
                </div>
                <img
                    className={styles.CaretRight}
                    src="/Icons/CaretRight.svg"
                    alt="CaretRight"
                />
            </Link>
        </div>
    );
}
