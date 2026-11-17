"use client";

import { Stage } from "../kit/stage";
import { Window, Bar, Text } from "../kit/window";
import { Chip } from "../kit/parts/Chip";
import { Icon } from "../kit/parts/Icon";
import "./stills.css";

/**
 * Still 2 — Flight plan. A multi-creator wave schedule: three waves of
 * release slots, drawn as bars, with the first wave lit.
 */

type PlanState = { published: boolean };

const PLAN_INITIAL: PlanState = { published: true };

const WAVES = [
  { id: "wave-1", label: "Launch wave", slots: [1, 1, 1, 0, 0, 0] },
  { id: "wave-2", label: "Follow-up wave", slots: [0, 0, 1, 1, 1, 0] },
  { id: "wave-3", label: "Evergreen wave", slots: [0, 0, 0, 0, 1, 1] },
] as const;

export function FlightPlanScene() {
  return (
    <Stage<PlanState>
      width={400}
      height={300}
      initial={PLAN_INITIAL}
      theme="dark"
      palette="accent"
      fidelity="standard"
      accent="#8B5CF6"
      cursor={{ at: "wave-2", kind: "pointer", style: "arrow", still: true }}
      className="still-stage"
    >
      {(s) => (
        <Window
          title="Flight Plan"
          chrome="native"
          lights="grey"
          className="still-window"
          body={{ className: "still-body" }}
        >
          <div className="still-head">
            <Text className="still-label">Release schedule</Text>
            <Chip className="still-chip" data-live={s.published || undefined}>
              <span className="still-live-dot" aria-hidden />
              <span>In flight</span>
            </Chip>
          </div>
          <div className="still-waves">
            {WAVES.map((wave) => (
              <div key={wave.id} className="still-wave" data-target={wave.id}>
                <Text className="still-wave-label">{wave.label}</Text>
                <div className="still-slots">
                  {wave.slots.map((on, i) => (
                    <span
                      key={i}
                      className="still-slot"
                      data-on={on ? "" : undefined}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="still-filler">
            <Bar w={190} h={6} tone={2} />
            <Bar w={130} h={6} tone={1} />
          </div>
        </Window>
      )}
    </Stage>
  );
}
