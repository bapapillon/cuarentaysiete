import Grid from '../components/grid'
import Box from '../components/box'
import Button from '../components/button'

const mockData = [
  { text: 'Las olas y el viento', image: 'https://picsum.photos/400/300/?image=100' },
  { text: 'Los toros son peludos', image: 'https://picsum.photos/400/300/?image=200' },
  { text: 'El campo y la soledad', image: 'https://picsum.photos/400/300/?image=300' },
  { text: 'El rocio de la mañana', image: 'https://picsum.photos/400/300/?image=400' },
]

export default () => (
  <div>
    <Grid data={mockData} />
    <Button />
  </div>
)
