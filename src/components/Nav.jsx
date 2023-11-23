import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { Link } from "react-router-dom";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const [Board, setBoard] = useState(false);
  const [Author, setAuthor] = useState(false);
  const [Paper, setPaper] = useState(false);
  const [Reviewer, setReviewer] = useState(false);

  function PointerHandler() {
    setBoard(false);
    setPaper(false);
    setReviewer(false);
    setAuthor(false);
  }

  return (
    <div
      className="fixed top-0 left-0 w-full text-gray-700 bg-white dark-mode:text-gray-200 dark-mode:bg-gray-800 shadow-lg"
      onPointerLeave={PointerHandler}
    >
      <div className="flex flex-col max-w-screen-xl px-4 mx-auto lg:items-center lg:justify-between lg:flex-row lg:px-6">
        <div className="p-4 flex flex-row items-center justify-between">
          <Link
            to="/home"
            className="cursor-pointer text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline"
          >
            <img
              src="https://bbijtm.bpitindia.ac.in/images/logo-websitebg.png"
              alt="Logo"
            />
          </Link>
          <button
            className="lg:hidden rounded-lg focus:outline-none focus:shadow-outline"
            onClick={() => setOpen(!open)}
          >
            <FiChevronDown
              className="w-6 h-6"
              style={{ display: !open ? "block" : "none" }}
            />
            <FiChevronUp
              className="w-6 h-6"
              style={{ display: open ? "block" : "none" }}
            />
          </button>
        </div>
        <nav
          className={`flex-col flex-grow pb-4 lg:pb-0 ${
            open ? "flex" : "hidden"
          } lg:flex lg:justify-end lg:flex-row`}
        >
          <Link
            to="/home"
            className="cursor-pointer px-4 py-2 mt-2 text-sm font-semibold text-gray-900  rounded-lg dark-mode:bg-gray-700 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 lg:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
          >
            Home
          </Link>

          <div className="relative" x-data="{ open: false }">
            <button
              onClick={() => setAuthor(!Author)}
              onPointerEnter={() => setAuthor(true)}
              className="flex flex-row items-center w-full px-4 py-2 mt-2 text-sm font-semibold text-left bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:focus:bg-gray-600 dark-mode:hover:bg-gray-600 lg:w-auto lg:inline lg:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
            >
              <span>Author</span>
              <FiChevronDown
                className={`inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform ${
                  Author ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
            <div
              onPointerLeave={() => setAuthor(false)}
              className={`absolute right-0 w-full mt-2 origin-top-right rounded-lg shadow-lg lg:w-48 ${
                Author ? "" : "hidden"
              }`}
            >
              <div className="px-2 py-2 bg-white rounded-lg shadow dark-mode:bg-gray-800">
                <Link
                  to="/paper"
                  className="cursor-pointer block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 lg:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                >
                  Submit Manuscript
                </Link>
                <Link
                  to="/author-guidelines"
                  className="cursor-pointer block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 lg:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                >
                  Authors Guidelines
                </Link>
              </div>
            </div>
          </div>
          <Link
            to="/aim-scope"
            className="cursor-pointer px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 lg:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
          >
            Aim & Scope
          </Link>
          <div className="relative" x-data="{ open: false }">
            <button
              onClick={() => setBoard(!Board)}
              onPointerEnter={() => setBoard(true)}
              className="flex flex-row items-center w-full px-4 py-2 mt-2 text-sm font-semibold text-left bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:focus:bg-gray-600 dark-mode:hover:bg-gray-600 lg:w-auto lg:inline lg:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
            >
              <span>Board</span>
              <FiChevronDown
                className={`inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform ${
                  Board ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
            <div
              onPointerLeave={() => setBoard(false)}
              className={`absolute right-0 w-full mt-2 origin-top-right rounded-lg shadow-lg lg:w-48 ${
                Board ? "" : "hidden"
              }`}
            >
              <div className="px-2 py-2 bg-white rounded-lg shadow dark-mode:bg-gray-800">
                <Link
                  to="/advisoryboard"
                  className="cursor-pointer block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 lg:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                >
                  Advisory Board
                </Link>
                <Link
                  to="/editorialboard"
                  className="cursor-pointer block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 lg:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                >
                  Editorial Board
                </Link>
              </div>
            </div>
          </div>
          <Link
            to="/issues"
            className="cursor-pointer px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 lg:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
          >
            Issues
          </Link>

          <div className="relative" x-data="{ open: false }">
            <button
              onClick={() => setPaper(!Paper)}
              onPointerEnter={() => setPaper(true)}
              className="flex flex-row items-center w-full px-4 py-2 mt-2 text-sm font-semibold text-left bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:focus:bg-gray-600 dark-mode:hover:bg-gray-600 lg:w-auto lg:inline lg:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
            >
              <span>Paper</span>
              <FiChevronDown
                className={`inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform ${
                  Paper ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
            <div
              onPointerLeave={() => setPaper(false)}
              className={`absolute right-0 w-full mt-2 origin-top-right rounded-lg shadow-lg lg:w-48 ${
                Paper ? "" : "hidden"
              }`}
            >
              <div className="px-2 py-2 bg-white rounded-lg shadow dark-mode:bg-gray-800">
                <Link
                  to="/CallForPapers"
                  className="cursor-pointer block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 lg:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                >
                  Call for Paper
                </Link>
                <Link
                  to="/PaperTemplate"
                  className="cursor-pointer block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 lg:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                >
                  Paper Tempelate
                </Link>
              </div>
            </div>
          </div>
          <Link
            to="/policy"
            className="cursor-pointer px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 lg:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
          >
            Policy
          </Link>
          <Link
            to="/faq"
            className="cursor-pointer px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 lg:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
          >
            FAQ's
          </Link>
          <div className="relative" x-data="{ open: false }">
            <button
              onMouseEnter={() => setReviewer(true)}
              onClick={() => setReviewer(!Reviewer)}
              className="flex flex-row items-center w-full px-4 py-2 mt-2 text-sm font-semibold text-left bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:focus:bg-gray-600 dark-mode:hover:bg-gray-600 lg:w-auto lg:inline lg:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
            >
              <span>Reviewer</span>
              <FiChevronDown
                className={`inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform ${
                  Reviewer ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
            <div
              onMouseLeave={() => setReviewer(false)}
              className={`absolute right-0 w-full mt-2 origin-top-right rounded-lg shadow-lg lg:w-48 ${
                Reviewer ? "" : "hidden"
              }`}
            >
              <div className="px-2 py-2 bg-white rounded-lg shadow dark-mode:bg-gray-800">
                <Link
                  to="/peer-review"
                  className="cursor-pointer block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 lg:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                >
                  Peer Review Process
                </Link>
                <Link
                  to="/reviewer"
                  className="cursor-pointer block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 lg:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                >
                  Join as Reviewer
                </Link>
              </div>
            </div>
          </div>
          <Link
            to="/contacts"
            className="cursor-pointer px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 lg:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
          >
            Contact Us
          </Link>
          <Link
            to="/admin"
            className="cursor-pointer px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 lg:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
          >
            Admin
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
