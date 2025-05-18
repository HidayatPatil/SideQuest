import Link from "next/link";
import { useRouter } from "next/router";
import styles from "@/components/navBar/navBar.module.css";

export default function NavBar() {
    const router = useRouter();

    // Helper to check if a route is active
    const isActive = (path) => router.pathname === path;
    return (
        <div className={styles.navContainer}>
            <div className={styles.navMain}>
                <Link href="/">
                    <div className={styles.navIcon}>
                        <img
                            className={`${styles.icon} ${
                                isActive("/") ? styles.active : ""
                            }`}
                            src={
                                isActive("/")
                                    ? "/Icons/House_active.svg"
                                    : "/Icons/House.svg"
                            }
                            alt="Home Icon"
                        />
                        {isActive("/") && <div className={styles.iconActive} />}
                    </div>
                </Link>
                <Link href="/questBoard">
                    <div className={styles.navIcon}>
                        <img
                            className={`${styles.icon} ${
                                isActive("/questBoard") ? styles.active : ""
                            }`}
                            src={
                                isActive("/questBoard")
                                    ? "/Icons/Sword_active.svg"
                                    : "/Icons/Sword.svg"
                            }
                            alt="Quest Icon"
                        />
                        {isActive("/questBoard") && (
                            <div className={styles.iconActive} />
                        )}
                    </div>
                </Link>
                <Link href="/chat">
                    <div className={styles.navIcon}>
                        <img
                            className={`${styles.icon} ${
                                isActive("/chat") ? styles.active : ""
                            }`}
                            src={
                                isActive("/chat")
                                    ? "/Icons/Chats_active.svg"
                                    : "/Icons/Chats.svg"
                            }
                            alt="Chat Icon"
                        />
                        {isActive("/chat") && (
                            <div className={styles.iconActive} />
                        )}
                    </div>
                </Link>
                <Link href="/profile">
                    <div className={styles.navIcon}>
                        <img
                            className={`${styles.icon} ${
                                isActive("/profile") ? styles.active : ""
                            }`}
                            src={
                                isActive("/profile")
                                    ? "/Icons/UserSquare_active.svg"
                                    : "/Icons/UserSquare.svg"
                            }
                            alt="Profile Icon"
                        />
                        {isActive("/profile") && (
                            <div className={styles.iconActive} />
                        )}
                    </div>
                </Link>
            </div>
        </div>
    );
}
