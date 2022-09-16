import { useState, Dispatch, SetStateAction } from "react";

type Bind = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

interface UseInputReturn {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  reset: () => void;
  bind: Bind;
}

const INITIAL_VALUE = "";

export default function useInput(
  initialValue: string = INITIAL_VALUE
): UseInputReturn {
  const [value, setValue] = useState<string>(initialValue);

  return {
    value,
    setValue,
    reset: () => setValue(INITIAL_VALUE),
    bind: {
      value,
      onChange: (event) => {
        setValue(event.target.value);
      },
    },
  };
}
