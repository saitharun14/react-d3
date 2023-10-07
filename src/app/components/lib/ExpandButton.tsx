import { MdKeyboardArrowDown } from "react-icons/md";

const ExpandButton = ({
  isOpen,
  toggle,
}: {
  isOpen: boolean;
  toggle: () => void;
}) => {
  return (
    <button onClick={toggle} type="button">
      <div>
        <MdKeyboardArrowDown
          className={`${!isOpen ? "-rotate-90" : "rotate-90"}`}
        />
      </div>
    </button>
  );
};

export default ExpandButton;
