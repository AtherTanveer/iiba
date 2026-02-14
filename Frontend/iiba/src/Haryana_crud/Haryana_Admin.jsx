import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { IoPersonAddSharp } from "react-icons/io5";
import { MdOutlinePendingActions } from "react-icons/md";

const Haryana_Admin = () => {
    const params = useParams();
      const[list,setlist] = useState([]);
      const getData =  async()=>{
          const data = await fetch("http://localhost:4500/get_Haryana_member")
          const result = await data.json();
  
          // console.log(result)
          if(result){
              setlist(result);
          }
  
      }
  
      useEffect(()=>{
          getData();
      },[])
  
  
      console.log(list)
  
      const deleteData =async(e)=>{
          const data = await fetch(`http://localhost:4500/Delete_Haryana_Member/${e}`,{
              method:"delete"
          })
  
          const result = await data.json();
          if(result){
              alert("data deleted")
              console.log(result);
              getData();
          }
      }
  
      const navigate = useNavigate();
      const logoutfn=()=>{
          if(confirm("Are You Sure To Logout !")){
               localStorage.removeItem("hariyana");
               navigate("/")
          }else{
              console.log("Loged")
          } 
      }


  return (
     <>
     {/* Header */}
     <div className="bg-white shadow-md p-4 flex flex-col md:flex-row justify-between items-center gap-3">
       <h1 className="text-2xl font-bold text-blue-900">
         IIBA Haryana President Dashboard
       </h1>
   
   
       <div className="flex gap-3">
         <button className="flex px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
           <MdOutlinePendingActions className='text-2xl'/>
           <Link to={"/HrRequest"}>Requests</Link>
          
         </button>
         <button
           className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
           onClick={logoutfn}
         >
           Logout
         </button>
       </div>
     </div>
   
     {/* Search + Add */}
     <div className="bg-white shadow-sm p-4 flex flex-col md:flex-row justify-between items-center gap-4 mt-4">
   
       <h2 className="text-xl font-semibold text-gray-800">
         Member Details
       </h2>
   
       <div className="flex flex-col md:flex-row gap-3 items-center">
         <input
           className="border p-2 rounded-lg w-60 focus:outline-blue-500"
           type="text"
           placeholder="Search Member..."
         />
   
         <Link to={"/Haryana_Admin_login/Haryana_ADD-Member"}>
           <button className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
             Add Member
             <IoPersonAddSharp />
           </button>
         </Link>
       </div>
     </div>
   
     {/* Table */}
     <div className="overflow-x-auto mt-5 p-4">
       <table className="w-full border border-gray-300 rounded-lg overflow-hidden shadow-sm">
         <thead className="bg-blue-900 text-white">
           <tr>
             <th className="p-2 text-left">SN</th>
             <th className="p-2 text-left">Name</th>
             <th className="p-2 text-left">Email</th>
             <th className="p-2 text-left">Phone</th>
             <th className="p-2 text-left">State</th>
             <th className="p-2 text-left">District</th>
             <th className="p-2 text-left">City</th>
             <th className="p-2 text-left">Address</th>
             <th className="p-2 text-left">Company</th>
             <th className="p-2 text-center">Action</th>
           </tr>
         </thead>
   
         <tbody>
           {list.map((elem, index) => (
             <tr key={index} className="border-b hover:bg-gray-100">
               <td className="p-2">{index + 1}</td>
               <td className="p-2">{elem.name}</td>
               <td className="p-2">{elem.email}</td>
               <td className="p-2">{elem.phone}</td>
               <td className="p-2">{elem.state}</td>
               <td className="p-2">{elem.district}</td>
               <td className="p-2">{elem.city}</td>
               <td className="p-2">{elem.address}</td>
               <td className="p-2">{elem.company}</td>
   
               <td className="p-2 flex gap-2 justify-center">
                 <Link to={`/HaryanaUpdateMember/${elem._id}`}>
                   <button className="px-3 py-1 bg-yellow-400 rounded-md hover:bg-yellow-500">
                     Update
                   </button>
                 </Link>
   
                 <button
                   className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
                   onClick={() => deleteData(elem._id)}
                 >
                   Delete
                 </button>
               </td>
             </tr>
           ))}
         </tbody>
       </table>
     </div>
   </>
  )
}

export default Haryana_Admin