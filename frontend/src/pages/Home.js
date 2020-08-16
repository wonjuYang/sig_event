import React from 'react';
import PageTemplate from '../components/common/PageTemplate';
import Cards from '../components/common/Cards'
import Title from '../components/common/Title'


const Home = () => {
    return (
        <PageTemplate>
            <Title>
                여기에 입력한 값이 타이틀이 된다
            </Title>
            <Cards/>
            
        </PageTemplate>
    );
};

export default Home;