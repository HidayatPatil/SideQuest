import NavBar from "@/components/navBar/navBar";
import StatusBar from "@/components/statusBar/statusBar";
import Link from "next/link";
import ChatCard from "@/components/chatCard/chatCard";
import chat from "@/data/chatCardData";

export default function Chat() {
    return (
        <div className="chatContainer">
            <StatusBar />
            <div className="chatPage">
                <div className="chatHeader">
                    <h1>Chat Log</h1>
                </div>
                <div className="chatCards">
                    {chat.map((chat) => {
                        return (
                            <ChatCard
                                key={chat.id}
                                id={chat.id}
                                userImg={chat.userImg}
                                name={chat.name}
                                message={chat.message}
                                time={chat.time}
                            />
                        );
                    })}
                </div>
            </div>
            <NavBar />
        </div>
    );
}
