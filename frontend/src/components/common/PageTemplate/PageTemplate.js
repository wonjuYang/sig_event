import React from 'react';
import styles from './PageTemplate.scss';
import classNames from 'classnames/bind';
import Header from '../../common/Header'
import Footer from '../../common/Footer';
import Menu from '../../common/Menu';

const cx = classNames.bind(styles);

const PageTemplate = ({children}) => (
    <div className={cx('page-template')}>
        <Header/>
        <main>
            {children}
            <Menu/>
        </main>
        <Footer/>
    </div>
);

export default PageTemplate;