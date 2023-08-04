import React from "react";
import Key from "./Key";

function KeyRow(props) {
  return (
    <div>
      <div className="flex gap-2">
        {props.row.map((item, index) => (
          <Key key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

export default KeyRow;
