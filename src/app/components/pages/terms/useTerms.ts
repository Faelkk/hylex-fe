import { useState } from "react";

export function useTerms() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleToggleDropdown = (section: string | null) => {
    setOpenDropdown(openDropdown === section ? null : section);
  };

  return { openDropdown, handleToggleDropdown };
}
