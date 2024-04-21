import React from 'react'
import { Link } from 'react-router-dom'
import './TextChangePageForm.css'

export default function TextChangePageForm({text, textLink, link}) {
  return (
    <div class="text-center p-t-115 texts-change-page-form">
        <span class="txt1">
        {text}
        </span>
        <Link to={link} className='txt2'>{textLink}</Link>
    </div>
  )
}
