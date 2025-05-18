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
				if (updated[questId]) {
					delete updated[questId];
				} else {
					updated[questId] = true;
				}
				localStorage.setItem("likedQuests", JSON.stringify(updated));
				return updated;
			});
		}, 500); // delay removal from UI
	};

	const filteredQuests = quests.filter((quest) => {
		const isLiked = likedQuests[quest.id];
		const matchesSearch = quest.title
			.toLowerCase()
			.includes(searchQuery.toLowerCase());

		if (viewMode === "Explore") return matchesSearch && !isLiked;
		if (viewMode === "Saved") return matchesSearch && isLiked;
		return matchesSearch;
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
			</div>
			<NavBar />
		</div>
	);
}
