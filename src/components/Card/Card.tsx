import React from 'react';
import { Card } from '@mui/material';
import './Card.css';
import direction from '../../assets/direction.svg';
import { Flex, Button } from 'antd';
// import company from '../../static_assets/5934c0fd9d574bddbde8175d86a2d2da.jpg';
import arrow from '../../assets/arrow.svg';
import BadgeComponent from 'components/Badge/BadgeComponent';
import { imageUrl } from 'utils';


interface cardProps {
  data: any;
}

function CardComponent({ data }: cardProps) {

  return (
    <Flex className='cardContainer'>
      {data.map((item: any) => {
        let address = item.address.split(',');
        let bulkDiscount = item.day_pass_discounts_percentage['10'].value;
        // const imagePath = ;
        console.log("item?.google_maps_url: ", item?.google_maps_url);

        return (
          // <div className='card'>
          <Card className='card'>
            <Flex justify='space-between'>
              <p className='topAddress'>{address[1] + address[2]}</p>
              <div className='border'>
                <img src={direction} alt='direction' onClick={item?.google_maps_url?() => window.open(item?.google_maps_url):undefined}/>
                <p className='kilometer'>6 kms</p>
              </div>
            </Flex>
            <img src={imageUrl(item?.images[0])} alt='space' width={'100%'} height={202} className='spaceStyle'></img>
            <Flex>
              <Button className='dayPassButton'>
                <Flex>
                  <div className='btnDetailsContainer'>
                    <p className='passText'>Day Pass</p>
                    <Flex>
                      <h6 className='amount'>₹{item.day_pass_price}</h6>
                      <p className='passSpanText'>/Day</p>
                    </Flex>
                  </div>
                  <img src={arrow} alt='arrow'/>
                </Flex>
              </Button>
              {bulkDiscount && <BadgeComponent content={`${bulkDiscount}% Discount`} color='#263238' className='bulkBadge' />}
              <Button className='bulkPassButton'>
                <Flex>
                  <div className='btnDetailsContainer'>
                    <p className='passText'>Bulk Pass</p>
                    <Flex>
                      <h6 className='amount'>₹{item.day_pass_price}</h6>
                      <p className='passSpanText'>/Days</p>
                    </Flex>
                  </div>
                  <img src={arrow} alt='bulk arrow'/>
                </Flex>
              </Button>
            </Flex>
          </Card>
          // </div>
        );
      })}
    </Flex>
  );
}

export default CardComponent;
