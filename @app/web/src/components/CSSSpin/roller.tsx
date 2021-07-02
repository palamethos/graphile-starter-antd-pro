import { FC } from 'react';

import styles from './roller.less';

const CSSSpin: FC = (_) => {
  return (
    <div className={styles['lds-roller']}>
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </div>
  );
};

export default CSSSpin;
