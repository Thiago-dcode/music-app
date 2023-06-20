import {keyboard} from 'types.env.ts'
import ButtonKey from "../button/ButtonKey";
import handleKeyDown from "../../lib/handleKeyDown";

interface keyboardProps {
  keyboard: keyboard,
}


export default function KeyBoard({keyboard}:keyboardProps) {
  handleKeyDown(keyboard.keys.map(key => key.keyDown));
  return (
    <div  className="border  px-8 flex flex-col justify-center">
      <h3 className="text-sm font-light self-start">{keyboard.name}</h3>
      <div className=" flex gap-3 flex-wrap  justify-center flex-grow bg-black/80 py-6 px-2 m-auto  max-w-3xl rounded-xl  shadow-lg shadow-black/50 ">
        { keyboard && keyboard.keys.map( key =>{
          
          return (
            <ButtonKey keySound={key}/>
          )
        })}
      </div>
    </div>
  );
}
