import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const Nav = () => {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false);
  const [Board, setBoard] = useState(false)
  const [Author, setAuthor] = useState(false)
  const [Paper, setPaper] = useState(false)
  const [Reviewer, setReviewer] = useState(false)

  return (
    <div className="fixed top-0 left-0 w-full text-gray-700 bg-white dark-mode:text-gray-200 dark-mode:bg-gray-800 shadow-lg">
      <div className="flex flex-col max-w-screen-xl px-4 mx-auto lg:items-center lg:justify-between lg:flex-row lg:px-6">
        <div className="p-4 flex flex-row items-center justify-between">
          <a onClick={() => navigate('/home')} className="cursor-pointer text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline">
            <img src='https://bbijtm.bpitindia.ac.in/images/logo-websitebg.png' alt='Logo'  />
          </a>
          <button className="lg:hidden rounded-lg focus:outline-none focus:shadow-outline" onClick={() => setOpen(!open)}>
            <FiChevronDown className="w-6 h-6" style={{ display: !open ? 'block' : 'none' }} />
            <FiChevronUp className="w-6 h-6" style={{ display: open ? 'block' : 'none' }} />
          </button>
        </div>
        <nav className={`flex-col flex-grow pb-4 lg:pb-0 ${open ? 'flex' : 'hidden'} lg:flex lg:justify-end lg:flex-row`}>
          <a
            onClick={() => navigate('/home')}
            className="cursor-pointer px-4 py-2 mt-2 text-sm font-semibold text-gray-900  rounded-lg dark-mode:bg-gray-700 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 lg:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
          >
            Home
          </a>
          <div className="relative" x-data="{ open: false }">
            <button
              onClick={() => setBoard(!Board)}
              className="flex flex-row items-center w-full px-4 py-2 mt-2 text-sm font-semibold text-left bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:focus:bg-gray-600 dark-mode:hover:bg-gray-600 lg:w-auto lg:inline lg:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
            >
              <span>Board</span>
              <FiChevronDown className={`inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform ${Board ? 'rotate-180' : 'rotate-0'}`} />
            </button>
            <div className={`absolute right-0 w-full mt-2 origin-top-right rounded-lg shadow-lg lg:w-48 ${Board ? '' : 'hidden'}`}>
              <div className="px-2 py-2 bg-white rounded-lg shadow dark-mode:bg-gray-800">
                <a
                  onClick={() => navigate('/advisoryboard')}
                  className="cursor-pointer block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 lg:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                >
                  Advisory Board
                </a>
                <a
                  onClick={() => navigate('/editorialboard')}
                  className="cursor-pointer block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 lg:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                >
                  Editorial Board
                </a>
              </div>
            </div>
          </div>
          <a
            onClick={() => navigate('/aim-scope')}
            className="cursor-pointer px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 lg:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
          >
            Aim & Scope
          </a>
          <a
            onClick={() => navigate('/issues')}
            className="cursor-pointer px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 lg:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
          >
            Issues
          </a>
          <div className="relative" x-data="{ open: false }">
            <button
              onClick={() => setAuthor(!Author)}
              className="flex flex-row items-center w-full px-4 py-2 mt-2 text-sm font-semibold text-left bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:focus:bg-gray-600 dark-mode:hover:bg-gray-600 lg:w-auto lg:inline lg:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
            >
              <span>Author</span>
              <FiChevronDown className={`inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform ${Author ? 'rotate-180' : 'rotate-0'}`} />
            </button>
            <div className={`absolute right-0 w-full mt-2 origin-top-right rounded-lg shadow-lg lg:w-48 ${Author ? '' : 'hidden'}`}>
              <div className="px-2 py-2 bg-white rounded-lg shadow dark-mode:bg-gray-800">
                <a
                  onClick={() => navigate('/paper')}
                  className="cursor-pointer block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 lg:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                >
                  Submit Manuscript
                </a>
                <a
                  onClick={() => navigate('/author-guidelines')}
                  className="cursor-pointer block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 lg:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                >
                  Authors Guidelines
                </a>
              </div>
            </div>
          </div>
          <div className="relative" x-data="{ open: false }">
            <button
              onClick={() => setPaper(!Paper)}
              className="flex flex-row items-center w-full px-4 py-2 mt-2 text-sm font-semibold text-left bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:focus:bg-gray-600 dark-mode:hover:bg-gray-600 lg:w-auto lg:inline lg:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
            >
              <span>Paper</span>
              <FiChevronDown className={`inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform ${Paper ? 'rotate-180' : 'rotate-0'}`} />
            </button>
            <div className={`absolute right-0 w-full mt-2 origin-top-right rounded-lg shadow-lg lg:w-48 ${Paper ? '' : 'hidden'}`}>
              <div className="px-2 py-2 bg-white rounded-lg shadow dark-mode:bg-gray-800">
                <a
                  onClick={() => navigate('/CallForPapers')}
                  className="cursor-pointer block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 lg:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                >
                  Call for Paper
                </a>
                <a
                  onClick={() => navigate('/PaperTemplate')}
                  className="cursor-pointer block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 lg:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                >
                  Paper Tempelate
                </a>
              </div>
            </div>
          </div>
          <a
            onClick={() => navigate('/policy')}
            className="cursor-pointer px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 lg:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
          >
            Policy
          </a>
          <a
            onClick={() => navigate('/faq')}
            className="cursor-pointer px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 lg:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
          >
            FAQ's
          </a>
          <div className="relative" x-data="{ open: false }">
            <button
              onClick={() => setReviewer(!Reviewer)}
              className="flex flex-row items-center w-full px-4 py-2 mt-2 text-sm font-semibold text-left bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:focus:bg-gray-600 dark-mode:hover:bg-gray-600 lg:w-auto lg:inline lg:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
            >
              <span>Reviewer</span>
              <FiChevronDown className={`inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform ${Reviewer ? 'rotate-180' : 'rotate-0'}`} />
            </button>
            <div className={`absolute right-0 w-full mt-2 origin-top-right rounded-lg shadow-lg lg:w-48 ${Reviewer ? '' : 'hidden'}`}>
              <div className="px-2 py-2 bg-white rounded-lg shadow dark-mode:bg-gray-800">
                <a
                  onClick={() => navigate('/peer-review')}
                  className="cursor-pointer block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 lg:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                >
                  Peer Review Process
                </a>
                <a
                  onClick={() => navigate('/reviewer')}
                  className="cursor-pointer block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 lg:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                >
                  Join as Reviewer
                </a>
              </div>
            </div>
          </div>
          <a
            onClick={() => navigate('/contacts')}
            className="cursor-pointer px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 lg:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
          >
            Contact Us
          </a>
          <a
            onClick={() => navigate('/admin')}
            className="cursor-pointer px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 lg:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
          >
            Admin
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
