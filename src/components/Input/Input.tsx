import React, { useState, useEffect, useRef } from "react";
import styles from "./Input.module.css";

type Props = {
  submit: (input: string) => void;
  prompt: string;
};

function Input({ submit, prompt }: Props) {
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const [inputValue, setInputValue] = useState(prompt);

  useEffect(() => {
    window.addEventListener("keypress", handleKeyPress);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("keypress", handleKeyPress);
    };
  }, [inputValue]);

  const handleKeyPress = (event: KeyboardEvent) => {
    if (inputRef.current) {
      if (event.key === "Enter") {
        event.preventDefault();

        submit(inputValue);
        setInputValue(prompt);
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
