import { useRef } from "react";
import sendSvg from "../assets/send.svg";

interface ChatInputProps {
    onSubmit: (message: string) => void;
}

const ChatInput = ({ onSubmit }: ChatInputProps) => {
    const textArea = useRef<HTMLTextAreaElement>(null);

    const handleSendMessage = () => {
        if (textArea.current === null) return;
        const message = textArea.current.value.trim();
        if (message !== "") onSubmit(message);
        textArea.current.value = "";
        textArea.current.focus();
    };

    return (
        <form
            className="bg-secondary max-w-7xl w-full p-2 xl:px-0 flex gap-2"
            onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
            }}
            onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSendMessage();
                }
            }}
        >
            <textarea
                ref={textArea}
                placeholder="Ask something..."
                rows={1}
                cols={1}
                className="w-full p-2 bg-transparent border-none outline-none  text-white text-lg scrollbar-hide"
            ></textarea>

            <button className="outline-none" type="submit">
                <img className="w-8 h-8 mx-2" src={sendSvg} alt="Send Icon" />
            </button>
        </form>
    );
};

export default ChatInput;
