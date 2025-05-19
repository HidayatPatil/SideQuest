import styles from "@/components/questCardComplete/questCardComplete.module.css";
import QuestTags from "@/components/questTag/questTag";
import CardVisual from "../cardVisual/cardVisual";
import Button from "../button/button";
import { useEffect, useState } from "react";
import Link from "next/link";
import FeedBack from "../feedbackPanel/feedback";

export default function QuestCardComplete({
	id,
	img,
	title,
	tags,
	memberCount,
	date,
	onFeedbackClick, // ✅ Accept the prop
}) {
	return (
		<CardVisual>
			<Link href={`/questDetail/${id}`} passHref>
				<div className={styles.mainBody}>
					<img className={styles.questImage} src={img} alt={title} />
					<div className={styles.mainContent}>
						<div className={styles.cardTitle}>
							<h2 className={styles.titleText}>{title}</h2>
							<img
								className={styles.cardIcons}
								src="\Icons\questCompleteWarning.svg"
								alt="Save for later"
							/>
						</div>
						<div className={styles.cardTags}>
							{tags.map((tag, index) => (
								<QuestTags key={index} tagName={tag} />
							))}
						</div>
						<div className={styles.cardDetails}>
							<div className={styles.questDate}>
								<img className={styles.cardIcons} src="/Icons/questDate.svg" />
								{date}
							</div>
							<div className={styles.memberCount}>
								<img
									className={styles.cardIcons}
									src="/Icons/questMembers.svg"
								/>
								{memberCount}
							</div>
						</div>
					</div>
				</div>
			</Link>
			<div className={styles.footerBody}>
				<div className={styles.questFeedback}>
					<Button
						text="Feedback"
						variant="outline"
						onClick={onFeedbackClick} // ✅ call the handler passed from page
					/>
				</div>
			</div>
		</CardVisual>
	);
}
