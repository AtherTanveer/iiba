import React from 'react'
import choose from "../assets/choose.png"

const Services = () => {

  const serviceList = [
    {
      heading: "MSME Support & Advisory",
      content: "Providing guidance and assistance to MSMEs on regulatory, technical, and operational matters."
    },
    {
      heading: "Legal & Policy Awareness",
      content: "Disseminating information about government policies, procedures, industrial laws, and compliance requirements."
    },
    {
      heading: "Industry Problem Resolution",
      content: "Helping industries resolve practical challenges through expert consultations."
    },
    {
      heading: "Market & Industry Insights",
      content: "Sharing latest industry developments, market trends, and technological updates."
    },
    {
      heading: "Business Networking",
      content: "Connecting entrepreneurs, manufacturers, and business leaders for collaboration and growth."
    }
  ]

  const stats = [
    { number: "17+", label: "Years of Experience" },
    { number: "10,000+", label: "MSMEs Supported" },
    { number: "500+", label: "Industry Events" },
    { number: "100+", label: "Policy Workshops" },
  ]

  return (
    <div className='bg-slate-50'>

      {/* ================= HEADER ================= */}
      <div className='text-center py-12 px-4'>
        <h1 className='text-3xl md:text-5xl font-bold text-sky-950'>
          What We Do
        </h1>
        <p className='text-gray-600 mt-3'>
          Empowering Industries Through Expert Services
        </p>
      </div>


      {/* ================= SERVICES CARDS ================= */}
      <div className='max-w-7xl mx-auto px-4 pb-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
        {serviceList.map((elem, index) => (
          <div
            key={index}
            className='bg-white p-8 rounded-2xl shadow-md hover:shadow-xl 
            hover:-translate-y-2 transition-all duration-300'
          >
            <h2 className='text-xl font-semibold text-sky-950 mb-4'>
              {elem.heading}
            </h2>
            <p className='text-gray-600 leading-relaxed'>
              {elem.content}
            </p>
          </div>
        ))}
      </div>


      {/* ================= WHY CHOOSE SECTION ================= */}
      <div className='max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-12 items-center'>

        <div>
          <h2 className='text-3xl md:text-4xl font-bold text-sky-950 mb-6'>
            Why Choose IIBA
          </h2>

          <ul className='space-y-4 text-gray-700 text-lg'>
            <li>✔ 38+ Years of Industry Experience</li>
            <li>✔ Trusted by MSMEs Across India</li>
            <li>✔ Expert Guidance on Government Policies</li>
            <li>✔ Strong Industry Network & Advocacy</li>
            <li>✔ Dedicated Support for Industrial Growth</li>
          </ul>
        </div>

        <div className='flex justify-center'>
          <img
            src={choose}
            alt="Why Choose IIBA"
            className='w-full max-w-md md:max-w-lg drop-shadow-2xl'
          />
        </div>

      </div>


      {/* ================= STATS SECTION ================= */}
      <section className="bg-sky-950 py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">

          {stats.map((item, index) => (
            <div
              key={index}
              className="p-6 border border-white/20 rounded-xl bg-white/5 backdrop-blur-sm"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
                {item.number}
              </h2>
              <p className="text-sky-200 uppercase tracking-widest text-sm">
                {item.label}
              </p>
            </div>
          ))}

        </div>
      </section>

    </div>
  )
}

export default Services
