import "./styles.css";
import React, { useState } from "react";

const emojiData = {
  "🤧": "Sneezing Face",
  "🥵": "Hot Face",
  "😎": "Smiling Face with Sunglasses",
  "👻": "Ghost",
  "✌️": "Victory Hand",
  "👌": "OK Hand",
  "😨": "Fearful Face",
  "🙏": "Folded Hands",
  "🤞": "Crossed Fingers",
  "🤗": "Hugging Face"
};

const emojis = Object.keys(emojiData);

export default function App() {
  const [emoji, setEmoji] = useState("");
  const [meaning, setMeaning] = useState("translation will appear here..");

  function changeHandler(event) {
    const inputEmoji = event.target.value;
    setEmoji(inputEmoji);

    if (inputEmoji in emojiData) {
      setMeaning(emojiData[inputEmoji]);
    } else {
      setMeaning("failure to recognise this emoji");
    }
  }

  function emojiClickHandler(inputEmoji) {
    setMeaning(emojiData[inputEmoji]);
  }

  return (
    <div style={{ backgroundColor: "black", padding: "2rem" }} className="App">
      <h1 style={{ WebkitTextFillColor: "red", padding: "2rem 2rem" }}>
        Emoji Interpreter
      </h1>

      <input
        onChange={changeHandler}
        value={emoji}
        placeholder={"Search your emoji"}
        style={{
          padding: "2rem",
          minWidth: "80%",
          fontSize: "smaller"
        }}
      />
      <h2> {emoji} </h2>
      <h3> {meaning} </h3>
      {emojis.map((emoji) => (
        <span
          onClick={() => emojiClickHandler(emoji)}
          style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
        >
          {" "}
          {emoji}{" "}
        </span>
      ))}
    </div>
  );
}
