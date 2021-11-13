import React, { useEffect, useState } from 'react'

import * as api from './api/apiService'
import GradesControl from './components/GradesControl'
import ModalGrade from './components/ModalGrade'
import Spinner from './components/Spinner'

export default function App() {
  const [allGrades, setAllGrades] = useState([])
  const [selectedGrade, setSelectedGrade] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const getGrades = async () => {
      const grades = await api.getAllGrades()
      setTimeout(() => {
        setAllGrades(grades)
      }, 2000)
    }

    // Utilização com then()
    /*api.getAllGrades().then((grades) => {
      setTimeout(() => {
        setAllGrades(grades)
      }, 2000)
    })*/

    getGrades()
  }, [])

  const handleDelete = async (gradeToDelete) => {
    const isDeleted = await api.deleteGrade(gradeToDelete)

    if (isDeleted) {
      const deletedGradeIndex = allGrades.findIndex(
        (grade) => grade.id === gradeToDelete.id,
      )

      const newGrades = Object.assign([], allGrades)
      newGrades[deletedGradeIndex].isDeleted = true
      newGrades[deletedGradeIndex].value = 0

      setAllGrades(newGrades)
    }
  }

  const handlePersist = (grade) => {
    setSelectedGrade(grade)
    setIsModalOpen(true)
  }

  return (
    <div>
      <h1 className="center">Controle de Notas</h1>

      {allGrades.length === 0 && <Spinner />}

      {allGrades.length > 0 && (
        <GradesControl
          grades={allGrades}
          onDelete={handleDelete}
          onPersist={handlePersist}
        />
      )}

      {isModalOpen && <ModalGrade />}
    </div>
  )
}
