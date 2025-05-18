import NavBar from "@/components/navBar/navBar";
import StatusBar from "@/components/statusBar/statusBar";
import Link from "next/link";
import ChatCard from "@/components/chatCard/chatCard";
import chats from "@/data/chatCardData";

export default function Chat() {
    return (
        <div className="chatContainer">
            <StatusBar />
            <div className="chatPage">
                <div className="chatHeader">
                    <h1>Chat Log</h1>
                </div>
                {chats.map((chats) => {
                    return (
                        <ChatCard
                            id={chats.id}
                            userImg={chats.userImg}
                            name={chats.name}
                            message={chats.message}
                            time={chats.time}
                        />
                    );
                })}
            </div>
            <NavBar />
        </div>
    );
}
