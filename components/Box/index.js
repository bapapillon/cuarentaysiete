const imageStyle = {
  height: 300,
  width: 600,
  objectFit: 'cover'
}

const boxStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  backgroundColor: 'white',
  width: 600,
  zIndex: 1,
  marginBottom: 10
}

const titleStyle = {
  padding: 15,
  fontSize: 20,
  fontFamily: 'Open-Sans',
  color: '#444',
  textShadow: ''
}

const textStyle = {
  padding: 15,
  paddingTop: 0,
  fontSize: 17,
  fontFamily: 'Open-Sans',
  color: '#444',
  textAlign: 'justify'
}

export default ({ item = {} }) => {
  const { imageID, imageUrl } = item

  return (
    <div style={boxStyle}>
      <img src={imageUrl || `https://picsum.photos/600/300/?image=${item.imageID}`} style={imageStyle} />

      <div style={boxStyle}>
        <div style={titleStyle}>{item.title}</div>
        <div style={textStyle}>{item.text}</div>
      </div>
    </div>
  )
}
