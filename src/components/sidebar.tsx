import React, { useState } from "react";
import { ChevronRightIcon } from "lucide-react";
import { Button } from "./ui/button";

interface SidebarItem {
  icon: string;
  label: string;
  alt: string;
}

interface SidebarProps {
  navigationItems: SidebarItem[];
  bottomItems: SidebarItem[];
  onExpandedChange?: (isExpanded: boolean) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  navigationItems,
  bottomItems,
  onExpandedChange,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    const newState = !isExpanded;
    setIsExpanded(newState);
    onExpandedChange?.(newState);
  };

  return (
    <aside
      className={`fixed left-0 top-0 h-screen flex flex-col items-start gap-[25px] p-4 bg-white transition-all duration-300 z-50 ${
        isExpanded ? "w-64 rounded-r-3xl shadow-lg" : "w-[92px]"
      }`}
    >
      <div className="relative self-stretch w-full h-[52px] flex items-center">
        <button
          onClick={handleToggle}
          className="flex items-center gap-2 p-1 hover:bg-[#f7f7f7] rounded-lg transition-colors"
        >
          <div className="relative flex-shrink-0 w-14 h-14 bg-[#ff5b00] rounded-xl">
            <img
              className="absolute w-full h-full top-0 -left-1"
              alt="Effects shadow"
              src="/effects---shadow-3.svg"
            />
            <img
              className="absolute w-full h-full top-0 left-0"
              alt="Color gradient"
              src="/color---gradient---gradient-mix.svg"
            />
          </div>
          {isExpanded && (
            <>
              <div className="flex flex-col items-start gap-0.5">
                <span className="font-heading-h6-semibold text-[#121212]">
                  needleworks
                </span>
                <span className="text-xs text-[#888888]">MANAGEMENT</span>
              </div>
              <ChevronRightIcon className="w-4 h-4 text-[#888888] ml-auto flex-shrink-0" />
            </>
          )}
        </button>
      </div>

      <nav className="flex-col items-start gap-1 pt-4 pb-0 px-0 flex-1 grow flex relative self-stretch w-full">
        <div className="flex flex-col items-start justify-center gap-2 p-2 relative self-stretch w-full flex-[0_0_auto] bg-[#f7f7f7] rounded-[20px]">
          {navigationItems.map((item, index) => (
            <Button
              key={index}
              variant="ghost"
              className={`items-center gap-3 flex-[0_0_auto] flex relative self-stretch w-full h-10 p-2 hover:bg-white hover:bg-opacity-50 rounded-lg transition-colors justify-start ${
                index === 0 ? "bg-white bg-opacity-30" : ""
              }`}
            >
              <img
                className={`relative flex-shrink-0 transition-all ${
                  isExpanded ? "w-6 h-6" : "w-8 h-8"
                }`}
                alt={item.alt}
                src={item.icon}
              />
              {isExpanded && (
                <span className="text-sm font-medium text-[#121212] truncate">
                  {item.label}
                </span>
              )}
            </Button>
          ))}
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#e7e7e7] to-transparent my-2" />

        <div className="flex flex-col items-start justify-center gap-2 p-2 relative self-stretch w-full flex-[0_0_auto] bg-[#f7f7f7] rounded-[20px]">
          {bottomItems.map((item, index) => (
            <Button
              key={index}
              variant="ghost"
              className="items-center gap-3 flex-[0_0_auto] flex relative self-stretch w-full h-10 p-2 hover:bg-white hover:bg-opacity-50 rounded-lg transition-colors justify-start"
            >
              <img
                className={`relative flex-shrink-0 transition-all ${
                  isExpanded ? "w-6 h-6" : "w-8 h-8"
                }`}
                alt={item.alt}
                src={item.icon}
              />
              {isExpanded && (
                <span className="text-sm font-medium text-[#121212] truncate">
                  {item.label}
                </span>
              )}
            </Button>
          ))}
        </div>
      </nav>

      <div className="flex flex-col items-center justify-center gap-3 relative self-stretch w-full flex-[0_0_auto]">
        <button
          className={`flex items-center gap-3 flex-[0_0_auto] flex relative self-stretch w-full h-10 p-2 bg-gradient-to-r from-[#ff6b6b] to-[#ff5252] hover:from-[#ff5555] hover:to-[#ff4141] text-white rounded-full transition-colors justify-start ${
            isExpanded ? "px-3" : "justify-center px-0"
          }`}
        >
          <span className="text-lg flex-shrink-0">⎋</span>
          {isExpanded && (
            <span className="text-sm font-medium truncate">Logout</span>
          )}
        </button>
      </div>
    </aside>
  );
};
