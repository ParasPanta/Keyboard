import React, { useEffect, useState } from "react";
import KeyRow from "./KeyRow";
import { row0, row1, row2, row3, row4 } from "../assets/keyRows";

function KeyBoard() {
  const initialState = [{ name: "Tab", code: "Tab" }];

  const [test, setTest] = useState(initialState);

  const addNewItem = (data) => {
    const newArray = [...test];
    newArray.push(data);
    setTest(newArray);
  };

  const addStyle = (keyId) => {
    const element = document.querySelectorAll(`#${keyId}`);
    // console.log(element);
    if (element) {
      element.forEach((el) => {
        el.classList.add("clicked");
        el.classList.remove("unClicked");
      });
    }
  };

  const removeStyle = (keyId) => {
    const element = document.querySelectorAll(`#${keyId}`);
    if (element) {
      element.forEach((el) => {
        el.classList.add("unClicked");
        el.classList.remove("clicked");
      });
    }
  };

  const handleKeyUp = (e) => {
    const keyId = e.code.toLowerCase();

    removeStyle(keyId);
  };

  const handleKeyDown = (e) => {
    console.log(`{ name:'${e.key}', altName:'', code:'${e.code}' }`);

    const keyId = e.code.toLowerCase();

    addStyle(keyId);
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return (
    <div className="flex center h-screen">
      <div className="flex gap-2 flex-col">
        <KeyRow row={row0} />
        <KeyRow row={row1} />
        <KeyRow row={row2} />
        <KeyRow row={row3} />
        <KeyRow row={row4} />
      </div>
    </div>
  );
}

export default KeyBoard;
