// components/Layout/Header/Header.tsx
"use client";
import React,{useState} from 'react';
import '@/src/components/Layout/SideBar/style.css'

const SideBar = () => {

  return (
    <ul className={"show-menu"}>
        <li className={'parent-menu text-base'}> 홈 </li>
        <li className={'parent-menu text-base'}> 병원 관리 </li>
        <li className={'parent-menu text-base'}> 포인트 내역 </li>
        <li className={'parent-menu text-base'}> 상담/예약 관리 </li>
    </ul>
  );
};

export default SideBar;