"use client";

import { Stage } from "../kit/stage";
import { Window, Bar, Text } from "../kit/window";
import { Row } from "../kit/parts/Row";
import { Chip } from "../kit/parts/Chip";
import { Icon } from "../kit/parts/Icon";
import "./stills.css";

/**
 * Still 3 — Brief review. The campaign brief with one line marked up, the way
 * a strategist would read it before the formats are chosen.
 */

type BriefState = { annotated: boolean };

const BRIEF_INITIAL: BriefState = { annotated: true };

const BRIEF_LINES = [
  { id: "goal", label: "Objective", text: "Launch the code assistant", tone: 4 },
  { id: "audience", label: "Audience", text: "Working developer teams", tone: 3 },
  { id: "window", label: "Launch window", text: "Q4, after the private beta", tone: 2 },
] as const;

export function BriefReviewScene() {
  return (
    <Stage<BriefState>
      width={720}
      height={340}
      initial={BRIEF_INITIAL}
      theme="dark"
      palette="accent"
      fidelity="standard"
      accent="#8B5CF6"
      cursor={{ at: "goal", kind: "pointer", style: "arrow", still: true }}
      className="still-stage"
    >
      {(s) => (
        <Window
          title="Campaign Brief"
          chrome="native"
          lights="grey"
          className="still-window"
          body={{ className: "still-body" }}
        >
          <div className="brief-grid">
            <div className="brief-main">
              <Text className="still-label">Brief · step 01</Text>

              <div className="brief-lines">
                {BRIEF_LINES.map((line) => (
                  <Row
                    key={line.id}
                    className="brief-row"
                    data-target={line.id}
                    selected={s.annotated && line.id === "goal"}
                    lead={<span className="brief-tick" aria-hidden />}
                    title={<Text>{line.text}</Text>}
                    subtitle={<Text className="brief-label">{line.label}</Text>}
                    pad={8}
                  />
                ))}
              </div>

              <div className="still-filler">
                <Bar w={240} h={6} tone={2} />
                <Bar w={170} h={6} tone={1} />
                <Bar w={110} h={6} tone={1} />
              </div>
            </div>

            <aside className="brief-note">
              <Text className="still-label">Format</Text>
              <Text className="brief-note-text" wrap>
                Chosen after the brief is read, not before.
              </Text>
              <Chip className="still-chip">
                <Icon name="file" size={10} stroke={1.8} />
                <span>Dedicated video</span>
              </Chip>

              <div className="brief-annotation">
                <Text className="brief-label">Why</Text>
                <Text className="brief-note-text" wrap>
                  The product only reads once someone has used it end to end.
                </Text>
              </div>

              <div className="brief-note-tags">
                <Chip className="still-chip">Long-form</Chip>
                <Chip className="still-chip">Deep dive</Chip>
              </div>
            </aside>
          </div>
        </Window>
      )}
    </Stage>
  );
}
