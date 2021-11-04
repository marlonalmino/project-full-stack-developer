import React, { Component } from 'react'
import Countries from './components/countries/Countries'
import Header from './components/header/Header'

export default class App extends Component {
  constructor() {
    super()

    this.state = {
      allCountries: [],
      filteredCountries: [],
      filteredPopulation: 0,
      filter: '',
    }
  }

  async componentDidMount() {
    const res = await fetch('https://restcountries.com/v3.1/all')
    const json = await res.json()

    const allCountries = json
      .map(({ translations, ccn3, flags, population }) => {
        return {
          id: ccn3,
          flag: flags.png,
          name: translations.por.common,
          filterName: translations.por.common.toLowerCase(),
          population,
        }
      })
      .sort((a, b) => {
        return a.name.localeCompare(b.name)
      })

    const filteredPopulation = this.calculatePopulationFrom(allCountries)

    this.setState({
      allCountries,
      filteredCountries: Object.assign([], allCountries),
      filteredPopulation,
    })
  }

  calculatePopulationFrom = (countries) => {
    const totalPopulation = countries.reduce((accumulator, current) => {
      return accumulator + current.population
    }, 0)

    return totalPopulation
  }

  handleChangeFilter = (newText) => {
    this.setState({
      filter: newText,
    })

    const filterLowerCase = newText.toLowerCase()

    const filteredCountries = this.state.allCountries.filter((country) => {
      return country.filterName.includes(filterLowerCase)
    })

    const filteredPopulation = this.calculatePopulationFrom(filteredCountries)

    this.setState({
      filteredCountries,
      filteredPopulation,
    })
  }

  render() {
    const { filteredCountries, filter, filteredPopulation } = this.state

    return (
      <div className="container">
        <h1 style={styles.centeredTitle}>React Countries</h1>

        <Header
          filter={filter}
          countryCount={filteredCountries.length}
          totalPopulation={filteredPopulation}
          onChangeFilter={this.handleChangeFilter}
        />

        <Countries countries={filteredCountries} />
      </div>
    )
  }
}

const styles = {
  centeredTitle: {
    textAlign: 'center',
  },
}
