"use client";

import { useMemo } from "react";
import { Stage } from "../kit/stage";
import type { Act } from "../kit/act";
import { Window, Bar, Text } from "../kit/window";
import { Row } from "../kit/parts/Row";
import { Chip } from "../kit/parts/Chip";
import { Icon } from "../kit/parts/Icon";
import type { Layout } from "../kit/looks";
import "./campaign-architecture.css";

/**
 * GrowthiveMedia's delivery console: brief → match → plan → live.
 *
 * The frame is our own workflow surface. It shows formats and stages, never a
 * creator roster, never a result: no names, no reach, no performance numbers.
 */

export type CampaignArchitectureState = {
  stage: "brief" | "match" | "plan" | "live";
  matched: boolean;
  live: boolean;
};

const INITIAL: CampaignArchitectureState = {
  stage: "brief",
  matched: false,
  live: false,
};

const POSTER: CampaignArchitectureState = {
  stage: "live",
  matched: true,
  live: true,
};

const STEPS = [
  { key: "brief", label: "Brief", icon: "file" },
  { key: "match", label: "Match", icon: "user" },
  { key: "plan", label: "Plan", icon: "calendar" },
  { key: "live", label: "Live", icon: "bolt" },
] as const;

const SEGMENTS = [
  { id: "developer", label: "Developer tooling", fit: 88 },
  { id: "research", label: "AI research", fit: 74 },
  { id: "cloud", label: "Cloud infrastructure", fit: 61 },
] as const;

const FORMATS = [
  { id: "dedicated", label: "Dedicated video", tone: 4 },
  { id: "integration", label: "YouTube integration", tone: 3 },
  { id: "wave", label: "Multi-creator wave", tone: 2 },
] as const;

async function script(a: Act<CampaignArchitectureState>) {
  // The opening wait is longer than the kit's idle delay, so the cursor is
  // hidden before the first move and fades in only as it reaches the panel.
  await a.wait(1700);

  // 1. The brief is read.
  await a.move("cta-match");
  await a.wait(250);
  await a.click();
  await a.set({ stage: "match" });
  await a.wait(700);

  // 2. One audience segment is chosen.
  await a.move("segment-research");
  await a.wait(300);
  await a.click();
  await a.set({ matched: true });
  await a.wait(900);

  // 3. The formats are planned.
  await a.move("cta-plan");
  await a.wait(250);
  await a.click();
  await a.set({ stage: "plan" });
  await a.wait(900);

  // 4. The campaign goes live.
  await a.move("cta-publish");
  await a.wait(250);
  await a.click();
  await a.set({ stage: "live", live: true });
  await a.wait(1600);

  // 5. Hold on the result, then reset for the next loop.
  await a.wait(1400);
  await a.snap(INITIAL);
}

