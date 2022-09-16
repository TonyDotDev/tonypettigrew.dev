import { useState } from "react";

type UseToggleReturn = [boolean, () => void];

export default function useToggle(): UseToggleReturn {
  const [isToggled, setIsToggled] = useState<boolean>(false);

  function toggle() {
    setIsToggled((prevState) => !prevState);
  }

  return [isToggled, toggle];
}
