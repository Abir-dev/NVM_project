import { MenuIcon } from "lucide-react";
import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../../components/ui/avatar";
import { Separator } from "../../../../components/ui/separator";

export const HeaderSection = (): JSX.Element => {
  return (
    <header className="flex items-center justify-end gap-4 md:gap-12 lg:gap-[166px] px-6 py-4 w-full bg-white">
      <div className="inline-flex items-center gap-4">
        <MenuIcon className="w-6 h-6 text-[#121212]" />

        <Separator orientation="vertical" className="h-[33px]" />

        <div className="inline-flex items-center gap-3">
          <Avatar className="w-12 h-12">
            <AvatarImage src="/avatar---image-40.png" alt="Hanna Calzoni" />
            <AvatarFallback>HC</AvatarFallback>
          </Avatar>

          <div className="flex flex-col w-full max-w-[175px] items-start justify-center gap-1 pr-3">
            <div className="w-fit text-[length:var(--text-text-3-medium-font-size)] leading-[var(--text-text-3-medium-line-height)] whitespace-nowrap font-text-text-3-medium font-[number:var(--text-text-3-medium-font-weight)] text-[#121212] tracking-[var(--text-text-3-medium-letter-spacing)] [font-style:var(--text-text-3-medium-font-style)]">
              Hanna Calzoni
            </div>

            <div className="self-stretch font-text-text-4-reguler font-[number:var(--text-text-4-reguler-font-weight)] text-[#888888] text-[length:var(--text-text-4-reguler-font-size)] tracking-[var(--text-text-4-reguler-letter-spacing)] leading-[var(--text-text-4-reguler-line-height)] [font-style:var(--text-text-4-reguler-font-style)]">
              hannacalzoni@gmail.com
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
