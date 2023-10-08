import React, { useState, useEffect, useRef, forwardRef } from "react";
import styles from "./Input.module.css";

type Props = {
  submit: (input: string) => void;
  prompt: string;
};

const history: string[] = [];

const Input = forwardRef(({ submit, prompt }: Props, ref: any) => {
  const [inputValue, setInputValue] = useState(prompt);

  const [historyIndex, setHistoryIndex] = useState(0);

  const handleKeyPress = (event: KeyboardEvent) => {
    if (ref.current) {
      switch (event.key) {
        case "Enter":
          event.preventDefault();

          submit(inputValue);
          setInputValue(prompt);

          if (inputValue !== prompt) {
            const rawInput = inputValue.substring(prompt.length);
            history.push(rawInput);
            setHistoryIndex(history.length);

            ref.current.style.height = "auto";
          }
          break;
      }

      ref.current.focus();
    }
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (history.length === 0) return;

    switch (event.key) {
      case "ArrowUp":
        event.preventDefault();
        if (historyIndex > 0) {
          setHistoryIndex(historyIndex - 1);
          setInputValue(`${prompt}${history[historyIndex - 1]}`);
        }
        break;

      case "ArrowDown":
        event.preventDefault();
        if (historyIndex < history.length - 1) {
          setHistoryIndex(historyIndex + 1);
          setInputValue(`${prompt}${history[historyIndex + 1]}`);
        }
        break;
    }
  };

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.target.value;

    if (value.startsWith(prompt)) {
      setInputValue(event.target.value);

      ref.current.style.height = `${ref.current.scrollHeight}px`;
    }
  };

  useEffect(() => {
    history.push(`🥚YOU FOUND AN EASTER EGG! [HIT ENTER]`);
  }, []);

  useEffect(() => {
    window.addEventListener("keypress", handleKeyPress);

    return () => {
      window.removeEventListener("keypress", handleKeyPress);
    };
  }, [handleKeyPress]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <div className={styles.inputBar}>
      <textarea
        ref={ref}
        className={styles.inputBox}
        value={inputValue}
        onChange={handleTextChange}
      />
    </div>
  );
});

Input.displayName = "Input";
export default Input;
