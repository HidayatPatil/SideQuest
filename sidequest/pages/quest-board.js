import StatusBar from "@/components/statusBar/status-bar";
import NavBar from "@/components/navBar/nav-bar";
import QuestCard from "@/components/questCard/quest-card";
import quests from "@/data/quest-card-data";
import SearchBar from "@/components/searchBar/search-bar";
import SegmentedButton from "@/components/segmentedButton/segmented-button";

export default function QuestBoard() {
    return (
        <div className="questBoardContainer">
            <StatusBar />
            <div className="questboardPage">
                <div className="boardHeader">
                    <h1>Quest Board</h1>
                    <div className="boardActions">
                        <SearchBar />
                        <SegmentedButton />
                    </div>
                </div>
                <div className="questSection">
                    <div className="exploreQuests">
                        {quests.slice(0, 6).map((quest, index) => {
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
