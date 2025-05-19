import styles from "@/components/profileCard/profileCard.module.css";
import Link from "next/link";

export default function ProfileCard() {
    return (
        <Link
            href="/profile"
            passHref
        >
            <div className={styles.profileContainer}>
                <div className={styles.profileMain}>
                    <img
                        className={styles.profileImage}
                        src="\profileImage\Maya.jpg"
                    />
                    <div className={styles.profileContent}>
                        <div className={styles.profileData}>
                            <div className={styles.userIdentification}>
                                <div className={styles.userName}>Maya</div>
                                <div className={styles.userID}>ID#149385</div>
                            </div>
                            <div className={styles.userRank}>
                                <div className={styles.userRole}>
                                    Novice Quester
                                </div>
                                <div className={styles.userRating}>
                                    25
                                    <img
                                        className={styles.userIcon}
                                        src="/Icons/ThumbsUp.svg"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={styles.leveling}>
                            <div className={styles.levelBar}>
                                <div className={styles.levelProgress}></div>
                            </div>
                            <div className={styles.levelCount}></div>5 more
                            upvotes to level up
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}
