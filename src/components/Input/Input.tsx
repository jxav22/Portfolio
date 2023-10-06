import React, { useState, useEffect, useRef } from "react";
import styles from "./Input.module.css";

type Props = {
  submit: (input: string) => void;
  prompt: string;
};

const history: string[] = [];

function Input({ submit, prompt }: Props) {
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const [inputValue, setInputValue] = useState(prompt);

  const [historyIndex, setHistoryIndex] = useState(0);

  useEffect(()=>{
    history.push(`${prompt}(Nice find! ^^ Here's a bit about this project as a reward: this is a clone of the windows command prompt, I tried making it one-to-one, but please let me know if there's a difference)`);
  },[]);

  useEffect(() => {
    window.addEventListener("keypress", handleKeyPress);

    return () => {
      window.removeEventListener("keypress", handleKeyPress);
    };
  }, [inputValue]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [historyIndex, history]);

  const handleKeyDown = (event: KeyboardEvent) => {
    if (history.length === 0) return;

    switch (event.key) {
      case "ArrowUp":
        event.preventDefault();
        if (historyIndex > 0) {
          setHistoryIndex(historyIndex - 1);
          setInputValue(history[historyIndex - 1]);
        }
        break;

      case "ArrowDown":
        event.preventDefault();
        if (historyIndex < history.length - 1) {
          setHistoryIndex(historyIndex + 1);
          setInputValue(history[historyIndex + 1]);
        }
        break;
    }
  };

  const handleKeyPress = (event: KeyboardEvent) => {
    if (inputRef.current) {
      switch (event.key) {
        case "Enter":
          event.preventDefault();

          submit(inputValue);
          setInputValue(prompt);

          if (inputValue !== prompt){
            history.push(inputValue);
            setHistoryIndex(history.length);
          }
          break;
      }

      inputRef.current.focus();
    }
  };

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.target.value;

    if (value.startsWith(prompt)) {
      setInputValue(event.target.value);
    }
  };

  return (
    <div className={styles.inputBar}>
      <textarea
        ref={inputRef}
        className={styles.inputBox}
        value={inputValue}
        onChange={handleTextChange}
      />
    </div>
  );
}

export default Input;
