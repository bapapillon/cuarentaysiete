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
  top: 0,
  bottom: 0,
  zIndex: 1,
  width: '100%',
  backgroundColor: '#000000C0',
  minHeight: 100
}

const buttonsContainer = {
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'fixed',
  bottom: 0,
  zIndex: 1,
  width: '100%',
  backgroundColor: '#000000C0',
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
  minWidth: 120,
  padding: 10,
  borderRadius: 5,
  fontSize: 16,
  margin: 15
}

const textAreaContainerStyle = {
  position: 'relative',
  minHeight: 300,
  minWidth: 600,
  margin: 30,
  fontSize: 16
}

const textAreaStyle = {
  position: 'relative',
  minHeight: 300,
  minWidth: 600,
  fontSize: 16,
  padding: 30,
  width: 'calc(100% - 60px)',
  height: '300px'
}

const imgStyle = {
  minHeight: 320,
  minWidth: 500
}

const overlayStyle = {
  position: 'absolute',
  top: 0,
  bottom: 0,
  right: 0,
  left: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}

const timerStyle = {
  fontSize: 100
}

const Status = {
  INITIAL: 'INITIAL',
  SHOWING_IMAGE: 'SHOWING_IMAGE',
  READY_TO_WRITE: 'READY_TO_WRITE',
  READY_TO_SEND: 'READY_TO_SEND'
}

const IMAGE_COUNTDOWN_IN_SECONDS = 10
const TEXT_COUNTDOWN_IN_SECONDS = 300

class WriteSection extends Component {
  state = {
    text: null,
    status: Status.INITIAL
  }

  componentDidMount() {
    // this.handleReady()
  }

  componentWillUnmount() {
    clearTimeout(this.timeout)
    clearInterval(this.timerInterval)
  }

  handleLogout = () => {
    auth.signOut().then(() => {
      window.location.reload()
    })
  }

  handleReady = () => {
    this.setState({ status: Status.SHOWING_IMAGE, imageID: random(1000), timer: IMAGE_COUNTDOWN_IN_SECONDS })
    this.timeout = setTimeout(() => {
      clearInterval(this.timerInterval)
      this.setState({ status: Status.READY_TO_WRITE, timer: null }, this.startCountdown)
    }, IMAGE_COUNTDOWN_IN_SECONDS * 1000)

    this.timerInterval = setInterval(() => {
      this.setState(state => ({ ...state, timer: state.timer - 1 }))
    }, 1000)
  }

  startCountdown = () => {
    clearTimeout(this.timeout)
    clearInterval(this.timerInterval)

    this.setState({ timer: TEXT_COUNTDOWN_IN_SECONDS })
    this.timeout = setTimeout(() => {
      clearInterval(this.timerInterval)
      this.setState({ status: Status.READY_TO_SEND, timer: null })
    }, TEXT_COUNTDOWN_IN_SECONDS * 1000)

    this.timerInterval = setInterval(() => {
      this.setState(state => ({ ...state, timer: state.timer - 1 }))
    }, 1000)
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
        this.setState({ status: Status.INITIAL, imageID: null, text: null })
      })
  }

  handleImageLoadError = () => {
    this.setState({ imageID: random(1000) })
  }

  render() {
    const { status, imageID, timer } = this.state
    const imageUrl = imageID ? `https://picsum.photos/600/300/?image=${imageID}` : null

    const containerStyle = { ...container, height: status === Status.INITIAL ? undefined : '100%' }
    const textAreaDisabled = status !== Status.READY_TO_WRITE

    if (status === Status.INITIAL) {
      return (
        <div style={buttonsContainer}>
          <div>
            <button style={buttonStyle} onClick={this.handleReady}>
              Estoy listo!
            </button>
            <button style={buttonStyle} onClick={this.handleLogout}>
              Logout
            </button>
          </div>
        </div>
      )
    }

    return (
      <div style={container}>
        {status !== Status.INITIAL && (
          <div style={writeSectionStyle}>
            <img style={imgStyle} src={imageUrl} onError={this.handleImageLoadError} />
            <div style={textAreaContainerStyle}>
              <textarea
                disabled={textAreaDisabled}
                style={textAreaStyle}
                value={this.state.text}
                onChange={this.handleTextChange}
              />
              {status === Status.SHOWING_IMAGE &&
                timer && (
                  <div style={overlayStyle}>
                    <h3 style={timerStyle}>{timer}</h3>
                  </div>
                )}
            </div>
            <div>
              {status === Status.READY_TO_WRITE && (
                <button style={buttonStyle}>Quedan {this.state.timer} segundos</button>
              )}
              <button style={buttonStyle} onClick={this.handleSubmit}>
                Enviar
              </button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default WriteSection
