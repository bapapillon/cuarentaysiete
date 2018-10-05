import { Component } from 'react'
import { random } from 'lodash'
import { database, auth } from '../../lib/firebase'

const container = {
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'fixed',
  bottom: 0,
  zIndex: 1,
  width: '100%',
  backgroundColor: '#00000080',
  minHeight: 100
}

const writeSectionStyle = {
  display: 'flex',
  height: '100%',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
}

const buttonStyle = {
  width: 120,
  fontSize: 16,
  margin: 15
}

const textAreaStyle = {
  minHeight: 300,
  minWidth: 500,
  padding: 30,
  margin: 30,
  fontSize: 16
}

const imgStyle = {
  minHeight: 300,
  minWidth: 500
}

class WriteSection extends Component {
  state = {
    text: null,
    writeModeEnabled: false
  }

  handleLogout = () => {
    auth.signOut().then(() => {
      window.location.reload()
    })
  }

  handleReady = () => {
    this.setState({ writeModeEnabled: true, imageID: random(1000) })
  }

  handleTextChange = event => {
    this.setState({ text: event.target.value })
  }

  handleSubmit = () => {
    const { text, imageID } = this.state
    let title = prompt('Elegí un título')
    const postsRef = database.ref(`posts/${auth.currentUser.uid}`)

    const timestamp = Date.now()

    const newPostRef = postsRef
      .push()
      .set({
        title,
        text,
        imageID,
        timestamp
      })
      .then(() => {
        this.setState({ writeModeEnabled: false, imageID: null, text: null })
      })
  }

  handleImageLoadError = () => {
    this.setState({ imageID: random(1000) })
  }

  render() {
    const { writeModeEnabled, imageID } = this.state
    const imageUrl = imageID ? `https://picsum.photos/600/300/?image=${imageID}` : null

    const containerStyle = { ...container, height: writeModeEnabled ? '100%' : undefined }

    return (
      <div style={container}>
        {!writeModeEnabled && (
          <div>
            <button style={buttonStyle} onClick={this.handleReady}>
              Estoy listo!
            </button>
            <button style={buttonStyle} onClick={this.handleLogout}>
              Logout
            </button>
          </div>
        )}
        {writeModeEnabled && (
          <div style={writeSectionStyle}>
            <img style={imgStyle} src={imageUrl} onError={this.handleImageLoadError} />
            <textarea style={textAreaStyle} value={this.state.text} onChange={this.handleTextChange} />
            <button style={buttonStyle} onClick={this.handleSubmit}>
              Enviar
            </button>
          </div>
        )}
      </div>
    )
  }
}

export default WriteSection
