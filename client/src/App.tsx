import { useState } from "react";
import "./App.css";
import ChatContainer from "./components/ChatContainer";
import ChatInput from "./components/ChatInput";

enum Profile {
    bot,
    user,
}

const App = () => {
    const [messages, setMessages] = useState<IMessage[]>([]);
    const [isAnswering, setIsAnswering] = useState(false);

    const ensureEndingSign = (content: string) => {
        const lastChar = content[content.length - 1];
        return lastChar === "." || lastChar === "?" || lastChar === "!"
            ? content
            : content + ".";
    };

    const updateMessages = (content: string, profile: Profile) => {
        setMessages((prevMessages) => [
            ...prevMessages,
            {
                content,
                isFromAi: profile === Profile.bot,
            },
        ]);
    };

    const handleSubmit = async (content: string) => {
        updateMessages(content, Profile.user);
        setIsAnswering(true);

        const response = await fetch("https://clone-chat-gpt.onrender.com/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ prompt: ensureEndingSign(content) }),
        });

        if (response.ok) {
            const data = await response.json();
            const parsedData = data.bot.trim();
            setIsAnswering(false);
            updateMessages(parsedData, Profile.bot);
        } else {
            const err = await response.text();
            setIsAnswering(false);
            updateMessages(`Error: ${err}`, Profile.bot);
        }
    };

    return (
        <div
            id="app"
            className="w-screen h-screen bg-slate-500 flex flex-col items-center justify-between"
        >
            <div className="max-w-7xl w-full h-full flex flex-col items-center justify-between">
                <ChatContainer messages={messages} isAnswering={isAnswering} />
                <ChatInput onSubmit={handleSubmit} />
            </div>
        </div>
    );
};

export default App;
