import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { routers } from './constants/router'
import {HomePage} from './pages/HomePage/index'
import {SettingsPage} from './pages/SettingsPage/index'

export const App = () => {
  return (
    <>
    <Routes>
      <Route path={routers.home} element={<HomePage/>}/>
      <Route path={routers.settings} element={<SettingsPage/>}/>
    </Routes>
    </>
  )
}
