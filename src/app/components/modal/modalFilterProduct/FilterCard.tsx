"use client";
import { useState } from "react";
import Check from "../../icons/Check";

export default function FilterCard({
  filterValue,
  filterKey,
  handleFilter,
  checked,
}: {
  filterValue: string;
  filterKey: string;
  checked: boolean;
  handleFilter: (
    filterKey: string,
    filterValue: string,
    checked: boolean
  ) => void;
}) {
  const [isChecked, setIsChecked] = useState(checked);

  const handleClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    setIsChecked(!isChecked);
    handleFilter(filterKey, filterValue, isChecked);
  };

  return (
    <div className="flex gap-2 cursor-pointer" onClick={handleClick}>
      {isChecked ? (
        <div className="h-5 w-5 border-green-400 border-2 rounded-[5px] flex items-center justify-center cursor-pointer">
          <Check />
        </div>
      ) : (
        <div className="border-2 border-gray-600 rounded-[5px] p-2 h-4 w-4 cursor-pointer"></div>
      )}

      <span className="font-roboto text-blue-100">{filterValue}</span>
    </div>
  );
}
