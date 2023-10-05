import React from 'react'
import styles from './Output.module.css'

type Props = {
    text: string
}

function Output({text}: Props) {
  return (
    <div className={styles.log}>{text}</div>
  )
}

export default Output