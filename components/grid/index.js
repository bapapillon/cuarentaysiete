import { Component } from 'react'
import Box from '../box'

const gridStyle = {
  display: 'flex',
  flexWrap: 'wrap',
}

export default class Grid extends Component {
  render() {
    const data = this.props.data

    const images = data.map(item => item.image)

    console.warn('data', data)
    console.warn('images', images)

    const nombre = 'Camilo'

    return <div style={gridStyle}>{data.map(item => <Box item={item} />)}</div>
  }
}
