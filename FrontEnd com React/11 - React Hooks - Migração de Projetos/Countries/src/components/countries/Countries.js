import React from 'react'
import Country from './Country'

import css from './countries.module.css'

export default function Countries({ countries }) {
  return (
    <div className={`${css.border} ${css.flexRow}`}>
      {countries.map((country, index) => {
        return <Country key={index} country={country} />
      })}
    </div>
  )
}
