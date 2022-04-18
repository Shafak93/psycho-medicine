import React from 'react';
import Askquestion from '../Askquestion/Askquestion';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Askquestion></Askquestion>
            <Footer></Footer>
        </div>
    );
};

export default Home;