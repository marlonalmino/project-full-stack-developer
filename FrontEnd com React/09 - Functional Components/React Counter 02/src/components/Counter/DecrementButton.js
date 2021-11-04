import React from 'react'

/* Pode ser passado um destructuring no parâmetro.
Isso faz o mesmo que o código comentado da linha 8. 
Obs.: É interessante utilizar em casos que tiver poucas props,
para o parêntese do parâmetro não ficar muito grande*/
export default function DecrementButton({ onDecrement }) {
  // const { onDecrement } = props

  const handleButtonClick = () => {
    onDecrement('-')
  }

  return (
    <button
      onClick={handleButtonClick}
      className="waves-effect waves-light 
        btn red darken-4"
    >
      -
    </button>
  )
}
