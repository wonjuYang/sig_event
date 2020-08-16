import React from 'react';
import styles from './Title.scss';
import classNames from 'classnames/bind';


const cx = classNames.bind(styles);


const Title = ({children}) => (
    <h1 className={cx('title')}>
        {children}
    </h1>
);

export default Title;