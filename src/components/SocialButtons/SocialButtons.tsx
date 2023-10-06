import React from "react";
import styles from "./SocialButtons.module.css";

type Props = {};

function SocialButtons({}: Props) {
  return (
    <div className={styles.container}>
      <button>
        <a href="https://github.com/jxav22">
          <img src="./logos/github.png" />
        </a>
      </button>
      <button>
        <a href="https://www.linkedin.com/in/jason-xavier-36b938218/">
          <img src="./logos/linkedin.png" />
        </a>
      </button>
      <button>
        <a href="mailto:jasxavier7@gmail.com?subject=Hey%20there%20%5E%5E&body=Feel%20free%20to%20shoot%20me%20a%20message%0A%0AI'm%20always%20keen%20to%20chat!">
          <img src="./logos/gmail.png" />
        </a>
      </button>
    </div>
  );
}

export default SocialButtons;
