"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

import clsx from "clsx";
import { useState } from "react";
import {MdKeyboardArrowDown, MdKeyboardArrowUp} from 'react-icons/md'

export type Item = {
  name: string;
  slug: string;
  description?: string;
};

export const demos: { name: string; items: Item[] }[] = [
  {
    name: "홈",
    items: [
    ],
  },
  {
    name: "병원 관리",
    items: [
      {
        name: "병원 정보",
        slug: "병원 정보"
      },
      {
        name: "의사 정보",
        slug: "의사 정보"
      },
      {
        name: "치료사 정보",
        slug: "치료사 정보"
      },
      {
        name: "연락처 정보",
        slug: "연락처 정보"
      },
    ],
  },
  {
    name: "포인트 내역",
    items: [
    ],
  },
  {
    name: "이벤트 관리",
    items: [
      {
        name: "정보",
        slug: "정보",
      },
      {
        name: "승인 요청",
        slug: "승인 요청",
      },
    ],
  },
  {
    name: "상담/예약 관리",
    items: [
    ],
  },
];

export function GlobalNav() {
  return (
    <div className="flex w-full h-full flex-col border-gray-800 bg-white lg:bottom-0 lg:z-auto lg:w-72 lg:border-gray-800">
      <nav className="space-y-6 py-5">
        {demos.map((section) => (
          <GlobalNavSection key={section.name} section={section} />
        ))}
      </nav>
    </div>
  );
}

function GlobalNavSection({
  section,
}: {
  section: { name: string; items: Item[] };
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div key={section.name}>
      <div
        onClick={(e) => {
          if(section.items.length != 0){
            setIsOpen((prev) => !prev);
            e.stopPropagation;
          }
        }}
        className="mb-2 cursor-pointer px-3 text-xs font-semibold uppercase tracking-wider text-black-400/80"
      >
        {section.items.length == 0 && <div>{section.name}</div>}
        {section.items.length != 0 &&<div>{section.name} {isOpen ? <MdKeyboardArrowUp size={18} className="float-right inline-flex" /> : <MdKeyboardArrowDown size={18} className="float-right inline-flex"/>} </div>}
      </div>
      {isOpen && (
        <div className="space-y-1 py-1">
          {section.items.map((item) => (
            <GlobalNavItem key={item.slug} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}

function GlobalNavItem({ item }: { item: Item }) {
  const segment = useSelectedLayoutSegment();
  const isActive = item.slug === segment;

  return (
    <Link
      href={"/"}
      className={clsx(
        "block rounded-md px-5 py-2 text-xs font-semibold hover:text-grey-300",
        {
          "text-black-400 hover:text-white-400 hover:bg-sky-200": !isActive,
          "text-white": isActive,
        }
      )}
    >
      {item.name}
    </Link>
  );
}
