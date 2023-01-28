import botSvg from "../assets/bot.svg";
import userSvg from "../assets/user.svg";

interface ChatStripeProps {
    content: string;
    isFromAi: boolean;
}

const ChatStripe = ({ content, isFromAi }: ChatStripeProps) => {
    return (
        <div className={`w-full p-4 ${isFromAi ? "bg-secondary" : "bg-primary"}`}>
            <div className="whitespace-pre-wrap text-lg text-gray-200 flex gap-4">
                <img
                    className="w-[32px] h-[32px] object-contain"
                    src={isFromAi ? botSvg : userSvg}
                    alt={isFromAi ? "Bot" : "User"}
                />
                {content}
            </div>
        </div>
    );
};

export default ChatStripe;
