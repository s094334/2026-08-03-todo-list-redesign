import { useNavigate } from "react-router";
import { FaceIcon } from "../../common/icons";

function Sidebar() {
  const navigate = useNavigate();
  const nickName = localStorage.getItem("nickname");

  const handleLogOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("nickname");
    navigate("/");
  };

  return (
    <aside className="flex flex-col gap-5.5 border-b border-line px-stack py-gutter lg:w-[236px] lg:shrink-0 lg:border-r lg:border-b-0">
      <div>
        <div className="lg:flex text-micro tracking-[0.14em] uppercase opacity-50">工作區</div>
        <div className="hidden lg:flex font-heading mt-label text-xl font-semibold">今日待辦</div>
      </div>

      <div className="mt-auto flex flex-col gap-2.5">
        <div className="flex items-center gap-2.5 lg:border-t border-line pt-3.5 text-accent-600">
          <FaceIcon />
          <div className="min-w-0 flex-1 truncate text-sm text-ink">{nickName}</div>
        </div>
        <button
          type="button"
          onClick={handleLogOut}
          className="font-heading h-10 justify-start rounded-card border border-line px-row text-left text-sm font-semibold tracking-[0.02em] hover:border-accent-600 hover:bg-accent-100 active:bg-accent-200"
        >
          登出
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
