import { ArrowLeftCircleIcon } from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import { DashboardContentSection } from "./sections/DashboardContentSection/DashboardContentSection";
import { HeaderSection } from "./sections/HeaderSection";

const navigationIcons = [
  { src: "/icon-7.svg", alt: "Icon 7" },
  { src: "/icon-6.svg", alt: "Icon 6" },
  { src: "/icon-11.svg", alt: "Icon 11" },
  { src: "/icon-5.svg", alt: "Icon 5" },
  { src: "/icon-2.svg", alt: "Icon 2" },
  { src: "/icon-10.svg", alt: "Icon 10" },
  { src: "/icon-12.svg", alt: "Icon 12" },
  { src: "/icon-13.svg", alt: "Icon 13" },
  { src: "/icon-1.svg", alt: "Icon 1" },
];

const bottomIcons = [
  { src: "/sidebar-menu-1.svg", alt: "Sidebar menu 1" },
  { src: "/sidebar-menu.svg", alt: "Sidebar menu" },
];

export const Overview = (): JSX.Element => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen items-start relative bg-[#f7f7f7]">
      <aside className="hidden lg:flex flex-col w-[92px] items-center justify-center gap-[26px] p-5 relative self-stretch bg-white">
        <div className="relative self-stretch w-full h-[52px]">
          <div className="relative top-[calc(50.00%_-_28px)] left-[calc(50.00%_-_28px)] w-14 h-14 bg-[#ff5b00] rounded-xl">
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
        </div>

        <nav className="flex-col items-center gap-[26px] pt-4 pb-0 px-0 flex-1 grow flex relative self-stretch w-full">
          <div className="flex flex-col items-start justify-center gap-3 p-1 relative self-stretch w-full flex-[0_0_auto] bg-[#f7f7f7] rounded-[20px]">
            {navigationIcons.map((icon, index) => (
              <Button
                key={index}
                variant="ghost"
                size="icon"
                className="items-center gap-2 flex-[0_0_auto] flex relative self-stretch w-full h-11 p-0 hover:bg-transparent"
              >
                <img
                  className="relative w-11 h-11"
                  alt={icon.alt}
                  src={icon.src}
                />
              </Button>
            ))}
          </div>

          <img
            className="relative self-stretch w-full h-px ml-[-0.50px] mr-[-0.50px] object-cover"
            alt="Divider"
            src="/divider-1.svg"
          />

          <div className="flex flex-col items-start justify-center gap-3 p-1 relative self-stretch w-full flex-[0_0_auto] bg-[#f7f7f7] rounded-[20px]">
            {bottomIcons.map((icon, index) => (
              <Button
                key={index}
                variant="ghost"
                size="icon"
                className="items-center gap-2 flex-[0_0_auto] flex relative self-stretch w-full h-11 p-0 hover:bg-transparent"
              >
                <img
                  className="relative w-11 h-11"
                  alt={icon.alt}
                  src={icon.src}
                />
              </Button>
            ))}
          </div>
        </nav>

        <div className="flex flex-col items-center justify-center gap-3 relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex-col items-start justify-center gap-3 p-1 flex-[0_0_auto] bg-red-500 rounded-[99px] flex relative self-stretch w-full">
            <Button
              variant="ghost"
              size="icon"
              className="items-center gap-2 flex-[0_0_auto] flex relative self-stretch w-full h-11 p-0 hover:bg-transparent"
            >
              <div className="bg-red-500 rounded-[999px] overflow-hidden relative w-11 h-11 flex items-center justify-center">
                <ArrowLeftCircleIcon className="w-6 h-6 text-white" />
              </div>
            </Button>
          </div>
        </div>
      </aside>

      <main className="flex flex-col w-full lg:flex-1 items-start relative self-stretch">
        <HeaderSection />
        <DashboardContentSection />
      </main>
    </div>
  );
};
