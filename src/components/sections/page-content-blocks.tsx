import * as React from "react";
import { DetailBlock, FaqItem } from "@/types";
import { ChevronDown } from "lucide-react";

/** The body copy of a page: the blocks that carry the argument. */
export function DetailBlocks({ blocks }: { blocks: DetailBlock[] }) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      {blocks.map((block) => (
        <article
          key={block.title}
          className="rounded-2xl border border-border/60 bg-card/60 p-6 transition-colors duration-300 hover:border-primary/40 sm:p-7"
        >
          <h2 className="text-base font-bold leading-snug text-foreground">{block.title}</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{block.body}</p>
        </article>
      ))}
    </div>
  );
}

/** Questions that come up before a brief is written. */
export function FaqList({ items }: { items: FaqItem[] }) {
  return (
    <div className="divide-y divide-border/60 overflow-hidden rounded-2xl border border-border/60 bg-card/60">
      {items.map((item) => (
        <details key={item.question} className="group px-6 py-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-foreground marker:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
            {item.question}
            <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-180" />
          </summary>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
