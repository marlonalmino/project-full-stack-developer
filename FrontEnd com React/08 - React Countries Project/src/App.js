import React, { Component } from 'react'
import Countries from './components/countries/Countries'
import Header from './components/header/Header'

export default class App extends Component {
  constructor() {
    super()

    this.state = {
      allCountries: [],
      filteredCountries: [],
      filter: '',
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
          filterName: translations.por.common.toLowerCase(),
          population,
        }
      },
    )

    this.setState({
      allCountries,
      filteredCountries: Object.assign([], allCountries),
    })
  }

  handleChangeFilter = (newText) => {
    this.setState({
      filter: newText,
    })

    const filterLowerCase = newText.toLowerCase()

    const filteredCountries = this.state.allCountries.filter((country) => {
      return country.filterName.includes(filterLowerCase)
    })

    this.setState({
      filteredCountries,
    })
  }

  render() {
    const { filteredCountries, filter } = this.state

    return (
      <div className="container">
        <h1>React Countries</h1>
        <Header filter={filter} onChangeFilter={this.handleChangeFilter} />

        <Countries countries={filteredCountries} />
      </div>
    )
  }
}
