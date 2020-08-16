import React from 'react'
import styles from './Cards.scss';
import classNames from 'classnames/bind';
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow
} from  '@coreui/react'


const cx = classNames.bind(styles);


const Cards = () => {
  return (
    <>
    <div className={cx('card_content')}>
      <CRow>
        <CCol className={cx('ccol')} xs="12" md="4">
          <CCard>
            <CCardHeader>
              Card title
            </CCardHeader>
            <CCardBody>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
              laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
              ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
            </CCardBody>
          </CCard>
        </CCol>
        <CCol className={cx('ccol')} xs="12" md="4">
        <CCard>
            <CCardHeader>
              Card title
            </CCardHeader>
            <CCardBody>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
              laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
              ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
            </CCardBody>
          </CCard>
        </CCol>
        <CCol className={cx('ccol')} xs="12" md="4">
        <CCard>
            <CCardHeader>
              Card title
            </CCardHeader>
            <CCardBody>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
              laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
              ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      </div>
    </>
  )
}

export default Cards
