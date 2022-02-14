import React from 'react';
import styles from './FeedbackEn.module.css';

export default function FeedbackEn(): JSX.Element {
  return (
    <div className={`page-part ${styles.feedback}`} id='Feedback'>
      <img src='feedback.svg' />
    </div>
  );
}
