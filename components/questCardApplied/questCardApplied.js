import styles from "@/components/questCardApplied/questCardApplied.module.css";
import QuestTags from "@/components/questTag/questTag";
import CardVisual from "../cardVisual/cardVisual";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function QuestCardApplied({
	id,
	img,
	title,
	tags,
	memberCount,
	date,
}) {
	const [status, setStatus] = useState("pending");

	return (
		<CardVisual>
			<Link className={styles.questImage} href={`/questDetail/${id}`} passHref>
				<div className={styles.mainBody}>
					<img className={styles.questImage} src={img} alt={title} />
					<div className={styles.mainContent}>
						<div className={styles.cardTitle}>
							<h2 className={styles.titleText}>{title}</h2>
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
				<Link href="/chat">
					<div className={styles.questChat}>
						<img
							className={styles.chatquestIcon}
							src="\Icons\questCardChat.svg"
						/>
					</div>
				</Link>
				<div className={styles.questApplicationStatus}>
					<select className={styles.dropdown} defaultValue="">
						<option value="" disabled hidden>
							Action Required ⚠️
						</option>
						<option value="going" className={styles.dropdownOptions}>
							Going ✅
						</option>
						<option value="notGoing" className={styles.dropdownOptions}>
							Not Going ❌
						</option>
					</select>
				</div>
			</div>
		</CardVisual>
	);
}
