import { Component } from 'react';
import Box from '../Box';

const gridStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'column'
};

export default class Grid extends Component {
  render() {
    const data = this.props.data;

    const images = data.map(item => item.image);

    return <div style={gridStyle}>{data.map((item, i) => <Box key={i} item={item} />)}</div>;
  }
}
