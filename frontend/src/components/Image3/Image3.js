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
       <a target="_blank" href="http://www.kyobobook.co.kr/eventRenewal/eventViewByPid.laf?eventId=87813"><img className={cx('Event3_img2')} src={IMG1} alt="kyobo"></img></a>
       <a target="_blank" href="http://www.yes24.com/eWorld/EventWorld/Event?eventno=190034"><img className={cx('Event3_img2')} src={IMG2} alt="yes24"></img></a>
       <a target="_blank" href="https://www.aladin.co.kr/events/wevent.aspx?EventId=209355&start=pbanner"><img className={cx('Event3_img2')} src={IMG3} alt="alradin"></img></a>
        <a target="_blank" href="http://book.interpark.com/book/genbookeventaction.do?_method=EventPlan&sc.evtNo=235755&bnid1=book_2015&bnid2=relate&bnid3=event&bnid4=cont02"> <img className={cx('Event3_img2')} src={IMG4} alt="interpark"></img></a>
    </div>
);

export default Image3;