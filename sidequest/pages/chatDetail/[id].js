import { useRouter } from "next/router";
import StatusBar from "@/components/statusBar/statusBar";
import chats from "@/data/chatCardData";

export default function ChatDetail() {
    const router = useRouter();
    const { id } = router.query;

    const chat = chats.find((c) => c.id === Number(id));

    if (!chat) {
        return <p>Loading...</p>;
    }

    const imagePath = `/profileImage/${chat.name}.jpg`;

    return (
        <div className="chatDetailContainer">
            <StatusBar />
            <div className="chatDetailPage">
                <h1 className="chatDetailHeader">{chat.name}</h1>
                <div className="chatMessageContainer">
                    <img
                        src={imagePath}
                        alt="User"
                    />
                    <div className="chatMessageText">{chat.message3}</div>
                    <div className="chatTime">{chat.time}</div>
                </div>

                <div className="chatMessageContainer">
                    <img
                        src={imagePath}
                        alt="User"
                    />
                    <div className="chatMessageText">{chat.message2}</div>
                    <div className="chatTime">{chat.time}</div>
                </div>

                <div className="chatMessageContainer">
                    <img
                        src={imagePath}
                        alt="User"
                    />
                    <div className="chatMessageText">{chat.message}</div>
                    <div className="chatTime">{chat.time}</div>
                </div>
            </div>
        </div>
    );
}
