export default function handleKeyDown(keys: string[]) {
  document.onkeydown = (e) => {
    keys.forEach((key) => {
      const button = document.getElementById(key);
      const div = document.getElementById(`div-${key}`);

      if (e.key === key) {
        button?.click();
        div?.classList.add("button-key-clicked");
      }
      setTimeout(() => {
        div?.classList.remove("button-key-clicked");
      }, 100);
     
    });
  };
}
