import BlueprintMarks from "./BlueprintMarks";
import { ClipboardIcon } from "./icons";

/** 登入／註冊頁左側的介紹面板 */
function AuthHero() {
  return (
    <div className="relative flex flex-col border-b border-line px-6 py-10 lg:flex-1 lg:border-r lg:border-b-0 lg:px-page lg:py-11">
      <div className="text-label tracking-[0.14em] uppercase opacity-55">
        早安 — 今天想完成什麼？
      </div>
      <h1 className="font-heading mt-stack text-hero-sm leading-[1.14] font-semibold tracking-[-0.01em] lg:text-hero lg:whitespace-nowrap">
        Todo list：
        <br />
        夢想與逃避現實的交界處
      </h1>

      <div className="relative mt-section rounded-card grid flex-1 place-items-center border border-line p-figure hidden lg:flex lg:min-h-[260px] ">
        <BlueprintMarks />
        <div className="flex flex-col items-center gap-4 text-accent-600">
          <ClipboardIcon />
          <p className="text-center text-sm leading-[1.8] text-accent-700 text-pretty lg:whitespace-nowrap">
            每一個新增的項目，都是你對「更好的自己」許下的承諾；
            <br />
            每一個沒被劃掉的項目，都是你對「今天的自己」的縱容。
          </p>
        </div>
      </div>
    </div>
  );
}

export default AuthHero;
