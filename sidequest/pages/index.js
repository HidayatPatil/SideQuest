import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ProfileCard from "@/components/profileCard/profileCard";
import QuestCardApplied from "@/components/questCardApplied/questCardApplied";
import QuestCardComplete from "@/components/questCardComplete/questCardComplete";
import quests from "@/data/questCardData";
import NavBar from "@/components/navBar/navBar";
import FeedBack from "@/components/feedbackPanel/feedback";

export default function Home() {
	const router = useRouter();
	const [state, setState] = useState({
		showFeedback: false,
		showSnackbar: false,
		loading: true,
	});

	useEffect(() => {
		const hasSeenOnboarding = localStorage.getItem("hasSeenOnboarding"); // Check if the user has seen the onboarding

		if (!hasSeenOnboarding) { 
			localStorage.setItem("hasSeenOnboarding", "true"); 
			router.replace("/onboarding");  // Redirect to onboarding page
		} else {
			setState((prev) => ({ ...prev, loading: false }));  
		}
	}, []);

	const handleShowSnackbar = () => {  // Show snackbar
		setState((prev) => ({ ...prev, showSnackbar: true }));
		setTimeout(() => {
			setState((prev) => ({ ...prev, showSnackbar: false }));
		}, 4000);
	};

	const handleCloseFeedback = () => {  // Close feedback panel
		setState((prev) => ({ ...prev, showFeedback: false }));
		handleShowSnackbar();
	};

	const openFeedbackPanel = () => {  
		console.log("Opening panel");
		setState((prev) => ({ ...prev, showFeedback: true }));
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
				{state.showFeedback && <FeedBack onClose={handleCloseFeedback} />}
			</div>

			{state.showSnackbar && (
				<div className="snackbar">Your feedback has been received!</div>
			)}

			<NavBar />
		</div>
	);
}
