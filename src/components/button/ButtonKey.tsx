import React from "react";

interface buttonProps {
  sound: string;
  keyDown: string;
}

export default function ButtonKey({ sound, keyDown }: buttonProps) {

  const play = () => {
    new Audio(sound).play();
  };
  return (
    <div  id={`div-${keyDown}`}
      className={`even:bg-pastelPink odd:bg-pastelBlue button-key-div text-black w-[7rem] h-[7rem] flex flex-col justify-center rounded-sm`}
    >
      <button id={keyDown} onClick={play} className=" font-bold text-3xl">
        {keyDown.toUpperCase()}
      </button>
    </div>
  );
}
