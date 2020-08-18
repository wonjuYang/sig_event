import React from 'react';
import styles from './PlainText.scss';
import classNames from 'classnames/bind';


const cx = classNames.bind(styles);


const PlainText = ({children}) => (
    <div className={cx('PlainText')}>
        <p className={cx('PlainText_p')}>{children}</p>
    </div>
);

export default PlainText;