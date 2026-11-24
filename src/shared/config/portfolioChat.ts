const DEFAULT_PORTFOLIO_CHAT_URL = "https://portfolio-chat-pi.vercel.app";

// href에 그대로 들어가므로 http(s)가 아닌 값은 쓰지 않는다.
const toHttpUrl = (value: string | undefined): string | null => {
  const trimmed = value?.trim();
  if (!trimmed) return null;

  try {
    const { protocol } = new URL(trimmed);
    return protocol === "http:" || protocol === "https:" ? trimmed : null;
  } catch {
    return null;
  }
};

// 브라우저에 노출되는 공개 주소다. 토큰이나 키를 넣지 않는다.
export const PORTFOLIO_CHAT_URL = (
  toHttpUrl(process.env.NEXT_PUBLIC_PORTFOLIO_CHAT_URL) ??
  DEFAULT_PORTFOLIO_CHAT_URL
).replace(/\/+$/, "");
