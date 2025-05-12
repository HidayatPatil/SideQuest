import StatusBar from "@/components/statusBar/status-bar";
import ProfileCard from "@/components/profileCard/profile-card";
import QuestCard from "@/components/questCard/quest-card";
import Link from "next/link";
import quests from "@/data/quest-card-data";
import Button from "@/components/button";
import NavBar from "@/components/navBar/nav-bar";

export default function Home() {
    return (
        <div className="homePage">
            <StatusBar />
            <div className="userProfileData">
                <img
                    className="homeIntroGraphic"
                    src="\app_graphics\adventure.svg"
                />
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
                    {quests.slice(0, 2).map((quest, index) => {
                        const imagePath = `/quest_Image/quest-${index}.jpg`;

                        return (
                            <QuestCard
                                key={quest.id}
                                id={quest.id}
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
                <hr className="divider" />
                <div className="completedQuests">
                    <div className="sectionTitle">
                        <h3>COMPLETED</h3>
                    </div>
                    <div className="displayQuests"></div>
                    {quests.slice(3, 6).map((quest, index) => {
                        const imagePath = `/quest_Image/quest-${index}.jpg`;

                        return (
                            <QuestCard
                                key={quest.id}
                                id={quest.id}
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
            </div>
            <NavBar />
        </div>
    );
}
