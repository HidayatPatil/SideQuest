import { useRouter } from "next/router";
import ProfileCard from "@/components/profileCard/profile-card";
import Tags from "@/components/questTag/quest-tag";
import quests from "@/data/quest-card-data";
import QuestStatus from "@/components/questStatus/quest-status";
import StatusBar from "@/components/statusBar/status-bar";
import Button from "@/components/button/button";
//import Link from "next/link";

export default function QuestDetail() {
    const router = useRouter();
    const { id } = router.query; // Get the index????
    const quest = quests[id]; // Get the quest data based on the index

    const imagePath = `/quest_Image/quest-${id}.jpg`;

    return (
        <div className="questDetailContainer">
            <StatusBar />
            <div className="questDetailPage">
                <div className="questDetailHeader">
                    <img
                        className="questImage"
                        src={imagePath}
                        alt={quest.title}
                    />
                    <div className="dateCalender">{quest.date}</div>
                </div>

                <div className="questDetailBody">
                    <h1>{quest.title}</h1>
                    <p className="questDescription">{quest.desc}</p>
                </div>

                <div className="cardTags">
                    {quest?.tags?.map((tag, index) => (
                        <Tags
                            key={index}
                            tagName={tag}
                        />
                    ))}
                </div>

                <div className="sectionTitle">
                    <h3>QUEST MASTER</h3>
                </div>
                <div className="profileCard">
                    <ProfileCard />
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
                        <p>
                            Note: Location can potential change. Make sure to
                            check in often to be updated on any changes.
                        </p>
                        <img
                            className="locationMap"
                            src="/app_Graphics/Map.svg"
                            alt="Map"
                        />
                    </a>
                </div>

                <hr className="divider" />

                <div className="partyMembers">
                    <div className="sectionTitle">
                        <h3>PARTY MEMBERS</h3>
                    </div>
                    <div className="memberCount">{quests.memberCount}</div>
                    <div className="partyMembersList">
                        Party members profile icons
                    </div>
                </div>

                <hr className="divider" />
            </div>
        </div>
    );
}
