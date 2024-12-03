import React from 'react';
import { Card } from '@mui/material';
import './Card.css';
import direction from '../../assets/direction.svg';
import { Flex, Button, Image } from 'antd';
// import company from '../../static_assets/5934c0fd9d574bddbde8175d86a2d2da.jpg';
import arrow from '../../assets/arrow.svg';
import BadgeComponent from 'components/Badge/BadgeComponent';
import space from '../../static_assets/4d85410baa074351aa948fc2c5da50d9.jpg';
import space1 from '../../static_assets/e2d0405175f74b5c815658a8ef5ef4b8.jpg';
import space2 from '../../static_assets/5934c0fd9d574bddbde8175d86a2d2da.jpg';
import space3 from '../../static_assets/0a74575ca6004b4bb20dcd131afc5849.jpg';
import space4 from '../../static_assets/0dfe4977f25940aa9d32507d4a233c9c.jpg';

interface cardProps {
  data: any;
}

function CardComponent({ data }: cardProps) {

  return (
    <Flex className='cardContainer'>
      {data.map((item: any) => {
        let address = item.address.split(',');
        let imageUrl = `../../${item?.images[0]}`;
        console.log("imageUrl: ", imageUrl);
        let bulkDiscount = item.day_pass_discounts_percentage['10'].value;
        // const imagePath = ;
        return (
          // <div className='card'>
          <Card className='card'>
            <Flex justify='space-between'>
              <p className='topAddress'>{address[1] + address[2]}</p>
              <div className='border'>
                <img src={direction} />
              </div>
            </Flex>
            <img src={space} alt='space' width={'100%'} height={202} className='spaceStyle'></img>
            {/* <Image src={imageUrl} alt='image' /> */}
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
                  <img src={arrow} />
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
                  <img src={arrow} />
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
