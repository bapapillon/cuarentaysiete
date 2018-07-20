export default ({ item = {} }) => {
  const imageStyle = {
    position: 'absolute',
    opacity: 0.9,
    height: 300,
    width: 400,
  }

  const boxStyle = {
    display: 'flex',
    justifyContent: 'center',
    height: 300,
    width: 400,
  }

  const textStyle = {
    flex: 1,
    fontSize: 20,
    fontFamily: 'Lato',
    color: 'white',
  }

  return (
    <div style={boxStyle}>
      <img src={item.image} style={imageStyle} />

      <div style={boxStyle}>
        <div style={textStyle}>{item.text}</div>
      </div>
    </div>
  )
}
