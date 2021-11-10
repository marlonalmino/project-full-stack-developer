import React, { useState, useEffect } from 'react'
import Candidates from './components/Candidates'
import Header from './components/Header'
import Spinner from './components/Spinner'

export default function App() {
  const [candidates, setCandidates] = useState([])
  const [previousVotes, setPreviousVotes] = useState([])
  const [previousPercentage, setPreviousPercentage] = useState([])

  useEffect(() => {
    const interval = setInterval(() => {
      fetch('http://localhost:8080/votes')
        .then((res) => {
          return res.json()
        })
        .then((json) => {
          const localPreviousVotes = candidates.map(({ id, votes }) => {
            return { id, votes }
          })

          const localPreviousPercentages = candidates.map(
            ({ id, percentage }) => {
              return { id, percentage }
            },
          )

          setCandidates(json.candidates)
          setPreviousVotes(localPreviousVotes)
          setPreviousPercentage(localPreviousPercentages)
        })
    }, 1000)
    return () => {
      clearInterval(interval)
    }
  }, [candidates])

  if (candidates.length === 0) {
    return <Spinner description="Carregando..." />
  }

  return (
    <div className="container">
      <Header>Votação</Header>
      <Candidates
        previousPercentages={previousPercentage}
        previousVotes={previousVotes}
        candidates={candidates}
      />
    </div>
  )
}
