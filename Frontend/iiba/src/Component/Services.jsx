import React from 'react'
import choose from "../assets/choose.png"
const Services = () => {
    const serviceList = [
        {
            heading: "MSME Support & Advisory",
            contant: "Providing guidance and assistance to MSMEs on regulatory, technical, and operational matters."
        },
        {
            heading: "Legal & Policy Awareness",
            contant: "Disseminating information about government policies, procedures, industrial laws, and compliance requirements."
        },
        {
            heading: "Industry Problem Resolution",
            contant: "Helping industries resolve practical challenges and facilitating solutions through expert consultations."
        },
        {
            heading: "Market & Industry Insights",
            contant: "Sharing latest industry developments, market trends, and technological updates."
        },
        {
            heading: "Business Networking",
            contant: "Connecting entrepreneurs, manufacturers, and business leaders for collaboration and growth."
        }
    ]

    const stats = [
    { number: "38+", label: "Years of Experience" },
    { number: "10,000+", label: "MSMEs Supported" },
    { number: "500+", label: "Industry Events" },
    { number: "100+", label: "Policy Workshops" },
  ];
    return (
        <>
            <div className='w-full text-center p-2  bg-slate-50'>
                <h1 className='text-3xl font-medium'>WHAT WE DO</h1>
                <h1 className='text-lg font-medium p-2'>Our Key Services</h1>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 justify-centern p-2 justify-center'>
                {
                    serviceList.map((elem,index)=>(
                        <div key={index} className='m-1 p-3 bg-gray-200 rounded-lg'>
                        <h1 className='text-lg p-2 font-medium h-18'>{elem.heading}</h1>
                        <p>{elem.contant}</p>
                    </div>
                    ))

                }


            </div>


                
            <div>
                <div className='p-1 mt-8'><h1 className='w-full text-center text-2xl font-medium'>WHY CHOOSE IIBA</h1></div>

                <div className='md:flex justify-evenly'>
                     <div className='p-3 text-2xl mt-12'>
                    <p>38+ Years of Industry Experience</p>
                    <p>Trusted by MSMEs Across India</p>
                    <p>Expert Guidance on Government Policies</p>
                    <p>Strong Industry Network & Advocacy</p>
                    <p>Dedicated Support for Industrial Growth</p>
                </div>

                <div className=''>
                    <img src={choose} alt="" className='h-80' />
                </div>
                </div>
               
            </div>


            <section className="bg-slate-600 py-20 px-6"> {/* Using the dark blue from your hero */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((item, index) => (
            <div key={index} className="p-6 border-l border-blue-400/30">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
                {item.number}
              </h2>
              <p className="text-blue-100 text-sm uppercase tracking-widest font-medium">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

        </>
    )
}

export default Services