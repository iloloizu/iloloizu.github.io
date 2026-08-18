import React from 'react'
import { Link } from 'react-router-dom'

export default function EdBack({ to = '/', label = 'Back to Home' }) {
  return (
    <Link className="ed-back" to={to}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 12H5M12 19l-7-7 7-7" />
      </svg>
      {label}
    </Link>
  )
}
