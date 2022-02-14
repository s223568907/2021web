import React from 'react';
import styles from './GifSwitchingWrapper.module.css';
import GifSwitching from '../gifSwitchingForMobile';
export default function PhoneMain(): JSX.Element {
  return (
    <>
      <div className={styles.wrapper}>
        <GifSwitching />
      </div>
    </>
  );
}
