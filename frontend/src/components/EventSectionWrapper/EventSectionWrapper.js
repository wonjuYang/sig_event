import React from 'react'
import styles from './EventSectionWrapper.scss';
import classNames from 'classnames/bind';



const cx = classNames.bind(styles);


const EventSectionWrapper = ({children}) => (

     <div className={cx('EventSectionWrapper')}>{children}</div>
 
);


export default EventSectionWrapper
