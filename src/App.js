import React, { useState } from "react";
import "./styles.css";

let headingText = "Emoji Intepreter";

var emojiDict = {
  "😀": "Happy Face",
  "😗": "Kissing Face With Smiling Eyes"
};

export default function App() {
  const [meaning, setMeaning] = useState("");

  function inputChangeHadler(evt) {
    let value = evt.target.value;
    var meaning = emojiDict[value];

    if (meaning === undefined) {
      meaning = "Not yet in our database...";
    }

    setMeaning(meaning);
  }
  return (
    <div>
      <h1>{headingText}</h1>
      <input onChange={inputChangeHadler} />

      <div> {meaning}</div>

      <h3>emojies we know </h3>
      {Object.keys(emojiDict).map((item) => {
        return (
          <span
            key={item}
            onClick={() => {
              var meaning = emojiDict[item];
              setMeaning(meaning);
            }}
          >
            {item}
          </span>
        );
      })}
    </div>
  );
}

/*
**things to notice
**class  ->classname
**style -> takes an object instead of value

*/
