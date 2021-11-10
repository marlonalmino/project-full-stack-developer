import React, { useEffect, useState } from 'react'
import Countries from './components/countries/Countries'
import Header from './components/header/Header'

export default function App() {
  const [allCountries, setAllCountries] = useState([])
  const [filteredCountries, setFilteredCountries] = useState([])
  const [filteredPopulation, setFilteredPopulation] = useState(0)
  const [userFilter, setUserFilter] = useState('')

  /* Reference for Fetch Data with Hooks
  https://www.robinwieruch.de/react-hooks-fetch-data */
  useEffect(() => {
    const getCountries = async () => {
      const res = await fetch('https://restcountries.com/v3.1/all')
      const json = await res.json()

      const allCountries = json
        .map(({ translations, ccn3, flags, population }) => {
          return {
            id: ccn3,
            flag: flags.svg,
            name: translations.por.common,
            filterName: translations.por.common.toLowerCase(),
            population,
          }
        })
        .sort((a, b) => {
          return a.name.localeCompare(b.name)
        })

      const filteredPopulation = calculatePopulationFrom(allCountries)

      setAllCountries(allCountries)
      setFilteredCountries(Object.assign([], allCountries))
      setFilteredPopulation(filteredPopulation)
    }

    getCountries()
  }, [])

  // async componentDidMount() {
  //   const res = await fetch('https://restcountries.com/v3.1/all')
  //   const json = await res.json()

  //   const allCountries = json
  //     .map(({ translations, ccn3, flags, population }) => {
  //       return {
  //         id: ccn3,
  //         flag: flags.svg,
  //         name: translations.por.common,
  //         filterName: translations.por.common.toLowerCase(),
  //         population,
  //       }
  //     })
  //     .sort((a, b) => {
  //       return a.name.localeCompare(b.name)
  //     })

  //   const filteredPopulation = this.calculatePopulationFrom(allCountries)

  //   this.setState({
  //     allCountries,
  //     filteredCountries: Object.assign([], allCountries),
  //     filteredPopulation,
  //   })
  // }

  const calculatePopulationFrom = (countries) => {
    const totalPopulation = countries.reduce((accumulator, current) => {
      return accumulator + current.population
    }, 0)

    return totalPopulation
  }

  const handleChangeFilter = (newText) => {
    setUserFilter(newText)

    const filterLowerCase = newText.toLowerCase()

    const filteredCountries = allCountries.filter((country) => {
      return country.filterName.includes(filterLowerCase)
    })

    const filteredPopulation = calculatePopulationFrom(filteredCountries)

    setFilteredCountries(filteredCountries)
    setFilteredPopulation(filteredPopulation)
  }

  return (
    <div className="container">
      <h1 style={styles.centeredTitle}>React Countries</h1>

      <Header
        filter={userFilter}
        countryCount={filteredCountries.length}
        totalPopulation={filteredPopulation}
        onChangeFilter={handleChangeFilter}
      />

      <Countries countries={filteredCountries} />
    </div>
  )
}

const styles = {
  centeredTitle: {
    textAlign: 'center',
  },
}
