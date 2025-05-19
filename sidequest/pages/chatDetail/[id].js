import { useRouter } from "next/router";
import StatusBar from "@/components/statusBar/statusBar";
import Button from "@/components/button/button";
import Link from "next/link";

export default function ChatDetail() {
	const router = useRouter();
	const { id } = router.query; // Get the index????
	if (!id || !quests[id]) {
		return <p>Loading...</p>; // or a fallback UI
	}
	const quest = quests[id]; // Get the quest data based on the index

	const imagePath = `/questImage/quest-${id}.jpg`;

	return (
		<div className="chatDetailContainer">
			<StatusBar />
			

			</div>
	);
}