export function CampaignArchitectureScene() {
  const poster = useMemo(() => POSTER, []);

  return (
    <Stage<CampaignArchitectureState>
      width={720}
      height={340}
      initial={INITIAL}
      poster={poster}
      script={script}
      theme="dark"
      palette="accent"
      fidelity="standard"
      accent="#8B5CF6"
      cursor={{ at: "cta-match", kind: "pointer", style: "arrow", ripple: true }}
      compact={{ below: 520, width: 358, height: 280 }}
      className="ca-stage"
    >
      {(s, _rect, layout) => (
        <Window
          title="Campaign Delivery"
          chrome="native"
          lights="grey"
          className="ca-window"
          body={{ className: "ca-body" }}
        >
          <div className="ca-inner">
            {/* Pipeline strip */}
            <div className="ca-steps" role="presentation">
              {STEPS.map((step) => {
                const active = s.stage === step.key;
                const done = STEPS.findIndex((x) => x.key === s.stage) >
                  STEPS.findIndex((x) => x.key === step.key);
                return (
                  <Chip
                    key={step.key}
                    className="ca-step"
                    data-active={active || undefined}
                    data-done={done || undefined}
                    data-target={step.key === "brief" ? undefined : `step-${step.key}`}
                  >
                    <Icon name={step.icon} size={11} stroke={1.7} />
                    <span>{step.label}</span>
                  </Chip>
                );
              })}
            </div>

            <div className="ca-grid" data-layout={layout}>
              {/* Main panel: what the console is doing right now */}
              <div className="ca-panel">
                {s.stage === "brief" && (
                  <div className="ca-state ca-state--brief">
                    <Text className="ca-title">Brief received</Text>
                    <div className="ca-filler">
                      <Bar w={220} h={7} tone={3} />
                      <Bar w={180} h={7} tone={2} />
                      <Bar w={140} h={7} tone={2} />
                    </div>
                    <Chip className="ca-cta" data-target="cta-match">
                      <Icon name="user" size={11} stroke={1.7} />
                      <span>Start matching</span>
                    </Chip>
                  </div>
                )}

                {s.stage === "match" && (
                  <div className="ca-state">
                    <Text className="ca-title">Matching audiences</Text>
                    <div className="ca-rows">
                      {SEGMENTS.map((segment, i) => (
                        <Row
                          key={segment.id}
                          className="ca-row"
                          selected={s.matched && segment.id === "research"}
                          data-target={`segment-${segment.id}`}
                          lead={
                            <span className="ca-dot" data-tone={i + 1} aria-hidden />
                          }
                          title={<Text>{segment.label}</Text>}
                          subtitle={<Bar w={96} h={6} tone={2} />}
                          meta={<Bar w={34} h={6} tone={4} />}
                          pad={8}
                        />
                      ))}
                    </div>
                    <Chip className="ca-cta" data-target="cta-plan">
                      <Icon name="calendar" size={11} stroke={1.7} />
                      <span>Plan formats</span>
                    </Chip>
                  </div>
                )}

                {s.stage === "plan" && (
                  <div className="ca-state">
                    <Text className="ca-title">Flight plan</Text>
                    <div className="ca-formats">
                      {FORMATS.map((format) => (
                        <div key={format.id} className="ca-format">
                          <Bar w={96} h={7} tone={format.tone} />
                          <Text>{format.label}</Text>
                        </div>
                      ))}
                    </div>
                    <Chip className="ca-cta" data-target="cta-publish">
                      <Icon name="bolt" size={11} stroke={1.7} />
                      <span>Publish</span>
                    </Chip>
                  </div>
                )}

                {s.stage === "live" && (
                  <div className="ca-state ca-state--live">
                    <Text className="ca-title">Publishing</Text>
                    <div className="ca-live">
                      <Chip className="ca-live-chip">
                        <span className="ca-live-dot" aria-hidden />
                        <span>Live</span>
                      </Chip>
                      <Text className="ca-dim">
                        Formats in flight across the selected audience
                      </Text>
                    </div>
                    <div className="ca-publish-list">
                      {FORMATS.map((format) => (
                        <div key={format.id} className="ca-publish-row">
                          <span className="ca-live-dot" aria-hidden />
                          <Text className="ca-publish-label">{format.label}</Text>
                          <span className="ca-publish-state">In flight</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Rail: the brief the whole run is answering */}
              {layout === "wide" && (
                <aside className="ca-rail">
                  <Text className="ca-rail-label">Campaign brief</Text>
                  <Text className="ca-rail-title">AI code assistant launch</Text>
                  <Text className="ca-dim">Target: developer audiences</Text>
                  <div className="ca-filler ca-filler--tight">
                    <Bar w={150} h={6} tone={2} />
                    <Bar w={120} h={6} tone={2} />
                    <Bar w={92} h={6} tone={1} />
                  </div>
                  <div className="ca-rail-tags">
                    <Chip className="ca-tag">Dedicated video</Chip>
                    <Chip className="ca-tag">Integration</Chip>
                  </div>
                </aside>
              )}
            </div>
          </div>
        </Window>
      )}
    </Stage>
  );
}
