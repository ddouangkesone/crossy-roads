import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Game from "./Game"

// Tutorial Link: https://javascriptgametutorials.com/tutorials/react-three-fiber/crossy-road/adding-shadows

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Game />
  </StrictMode>,
)
