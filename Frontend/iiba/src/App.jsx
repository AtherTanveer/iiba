import React, { useState, useEffect } from 'react'
import Nevbar from './Nevbar'
import Page from './Component/Page'
import Footer from './Footer'
import Loader from './Component/Loader'

const App = () => {

  const [loading, setLoading] = useState(() => {
    const alreadyLoaded = sessionStorage.getItem("siteLoaded");
    return alreadyLoaded ? false : true;
  });

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
        sessionStorage.setItem("siteLoaded", "true");
      }, 1500);
    }
  }, [loading]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <Nevbar />
          <Page />
          <Footer />
        </div>
      )}
    </>
  )
}

export default App;