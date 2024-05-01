import React from 'react';
import './home.css';
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import Chart from '../../components/chart/Chart';
import { userData } from '../../constants/chat';

const Home = () => {
  const title = 'User Analytics';
  
  return (
    <div className='home-container'>
        <FeaturedInfo />
        <Chart title={title} data={userData} xDataKey='name' dataKey='Active User' grid />
    </div>
  )
}

export default Home