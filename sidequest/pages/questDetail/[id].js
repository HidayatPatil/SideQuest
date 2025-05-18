import { useRouter } from "next/router";
import ProfileCard from "@/components/profileCard/profileCard";
import QuestTags from "@/components/questTag/questTag";
import quests from "@/data/questCardData";
import QuestStatus from "@/components/questStatus/questStatus";
import StatusBar from "@/components/statusBar/statusBar";
import Button from "@/components/button/button";
//import Link from "next/link";

export default function QuestDetail() {
	const router = useRouter();
	const { id } = router.query; // Get the index????
	if (!id || !quests[id]) {
		return <p>Loading...</p>; // or a fallback UI
	}
	const quest = quests[id]; // Get the quest data based on the index

	const imagePath = `/questImage/quest-${id}.jpg`;

	return (
		<div className="questDetailContainer">
			<StatusBar />
			<div className="questDetailPage">
				<div className="questDetailHeader">
					<img className="questImage" src={imagePath} alt={quest.title} />
					<div className="questHeaderContainer">
						<div className="dateCalender">{quest.date}</div>
					</div>
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

				<hr className="divider" />
			</div>
		</div>
	);
}
