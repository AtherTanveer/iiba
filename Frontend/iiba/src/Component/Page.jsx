import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './HomePage'
import MemberShipComp from '../RoutesComponent/MemberShipComp'
import StateCom from '../RoutesComponent/StateCom'
import Uttrakhand from '../RoutesComponent/Uttrakhand'
import UttarPardeshLogin from '../RoutesComponent/UttarPardeshLogin'
import HaryanaLogin from '../RoutesComponent/HaryanaLogin'
import UttarPardesh_Add_Member from '../Uttrakhand_crud/UttarPardesh_Add_Member'
import Uttrakhand_Update_member from '../Uttrakhand_crud/Uttrakhand_Update_member'
import PrivateCo from '../PrivateCo'
import NewUser from '../User/NewUser'
import RequestUK from '../Uttrakhand_crud/RequestUK'
import UttrKhnd_CRUD_portal from '../Uttrakhand_crud/UttrKhnd_CRUD_portal'
import Haryana_Admin from '../Haryana_crud/Haryana_Admin'
import Haryana_Add_Member from '../Haryana_crud/Haryana_Add_Member'
import Haryana_Update_Member from '../Haryana_crud/Haryana_Update_Member'
import Request_HR from '../Haryana_crud/Request_HR'
import UttarParadesh_Admin from '../Uttarpardesh_crud/UttarParadesh_Admin'
import HrPrivateCo from '../HrPrivateCo'

const Page = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />

        {/* NevbarComponents Start*/}
        <Route path='/membership' element={<MemberShipComp />} />
        <Route path='/State' element={<StateCom />} />
        <Route path='/uttrakhandLogin' element={<Uttrakhand />} />
        <Route path='/uttarpardeshLogin' element={<UttarPardeshLogin />} />
        <Route path='/haryanaLogin' element={<HaryanaLogin />} />
        <Route path='/Newuser' element={<NewUser />} />



        {/* ----Uttrakhand Routes Start  */}
        <Route element={<PrivateCo />}>
          <Route path='/uttrakhandLogin/addmember' element={<UttrKhnd_CRUD_portal />} />
          <Route path='/uttarpardeshAddMember' element={<UttarPardesh_Add_Member />} />
          <Route path='/uttrakhandUpdateMember/:id' element={<Uttrakhand_Update_member />} />
          <Route path='/requestuk' element={<RequestUK />} />
        </Route>
         {/* ----Uttrakhand Routes End  */}

                      {/* *** */}

        {/* Haryana Section Start---> */}
        <Route element={<HrPrivateCo />}>
          <Route path='/haryanaLogin/Haryana_Admin_login' element={<Haryana_Admin />} />
          <Route path='/Haryana_Admin_login/Haryana_ADD-Member' element={<Haryana_Add_Member />} />
          <Route path='/HaryanaUpdateMember/:id' element={<Haryana_Update_Member />} />
          <Route path='/HrRequest' element={<Request_HR />} />
        </Route>
        {/* Haryana Section End---> */}


        {/* ---Uttarparadesh Routes Start */}
        <Route path='/UttarAdmin_Login' element={<UttarParadesh_Admin/>}/>
        {/* ---Uttarparadesh Routes End */}




        {/* NevbarComponents END*/}
      </Routes>
    </>
  )
}

export default Page