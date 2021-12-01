import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Form from '../Form/Form';
import Projects from '../Projects/Projects';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Projects />
            <Form></Form>
            <Footer></Footer>
        </div>
    );
};

export default Home;