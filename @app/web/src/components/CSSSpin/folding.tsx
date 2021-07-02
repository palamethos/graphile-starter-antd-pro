import { FC } from 'react';

import styles from './folding.less';

const CSSSpin: FC = (_) => {
  return (
    <div className={styles['sk-folding-cube']}>
      <div className={`${styles['sk-cube1']} ${styles['sk-cube']}`} />
      <div className={`${styles['sk-cube2']} ${styles['sk-cube']}`} />
      <div className={`${styles['sk-cube4']} ${styles['sk-cube']}`} />
      <div className={`${styles['sk-cube3']} ${styles['sk-cube']}`} />
    </div>
  );
};

export default CSSSpin;
