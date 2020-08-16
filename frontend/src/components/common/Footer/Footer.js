import React from 'react';
import styles from './Footer.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import {
    CButton, CButtonGroup
  } from '@coreui/react'
  import CIcon from '@coreui/icons-react'
  import { cibTwitter, cibFacebook, cibYoutube, cibInstagram } from '@coreui/icons'



const cx = classNames.bind(styles);


const Footer = () => (
    <footer className={cx('footer')}>
        <Link to="/" className={cx('brand')}> SIGONGSA </Link>
        <CButtonGroup>
            <CButton size="sm" className="btn-facebook btn-brand mr-1 mb-1" href="https://facebook.com/sigongsa"><CIcon content={cibFacebook} /></CButton>
            <CButton size="sm" className="btn-twitter btn-brand mr-1 mb-1" href="https://twitter.com/sigongfore"><CIcon content={cibTwitter} /></CButton>
            <CButton size="sm" className="btn-youtube btn-brand mr-1 mb-1" href="https://www.youtube.com/user/sigongbook"><CIcon content={cibYoutube} /></CButton>
            <CButton size="sm" className="btn-instagram btn-brand mr-1 mb-1" href="https://www.instagram.com/sigongsa_books/"><CIcon content={cibInstagram} /></CButton>
        </CButtonGroup>
    </footer>

   

);

export default Footer;