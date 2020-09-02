import React from 'react';
import PageTemplate from '../components/common/PageTemplate';
import Cards from '../components/Cards'
import Title from '../components/common/Title'
import VerticalTabs from '../components/VerticalTabs';
import PlainText from '../components/common/PlainText';
import Subtitle2 from '../components/common/Subtitle2';
import EventSection from '../components/common/EventSection';
import Subtitle1 from '../components/common/Subtitle1';
import EventSectionText from '../components/common/EventSectionText';
import EventSectionTextSmall from '../components/common/EventSectionTextSmall';
import ButtonCustom from '../components/common/ButtonCustom';
import EventSectionWrapper from '../components/common/EventSectionWrapper';
import Grid3 from '../components/Grid3'
import Chip from '../components/common/Chip'
import ImageWrapper from '../components/common/ImageWrapper'
import Image from '../components/Image'

const Home = () => {
    return (
        <PageTemplate>
            <Title>
                당신과 함께할 내일의 책을 만듭니다.
            </Title>
            <PlainText>
                책을 통해 작가와 작품, 독자를 이어온 시공사가<br></br>
                독자님들의사랑과 관심으로 30번째 생일을 맞이했습니다.<br></br>
                앞으로도 독자님에게 재미와 지식을 전할 책을 선보이겠습니다. <br></br>
                30주년을 기념하여 준비한 이벤트에 많은 참여 부탁드립니다.<br></br>
            </PlainText> 
            <Cards/>
            <EventSectionWrapper>
                <EventSection>
                    <Subtitle2>
                        <span className="underline--magical">Event 1 <br></br></span>
                        <span className="underline--magical">늘 곁에 머무는 마음</span>
                    </Subtitle2>
                    <Subtitle1>
                        월요일에 만나는 책
                    </Subtitle1>
                    <EventSectionText>
                    30년 동안 시공사를 응원해주신 독자님들께 보답하는 마음으로<br></br>
                    매주 월요일 오후 3시 선착순 300분께.<br></br>
                    시공사가 자신 있게 추천하는 4권의 ebook 30일 대여권을 드립니다.<br></br>
                    </EventSectionText>
                    <Grid3></Grid3>
                    <EventSectionTextSmall>
                        ※시공북클럽 홈페이지 가입이 필요합니다.<br></br>
                        해당 eBook 대여권은 교보문고를 통해 이용하실 수 있습니다.<br></br>
                    </EventSectionTextSmall>
                    <ImageWrapper>
                        <Image></Image>
                    </ImageWrapper>
                    <ButtonCustom>참여하기</ButtonCustom>
                </EventSection>
                <EventSection>
                    <Subtitle2>
                        <span className="underline--magical">Event 2 <br></br></span>
                        <span className="underline--magical">책으로 이어가는 마음</span>
                    </Subtitle2>
                    <Subtitle1>
                        함께 만드는 이음서재
                    </Subtitle1>
                    <EventSectionText>
                    여러분이 추천하고 싶은 시공사의 책은 무엇인가요?<br></br>
                    감명 깊게 읽었떤 책, 꼭 한번은 읽어야 할 책, 재미있게 읽었던 책 등<br></br>
                    여러분이 읽었던 시공사 책 중 가장 기억에 남은 책을 인스타그램에 올려주세요.<br></br>
                    추첨을 통해 총 30명에게 선물을 드립니다.<br></br>
                    </EventSectionText>

                    <Chip> 이벤트 기간 </Chip>
                    2020.08.15 ~ 2020.09.15
                    <Chip> 참여 방법 </Chip>
                    인스타그램
                    <Chip> 참여 필수 해시태그 </Chip>
                    시공사 
                    <Chip> 당첨자 발표 </Chip>
                    <Chip> 당첨 상품 </Chip>
                    인스타그램바로가기
                    <ButtonCustom>참여하기</ButtonCustom>
                </EventSection>
            </EventSectionWrapper>
            <VerticalTabs/>
            
                      
        </PageTemplate>
    );
};

export default Home;