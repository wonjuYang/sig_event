import React from 'react'
import styles from './EventSection.scss';
import classNames from 'classnames/bind';



const cx = classNames.bind(styles);


const EventSection = ({children}) => (

     <div className={cx('EventSection')}>{children}</div>
 
);


export default EventSection
