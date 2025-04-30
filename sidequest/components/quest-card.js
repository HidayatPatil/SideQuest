import styles from "@/components/quest-card.module.css";
import Tags from "@/components/quest-tag";

export default function QuestCard({
	questImage,
	title,
	tags,
	memberCount,
	questStatus,
	date,
	distance,
}) {
	return (
		<div className={styles.cardBody}>
			<div className={styles.mainBody}>
				<img className={styles.questImage}
					src={questImage}
					alt={title}/>
				<div className={styles.mainContent}>
					<div className={styles.cardTitle}>
						<h2 className={styles.titleText}>{title}</h2>
						<img />
					</div>
					<div className={styles.cardTags}>
						{tags.map((tag, index) => (
							<Tags key={index} tagName={tag} />
						))}
					</div>
					<div className={styles.cardDetails}>
						<div className={styles.memberCount}>{memberCount}</div>
						<div className={styles.questStatus}>{questStatus}</div>
					</div>
				</div>
			</div>
			<div className={styles.footerBody}>
				<div className={styles.questDate}>{date}</div>
				<div className={styles.questDistance}>{distance}</div>
			</div>
		</div>
	);
}
