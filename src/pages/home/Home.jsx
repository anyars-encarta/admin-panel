import React from 'react';
import './home.css';
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import Chart from '../../components/chart/Chart';

const Home = () => {
  return (
    <div className='home-container'>
        <FeaturedInfo />
        <Chart />
    </div>
  )
}

export default Home