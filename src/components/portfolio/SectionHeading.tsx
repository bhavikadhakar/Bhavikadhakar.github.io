import type { ReactNode } from "react";

import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

type Props = {
  index: string;
  eyebrow: string;
  children: ReactNode;
  /** Optional small note shown under the rule, right aligned on desktop. */
  note?: string;
  className?: string;
};

/** Editorial section header: 01 / ABOUT + oversized display title + hairline rule. */
export function SectionHeading({ index, eyebrow, children, note, className }: Props) {
  return (
    <header className={cn("relative", className)}>
      <Reveal className="border-border/70 flex items-baseline justify-between border-t pt-5">
        <span className="label text-muted-foreground text-[10px]">
          {index} / {eyebrow}
        </span>
        {note ? (
          <span className="label text-muted-foreground hidden text-[10px] md:inline">{note}</span>
        ) : null}
      </Reveal>

      <Reveal as="h2" delay={90} className="display mt-10 text-[15vw] leading-[0.92] md:mt-14 md:text-[7.5vw]">
        {children}
      </Reveal>
    </header>
  );
}
