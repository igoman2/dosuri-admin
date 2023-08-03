import { GlobalNav } from "@/src/components/Layout/GlobalNav";
import Header from "@/src/components/Layout/Header/Header";
// 메인 경로의 레이아웃입니다.
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      <div className="flex flex-row">
        <div className="w-[300px] min-h-screen bg-slate-400">
          <GlobalNav />
        </div>
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
}
