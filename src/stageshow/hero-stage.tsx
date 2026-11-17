"use client";

import * as React from "react";
import Image from "next/image";
import { useReducedMotion } from "./kit/reduced-motion";
import { CampaignArchitectureScene } from "./scenes/campaign-architecture";

/**
 * The hero's product frame.
 *
 * The scene is the focal object; the frame is reserved up front (a fixed
 * aspect box) so nothing shifts while it mounts. Under reduced motion the
 * kit holds its poster frame, and with scripting off the still image is
 * shown instead.
 */
export function HeroStage({ poster }: { poster: string }) {
  const reduced = useReducedMotion();

  return (
    <div className="hero-stage" data-reduced={reduced || undefined}>
      <div className="hero-stage__frame">
        <CampaignArchitectureScene />
      </div>
      <noscript>
        <Image
          src={poster}
          alt="GrowthiveMedia campaign delivery console: a brief is read, an audience segment is matched, formats are planned, and the campaign goes live."
          width={720}
          height={340}
          className="hero-stage__poster"
          priority
        />
      </noscript>
    </div>
  );
}
