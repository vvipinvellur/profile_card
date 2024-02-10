import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import { RouteConstants } from './RouteConstants'
import HomeScreenLayout from '../screens/HomeScreen/HomeScreenLayout'
import LinksForm from '../screens/Forms/LinksForm'

const AppRoutes = () => {
  return (
    <Routes>
        <Route path={RouteConstants.ROOT} element={<HomeScreenLayout />} />
        <Route path={RouteConstants.LINK} element={ <LinksForm /> } />
    </Routes>
  )
}

export default AppRoutes
