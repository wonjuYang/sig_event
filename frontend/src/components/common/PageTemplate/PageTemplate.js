import React from 'react';
import styles from './PageTemplate.scss';
import classNames from 'classnames/bind';
import Header from '../../common/Header'
import Footer from '../../common/Footer';

const cx = classNames.bind(styles);

const PageTemplate = ({children}) => (
    <div className={cx('page-template')}>
        
        <Header/>
        <main>
            <div className={cx('page-wrapper')}>
                {children}    
            </div>
        </main>
        <Footer/>
    </div>
);

export default PageTemplate;