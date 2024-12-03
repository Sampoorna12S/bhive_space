import { Col, Flex, Row } from 'antd';
import React from 'react';
import './Tiles.css';

interface TilesProps {
  data: any;
  style?: any;
}

function Tiles({ data, style }: TilesProps) {
  return (<Flex wrap justify="space-between" align='center' style={{ padding: '25px' }}>
    {(data.map((item: any) => {
      return (<div style={{ display: 'flex', flex: '1 1 calc(20.33% - 16px)', margin: '10px', justifyItems: "flex-start", gap: 20, width: 100 }}>
        <img src={item.icon} />
        <div style={style} className='content'>{item.title}</div>
      </div>
        // </div>
      );
    }
    ))};
  </Flex>);
}
export default Tiles;
