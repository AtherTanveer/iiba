import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './HomePage'
import MemberShipComp from '../RoutesComponent/MemberShipComp'
import StateCom from '../RoutesComponent/StateCom'
import Uttrakhand from '../RoutesComponent/Uttrakhand'
import AddMember from '../RoutesComponent/AddMember'
import UttarPardeshLogin from '../RoutesComponent/UttarPardeshLogin'
import HaryanaLogin from '../RoutesComponent/HaryanaLogin'

const Page = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<HomePage/>}/>

        {/* NevbarComponents Start*/}
        <Route path='/membership' element={<MemberShipComp/>}/>
        <Route path='/State' element={<StateCom/>}/>
        <Route path='/uttrakhandLogin' element={<Uttrakhand/>}/>
        <Route path='/uttarpardeshLogin' element={<UttarPardeshLogin/>}/>
        <Route path='/haryanaLogin' element={<HaryanaLogin/>}/>
        <Route path='/uttrakhandLogin/addmember' element={<AddMember/>}/>
         {/* NevbarComponents END*/}
    </Routes>
    </>
  )
}

export default Page