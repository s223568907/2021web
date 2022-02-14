import React from 'react';
import Image from 'next/image';
import styles from './PhoneDownload.module.css';
import bigMobileIcon from '/public/mobilePhone/download/bigMobileIcon.png';
import runnerImage from '/public/mobilePhone/download/runner.png';
import downloadButton from '/public/mobilePhone/download/download.png';
import compatibleOS from '/public/mobilePhone/download/CompatibleOS.png';
function download(): void {
  // TODO
  alert('download!');
}
export default function PhoneMain(): JSX.Element {
  return (
    <>
      <div className={styles.phonemain}>
        <div className={styles.bigmobileicon} key='bigMobileIcon'>
          <Image src={bigMobileIcon} width={342} height={157}></Image>
        </div>
        <div className={styles.runner} key='runnerImage'>
          <Image src={runnerImage} width={428} height={362}></Image>
        </div>
        <div
          className={styles.downloadButton}
          onClick={() => download()}
          key='downloadButton'>
          <Image src={downloadButton} width={200} height={49}></Image>
        </div>
        <div className={styles.compatibleOS} key='compatibleOS'>
          <Image src={compatibleOS} width={151.78} height={42}></Image>
        </div>
      </div>
    </>
  );
}
