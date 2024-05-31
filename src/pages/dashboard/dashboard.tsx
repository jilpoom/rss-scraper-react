import News from "@/layouts/contents/news.tsx";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui";

const Dashboard = () => {
  return (
    <div className="h-2/3 flex justify-center items-center">
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel defaultSize={5}>SideBar</ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel>
          <News />
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};

export default Dashboard;
