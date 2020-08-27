import React from 'react';
import styles from './PlainTextSmall.scss';
import classNames from 'classnames/bind';


const cx = classNames.bind(styles);


const PlainTextSmall = ({children}) => (
    <div className={cx('PlainTextSmall')}>
        <p className={cx('PlainTextSmall_p')}>{children}</p>
    </div>
);

export default PlainTextSmall;