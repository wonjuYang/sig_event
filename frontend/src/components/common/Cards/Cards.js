import React from 'react'
import styles from './Cards.scss';
import classNames from 'classnames/bind';
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CContainer
} from  '@coreui/react'


const cx = classNames.bind(styles);


const Cards = () => {
  return (
    <>
    <div className={cx('cards')}>
        
     <CContainer fluid>
      <CRow>
        <CCol className={cx('ccol')} xs="12" sm= "6" md="4">
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
        <CCol className={cx('ccol')} xs="12" sm= "6" md="4">
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
        <CCol className={cx('ccol')} xs="12" sm= "6" md="4">
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

      </CContainer>
      
    </div>
    </>
  )
}

export default Cards
