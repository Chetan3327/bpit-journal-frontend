import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();
  const [boardVisible, setBoardVisible] = useState(false)
  return (
    <nav className='fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-2 px-3 shadow-md bg-gray-100'>
      <div className='contents'><span className='text-xl cursor-pointer p-2 hover:text-purple-500' onClick={() => navigate('/home')}><img src='https://bbijtm.bpitindia.ac.in/images/logo-websitebg.png' /></span></div>
      <div className='flex gap-4 pr-4'>
        <span className='text-xl cursor-pointer p-2 hover:text-purple-500' onClick={() => navigate('/home')}>Home</span>
        <span className='text-xl cursor-pointer p-2 hover:text-purple-500' onClick={() => {
          navigate('/members ')
          setBoardVisible((prev) => !prev)
        }}>Board</span>
        {boardVisible && (<div className='absolute bg-white ml-[5%] mt-[4%] p-2 rounded-md shadow-md flex flex-col'>
          <span className='text-xl cursor-pointer p-2 hover:text-purple-500' onClick={() => navigate('/advisoryboard')}>Advisory Board</span>
          <span className='text-xl cursor-pointer p-2 hover:text-purple-500' onClick={() => navigate('/editorialboard')}>Editorial Board</span>
        </div>)}
        <span className='text-xl cursor-pointer p-2 hover:text-purple-500' onClick={() => navigate('/aim-scope')}>Aim & Scope</span>
        <span className='text-xl cursor-pointer p-2 hover:text-purple-500' onClick={() => navigate('/issues')}>Issues</span>
        <span className='text-xl cursor-pointer p-2 hover:text-purple-500' onClick={() => navigate('/CallForPapers')}>Call for Papers</span>
        <span className='text-xl cursor-pointer p-2 hover:text-purple-500' onClick={() => navigate('/PaperTemplate')}>Paper Tempelate</span>
        <span className='text-xl cursor-pointer p-2 hover:text-purple-500' onClick={() => navigate('/policy')}>Policy</span>
        <span className='text-xl cursor-pointer p-2 hover:text-purple-500' onClick={() => navigate('/faq')}>FAQ's</span>
        <span className='text-xl cursor-pointer p-2 hover:text-purple-500' onClick={() => navigate('/peer-review')}>Peer Review</span>
        <span className='text-xl cursor-pointer p-2 hover:text-purple-500' onClick={() => navigate('/reviewer')}>Join as Reviewer</span>
        <span className='text-xl cursor-pointer p-2 hover:text-purple-500' onClick={() => navigate('/contacts')}>Contact Us</span>
      </div>
    </nav>
  );
};

export default NavBar;
