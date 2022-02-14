import React from 'react';
import Image from 'next/image';
import styles from './Feedback.module.css';
import feedback_svg from '../public/feedback.svg';

export default function Feedback(): JSX.Element {
  return (
    <div className={`page-part ${styles.feedback}`} id='feedback'>
      <Image src={feedback_svg} />
    </div>
  );
}
