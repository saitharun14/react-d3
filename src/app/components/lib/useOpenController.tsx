import { useCallback, useState } from "react";

const useOpenController = (intialState: boolean) => {
  const [isOpen, setOpenState] = useState(intialState);

  const toggle = useCallback(() => {
    setOpenState((state) => !state);
  }, [setOpenState]);
  return { isOpen, toggle };
};

export default useOpenController;
