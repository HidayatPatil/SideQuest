import StatusBar from "@/components/statusBar/statusBar";
import ProfileCard from "@/components/profileCard/profileCard";
import QuestCard from "@/components/questCard/questCard";
import Link from "next/link";
import quests from "@/data/questCardData";
import Button from "@/components/button/button";
import NavBar from "@/components/navBar/navBar";

export default function Home() {
    return (
        <div className="homePage">
            <StatusBar />
            <div className="userProfileData">
                <img
                    className="homeIntroGraphic"
                    src="\appGraphics\adventure.svg"
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
                    {quests.slice(0, 2).map((quest) => {
                        return (
                            <QuestCard
                                key={quest.id}
                                id={quest.id}
                                img={quest.img}
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
                    {quests.slice(3, 6).map((quest) => {
                        return (
                            <QuestCard
                                key={quest.id}
                                id={quest.id}
                                img={quest.img}
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
