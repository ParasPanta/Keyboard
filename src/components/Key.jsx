import React, { useState } from "react";

function Key(props) {
  const name = props.item.name;
  const altName = props.item.altName;
  const code = props.item.code;
  // console.log(props.item.name);

  const [isClicked, setIsClicked] = useState(false);

  const test = isClicked
    ? "bg-green-500 border-gray-400 text-white"
    : "bg-white text-black";

  const growDiv = name.length > 1 ? "flex-grow px-2" : "w-10";

  return (
    <>
      <div
        id={code.toLowerCase()}
        className={`center border-[1px] gap-1 h-10 border-black hover:bg-gray-400 rounded-md cursor-pointer ${growDiv} `}
      >
        <span>{name}</span>
        {altName && <span>{altName}</span>}
      </div>
    </>
  );
}

export default Key;
