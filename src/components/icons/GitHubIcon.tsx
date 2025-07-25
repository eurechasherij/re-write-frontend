import { IconSvgProps } from "@/types";

export function GitHubIcon({ size = 24, ...props }: IconSvgProps) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>GitHub</title>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.207 11.387.6.113.793-.258.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.083-.729.083-.729 1.205.084 1.839 1.236 1.839 1.236 1.07 1.834 2.807 1.305 3.492.998.107-.775.419-1.305.762-1.604-2.665-.303-5.466-1.333-5.466-5.931 0-1.31.468-2.382 1.235-3.222-.124-.303-.536-1.524.117-3.176 0 0 1.005-.322 3.3 1.23.958-.266 1.984-.399 3.005-.404 1.021.005 2.047.138 3.005.404 2.291-1.552 3.295-1.23 3.295-1.23.653 1.652.242 2.873.118 3.176.77.84 1.234 1.911 1.234 3.222 0 4.61-2.806 5.628-5.478 5.926.43.372.814 1.102.814 2.222v3.293c0 .319.193.69.793.576C20.565 22.092 24 17.593 24 12.297c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}
