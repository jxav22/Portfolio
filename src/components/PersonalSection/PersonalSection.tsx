import React from 'react'
import styles from './PersonalSection.module.css'
import ProfileDisplay from '../ProfileDisplayFreeForm/ProfileDisplay'
import SocialButtons from '../SocialButtons/SocialButtons';

type Props = {
  className: string;
}

function PersonalSection({className}: Props) {
  return (
    <div className={`${styles.container} ${className}`}>
        <ProfileDisplay/>
        <SocialButtons/>
    </div>
  )
}

export default PersonalSection