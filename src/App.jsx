import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Content from "./components/content";
function App() {
  // Api calll and fetching value
  const [qoute, setQoute] = useState(" ");
  const url = "https://type.fit/api/quotes";
  const handleOnClick1 = async () => {
    let Api = await fetch(url);
    let data = await Api.json();
    let randomIndex = Math.floor(Math.random() * data.length);
    let randomItem = data[randomIndex];
    console.log(randomItem);
    setQoute(randomItem);
  };

  // dark mode ke liye function

  const [currentMode, setMode] = useState("white");
  let handleOnclick = () => {
    if (currentMode === "white") {
      setMode("black");
    } else {
      setMode("white");
    }
  };

  // const handleOnClick1 = async function Apicall() {
  //   let Api = await fetch(url);
  //   let data = await Api.json();
  //   let saver = data[2];
  //   // console.log(saver);
  //   // setData(saver);
  //   let para = document.querySelector("p");
  //   data.map((item) => (para.textContent = `${item.text}`));
  // };

  return (
    <>
      <div className={`landerpage ${currentMode}`}>
        <Navbar handleOnclick={handleOnclick}></Navbar>
        {qoute && (
          <Content handleOnClick1={handleOnClick1} text={qoute.text}></Content>
        )}
      </div>
    </>
  );
}

export default App;
