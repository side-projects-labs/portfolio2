import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import QueryNotFound from "@/features/cmdpallete/ui/QueryNotFound";

describe("QueryNotFound", () => {
  it("검색어를 보여 준다", () => {
    render(<QueryNotFound query="zustand" onFindGoogle={jest.fn()} />);

    expect(screen.getByText("`zustand`")).toBeInTheDocument();
  });

  it("AI 질문 버튼과 AI 안내 문구를 보여 주지 않는다", () => {
    render(<QueryNotFound query="zustand" onFindGoogle={jest.fn()} />);

    expect(screen.queryByText(/Ask AI Assistant/)).toBeNull();
    expect(screen.queryByText(/AI Assistant/)).toBeNull();
  });

  it("Find in Google을 누르면 콜백을 호출한다", async () => {
    const user = userEvent.setup();
    const onFindGoogle = jest.fn();
    render(<QueryNotFound query="zustand" onFindGoogle={onFindGoogle} />);

    await user.click(screen.getByRole("button", { name: "Find in Google" }));

    expect(onFindGoogle).toHaveBeenCalledTimes(1);
  });
});
