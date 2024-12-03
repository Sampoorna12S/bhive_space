import React from 'react';
import bg_top from 'assets/bg_top_image.svg';
import phone_top_img from 'assets/phone_top_image.svg';
import { Flex } from 'antd';
import './TopBanner.css';

function TopBanner() {
  const START_RATE = '₹199/-!';
  return (
    <>
      <Flex className='topBanner' wrap justify="space-around" rootClassName='flexContainer' align='center' gap={0}>
        <img src={bg_top} className='topImages' />
        <img src={phone_top_img} className='manImage' />
      </Flex>
      <h1 className='topContent'>Host your meeting with world-class amenities. Starting at <b style={{ color: '#FFBB00' }}>{START_RATE}</b></h1>
    </>
  );
}

export default TopBanner;
