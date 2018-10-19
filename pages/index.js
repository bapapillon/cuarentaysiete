import { Component } from 'react'
import { map, values, flatten, orderBy } from 'lodash'

import { database } from '../lib/firebase'
import Head from 'next/head'
import firebase from 'firebase'
import Grid from '../components/Grid'
import Login from '../components/Login'
import Box from '../components/Box'
import Button from '../components/Button'
import WriteSection from '../components/WriteSection'

const mockData = [
  {
    title: 'Bienvenido a mil y un caracteres',
    text: 'Este es un lugar donde leeras y compartiras tus textos y no se que mas ',
    imageUrl: 'https://cdn.tn.com.ar/sites/default/files/styles/1366x765/public/2016/07/04/borges_0.jpg',
    backgroundColor: '#E8F3EC'
  }
]

export default class App extends Component {
  state = {
    loggedUser: null,
    allTexts: []
  }

  handleAuthStateChanged = loggedUser => {
    this.setState({ loggedUser })
  }

  componentDidMount() {
    database.ref('posts').on(
      'value',
      snapshot => {
        const textByUser = snapshot.val()
        const allTexts = orderBy(flatten(map(textByUser, texts => values(texts))), 'timestamp', 'desc')
        this.setState({ allTexts })
      },
      err => console.error(err)
    )
  }

  render() {
    const { loggedUser } = this.state
    const data = mockData.concat(this.state.allTexts)

    return (
      <div style={styles.home}>
        <Head>
          <title>1001 caracteres</title>
          <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700,800" rel="stylesheet" />
        </Head>
        <Grid data={data} />
        {loggedUser && <WriteSection />}
        {!loggedUser && <Login user={loggedUser} onAuthStateChanged={this.handleAuthStateChanged} />}
      </div>
    )
  }
}

const styles = {
  home: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#EEEEEE',
    alignItems: 'center'
  }
}
