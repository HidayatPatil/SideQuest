import styles from "@/components/questCard/quest-card.module.css";
import Tags from "@/components/questTag/quest-tag";
import QuestStatus from "@/components/questStatus/quest-status";
import { useEffect, useState } from "react";

export default function QuestCard({
	questImage,
	title,
	tags,
	memberCount,
	date,
	distance,
}) {
	const [isHydrated, setIsHydrated] = useState(false);
	const [isEndingSoon, setIsEndingSoon] = useState(false);
	const [formattedDate, setFormattedDate] = useState("");

	useEffect(() => {
		setIsHydrated(true);

		const questDate = new Date(date);
		questDate.setHours(0, 0, 0, 0);

		const currentDate = new Date();
		currentDate.setHours(0, 0, 0, 0);

		const diff = Math.floor((questDate - currentDate) / (1000 * 60 * 60 * 24));
		setIsEndingSoon(diff >= 0 && diff <= 2);

		setFormattedDate(
			questDate.toLocaleDateString("en-GB", {
				day: "2-digit",
				month: "short",
				year: "numeric",
			})
		);
	}, [date]);

	return (
		<div className={styles.cardBody}>
			<div className={styles.mainBody}>
				<img className={styles.questImage} src={questImage} alt={title} />
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
							<Tags key={index} tagName={tag} />
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

						{isHydrated && isEndingSoon && (
							<div className="questStatus">
								<QuestStatus />
							</div>
						)}
					</div>
				</div>
			</div>
			<div className={styles.footerBody}>
				<div className={styles.questDate}>
					<img className={styles.DateCalender} src="/Icons/questDate.svg" />
					{isHydrated ? formattedDate : ""}
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
	);
}
