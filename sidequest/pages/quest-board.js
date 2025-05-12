import StatusBar from "@/components/statusBar/status-bar";
import NavBar from "@/components/navBar/nav-bar";
import QuestCard from "@/components/questCard/quest-card";
import quests from "@/data/quest-card-data";
import SearchBar from "@/components/searchBar/search-bar";
import SegmentedButton from "@/components/segmentedButton/segmented-button";
import { useState } from "react";

export default function QuestBoard() {
	const [searchQuery, setSearchQuery] = useState("");

	const filteredQuests = quests.filter((quest) =>
		quest.title.toLowerCase().includes(searchQuery.toLowerCase())
	);

	return (
		<div className="questBoardContainer">
			<StatusBar />
			<div className="questboardPage">
				<div className="boardHeader">
					<h1>Quest Board</h1>
					<div className="boardActions">
						<SearchBar onSearch={setSearchQuery} />
						<SegmentedButton />
					</div>
				</div>
				<div className="questSection">
					<div className="exploreQuests">
								<>
									{filteredQuests.map((quest, index) => (
										<QuestCard
											key={index}
											img={quest.img}
											title={quest.title}
											tags={quest.tags}
											memberCount={quest.memberCount}
											date={quest.date}
											distance={quest.distance}
										/>
									))}
								</>
					</div>
					{/* <div className="savedQuests">
						{quests.map((quest, index) => {
							const imagePath = `/quest_Image/quest-${index}.jpg`;

							return (
								<QuestCard
									key={index}
									questImage={imagePath}
									title={quest.title}
									tags={quest.tags}
									memberCount={quest.memberCount}
									date={quest.date}
									distance={quest.distance}
								/>
							);
						})}
					</div> */}
                </div>
            </div>
            <NavBar />
        </div>
    );
}
