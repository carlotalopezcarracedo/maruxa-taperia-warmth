export function BranchDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`branch-divider ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 200 22"
        fill="none"
        className="h-[18px] w-36 text-current opacity-80 sm:w-44"
      >
        <g fill="currentColor">
          <ellipse cx="8" cy="11" rx="7" ry="3" transform="rotate(-20 8 11)" />
          <ellipse cx="20" cy="6" rx="5" ry="2.4" transform="rotate(-40 20 6)" />
          <ellipse cx="20" cy="16" rx="5" ry="2.4" transform="rotate(40 20 16)" />
          <ellipse cx="32" cy="4" rx="4" ry="2" transform="rotate(-45 32 4)" />
          <ellipse cx="32" cy="18" rx="4" ry="2" transform="rotate(45 32 18)" />
        </g>
        <line x1="40" y1="11" x2="160" y2="11" stroke="currentColor" strokeWidth="1.3" />
        <g fill="currentColor">
          <ellipse cx="192" cy="11" rx="7" ry="3" transform="rotate(20 192 11)" />
          <ellipse cx="180" cy="6" rx="5" ry="2.4" transform="rotate(40 180 6)" />
          <ellipse cx="180" cy="16" rx="5" ry="2.4" transform="rotate(-40 180 16)" />
          <ellipse cx="168" cy="4" rx="4" ry="2" transform="rotate(45 168 4)" />
          <ellipse cx="168" cy="18" rx="4" ry="2" transform="rotate(-45 168 18)" />
        </g>
      </svg>
    </div>
  );
}
