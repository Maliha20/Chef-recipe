import React from 'react';
import { Carousel, Navbar } from 'react-bootstrap';
import Navibar from '../../Shared/NaviBar/Navibar';
import ChefInfo from '../../ChefsInfo/ChefInfo/ChefInfo';
import ExtraSection from '../ExtraSection1/ExtraSection';

const Home = () => {
    return (
        <div>
          <ChefInfo></ChefInfo>
          <ExtraSection></ExtraSection>
        </div>
    );
};

export default Home;