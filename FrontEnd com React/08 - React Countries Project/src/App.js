import React, { Component } from 'react'
import Countries from './components/countries/Countries'
import Header from './components/header/Header'

export default class App extends Component {
  constructor() {
    super()

    this.state = {
      allCountries: [],
    }
  }

  async componentDidMount() {
    const res = await fetch('https://restcountries.com/v3.1/all')
    const json = await res.json()

    const allCountries = json.map(
      ({ translations, ccn3, flags, population }) => {
        return {
          id: ccn3,
          flag: flags.png,
          name: translations.por.common,
          population,
        }
      },
    )

    this.setState({
      allCountries,
    })
  }

  render() {
    const { allCountries } = this.state

    console.log(allCountries)

    return (
      <div className="container">
        <h1>React Countries</h1>
        <Header />

        <Countries countries={allCountries} />
      </div>
    )
  }
}
