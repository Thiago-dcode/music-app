
import ButtonKey from "../button/ButtonKey";
import handleKeyDown from "../../lib/handleKeyDown";
import sound1 from "../../assets/sounds/sound1.wav";
import sound2 from "../../assets/sounds/sound2.wav";
import sound3 from "../../assets/sounds/sound3.mp3";
import sound4 from "../../assets/sounds/sound4.mp3";
import sound5 from "../../assets/sounds/sound5.mp3";

export default function KeyBoard() {
  handleKeyDown(["a", "s", "d", "f", "g"]);
  return (
    <div className="border  px-8 flex flex-col justify-center">
      <h3 className="text-sm font-light self-start">Funky Beats</h3>
      <div className=" flex gap-3 flex-wrap  justify-center flex-grow bg-black/80 py-6 px-2 m-auto  max-w-3xl rounded-xl  shadow-lg shadow-black/50 ">
        <ButtonKey sound={sound1} keyDown="a" />
        <ButtonKey sound={sound2} keyDown="s" />

        <ButtonKey sound={sound3} keyDown="d" />
        <ButtonKey sound={sound4} keyDown="f" />
        <ButtonKey sound={sound5} keyDown="g" />
      </div>
    </div>
  );
}
