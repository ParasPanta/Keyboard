import React, { useState } from "react";

function Key(props) {
  const name = props.item.name;
  const altName = props.item.altName;
  const code = props.item.code;
  const grow = props.item.grow;
  const growY = props.item.growY;
  const icon = props.item.icon;
  // console.log(props.item.name);

  const [isClicked, setIsClicked] = useState(false);

  const test = isClicked
    ? "bg-green-500 border-gray-400 text-white"
    : "bg-white text-black";

  const newRowText =
    altName.length >= 3 ? "flex-col text-xs gap-0.5" : "gap-1";
  const smallFont = name.length >= 3 && !grow ? "text-xs" : "";
  const growDiv = grow && !growY ? "flex-grow px-2" : "w-10";
  const growDivY = !grow && growY ? "h-[88px] py-2 " : "h-10";

  return (
    <>
      <div
        id={code.toLowerCase()}
        className={`center border-[1px] border-black hover:bg-gray-400 flex rounded-md cursor-pointer ${growDiv} ${growDivY} ${smallFont} ${newRowText} `}
      >
        {!icon && <span>{name}</span>}
        {icon && (
          <span>
            <i className={name}></i>
          </span>
        )}
        {altName && <span>{altName}</span>}
      </div>
    </>
  );
}

export default Key;
