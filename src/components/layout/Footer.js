import React from 'react'
import "./Footer.css"

const Footer = () => {
  const copyright = String.fromCodePoint(0x00A9)
  const year = new Date().getFullYear()
  return (
    <footer>
        <h2> Copyright {copyright} {year}</h2>
    </footer>
  )
}

export default Footer
