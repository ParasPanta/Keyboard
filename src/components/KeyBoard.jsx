import React, { useEffect, useState } from "react";
import KeyRow from "./KeyRow";

import { rowLF0, rowLF1, rowLF2, rowLF3 } from "../assets/keyRowsLeft";
import { rowLM0, rowLM1, rowLM2, rowLM3, rowLM4 } from "../assets/keyRowsLeft";
import { rowM0, rowM1, rowM2, rowM3, rowM4 } from "../assets/keyRowsMid";
import {
  rowR0,
  rowR1,
  rowR2,
  rowR3,
  rowR4,
  rowR5,
  rowR6,
} from "../assets/keyRowsRight";

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

    console.log(
      `{ name:'${e.key}', altName:'', code:'${e.code}', grow:false }`
    );

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
      {/* Left Side */}
      <div className="left flex flex-col gap-4">
        <div className="function flex gap-2 justify-between">
          <KeyRow row={rowLF0} />
          <KeyRow row={rowLF1} />
          <KeyRow row={rowLF2} />
          <KeyRow row={rowLF3} />
        </div>

        <div className="main flex gap-2 flex-col">
          <KeyRow row={rowLM0} />
          <KeyRow row={rowLM1} />
          <KeyRow row={rowLM2} />
          <KeyRow row={rowLM3} />
          <KeyRow row={rowLM4} />
        </div>
      </div>

      {/* Mid Section */}
      <div className="right ml-4">
        <div className="top mb-4">
          <KeyRow row={rowM0} />
        </div>
        <div className="mid flex flex-col gap-2 text-sm">
          <KeyRow row={rowM1} />
          <KeyRow row={rowM2} />
        </div>
        <div className="bottom mt-14 flex flex-col gap-2">
          <div className="upArrow center">
            <KeyRow row={rowM3} />
          </div>
          <div className="restArrow center">
            <KeyRow row={rowM4} />
          </div>
        </div>
      </div>

      {/* Right Side */}
          <div className="right ml-4 flex flex-col gap-2">
              <div className="indicators">
                  
              </div>
        <div className="top">
          <KeyRow row={rowR0} />
        </div>
        <div className="bottom flex">
          <div className="left flex flex-col gap-2">
            <div className="mid-numbers flex flex-col gap-2">
              <KeyRow row={rowR1} />
              <KeyRow row={rowR2} />
              <KeyRow row={rowR3} />
            </div>
            <div className="bottom-numbers">
              <KeyRow row={rowR4} />
            </div>
          </div>
          <div className="right flex flex-col ml-2 gap-2 justify-between">
            <KeyRow row={rowR5} />
            <KeyRow row={rowR6} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default KeyBoard;
