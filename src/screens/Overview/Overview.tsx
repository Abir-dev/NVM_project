import React, { useState } from "react";

import { DashboardContentSection } from "./sections/DashboardContentSection/DashboardContentSection";
import { HeaderSection } from "./sections/HeaderSection";
import { Sidebar } from "../../components/sidebar";

const navigationItems = [
  { icon: "/icon-reverse.svg", label: "Dashboard", alt: "Dashboard" },
  { icon: "/icon-6.svg", label: "Clients", alt: "Clients" },
  { icon: "/icon-11.svg", label: "Chat", alt: "Chat" },
  { icon: "/icon-5.svg", label: "Bookings", alt: "Bookings" },
  { icon: "/icon-2.svg", label: "Booking Tools", alt: "Booking Tools" },
  { icon: "/icon-14.svg", label: "Calendar", alt: "Calendar" },
  { icon: "/icon-12.svg", label: "My Profile", alt: "My Profile" },
  // { icon: "/icon-13.svg", label: "Settings", alt: "Settings" },
  // { icon: "/icon-1.svg", label: "Help & Support", alt: "Help & Support" },
];

const bottomItems = [
  { icon: "/sidebar-menu-1.svg", label: "Settings", alt: "Settings" },
  { icon: "/sidebar-menu.svg", label: "Help", alt: "Help" },
];

export const Overview = (): JSX.Element => {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#f7f7f7] relative overflow-x-hidden">
      <Sidebar
        navigationItems={navigationItems}
        bottomItems={bottomItems}
        onExpandedChange={setIsSidebarExpanded}
      />

      {isSidebarExpanded && (
        <div className="fixed inset-0 bg-black/20 z-40 transition-opacity duration-300" />
      )}

      <main
        className={`flex flex-col flex-1 items-start min-w-0 w-full relative ml-[92px] transition-all duration-300 ${
          isSidebarExpanded ? "opacity-80" : "opacity-100"
        }`}
      >
        <HeaderSection />
        <DashboardContentSection />
      </main>
    </div>
  );
};
