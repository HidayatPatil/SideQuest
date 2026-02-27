import NavBar from "@/components/navBar/navBar";
import QuestCard from "@/components/questCard/questCard";
import quests from "@/data/questCardData";
import SearchBar from "@/components/searchBar/searchBar";
import SegmentedButton from "@/components/segmentedButton/segmentedButton";
import { useEffect, useState } from "react";

export default function QuestBoard() {
    const [searchQuery, setSearchQuery] = useState("");
    const [viewMode, setViewMode] = useState("Explore");
    const [likedQuests, setLikedQuests] = useState({});

    // Snackbar states
    const [showSnackbar, setShowSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState("");

    // Load likedQuests from localStorage on mount
    useEffect(() => {
        const stored = localStorage.getItem("likedQuests");
        if (stored) {
            setLikedQuests(JSON.parse(stored));
        }
    }, []);

    // Toggle like and update localStorage and state
    const toggleLike = (questId) => {
        setTimeout(() => {
            setLikedQuests((prev) => {
                const updated = { ...prev };
                let message = "";
                if (updated[questId]) {
                    delete updated[questId];
                    message = "Removed from Saved :(";
                } else {
                    updated[questId] = true;
                    message = "Added to Saved!❤️";
                }
                localStorage.setItem("likedQuests", JSON.stringify(updated));

                // Show snackbar with message
                setSnackbarMessage(message);
                setShowSnackbar(true);
                setTimeout(() => setShowSnackbar(false), 4000); // hide after 4s

                return updated;
            });
        }, 500); // delay removal from UI
    };

    const filteredQuests = quests.filter((quest) => {
        const isLiked = likedQuests[quest.id];
        const matchesSearch = quest.title
            .toLowerCase()
            .includes(searchQuery.toLowerCase());

        if (viewMode === "Saved") return matchesSearch && isLiked;
        return matchesSearch; // "Explore" or default — show all
    });

    return (
        <div className="questBoardContainer">
            <div className="questboardPage">
                <div className="boardHeader">
                    <h1>Quest Board</h1>
                    <div className="boardActions">
                        <SearchBar onSearch={setSearchQuery} />
                        <SegmentedButton onToggle={setViewMode} />
                    </div>
                </div>
                <div className="questSection">
                    <div className="exploreQuests">
                        {filteredQuests.map((quest) => (
                            <QuestCard
                                key={quest.id}
                                id={quest.id}
                                img={quest.img}
                                title={quest.title}
                                tags={quest.tags}
                                memberCount={quest.memberCount}
                                date={quest.date}
                                distance={quest.distance}
                                isLiked={!!likedQuests[quest.id]} // ✅ Pass down liked state
                                toggleLike={() => toggleLike(quest.id)} // ✅ Pass down function
                            />
                        ))}
                    </div>
                </div>
                <div className="frog">
                    <div className="frogText">
                        <div>That's all folks!</div>
                    </div>
                    <img
                        src="/appGraphics/frog.png"
                        alt="frog"
                        className="frogImage"
                    />
                </div>
            </div>

            {showSnackbar && <div className="snackbar">{snackbarMessage}</div>}

            <NavBar />
        </div>
    );
}
