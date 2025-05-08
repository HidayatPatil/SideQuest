import ProfileCard from "@/components/profile-card";
import QuestStatus from "./quest-status";
import Tags from "@/components/quest-tag";

export default function QuestDetail() {
    return (
        <main>
            <div className="questDetailHeader">
                <img className="questImage" src="/quest_Image/quest-0.jpg" alt="Quest Image" />
                <div className="questTitle">
                    <h3>Quest Title</h3>
                </div>

            <div className={styles.cardTags}>
                {tags.map((tag, index) => (
                    <Tags
                        key={index}
                        tagName={tag}
                    />
                ))}
            </div>
            

            <div className="profileCard">
                <ProfileCard />
            </div>
        </main>
    );
}
