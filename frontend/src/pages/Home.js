import React from 'react';
import PageTemplate from '../components/common/PageTemplate';
import Cards from '../components/common/Cards'
import Title from '../components/common/Title'


const Home = () => {
    return (
        <PageTemplate>
            <Title>
                당신과 함께할 내일의 책을 만듭니다.
            </Title>
            <Cards/>
            
        </PageTemplate>
    );
};

export default Home;