/**
 * GrowthiveMedia's own product glyphs.
 *
 * Drawn here rather than borrowed: no third-party marks, no sparkles, and no
 * letter in a coloured square. Each glyph is a 24×24 stroke icon that inherits
 * `currentColor`.
 */

export interface GlyphProps {
  className?: string;
  size?: number;
}

export function CampaignGlyph({ className, size = 20 }: GlyphProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M3 19V9" />
      <path d="M9 19V5" />
      <path d="M15 19v-7" />
      <path d="M21 19v-11" />
      <path d="M2 21h20" opacity={0.45} />
    </svg>
  );
}

export function WaveGlyph({ className, size = 20 }: GlyphProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M3 16c2.5 0 2.5-8 5-8s2.5 8 5 8 2.5-8 5-8 2.5 8 5 8" />
      <path d="M3 21h18" opacity={0.45} />
    </svg>
  );
}

export function SignalGlyph({ className, size = 20 }: GlyphProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="12" cy="12" r="2.5" />
      <path d="M12 4.5a7.5 7.5 0 0 0-7.5 7.5" opacity={0.75} />
      <path d="M12 19.5A7.5 7.5 0 0 0 19.5 12" opacity={0.75} />
      <path d="M12 7.8a4.2 4.2 0 0 0-4.2 4.2" opacity={0.5} />
      <path d="M12 16.2a4.2 4.2 0 0 0 4.2-4.2" opacity={0.5} />
    </svg>
  );
}
