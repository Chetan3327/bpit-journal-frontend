import React from 'react';

const PaperTemplate = () => {
  return (
    <div className='flex flex-col gap-5 items-center justify-center min-h-screen'>
      <div className='flex flex-col p-5 mt-32 bg-white rounded-xl max-w-[80%] min-w-[80%] shadow-2xl border-2 border-black'>

        <h1 className="text-3xl font-bold mb-6">Paper Template</h1>
        <div className='mb-6 flex items-center gap-3'>
          <h2 className="text-xl  font-bold mb-2">You can download the Paper Template from here: </h2>
          <a href=" https://firebasestorage.googleapis.com/v0/b/bpit-a601e.appspot.com/o/images%2FPaper%20template.doc0ebbf97a-2e45-4863-97b5-c2302cd0c610?alt=media&token=bde7f6a8-636c-4ab5-ba01-9436786b237e">
            <button className='p-2 px-4 border-1 bg-purple-500 text-white'>Download From Here</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PaperTemplate;