import React from 'react';
import styles from './ImageWrapper.scss';
import classNames from 'classnames/bind';


const cx = classNames.bind(styles);


const ImageWrapper = ({children}) => (
    <div className={cx('ImageWrapper')}>
        {children}
    </div>
);

export default ImageWrapper;