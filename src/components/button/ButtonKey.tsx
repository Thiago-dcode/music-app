import React, { useEffect, useState } from "react";
import { keySound } from "types.env";

interface buttonProps {
  keySound: keySound;
}
export default function ButtonKey({ keySound }: buttonProps) {
  const [sound, setSound] = useState("");

  useEffect(() => {
    const getSound = async () => {
      const soundPath = `../..${keySound.soundPath}`
      const soundModule = await import(soundPath);
      console.log(soundModule)
      setSound(soundModule.default);
    };
    getSound();
  }, []);
  const play = () => {
    new Audio(sound).play();
  };
  return (
    <div
      id={`div-${keySound.keyDown}`}
      className={`even:bg-pastelPink odd:bg-pastelBlue button-key-div text-black w-[7rem] h-[7rem] flex flex-col justify-center rounded-sm`}
    >
      {sound ? (
        <button
          id={keySound.keyDown}
          onClick={play}
          className=" font-bold text-3xl"
        >
          {keySound.keyDown.toUpperCase()}
        </button>
      ) : (
        <h1>Loading</h1>
      )}
    </div>
  );
}
