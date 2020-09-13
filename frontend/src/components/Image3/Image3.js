import React from 'react';
import styles from './Image3.scss';
import classNames from 'classnames/bind';
import IMG1 from '../../image/kyobo.png'
import IMG2 from '../../image/yes24.png'
import IMG3 from '../../image/alradin.png'
import IMG4 from '../../image/interpark.jpg'



const cx = classNames.bind(styles);


const Image3 = () => (
    <div>
       <img className={cx('Event3_img2')} src={IMG1} alt="kyobo"></img>
       <img className={cx('Event3_img2')} src={IMG2} alt="yes24"></img>
       <img className={cx('Event3_img2')} src={IMG3} alt="alradin"></img>
       <img className={cx('Event3_img2')} src={IMG4} alt="interpark"></img>
    </div>
);

export default Image3;