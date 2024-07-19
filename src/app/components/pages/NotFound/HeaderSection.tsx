interface HeaderSectionProps {
  title: string;
  number?: string;
  isNumber?: boolean;
}

export default function HeaderSection({
  title,
  number,
  isNumber,
}: HeaderSectionProps) {
  return (
    <div className="flex flex-col md:flex-row justify-between md:items-center w-full">
      <h1 className="font-poppins text-[36px] text-black-0">{title}</h1>
      {isNumber && (
        <span className="font-poppins font-medium text-[18px] text-black-200">
          {number}
        </span>
      )}
    </div>
  );
}
