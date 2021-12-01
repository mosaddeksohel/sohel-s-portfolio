import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Form from '../Form/Form';
import Navigation from '../Navigation/Navigation';
import Projects from '../Projects/Projects';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Projects />
            <Form></Form>
            <Footer></Footer>
        </div>
    );
};

export default Home;