import { Component } from 'react';
import { database, auth } from '../../lib/firebase';

const container = {
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'fixed',
  bottom: 0,
  zIndex: 1,
  backgroundColor: 'rgba(255,255,255,0.9)',
  width: '100%',
  minHeight: 50
};

const writeSectionStyle = {
  display: 'flex',
  height: '100%',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
};

const buttonStyle = {
  width: 120,
  fontSize: 16,
  margin: 15
};

const textAreaStyle = {
  minHeight: 300,
  minWidth: 500,
  padding: 30,
  margin: 30,
  fontSize: 16
};

const imgStyle = {
  minHeight: 300,
  minWidth: 500
};

class WriteSection extends Component {
  handleClick = () => {
    this.setState({ writeModeEnabled: true });
  };

  handleTextChange = event => {
    this.setState({ text: event.target.value });
  };

  handleSubmit = () => {
    let title = prompt('Elegí un título');
    const postsRef = database.ref(`posts/${auth.currentUser.uid}`);

    console.log('a ver', postsRef, auth.currentUser);

    const newPostRef = postsRef.push().set({
      title,
      text: this.state.text
    });
  };

  render() {
    const writeModeEnabled = this.state && this.state.writeModeEnabled;

    return (
      <div style={container}>
        {!writeModeEnabled && (
          <button style={buttonStyle} onClick={this.handleClick}>
            Estoy listo!
          </button>
        )}
        {writeModeEnabled && (
          <div style={writeSectionStyle}>
            <img style={imgStyle} src="https://picsum.photos/600/300/?image=109" />
            <textarea style={textAreaStyle} value={this.state.text} onChange={this.handleTextChange} />
            <button style={buttonStyle} onClick={this.handleSubmit}>
              Enviar
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default WriteSection;
