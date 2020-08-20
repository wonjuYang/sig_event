import React from 'react';
import styles from './Subtitle1.scss'
import classNames from 'classnames/bind';




const cx = classNames.bind(styles);



const Subtitle1 = ({children}) => (
    <div className={cx('Subtitle1')}>
        <h1>{children}</h1>
    </div>
);

export default Subtitle1;