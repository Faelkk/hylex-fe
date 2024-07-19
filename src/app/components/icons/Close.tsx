export default function Close({
  width,
  height,
}: {
  width?: string;
  height?: string;
}) {
  return (
    <svg
      width={width ? width : "14"}
      height={height ? height : "14"}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.4 14L0 12.6L5.6 6.99997L0 1.39997L1.4 -3.05176e-05L7 5.59997L12.6 -3.05176e-05L14 1.39997L8.4 6.99997L14 12.6L12.6 14L7 8.39997L1.4 14Z"
        fill="#FFFF"
      />
    </svg>
  );
}
