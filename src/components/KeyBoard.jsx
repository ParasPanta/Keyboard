import React, { useEffect, useState } from "react";
import KeyRow from "./KeyRow";
import {
  rowF0,
  rowF1,
  rowF2,
  rowF3,
  rowM0,
  rowM1,
  rowM2,
  rowM3,
  rowM4,
} from "../assets/keyRows";

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
    e.preventDefault();
    const keyId = e.code.toLowerCase();

    removeStyle(keyId);
  };

  const handleKeyDown = (e) => {
    e.preventDefault();

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
      <div className="left flex flex-col gap-4">
        <div className="function flex gap-2 justify-between">
          <KeyRow row={rowF0} />
          <KeyRow row={rowF1} />
          <KeyRow row={rowF2} />
          <KeyRow row={rowF3} />
        </div>

        <div className="main flex gap-2 flex-col">
          <KeyRow row={rowM0} />
          <KeyRow row={rowM1} />
          <KeyRow row={rowM2} />
          <KeyRow row={rowM3} />
          <KeyRow row={rowM4} />
        </div>
      </div>
    </div>
  );
}

export default KeyBoard;
