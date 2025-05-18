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
            </div>
            <NavBar />
        </div>
    );
}
