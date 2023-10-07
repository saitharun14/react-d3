"use client";

const ToggleGroup = () => {
  const onClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const container =
      e.currentTarget.parentElement?.getElementsByTagName("div");
    const elementId = e.currentTarget.id;
    if (container)
      for (var i = 0; i < container.length; i++) {
        if (container[i].id === elementId) {
          if (container[i].style.backgroundColor === "rgb(74, 222, 128)")
            container[i].style.backgroundColor = "";
          else container[i].style.backgroundColor = "rgb(74, 222, 128)";
        } else container[i].style.backgroundColor = "";
      }
  };
  return (
    <div id="div" className="flex gap-2 ml-2">
      <div
        className="w-7 h-7 border-[1px] border-black"
        id="div1"
        onClick={onClick}
      ></div>
      <div
        className="w-7 h-7 border-[1px] border-black"
        id="div2"
        onClick={onClick}
      ></div>
    </div>
  );
};

export default ToggleGroup;
