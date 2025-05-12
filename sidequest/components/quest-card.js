import Link from "next/link";
import styles from "@/components/quest-card.module.css";
import Tags from "@/components/quest-tag";
import QuestStatus from "./quest-status";

export default function QuestCard({
    questImage,
    title,
    tags,
    memberCount,
    date,
    distance,
}) {
    // show ending soon status
    const today = new Date();
    const questDate = new Date(date);
    const dayDiff = Math.floor((questDate - today) / (1000 * 60 * 60 * 24));
    const shouldShowStatus = dayDiff <= 2 && dayDiff >= 0;

    return (
        <Link
            href="/quest-detail"
            passHref
        >
            <div className={styles.cardBody}>
                <div className={styles.mainBody}>
                    <img
                        className={styles.questImage}
                        src={questImage}
                        alt={title}
                    />
                    <div className={styles.mainContent}>
                        <div className={styles.cardTitle}>
                            <h2 className={styles.titleText}>{title}</h2>
                            <img
                                className={styles.saveforlater}
                                src="/Icons/Save for later.svg"
                            />
                        </div>
                        <div className={styles.cardTags}>
                            {tags.map((tag, index) => (
                                <Tags
                                    key={index}
                                    tagName={tag}
                                />
                            ))}
                        </div>
                        <div className={styles.cardDetails}>
                            <div className={styles.memberCount}>
                                <img
                                    className={styles.questMember}
                                    src="/Icons/questMembers.svg"
                                />
                                {memberCount}
                            </div>
                            {/* calling status function! */}
                            {shouldShowStatus && (
                                <div className={styles.questStatus}>
                                    <QuestStatus />
                                </div>
                            )}
                            {/* <div className={styles.questStatus}>
								<QuestStatus />
							</div> */}
                        </div>
                    </div>
                </div>
                <div className={styles.footerBody}>
                    <div className={styles.questDate}>
                        <img
                            className={styles.DateCalender}
                            src="/Icons/questDate.svg"
                        />
                        {date}
                    </div>
                    <div className={styles.questDistance}>
                        <img
                            className={styles.questLocation}
                            src="/Icons/questLocation.svg"
                        />
                        {distance}
                    </div>
                </div>
            </div>
        </Link>
    );
}
