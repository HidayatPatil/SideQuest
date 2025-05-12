import ProfileCard from "@/components/profile-card";
import Tags from "@/components/quest-tag";
import quests from "@/data/quest-card-data";

const tags = [
    "Hiking",
    "Nature Trail",
    "Mountains",
    "Exercise",
    "Outdoor",
    "Adventure",
];

export default function QuestDetail() {
    return (
        <main>
            <div className="questDetailHeader">
                <img
                    className="questImage"
                    src="/quest_Image/quest-0.jpg"
                    alt="Quest Image"
                />
                <div className="dateCalender">{quests.date}</div>
                <div className="questTitle">
                    <h3>{quests.title}</h3>
                </div>
            </div>

            <div className="questDetailBody">
                <h1>{quests.title}</h1>
                <p className="questDescription">
                    Join us for a scenic 5-mile hike through lush forests and
                    stunning viewpoints. This is a casual-paced hike suitable
                    for all skill levels. We'll take breaks for snacks and
                    photos!
                </p>
            </div>

            <div className="cardTags">
                {quests?.tags?.map((tag, index) => (
                    <Tags
                        key={index}
                        tagName={tag}
                    />
                ))}
            </div>

            <div className="profileCard">
                <h3>Quest Master</h3>
                <ProfileCard />
            </div>
        </main>
    );
}
