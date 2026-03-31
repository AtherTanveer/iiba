import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
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
import AddMemberUttarParadesh from '../Uttarpardesh_crud/AddMemberUttarParadesh'
import UpdateMemberUttarParadesh from '../Uttarpardesh_crud/UpdateMemberUttarParadesh'
import UpRequest from '../Uttarpardesh_crud/UpRequest'
import UpPrivateCo from '../UpPrivateCo'
import Admin from '../Admin/Admin'
import Members from '../AllMembers/Members'
import AboutIIBA from '../AboutIIBA'
import HelpPage from '../HelpPage'
import NewsPage from '../NewsSection/NewsPage'
import NewsSection from '../NewsSection/NewsSection'
import UpdateNews from '../NewsSection/UpdateNews'
import NewsAdmin from '../NewsSection/NewsAdmin'
import ContactPage from './ContactPage'
import WorkSection from './WorkSection'
import MembershipBenifits from './MembershipBenifits'
import MembershipCertificate from './MembershipCertificate'
import BusinessNews from './BusinessNews'

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
        <Route path='/Members' element={<Members />} />
        <Route path='/AboutIIBA' element={<AboutIIBA />} />
        <Route path='/HelpPage' element={<HelpPage />} />
        <Route path='/HelpPage' element={<HelpPage />} />
        <Route path='/News' element={<NewsPage />} />
        <Route path="/contactpage" element={<ContactPage />} />
        <Route path="/WorkSection" element={<WorkSection />} />
        <Route path="/iiba-certificate" element={<MembershipCertificate/>} />
        <Route path="/business-news" element={<BusinessNews/>} />
        <Route path="/membership-benefits" element={<MembershipBenifits/>} />
        {/* Fix for index.html */}
        <Route path="/index.html" element={<Navigate to="/" replace />} />




        {/* ----Uttrakhand Routes Start  */}
        <Route element={<PrivateCo />}>
          <Route path='/uttrakhandLogin/addmember' element={<UttrKhnd_CRUD_portal />} />
          <Route path='/uttarakhandAddMember' element={<UttarPardesh_Add_Member />} />
          <Route path='/uttrakhandUpdateMember/:id' element={<Uttrakhand_Update_member />} />
          <Route path='/requestuk' element={<RequestUK />} />
          <Route path="/NewsSecion" element={<NewsSection />} />
          <Route path='/updateNews/:id' element={<UpdateNews />} />
          <Route path='/NewsAdmin' element={<NewsAdmin />} />
        </Route>
        {/* ----Uttrakhand Routes End  */}

        {/* *** */}

        {/* Haryana Section Start---> */}
        <Route element={<HrPrivateCo />}>
          <Route path='/haryanaLogin/Haryana_Admin_login' element={<Haryana_Admin />} />
          <Route path='/Haryana_Admin_login/Haryana_ADD-Member' element={<Haryana_Add_Member />} />
          <Route path='/HaryanaUpdateMember/:id' element={<Haryana_Update_Member />} />
          <Route path='/HrRequest' element={<Request_HR />} />
          <Route path="/H$NewsSecion" element={<NewsSection />} />
          <Route path='/H$updateNews/:id' element={<UpdateNews />} />
          <Route path='/H$NewsAdmin' element={<NewsAdmin />} />
        </Route>
        {/* Haryana Section End---> */}


        {/* ---Uttarparadesh Routes Start */}
        <Route element={<UpPrivateCo />}>
          <Route path='/UttarAdmin_Login' element={<UttarParadesh_Admin />} />
          <Route path='uttarParadeshAddMember' element={<AddMemberUttarParadesh />} />
          <Route path='UpdateMemberUttarparadesh/:id' element={<UpdateMemberUttarParadesh />} />
          <Route path='UpRequest' element={<UpRequest />} />
          <Route path="/UtNewsSecion" element={<NewsSection />} />
          <Route path='/UTupdateNews/:id' element={<UpdateNews />} />
          <Route path='/UTNewsAdmin' element={<NewsAdmin />} />
        </Route>
        {/* ---Uttarparadesh Routes End */}


        <Route path='/AdminMain' element={<Admin />} />


        {/* NevbarComponents END*/}
      </Routes>
    </>
  )
}

export default Page