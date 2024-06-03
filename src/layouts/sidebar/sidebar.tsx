import { Button } from "@/components/ui";
import { Link, Outlet } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="flex flex-row">
      <div className="h-screen w-[10%] border-r-2">
        <Link to="/dashboard">
          <Button
            variant="ghost"
            className="h-[30px] w-full font-semibold text-sm"
          >
            오늘의 뉴스
          </Button>
        </Link>
        <Link to="/dashboard/subscribe">
          <Button
            variant="ghost"
            className="h-[30px] w-full font-semibold text-sm"
          >
            구독하기
          </Button>
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Sidebar;
