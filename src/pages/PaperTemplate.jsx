import React from 'react';
import paper from './Paper template.doc'
import copyRight from './copy_right_form.docx'
import {Link} from 'react-router-dom'

const PaperTemplate = () => {
  return (
    <div className='flex flex-col gap-5 items-center justify-center min-h-screen'>
      <div className='flex flex-col p-5 mt-32 bg-white rounded-xl max-w-[80%] min-w-[80%] shadow-2xl border-2 border-black'>
        <h1 className="text-3xl font-bold mb-6">Paper Template</h1>
        <div className='mb-6 flex items-center gap-3'>
          <h2 className="text-xl  font-bold mb-2">You can download the Paper Template from here: </h2>
            <button className='p-2 px-4 border-1 bg-purple-500 text-white'>
            <Link to={paper} download="Paper Template" target="_blank" rel="noreferrer">Download</Link>
            </button>
        </div>
        <div className='mb-6 flex items-center gap-3'>
          <h2 className="text-xl  font-bold mb-2">You can download the CopyRight Form from here: </h2>
            <button className='p-2 px-4 border-1 bg-purple-500 text-white'>
            <Link to={copyRight} download="copy_right_form" target="_blank" rel="noreferrer">Download</Link>
            </button>
        </div>
      </div>
    </div>
  );
};

export default PaperTemplate;