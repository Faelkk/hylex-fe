import { useState } from "react";

export function useDropdown() {
  const [isDropdownOpen, setIsDropdown] = useState(false);

  const handleToggleDropdown = () => {
    setIsDropdown(!isDropdownOpen);
  };

  return { isDropdownOpen, handleToggleDropdown };
}
