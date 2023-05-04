import React from 'react';
import { Carousel, Navbar } from 'react-bootstrap';
import Navibar from '../../Shared/NaviBar/Navibar';
import ChefInfo from '../../ChefsInfo/ChefInfo/ChefInfo';
import ExtraSection from '../ExtraSection1/ExtraSection';
import ExtraSection2 from '../ExtraSection2/ExtraSection2';

const Home = () => {
    return (
        <div>
          <ChefInfo></ChefInfo>
          <ExtraSection></ExtraSection>
          <ExtraSection2></ExtraSection2>
        </div>
    );
};

export default Home;