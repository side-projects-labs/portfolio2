import { PiChatCircleDotsBold as ChatIcon } from "react-icons/pi";

import { PORTFOLIO_CHAT_URL } from "@/shared/config/portfolioChat";

const ChatButton = () => (
  <a
    href={PORTFOLIO_CHAT_URL}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="AI 챗봇 (새 탭에서 열림)"
    className="group fixed bottom-4 right-4 flex items-center gap-2 rounded-full border-2 border-neutral-600 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-600 to-purple-600 p-3 text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-3xl group-hover:!px-5 dark:from-blue-700 dark:to-purple-700 md:bottom-8 md:right-8 md:p-4 md:group-hover:!px-6"
    data-umami-event="Open Portfolio Chat"
  >
    <ChatIcon size={28} />
    <span className="hidden group-hover:inline text-sm font-medium">
      AI 챗봇
    </span>
  </a>
);

export default ChatButton;
