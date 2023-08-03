// components/Layout/Header/Header.tsx
"use client";
import styled from "@emotion/styled";
import Icon from "@/src/util/Icon";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-between items-center h-[64px] bg-main-purple w-full px-5">
      <div>
        <Link href="/" className="flex flex-rol items-center gap-5">
          <Icon name={"DsrLogo"} height={"46px"} width={"94px"} />
          <span className="text-white text-lg">병원 관리자</span>
        </Link>
      </div>
      <div className="flex flex-row gap-7">
        <span className="text-white text-base">더바른정형외과의원</span>
        <span className="text-white text-base">포인트 99,999,999 &gt;</span>
        <Icon name={"NotificationLogo"} height={"24px"} width={"24px"} />
        <span className="text-white text-base">로그아웃</span>
      </div>
    </header>
  );
};

export default Header;
