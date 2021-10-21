/**
 * Estado da aplicação (state)
 */

let tabCountries = null
let tabFavorites = null

let allCountries = []
let favoriteCountries = []

let countCountries = 0
let countFavorites = 0

let totalPopulationList = 0
let totalPopulationFavorites = 0

let numberFormat = null

window.addEventListener('load', () => {
  tabCountries = document.querySelector('#tabCountries')
  tabFavorites = document.querySelector('#tabFavorites')

  countCountries = document.querySelector('#countCountries')
  countFavorites = document.querySelector('#countFavorites')

  totalPopulationList = document.querySelector('#totalPopulationList')
  totalPopulationFavorites = document.querySelector('#totalPopulationFavorites')

  numberFormat = Intl.NumberFormat('pt-BR')

  fetchCountries()
})

async function fetchCountries() {
  const res = await fetch('https://restcountries.com/v3.1/all')
  const json = await res.json()
  allCountries = json.map(country => {
    const { ccn3, translations, population, flags } = country

    return {
      id: ccn3,
      name: translations.por.official,
      population,
      flag: flags.svg
    }
  })
  
  render()
}

function render() {
  renderCountryList()
  renderFavorites()
  renderSummary()

  handleCountryButtons()
}

function renderCountryList() {
  let countriesHTML = "<div>"

  allCountries.forEach(country => {
    const { name, flag, id, population} = country

    const countryHTML = `
    <div class='country'>
      <div>
      </div>
      
      <div>
      </div>

      <div>
      </div>
    </div>
    `
  })
}

function renderFavorites() { }
function renderSummary() { }
function handleCountryButtons() { }