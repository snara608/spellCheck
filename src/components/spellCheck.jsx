import React, { useState } from "react";

const customDictionary = {
  teh: "the",
  wrok: "work",
  fot: "for",
  exampl: "example"
};

export default function SpellCheck() {
  const [text, setText] = useState("");
  const [suggestion, setSuggestion] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setText(value);

    if (value.trim() === "") {
      setSuggestion("");
      return;
    }

    const words = value.split(" ");

    for (let word of words) {
      const lowerWord = word.toLowerCase();

      if (customDictionary[lowerWord]) {
        setSuggestion(customDictionary[lowerWord]);
        return;
      }
    }

    setSuggestion("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Spell Check and Auto-Correction</h1>

      <textarea
        placeholder="Enter text..."
        value={text}
        onChange={handleChange}
        rows="4"
        cols="50"
      />

      {suggestion && (
        <p>
          Did you mean: <b>{suggestion}</b>?
        </p>
      )}
    </div>
  );
}
