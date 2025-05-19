import { useRouter } from "next/router";
import StatusBar from "@/components/statusBar/statusBar";
import chats from "@/data/chatCardData";

export default function ChatDetail() {
    const router = useRouter();
    const { id } = router.query;

    const chat = chats.find((c) => c.id === id);

    if (!chat) {
        return <p>Loading...</p>;
    }

    const imagePath = `/questImage/${chat.name}.jpg`;

    return (
        <div className="chatDetailContainer">
            <StatusBar />
            <h1>{chat.name}</h1>
            <img
                src={imagePath}
                alt="User"
            />
            <div className="chatMessage">{chat.message3}</div>
            <div className="chatMessage">{chat.message2}</div>
            <div className="chatMessage">{chat.message}</div>
            <div className="chatTime">{chat.time}</div>
        </div>
    );
}
