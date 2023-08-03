"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

import clsx from "clsx";
import { useState } from "react";

export type Item = {
  name: string;
  slug: string;
  description?: string;
};

export const demos: { name: string; items: Item[] }[] = [
  {
    name: "Layouts",
    items: [
      {
        name: "Nested Layouts",
        slug: "layouts",
        description: "Create UI that is shared across routes",
      },
      {
        name: "Grouped Layouts",
        slug: "route-groups",
        description: "Organize routes without affecting URL paths",
      },
    ],
  },
  {
    name: "File Conventions",
    items: [
      {
        name: "Loading",
        slug: "loading",
        description:
          "Create meaningful Loading UI for specific parts of an app",
      },
      {
        name: "Error",
        slug: "error-handling",
        description: "Create Error UI for specific parts of an app",
      },
      {
        name: "Not Found",
        slug: "not-found",
        description: "Create Not Found UI for specific parts of an app",
      },
    ],
  },
  {
    name: "Data Fetching",
    items: [
      {
        name: "Streaming with Suspense",
        slug: "streaming",
        description:
          "Streaming data fetching from the server with React Suspense",
      },
      {
        name: "Static Data",
        slug: "ssg",
        description: "Generate static pages",
      },
      {
        name: "Dynamic Data",
        slug: "ssr",
        description: "Server-render pages",
      },
      {
        name: "Incremental Static Regeneration",
        slug: "isr",
        description: "Get the best of both worlds between static & dynamic",
      },
    ],
  },
  {
    name: "Components",
    items: [
      {
        name: "Client Context",
        slug: "context",
        description:
          "Pass context between Client Components that cross Server/Client Component boundary",
      },
    ],
  },
  {
    name: "Misc",
    items: [
      {
        name: "Client Component Hooks",
        slug: "hooks",
        description: "Preview the routing hooks available in Client Components",
      },
      {
        name: "CSS and CSS-in-JS",
        slug: "styling",
        description: "Preview the supported styling solutions",
      },
      {
        name: "Code Snippets",
        slug: "snippets",
        description: "A collection of useful App Router code snippets",
      },
    ],
  },
];

export function GlobalNav() {
  return (
    <div className="flex w-full flex-col border-b border-gray-800 bg-black lg:bottom-0 lg:z-auto lg:w-72 lg:border-b-0 lg:border-r lg:border-gray-800">
      <nav className="space-y-6 px-2 py-5">
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
          setIsOpen((prev) => !prev);
          e.stopPropagation;
        }}
        className="mb-2 cursor-pointer px-3 text-xs font-semibold uppercase tracking-wider text-gray-400/80"
      >
        <div>{section.name}</div>
      </div>
      {isOpen && (
        <div className="space-y-1">
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
        "block rounded-md px-3 py-2 text-sm font-medium hover:text-gray-300",
        {
          "text-gray-400 hover:bg-gray-800": !isActive,
          "text-white": isActive,
        }
      )}
    >
      {item.name}
    </Link>
  );
}
