import { useEffect, useRef } from "react";
import ChatStripe from "./ChatStripe";

interface ChatContainerProps {
    messages: IMessage[];
    isAnswering: boolean;
}

const ChatContainer = (props: ChatContainerProps) => {
    const generateMessageId = () => {
        const timestamp = Date.now();
        const random = Math.random();
        return `id-${timestamp}-${random}`;
    };

    const chatContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (chatContainerRef.current)
            chatContainerRef.current.scrollTop =
                chatContainerRef.current.scrollHeight;
    }, [props.messages]);

    return (
        <div
            ref={chatContainerRef}
            className="scroll-smooth w-full h-full flex flex-col overflow-x-hidden overflow-y-scroll"
        >
            {props.messages.map((message) => {
                return (
                    <ChatStripe
                        key={generateMessageId()}
                        isFromAi={message.isFromAi}
                        content={message.content}
                    />
                );
            })}

            {props.isAnswering && <ChatStripe isFromAi={true} content="..." />}
        </div>
    );
};

export default ChatContainer;
