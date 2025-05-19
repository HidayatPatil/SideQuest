import { useEffect, useState } from "react";
import styles from "@/components/questCard/questCard.module.css";
import QuestTags from "@/components/questTag/questTag";
import QuestStatus from "@/components/questStatus/questStatus";
import CardVisual from "../cardVisual/cardVisual";
import Link from "next/link";

export default function QuestCard({
	id,
	img,
	title,
	tags,
	memberCount,
	date,
	distance,
	isLiked,
	toggleLike,
}) {
	const [liked, setLiked] = useState(isLiked);
	const [removing, setRemoving] = useState(false); // ⬅️ for card disappearance delay

	// Update local liked state when prop changes
	useEffect(() => {
		setLiked(isLiked);
	}, [isLiked]);

	const handleLikeClick = (e) => {
		e.preventDefault();
		e.stopPropagation();

		setLiked(!liked); // icon changes immediately
		toggleLike(); // actual removal happens after 500ms (in parent)
	};

	const [isHydrated, setIsHydrated] = useState(false);
	const [isEndingSoon, setIsEndingSoon] = useState(false);
	const [formattedDate, setFormattedDate] = useState("");

	useEffect(() => {
		setIsHydrated(true);

		const questDate = new Date(date);
		questDate.setHours(0, 0, 0, 0);
		const currentDate = new Date();
		currentDate.setHours(0, 0, 0, 0);
		const timeDiff = Math.floor(
			(questDate - currentDate) / (1000 * 60 * 60 * 24)
		);

		setIsEndingSoon(timeDiff >= 0 && timeDiff <= 2);

		setFormattedDate(
			questDate.toLocaleDateString("en-GB", {
				day: "2-digit",
				month: "short",
				year: "numeric",
			})
		);
	}, [date]);

	if (removing) {
		return null; // ⬅️ hide the card visually after icon is shown
	}

	return (
		<CardVisual>
				<div className={styles.mainBody}>
					<Link
						className={styles.questImage}
						href={`/questDetail/${id}`}
						passHref
					>
						<img className={styles.questImage} src={img} alt={title} />
					</Link>
					<div className={styles.mainContent}>
						<div className={styles.cardTitle}>
							<Link href={`/questDetail/${id}`} passHref>
								<h2 className={styles.titleText}>{title}</h2>
							</Link>
							<img
								className={styles.cardIcons}
								src={
									liked
										? "/Icons/Save for later_active.svg"
										: "/Icons/Save for later.svg"
								}
								onClick={handleLikeClick}
								alt="Save for later"
							/>
						</div>
						<Link href={`/questDetail/${id}`} passHref>
							<div className={styles.cardTags}>
								{tags.map((tag, index) => (
									<QuestTags key={index} tagName={tag} />
								))}
							</div>
						</Link>
						<Link href={`/questDetail/${id}`} passHref>
							<div className={styles.cardDetails}>
								<div className={styles.memberCount}>
									<img
										className={styles.cardIcons}
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
						</Link>
					</div>
				</div>
				<Link href={`/questDetail/${id}`} passHref>
					<div className={styles.footerBody}>
						<div className={styles.questDate}>
							<img className={styles.cardIcons} src="/Icons/questDate.svg" />
							{isHydrated ? formattedDate : ""}
						</div>
						<div className={styles.questDistance}>
							<img
								className={styles.cardIcons}
								src="/Icons/questLocation.svg"
							/>
							{distance}
						</div>
					</div>
				</Link>
		</CardVisual>
	);
}
