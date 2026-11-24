import { render, screen } from "@testing-library/react";

import ChatButton from "@/features/chat/ui/ChatButton";
import { PORTFOLIO_CHAT_URL } from "@/shared/config/portfolioChat";

describe("ChatButton", () => {
  it("AI 챗봇 링크는 portfolio-chat 주소로 연결된다", () => {
    render(<ChatButton />);

    expect(screen.getByRole("link", { name: /AI 챗봇/ })).toHaveAttribute(
      "href",
      PORTFOLIO_CHAT_URL,
    );
  });

  it("새 탭에서 열고 opener를 넘기지 않는다", () => {
    render(<ChatButton />);

    const link = screen.getByRole("link", { name: /AI 챗봇/ });

    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", expect.stringContaining("noopener"));
    expect(link).toHaveAttribute("rel", expect.stringContaining("noreferrer"));
  });

  it("글자가 숨겨져 있어도 접근 가능한 이름을 aria-label로 제공한다", () => {
    render(<ChatButton />);

    expect(screen.getByRole("link", { name: /AI 챗봇/ })).toHaveAttribute(
      "aria-label",
      "AI 챗봇 (새 탭에서 열림)",
    );
  });

  it("portfolio2 안에 채팅 창을 열지 않는다", () => {
    render(<ChatButton />);

    expect(
      screen.queryByPlaceholderText("기술적인 질문을 입력하세요..."),
    ).toBeNull();
  });
});
