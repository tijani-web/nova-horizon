import React from 'react'
import Layout from '../components/Layout'
import HomeContent from '../components/HomeContent'

const Home = () => {
  return (
    <div className="home-container">
       <Layout>
        <HomeContent/>
       </Layout>
    </div>
  )
}

export default Home