import React from 'react';
import CardComponent from '../components/Card/Card';
import { useSelector } from 'react-redux';
import { FetchState } from '../reducers/fetchReducer';
import Tiles from 'components/Tiles/Tiles';
import { BENEFITS } from '../constants';
import TopBanner from 'components/TopBanner/TopBanner';
import download from 'assets/bottom_download.svg';

function SpaceOverview() {
  const { data }: FetchState = useSelector((state: any) => state.fetchReducer);
  console.log("data: ", data);
  return (
    <div style={{ padding: '25px' }}>
      <TopBanner />
      <h1 style={{ padding: '25px' }}>Why Choose Us?</h1>
      <Tiles data={BENEFITS} />
      <h1 style={{ padding: '25px' }}>Our Space Overview</h1>
      <CardComponent data={data} />
      <img src={download} alt='download'/>
    </div>
  );
}

export default SpaceOverview;
