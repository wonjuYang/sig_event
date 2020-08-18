import React from 'react';
import PageTemplate from '../components/common/PageTemplate';
import Cards from '../components/common/Cards'
import Title from '../components/common/Title'
import VerticalTabs from '../components/VerticalTabs';
import PlainText from '../components/common/PlainText';


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
            <VerticalTabs/>
                      
        </PageTemplate>
    );
};

export default Home;