import { cn } from "@/lib/utils"
import Link from "next/link"
import { BoxReveal } from "../reveal-animations"
import { ReactNode } from "react"

export const SectionHeader = ({
  id,
  title,
  desc,
  className,
  sticky = false,
}: {
  id: string;
  title: string | ReactNode;
  desc?: string;
  className?: string;
  sticky?: boolean;
}) => {
  return (
    <div
      className={cn(
        sticky ? "top-[70px] sticky mb-96" : "relative mb-10 sm:mb-14",
        className
      )}
    >
      <Link href={`#${id}`}>
        <BoxReveal width="100%">
          <h2
            className={cn(
              "text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-center font-bold tracking-tight py-1",
              "text-foreground font-display"
            )}
          >
            {title}
          </h2>
        </BoxReveal>
      </Link>
      {desc && (
        <p className="mx-auto mt-3 line-clamp-4 max-w-3xl font-normal text-sm sm:text-base text-center text-muted-foreground px-2">
          {desc}
        </p>
      )}
    </div>
  );
};
