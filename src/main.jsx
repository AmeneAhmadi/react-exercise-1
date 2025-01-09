import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Part1 from './Part1.jsx'
import Part2 from './Part2.jsx'
import Part3 from './Part3.jsx'
import Part4 from './Part4.jsx'
import Part5 from './Part5.jsx'
import Part6 from './Part6.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Part1/>
    <Part2/>
    <Part3/>
    <Part4/>
    <Part5/>
    <Part6/>
  </StrictMode>,
)
