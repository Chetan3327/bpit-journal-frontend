import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import  Nav from './components/Nav'
import Home from './pages/Home'
import Render from './components/Render'
import Admin from './components/Admin'
import AimScope from './pages/AimScope'
import Policy from './pages/Policy'
import UploadPaper from './pages/UploadPaper'
import SubmissionProcess from './pages/SubmissionProcess'
import PaperTemplate from './pages/PaperTemplate'
import CallForPapers from './pages/CallForPapers'
import AuthorGuidelines from './pages/AuthorGuidelines'
import FireBaseUpload from './pages/FireBaseUpload'

const App = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/aim-scope' element={<AimScope />} />
        <Route path='/policy' element={<Policy />} />
        <Route path='/admin' element={<Admin />} />
        {/* <Route path='/UploadPaper' element={<UploadPaper />} /> */}
        <Route path='/peer-review' element={<SubmissionProcess />} />
        <Route path='/CallForPapers' element={<CallForPapers />} />
        <Route path='/FireBaseUpload' element={<FireBaseUpload />} />
        <Route path='/PaperTemplate' element={<PaperTemplate />} />
        <Route path='/author-guidelines' element={<AuthorGuidelines />} />
        <Route path='/paper' element={<UploadPaper route='manuscript' title='Upload Paper' fields={["Author1","Author2","Author3","Author4","Corresponding_Author_Email","Address","City_with_State_or_Province","Country","Area_of_Research","Abstract","Keywords","Name_of_First_Reviewer","Name_of_Second_Reviewer","Email_of_First_Reviewer","Email_of_Second_Reviewer","manuscript_url",]}  />} />
        <Route path='/reviewer' element={<UploadPaper route='reviewer' title='Upload CV' fields={['Email', 'Full_Name', 'Designation', 'Contact', 'Area_of_Interest_Discipline', 'Institute_Name_Address', 'Institute_Website', 'reviewer_url']}  />} />
        <Route path='/:route' element={<Render />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  )
}

export default App
