import Header from "@/src/components/Layout/Header/Header";
// 메인 경로의 레이아웃입니다.
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
