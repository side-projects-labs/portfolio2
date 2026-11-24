import { fireEvent, render, screen } from "@testing-library/react";

import { CommandPaletteProvider } from "@/features/cmdpallete/model/CommandPaletteContext";
import CommandPalette from "@/features/cmdpallete/ui/CommandPalette";

class ResizeObserverMock {
  observe() {}
  unobserve() {}
  disconnect() {}
}

global.ResizeObserver = ResizeObserverMock;

jest.mock("@/features/cmdpallete/ui/QueryNotFound", () => {
  const QueryNotFound = () => <div>결과 없음</div>;
  return QueryNotFound;
});
jest.mock("next/router", () => ({
  useRouter: () => ({ pathname: "/", push: jest.fn() }),
}));
jest.mock("next-themes", () => ({
  useTheme: () => ({ resolvedTheme: "dark", setTheme: jest.fn() }),
}));
jest.mock("@/shared/hooks/useIsMobile", () => () => false);

describe("CommandPalette", () => {
  it("Cmd+K를 누르면 검색 입력을 보여 준다", () => {
    render(
      <CommandPaletteProvider>
        <CommandPalette />
      </CommandPaletteProvider>,
    );

    fireEvent.keyDown(window, { key: "k", metaKey: true });

    expect(
      screen.getByPlaceholderText("Search anything..."),
    ).toBeInTheDocument();
  });

  it("일치하는 메뉴가 없는 검색어를 입력하면 결과 없음 안내를 보여 준다", async () => {
    render(
      <CommandPaletteProvider>
        <CommandPalette />
      </CommandPaletteProvider>,
    );

    fireEvent.keyDown(window, { key: "k", metaKey: true });
    fireEvent.change(screen.getByPlaceholderText("Search anything..."), {
      target: { value: "zzzz-no-match-zzzz" },
    });

    expect(await screen.findByText("결과 없음")).toBeInTheDocument();
  });

  it("검색어가 없으면 결과 없음 안내를 보여 주지 않는다", () => {
    render(
      <CommandPaletteProvider>
        <CommandPalette />
      </CommandPaletteProvider>,
    );

    fireEvent.keyDown(window, { key: "k", metaKey: true });

    expect(screen.queryByText("결과 없음")).toBeNull();
  });
});
