import React from 'react'

export const Button = ({ title, disabled , callFormData }) => {

  let handleButton = () => {
    callFormData()
  }

  return (
    <>
    <button className='btn btn-success' onClick={handleButton} disabled={disabled}>
      {title}
    </button>
    </>
  )
}
