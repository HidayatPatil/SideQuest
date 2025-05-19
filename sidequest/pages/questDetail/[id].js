import { useRouter } from "next/router";
import ProfileCard from "@/components/profileCard/profileCard";
import QuestTags from "@/components/questTag/questTag";
import quests from "@/data/questCardData";
import QuestStatus from "@/components/questStatus/questStatus";
import Button from "@/components/button/button";
import IconButton from "@/components/iconButton/iconButton";
import QuestApplication from "@/components/questApplicationPanel/questApplication";
import { useState } from "react";
//import Link from "next/link";

export default function QuestDetail() {
	const router = useRouter();
	const { id } = router.query; // Get the index????
	if (!id || !quests[id]) {
		return <p>Loading...</p>; // or a fallback UI
	}
	const quest = quests[id]; // Get the quest data based on the index

	const imagePath = `/questImage/quest-${id}.jpg`;

	const [showApplicationPanel, setShowApplicationPanel] = useState(false);

	const openApplicationPanel = () => {
		console.log("Opening panel");
		setShowApplicationPanel(true);
	};

	const closeApplicationPanel = () => {
		setShowApplicationPanel(false);
	};

	return (
		<div className="questDetailContainer">
			<div className="questDetailPage">
				<div className="questDetailHeader">
					<div className="questHeaderContainer">
						<IconButton
							icon="/Icons/arrowLeft.svg"
							onClick={() => router.back()}
							className="backButton"
							variant="primaryOutline"
						></IconButton>
						<div className="dateCalender">{quest.date}</div>
					</div>
					<img className="questImage" src={imagePath} alt={quest.title} />
				</div>

				<div className="questDetailBody">
					<h1>{quest.title}</h1>
					<p className="questDescription">{quest.desc}</p>

					<div className="cardTags">
						{quest?.tags?.map((tag, index) => (
							<QuestTags key={index} tagName={tag} />
						))}
					</div>
				</div>

				<div className="questMaster">
					<div className="sectionTitle">
						<h3>QUEST MASTER</h3>
					</div>
					<div className="userProfileData">
						<ProfileCard />
					</div>
				</div>

				<hr className="divider" />

				<div className="sectionTitle">
					<h3>LOCATION</h3>
				</div>

				<div className="locationDetails">
					<a
						href="https://www.google.com/maps"
						className="googleMapLink"
						target="_blank"
					>
						<div className="locationView">
							<div className="locationIconContainer">
								<img className="locationIcon" src="/Icons/ArrowsOut.svg" />
							</div>
						</div>
						<p>
							Note: Location can potential change. Make sure to check in often
							to be updated on any changes.
						</p>
					</a>
				</div>

				<hr className="divider" />

				<div className="partyMembers">
					<div className="sectionTitle">
						<h3>PARTY MEMBERS</h3>
					</div>
					<div className="memberCount">{quests.memberCount}</div>
					<div className="partyMembersList">Party members profile icons</div>
				</div>
			</div>
			<div className="questApplication">
				<Button
					text="Join Quest"
					variant="primary"
					onClick={openApplicationPanel}
				/>
				{/* <div className="likeQuest">
                    <img />
                </div> */}
			</div>
			{showApplicationPanel && (
				<div className="Overlay">
					<div className="applicationPanel">
							<QuestApplication onClose={closeApplicationPanel} />
					</div>
				</div>
			)}
		</div>
	);
}
