
import './App.css'

// Components

import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import { useState } from 'react'

function App() {

 const [sidebarToggle, setSidebarToggle] = useState(false)

  return (
   <div className='flex overflow-hidden h-screen'>
    <div className='container mx-auto w-full flex'>
    <Sidebar sidebarToggle = {sidebarToggle}/>
    <Dashboard 
    sidebarToggle = {sidebarToggle}
    setSidebarToggle = {setSidebarToggle}
    />
   </div>

   </div>
  )
}

export default App
