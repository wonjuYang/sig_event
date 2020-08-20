import React from 'react';
import styles from './EventSectionText.scss';
import classNames from 'classnames/bind';


const cx = classNames.bind(styles);


const EventSectionText = ({children}) => (
    <div className={cx('EventSectionText')}>
        <p className={cx('EventSectionText_p')}>{children}</p>
    </div>
);

export default EventSectionText;