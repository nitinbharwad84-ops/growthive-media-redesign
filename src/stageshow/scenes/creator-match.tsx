"use client";

import { Stage } from "../kit/stage";
import { Window, Bar, Text } from "../kit/window";
import { Row } from "../kit/parts/Row";
import { Chip } from "../kit/parts/Chip";
import { Icon } from "../kit/parts/Icon";
import "./stills.css";

/**
 * Still 1 — Audience match. A delivery console table with one segment
 * selected. No creator names, no reach numbers: segments and formats only.
 */

type MatchState = { selected: boolean };

const MATCH_INITIAL: MatchState = { selected: true };

const SEGMENTS = [
  { id: "developer", label: "Developer tooling", sub: "Long-form walkthroughs", tone: 2 },
  { id: "research", label: "AI research", sub: "Technical deep dives", tone: 4 },
  { id: "cloud", label: "Cloud infrastructure", sub: "Platform reviews", tone: 3 },
] as const;

export function CreatorMatchScene() {
  return (
    <Stage<MatchState>
      width={400}
      height={300}
      initial={MATCH_INITIAL}
      theme="dark"
      palette="accent"
      fidelity="standard"
      accent="#8B5CF6"
      cursor={{ at: "segment-research", kind: "pointer", style: "arrow", still: true }}
      className="still-stage"
    >
      {(s) => (
        <Window
          title="Audience Match"
          chrome="native"
          lights="grey"
          className="still-window"
          body={{ className: "still-body" }}
        >
          <div className="still-head">
            <Text className="still-label">Segments in view</Text>
            <Chip className="still-chip">
              <Icon name="check" size={10} stroke={2} />
              <span>Matched</span>
            </Chip>
          </div>
          <div className="still-rows">
            {SEGMENTS.map((segment) => (
              <Row
                key={segment.id}
                className="still-row"
                selected={s.selected && segment.id === "research"}
                data-target={`segment-${segment.id}`}
                lead={<span className="still-dot" data-tone={segment.tone} aria-hidden />}
                title={<Text>{segment.label}</Text>}
                subtitle={<Text className="still-sub">{segment.sub}</Text>}
                meta={<Bar w={28} h={6} tone={4} />}
                pad={8}
              />
            ))}
          </div>
          <div className="still-filler">
            <Bar w={210} h={6} tone={2} />
            <Bar w={150} h={6} tone={1} />
          </div>
        </Window>
      )}
    </Stage>
  );
}
