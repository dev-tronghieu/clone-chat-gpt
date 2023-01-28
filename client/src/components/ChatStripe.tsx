import botSvg from "../assets/bot.svg";
import userSvg from "../assets/user.svg";

interface ChatStripeProps {
    content: string;
    isFromAi: boolean;
}

const ChatStripe = ({ content, isFromAi }: ChatStripeProps) => {
    return (
        <div className="w-full p-4">
            <div className="flex gap-4">
                <img
                    className="w-8 h-8 object-contain"
                    src={isFromAi ? botSvg : userSvg}
                    alt={isFromAi ? "Bot" : "User"}
                />
                <span
                    className={`whitespace-pre-wrap text-xl ${
                        isFromAi ? "text-orange-200" : "text-white"
                    }`}
                >
                    {content}
                </span>
            </div>
        </div>
    );
};

export default ChatStripe;
