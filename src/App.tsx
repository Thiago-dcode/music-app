import { useEffect, useState } from "react";
import NavBar from "./components/navigation/NavBar";
import KeyBoard from "@/components/keyBoard/KeyBoard";
import { keyboard } from "types.env";

function App() {
  const [keyboard, setKeyboard] = useState<keyboard | null>(null);

  useEffect(() => {
    const getKeyboard = async () => {
      const response = await fetch("http://localhost:8000/keyBoard");

      const data = await response.json();
      console.log(data.keys);
      setKeyboard(data);
    };
    getKeyboard();
  }, []);

  return (
    <>
      <NavBar />
      <main className="flex h-full items-center justify-center mt-16">
        {keyboard ? (
          <KeyBoard keyboard={keyboard} />
        ) : (
          <h1>Loading</h1>
        )}
      </main>
    </>
  );
}

export default App;
