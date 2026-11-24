describe("PORTFOLIO_CHAT_URL", () => {
  const original = process.env.NEXT_PUBLIC_PORTFOLIO_CHAT_URL;

  afterEach(() => {
    if (original === undefined) {
      delete process.env.NEXT_PUBLIC_PORTFOLIO_CHAT_URL;
    } else {
      process.env.NEXT_PUBLIC_PORTFOLIO_CHAT_URL = original;
    }
    jest.resetModules();
  });

  const load = () => {
    let url = "";
    jest.isolateModules(() => {
      url = require("@/shared/config/portfolioChat").PORTFOLIO_CHAT_URL;
    });
    return url;
  };

  it("환경 변수가 없으면 portfolio-chat 배포 주소를 쓴다", () => {
    delete process.env.NEXT_PUBLIC_PORTFOLIO_CHAT_URL;

    expect(load()).toBe("https://portfolio-chat-pi.vercel.app");
  });

  it("환경 변수가 있으면 그 주소를 쓰고 끝 슬래시를 정리한다", () => {
    process.env.NEXT_PUBLIC_PORTFOLIO_CHAT_URL = "https://chat.example.test/";

    expect(load()).toBe("https://chat.example.test");
  });

  it("공백뿐인 환경 변수는 무시하고 기본 주소를 쓴다", () => {
    process.env.NEXT_PUBLIC_PORTFOLIO_CHAT_URL = "   ";

    expect(load()).toBe("https://portfolio-chat-pi.vercel.app");
  });
});
