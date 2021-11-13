import React, { useEffect, useState } from 'react'
import Modal from 'react-modal'

import * as api from '../api/apiService'

Modal.setAppElement('#root')

export default function ModalGrade({ onSave, onClose, selectedGrade }) {
  const [gradeValue, setGradeValue] = useState(selectedGrade.value)
  const [gradeValidation, setGradeValidation] = useState({})
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    const validation = api.getValidationFromGradeType(type)
    setGradeValidation(validation)
  }, [type])

  useEffect(() => {
    const { minValue, maxValue } = gradeValidation

    if (gradeValue < minValue || gradeValue > maxValue) {
      setErrorMessage(
        `O valor da nota deve ser entre ${minValue} e ${maxValue} (inclusive)`,
      )

      return
    }

    setErrorMessage('')
  }, [gradeValue, gradeValidation])

  return (
    <div>
      <Modal isOpen={true} />
    </div>
  )
}
