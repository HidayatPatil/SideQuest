import styles from "@/components/profile-card.module.css";
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
                        src="\profile_Image\Maya.jpg"
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
                                    <img />
                                </div>
                            </div>
                        </div>
                        <div className={styles.leveling}>
                            <div className={styles.levelBar}></div>5 more
                            upvotes to level up
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}
