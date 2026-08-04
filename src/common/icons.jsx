/**
 * Lucide 圖示，統一 stroke-width 1.5（勾選符號例外，2.5）。
 * 一律用 currentColor，由容器決定顏色。
 */

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export const PlusIcon = ({ size = 15 }) => (
  <svg {...base} width={size} height={size} aria-hidden="true">
    <path d="M12 5v14M5 12h14" />
  </svg>
);

export const CheckIcon = ({ size = 12 }) => (
  <svg {...base} strokeWidth={2.5} width={size} height={size} aria-hidden="true">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

export const PencilIcon = ({ size = 14 }) => (
  <svg {...base} width={size} height={size} aria-hidden="true">
    <path d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z" />
  </svg>
);

export const TrashIcon = ({ size = 14 }) => (
  <svg {...base} width={size} height={size} aria-hidden="true">
    <path d="M3 6h18M8 6V4h8v2M6 6l1 14h10l1-14M10 10v7M14 10v7" />
  </svg>
);

export const AlertIcon = ({ size = 14 }) => (
  <svg {...base} width={size} height={size} aria-hidden="true">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 8v5M12 16h.01" />
  </svg>
);

export const FaceIcon = ({ size = 26 }) => (
  <svg {...base} width={size} height={size} aria-hidden="true">
    <circle cx="12" cy="12" r="9" />
    <path d="M9 10h.01M15 10h.01M8.5 14.5c.9 1.2 2.1 1.8 3.5 1.8s2.6-.6 3.5-1.8" />
  </svg>
);

/** 登入頁的線框剪貼板插畫 */
export const ClipboardIcon = ({ size = 168 }) => (
  <svg {...base} viewBox="0 0 96 96" width={size} height={size} aria-hidden="true">
    <rect x="18" y="12" width="60" height="76" />
    <path d="M36 12V7h24v5" />
    <path d="M28 34l5 5 9-10" />
    <path d="M50 36h18" />
    <path d="M28 54l5 5 9-10" />
    <path d="M50 56h18" />
    <circle cx="36" cy="74" r="9" />
    <path d="M33 72v1M39 72v1M32.5 77c1 1.6 2.2 2.4 3.5 2.4s2.5-.8 3.5-2.4" />
  </svg>
);
