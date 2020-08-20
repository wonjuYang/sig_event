import React from 'react'
import styles from './Subtitle2.scss';
import classNames from 'classnames/bind';



const cx = classNames.bind(styles);


const Subtitle2 = ({children}) => (

     <div className={cx('Subtitle2')}>
          <h4>{children}</h4>
     </div>
 
);


export default Subtitle2
