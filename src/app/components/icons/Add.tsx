export default function Add({
  height,
  width,
}: {
  height?: string;
  width?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={height ? height : "18px"}
      viewBox="0 -960 960 960"
      width={width ? width : "18px"}
      fill="#DDDDDD"
    >
      <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
    </svg>
  );
}
