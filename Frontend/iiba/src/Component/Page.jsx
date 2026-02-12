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
import UttrKhnd_CRUD_portal from '../Uttarpardesh_crud/UttrKhnd_CRUD_portal'
import PrivateCo from '../PrivateCo'
import NewUser from '../User/NewUser'
import RequestUK from '../Uttrakhand_crud/RequestUK'

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
        <Route path='/Newuser' element={<NewUser/>}/>
          
            <Route element={<PrivateCo/>}>
             <Route path='/uttrakhandLogin/addmember' element={<UttrKhnd_CRUD_portal/>}/>
             <Route path='/requestuk' element={<RequestUK/>} />
            </Route>
       
                    {/* --> member CRUD start */}
        <Route path='/uttarpardeshAddMember' element={<UttarPardesh_Add_Member/>}/>
        <Route path='/uttrakhandUpdateMember/:id' element={<Uttrakhand_Update_member/>}/>
                    {/*---> member CRUD End  */}
         {/* NevbarComponents END*/}
    </Routes>
    </>
  )
}

export default Page