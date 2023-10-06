import React, { useEffect, useState } from "react";
import styles from "./ProfileDisplay.module.css"

type Props = {};

function ProfileDisplay({}: Props) {
  return (
    <div className={styles.container}>
        <img className={styles.imageOne} src="/Profile1.png" alt="Profile 1" />
        <img className={styles.imageTwo} src="/Profile2.png" alt="Profile 2" />
        <img className={styles.imageThree} src="/Profile3.png" alt="Profile 3" />
        <img className={styles.imageFour} src="/Profile4.png" alt="Profile 4" />
    </div>
  );
}

export default ProfileDisplay;
