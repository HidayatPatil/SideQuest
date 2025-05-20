import ProfileCard from "@/components/profileCard/profileCard";
import QuestCardApplied from "@/components/questCardApplied/questCardApplied";
import QuestCardComplete from "@/components/questCardComplete/questCardComplete";
import quests from "@/data/questCardData";
import NavBar from "@/components/navBar/navBar";
import FeedBack from "@/components/feedbackPanel/feedback";
import { useState } from "react";

export default function Home() {
	const [showFeedback, setShowFeedback] = useState(false);
	const [showSnackbar, setShowSnackbar] = useState(false);

	const handleShowSnackbar = () => {
		setShowSnackbar(true);
		setTimeout(() => setShowSnackbar(false), 4000); // hide after 4s
	};

	const handleCloseFeedback = () => {
		setShowFeedback(false);
		handleShowSnackbar(); 
	};

	const openFeedbackPanel = () => {
		console.log("Opening panel");
		setShowFeedback(true);
	};

	return (
		<div className="homePage">
			<div className="userProfileData">
				<img className="homeIntroGraphic" src="\appGraphics\adventure.svg" />
				<div className="profileCard">
					<ProfileCard />
				</div>
			</div>

			<div className="homeQuests">
				<div className="upcomingQuests">
					<div className="sectionTitle">
						<h3>UPCOMING QUESTS</h3>
					</div>
					<div className="displayQuests"></div>
					{quests.slice(16, 17).map((quest) => (
						<QuestCardApplied
							key={quest.id}
							id={quest.id}
							img={quest.img}
							title={quest.title}
							tags={quest.tags}
							memberCount={quest.memberCount}
							date={quest.date}
						/>
					))}
				</div>

				<hr className="divider" />

				<div className="completedQuests">
					<div className="sectionTitle">
						<h3>COMPLETED</h3>
					</div>
					<div className="displayQuests"></div>
					{quests.slice(12, 14).map((quest) => (
						<QuestCardComplete
							key={quest.id}
							id={quest.id}
							img={quest.img}
							title={quest.title}
							tags={quest.tags}
							memberCount={quest.memberCount}
							date={quest.date}
							onFeedbackClick={openFeedbackPanel}
						/>
					))}
				</div>
			</div>

			<div className="feedBackPanel">
				{showFeedback && <FeedBack onClose={handleCloseFeedback} />}
			</div>

			{showSnackbar && (
				<div className="snackbar">Your feedback has been received!</div>
			)}

			<NavBar />
		</div>
	);
}
