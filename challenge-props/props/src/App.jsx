import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ListStudent from './components/listStudents/student'
import student from './components/componentStudent/student'

function App() {

  return (
  <>
    <ListStudent data ={student}/>
  </>
      
  )
}

export default App
