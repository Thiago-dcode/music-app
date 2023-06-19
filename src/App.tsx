import NavBar from "./components/navigation/NavBar";
import KeyBoard from "@/components/keyBoard/KeyBoard";

function App() {
  return (
    <>
      <NavBar />
      <main className="flex h-full items-center justify-center mt-16">
      <KeyBoard/>
      </main>
    </>
  );
}

export default App;
