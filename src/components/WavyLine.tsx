export default function WavyLine({ color = "#8EB1C7" }: { color?: string }) {
  return (
    <svg
      viewBox="0 0 1200 22"
      preserveAspectRatio="none"
      style={{ display: "block", width: "100%", height: 22 }}
      aria-hidden="true"
    >
      <path
        d="M 0 11
           C 24 4, 46 5, 73 11
           S 126 20, 157 12
           S 208 2, 241 10
           S 300 19, 333 12
           S 382 5, 421 10
           S 476 18, 512 11
           S 564 3, 602 10
           S 658 20, 697 12
           S 750 4, 787 10
           S 842 18, 878 11
           S 932 3, 970 10
           S 1027 19, 1065 12
           S 1120 5, 1152 10
           S 1182 14, 1200 11"
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
