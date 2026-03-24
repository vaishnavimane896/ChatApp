import React from 'react'
import Sidebar from '../components/Sidebar'
import './Home.css';
import Chat from '../components/Chat';
import Search from '../components/Search';

const Home = () => {
  return (
   <div className='home'>
    <div className="container">
      
        <Sidebar />
        
        {/* <Search  /> */}
        
    </div>
   </div>
  )
}

export default Home