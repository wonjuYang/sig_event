import React from 'react';
import styles from './Image2.scss';
import classNames from 'classnames/bind';
import IMG1 from '../../image/Event3_1.PNG'
import IMG2 from '../../image/Event3_2.PNG'


const cx = classNames.bind(styles);


const Image2 = () => (
    <div>
       <img className={cx('Event3_img')} src={IMG1} alt="sigongsaCircle"></img>
       <img className={cx('Event3_img')}src={IMG2} alt="collab"></img>
    </div>
);

export default Image2;