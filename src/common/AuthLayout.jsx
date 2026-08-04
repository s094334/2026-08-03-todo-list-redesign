import AuthHero from "./AuthHero";
import BlueprintMarks from "./BlueprintMarks";

/**
 * 登入／註冊共用的左右分割版面。
 * children 放進右側的線框卡片內，卡片本身已是 flex-col gap-4。
 */
function AuthLayout({ title, subtitle, children }) {
  return (
    <div className="grid min-h-screen lg:grid-cols-[1.05fr_1fr]">
      <AuthHero />

      <div className="grid place-items-center px-6 py-10 lg:p-11">
        <div className="relative flex w-[min(400px,100%)] flex-col gap-4 rounded-card border border-line p-8">
          <BlueprintMarks />
          <div>
            <h2 className="font-heading text-h2 leading-[1.1] font-semibold">{title}</h2>
            {subtitle && <p className="mt-1 text-[13px] opacity-60">{subtitle}</p>}
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;
