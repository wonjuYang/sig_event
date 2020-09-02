import React from 'react';
import styles from './Image.scss';
import classNames from 'classnames/bind';


const cx = classNames.bind(styles);


const Image = () => (
    <div>
       <img src="https://pbs.twimg.com/profile_images/1229648168276545537/Tn8knLq9_400x400.jpg" alt="sigongsaCircle"></img>
       <img className={cx('collabo')} src="https://upload.wikimedia.org/wikipedia/commons/c/ca/Transparent_X.png" alt="collab"></img>
       <img src=" https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/7nQg/image/hsSWuQgyova66MhB4UMAakl_72o.png" alt="kyobo"></img>
    </div>
);

export default Image;