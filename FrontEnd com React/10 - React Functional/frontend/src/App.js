import React, { Component } from 'react'
import Header from './components/Header'
import Spinner from './components/Spinner'

export default class App extends Component {
  constructor() {
    super()

    this.state = {
      candidates: [],
    }

    this.interval = null
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      fetch('http://localhost:8080/votes')
        .then((res) => {
          return res.json()
        })
        .then((json) => {
          this.setState({ candidates: json.candidates })
        })
    }, 1000)
  }

  render() {
    const { candidates } = this.state

    if (candidates.length === 0) {
      return <Spinner description="Carregando..." />
    }

    return (
      <div>
        <Header>Votação</Header>
        {candidates.map(({ id, name, votes }) => {
          return (
            <p key={id}>
              {name} - {votes}
            </p>
          )
        })}
      </div>
    )
  }
}