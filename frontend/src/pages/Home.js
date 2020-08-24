import React from 'react';
import PageTemplate from '../components/common/PageTemplate';
import Cards from '../components/common/Cards'
import Title from '../components/common/Title'
import VerticalTabs from '../components/VerticalTabs';
import PlainText from '../components/common/PlainText';
import Subtitle2 from '../components/common/Subtitle2';
import EventSection from '../components/EventSection';
import Subtitle1 from '../components/common/Subtitle1';
import EventSectionText from '../components/common/EventSectionText';
import Button_custom from '../components/common/Button_custom';
import EventSectionWrapper from '../components/EventSectionWrapper';

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
                    <Button_custom>이벤트 바로가기</Button_custom>


                </EventSection>
            </EventSectionWrapper>
            <VerticalTabs/>
            
                      
        </PageTemplate>
    );
};

export default Home;