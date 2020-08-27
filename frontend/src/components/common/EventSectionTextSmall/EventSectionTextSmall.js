import React from 'react';
import styles from './EventSectionTextSmall.scss';
import classNames from 'classnames/bind';


const cx = classNames.bind(styles);


const EventSectionTextSmall = ({children}) => (
    <div className={cx('EventSectionTextSmall')}>
        <p className={cx('EventSectionTextSmall_p')}>{children}</p>
    </div>
);

export default EventSectionTextSmall;