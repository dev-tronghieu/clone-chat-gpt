import { useRef } from "react";
import sendSvg from "../assets/send.svg";

interface ChatInputProps {
    onSubmit: (message: string) => void;
}

const ChatInput = ({ onSubmit }: ChatInputProps) => {
    const textArea = useRef<HTMLTextAreaElement>(null);

    const submitMessage = () => {
        if (textArea.current === null) return;
        const message = textArea.current.value.trim();
        if (message !== "") onSubmit(message);
        textArea.current.value = "";
        textArea.current.focus();
    };

    return (
        <form
            className="max-w-7xl w-full px-2 xl:px-0 py-4 flex gap-2"
            onSubmit={(e) => {
                e.preventDefault();
                submitMessage();
            }}
            onKeyDown={(e) => {
                {
                    e.key === "Enter" && !e.shiftKey && submitMessage();
                }
            }}
        >
            <textarea
                ref={textArea}
                rows={1}
                cols={1}
                placeholder="Ask something..."
                className="w-full p-2 bg-transparent border-none outline-none bg-tertiary text-gray-200"
            ></textarea>

            <button className="outline-none" type="submit">
                <img className="w-8 h-8" src={sendSvg} alt="Send Icon" />
            </button>
        </form>
    );
};

export default ChatInput;
