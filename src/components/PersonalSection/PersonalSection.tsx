import React from 'react'
import styles from './PersonalSection.module.css'
import ProfileDisplay from '../ProfileDisplayFreeForm/ProfileDisplay'

type Props = {
  className: string;
}

function PersonalSection({className}: Props) {
  return (
    <div className={`${styles.container} ${className}`}>
        <ProfileDisplay/>
    </div>
  )
}

export default PersonalSection