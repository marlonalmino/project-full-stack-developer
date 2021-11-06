import React from 'react'
import Picture from './Picture'
import Position from './Position'

export default function Candidate({ candidate, position }) {
  const { id, name, votes } = candidate

  const imageSource = `${id}.jpg`

  return (
    <div>
      <Position>{position}</Position>
      <Picture imageSource={imageSource} description={name} />
      {name} - {votes}
    </div>
  )
}
