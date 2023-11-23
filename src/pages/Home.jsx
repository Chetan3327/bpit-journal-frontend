import React from 'react';

const Home = () => {
  return (
    <div className='flex flex-col gap-5 items-center justify-center min-h-screen'>
      <div className='flex flex-col p-5 mt-32 bg-white rounded-xl max-w-[80%] min-w-[80%] shadow-2xl border-2 border-black'>

        <h1 className="text-3xl font-bold mb-6">Submission Process</h1>
        <div className="mb-6">
          <h2 className="text-xl text-purple-500 font-bold mb-2">Initial Review</h2>
          <p>
            Chief Editor evaluates each paper to determine if its topic and content meet the submission criteria of BODH: BPIT International Journal of Technology and Management (BBIJTM). Papers that do not meet minimum criteria are returned to the authors. This is in the best interest of the authors who could then decide to either correct the problems or to submit the paper to a more appropriate journal or conference.
          </p>
        </div>
        <div className="mb-6">
          <h2 className="text-xl text-purple-500 font-bold mb-2">Recommendation</h2>
          <p>
            Based on the referees’ comments and the Sub-Editor’s recommendation, the Chief Editor makes a final decision on the acceptability of the paper. If an article finally meets editorial and peer standards, he communicates to the authors with the decision, along with referees’ reports. The final decision can be “Strongly Accepted”, “Marginally Accepted”, “Accepted with Changes”, “Revision required”, or “Rejected”. A revised paper should be re-submitted within 15 days of the decision. It will usually be returned to the original referees for evaluation.
          </p>
        </div>
      </div>
    </div>
  );
};


export default Home
