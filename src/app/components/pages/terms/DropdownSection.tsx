import React from "react";
import Expand from "../../icons/Expand";

interface DropdownSectionProps {
  title: string;
  content: React.ReactNode;
  section: string;
  openDropdown: string | null;
  id: string;
  handleToggleDropdown: (section: string) => void;
}

interface ExpandProps {
  className: string;
}

const DropdownSection: React.FC<DropdownSectionProps> = ({
  title,
  content,
  section,
  openDropdown,
  id,
  handleToggleDropdown,
}) => {
  return (
    <div
      id={id}
      className="flex flex-col bg-gray-50 drop-shadow-md rounded-[5px] p-6 cursor-pointer"
      onClick={() => handleToggleDropdown(section)}
    >
      <div className="flex items-center justify-between">
        <h2 className="text-black-300 font-poppins text-[16px] pp:text-[18px] font-medium">
          {title}
        </h2>
        <Expand classname={openDropdown === section ? "rotate-180" : ""} />
      </div>
      {openDropdown === section && (
        <div className="font-roboto text-black-300 text-[14px] pp:text-[16px] mt-5 max-w-[90%]">
          {content}
        </div>
      )}
    </div>
  );
};

export default DropdownSection;
