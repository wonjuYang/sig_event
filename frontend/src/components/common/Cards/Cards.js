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
          <CCard className="text-center">
            <CCardHeader>
              Event 1
            </CCardHeader>
            <CCardBody>
              <h4 className={cx('cards-contnets-title')}>늘 곁에 머무는 마음,</h4>
              <h2>월요엘이 만나는 책</h2>
              <div className={cx('cards-contents')}>
                시공사가 추천하는 4종 책을<br></br>
                매주 월요일 300분께<br></br>
                무료로 대여해드립니다.
              </div>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol className={cx('ccol')} xs="12" sm= "6" md="4">
        <CCard className="text-center">
            <CCardHeader>
              Event 2
            </CCardHeader>
            <CCardBody>
              <h4 className={cx('cards-contnets-title')}>책으로 이어가는 마음,</h4>
              <h2>함께 만드는 이음서재</h2>
              <div className={cx('cards-contents')}>
                내가 추천하고 싶은 시공사의 책은?<br></br>
                책 사진을 찍어서 올려주시면<br></br>
                추첨을 통해 다양한 선물을 드립니다.<br></br>
              </div>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol className={cx('ccol')} xs="12" sm= "6" md="4">
        <CCard className="text-center">
            <CCardHeader>
              Event3
            </CCardHeader>
            <CCardBody>
              <h4 className={cx('cards-contnets-title')}>책을 나누고 싶은 마음,</h4>
              <h2>시공사 30주년 브랜드전</h2>
              <div className={cx('cards-contents')}>
                지금 가장 핫한 신간에서부터 <br></br>
                시공사의 베스트셀러까지 <br></br>
                구매 금액별 특별 굿즈를 만나보세요 <br></br>
              </div>
              
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
