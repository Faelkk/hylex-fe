interface ExpandsProps {
  classname?: string;
}

export default function Expand({ classname }: ExpandsProps) {
  return (
    <svg
      width="12"
      height="8"
      viewBox="0 0 12 8"
      fill="#0000"
      className={classname}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 8L0 1.51351L1.4 0L6 4.97297L10.6 0L12 1.51351L6 8Z"
        fill="#000"
      />
    </svg>
  );
}
