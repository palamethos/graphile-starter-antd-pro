import styles from './index.less';

// TODO: rework spinners

// https://codepen.io/banik/pen/gdKWrq
const Spinner = () => (
  <div className={styles.wrapper}>
    <div className={styles['lds-ripple']}>
      <div />
      <div />
    </div>
  </div>
  // <div className={styles.wrapper}>
  //   <div className={styles.container}>
  //     <div className={styles.triangle}></div>
  //     <div className={styles.triangle}></div>
  //   </div>
  //   {/* <div className={styles.container}>
  //       <div className={styles['triangle shadow']}></div>
  //       <div className={styles['triangle shadow']}></div>
  //     </div> */}
  // </div>
);

export default Spinner;
