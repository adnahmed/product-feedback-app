"use client";

import { useState } from "react";
import { tw } from "../lib/tailwindest";
import { CategorySelection } from "./CategorySelection";
import { FeedbackAppName } from "./FeedbackAppName";
import { RoadmapSummary } from "./RoadmapSummary";
const sidebar = tw.style({
  backgroundColor: "bg-gray",
  display: "flex",
  flexDirection: "flex-col",
  justifyContent: "justify-center",
  gap: "gap-[24px]",
  "@tablet": {
    flexDirection: "tablet:flex-row",
  },
  "@desktop": {
    flexDirection: "desktop:flex-col",
  },
});
export function SidebarMenu() {
  return (
    <div className={sidebar.class}>
      <CategorySelection />
      <RoadmapSummary />
    </div>
  );
}
const sidebarContainer = tw.style({
  "@tablet": {
    display: "tablet:flex",
    alignItems: "tablet:items-center",
  },
  "@desktop": {
    display: "desktop:flex",
    flexDirection: "desktop:flex-col",
  },
});
export function FeedbackSidebar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className={sidebarContainer.class}>
      <FeedbackAppName menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <SidebarMenu />
    </div>
  );
}
