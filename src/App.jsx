import Header from './components/Header/Header'

import { useState } from 'react'
import MainPage from './components/MainPage/MainPage'
import ServiceBook from './components/ServiceBook/ServiceBook'
import TabsSection from './components/TabsSection'
import Button from './components/Button/Button'
import PersonnelStructure from './components/PersonnelStructure'
import TimeSheet from './components/TimeSheet/TimeSheet'
import StudyBook from './components/StudyBook/StudyBook'

function App() {
  const [tab, setTab] = useState('service')
  return (
    <>
      <Header></Header>
      <main>
      <TabsSection active={tab} onChange={(current)=>setTab(current)}/>
        {tab === 'main' && (<MainPage />)}
        {tab === 'service' && (<ServiceBook/>)}
        {tab === 'structure' && (<PersonnelStructure/>)}
        {tab === 'timeSheet' && (<TimeSheet/>)}
        {tab === 'studyBook' && (<StudyBook/>)}


        
      </main>
    </>
  )
}

export default App
