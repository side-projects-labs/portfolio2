const DEFAULT_PORTFOLIO_CHAT_URL = "https://portfolio-chat-pi.vercel.app";

// 브라우저에 노출되는 공개 주소다. 토큰이나 키를 넣지 않는다.
export const PORTFOLIO_CHAT_URL = (
  process.env.NEXT_PUBLIC_PORTFOLIO_CHAT_URL?.trim() ||
  DEFAULT_PORTFOLIO_CHAT_URL
).replace(/\/+$/, "");
