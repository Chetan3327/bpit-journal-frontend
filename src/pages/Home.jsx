import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-[url('https://bpitindia.com/wp-content/uploads/2023/04/BPIT-Banner-2-1024x365.png')]">
        <h3>Welcome to BPIT Journal</h3>
        <h3>
          A unit of Bhartiya Brahmin Charitable Trust ISO 9001:2008 Certified
        </h3>
      </div>
      <div className="flex flex-col gap-5 items-center justify-center min-h-screen">
        <div className="flex flex-col p-5 mt-32 bg-white rounded-xl max-w-[80%] min-w-[80%] shadow-2xl border-2 border-black">
          <div className="mb-6">
            <h2 className="text-2xl text-black font-bold mb-2 text-center">
              Welcome to BPIT Journal
            </h2>

            <h2 className="text-2xl text-black font-bold mb-2 text-center">
              A unit of Bhartiya Brahmin Charitable Trust ISO 9001:2008
              Certified
            </h2>
          </div>

          <div className="mb-6">
            <h2 className="text-2xl text-purple-500 font-bold mb-2 text-center">
              About Journal
            </h2>
            <p>
              BODH: BPIT International Journal of Technology and Management
              (BBIJTM), is a Biannual International peer reviewed, scholarly
              research journal, conceptualized in 2015 and indexed in National
              Science library. BBIJTM is the official publication of Bhagwan
              Parshuram Institute of Technology (BPIT) Delhi. It contributes to
              the enhancement of generating the new ideas and perspectives on
              existing research. BBIJTM journal aim to disseminate original
              scientific research and knowledge in the field of all
              interdisciplinary streams of Technology, and Management. It
              provides a platform for students, academicians, industry, and
              research scholars from all over the world to contribute towards
              the enhancement of Technology, and Management research. Authors
              are invited to submit their research papers for publication in the
              forthcoming issues. A peer review process is performed on all the
              manuscripts submitted. The publication of a manuscript is
              available for free. Through this journal, Bhagwan Parshuram
              Institute of Technology (BPIT) Delhi is determined to improve the
              overall research impact.
            </p>
          </div>
          <div className="mb-6">
            <h2 className="text-2xl text-purple-500 font-bold mb-6 text-center ">
              Basic Information
            </h2>

            <div class="overflow-x-auto">
              <table class="w-full text-sm text-left rtl:text-right text-gray-500">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                  <tr>
                    <th scope="col" class="px-6 py-3">
                      Journal Title
                    </th>
                    <th scope="col" class="px-6 py-3">
                      BODH: BPIT International Journal of Technology and
                      Management
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Journal Broad Discipline
                    </th>
                    <td class="px-6 py-4">Journal Broad Discipline</td>
                  </tr>
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Frequency
                    </th>
                    <td class="px-6 py-4">Frequency Bi-Annual, twice a Year</td>
                  </tr>
                  <tr class="bg-white dark:bg-gray-800">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      ISSN
                    </th>
                    <td class="px-6 py-4">2454-8421</td>
                  </tr>
                  <tr class="bg-white dark:bg-gray-800">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Published by
                    </th>
                    <td class="px-6 py-4">
                      Bhagwan Parshuram Institute of Technology (BPIT) Delhi,
                      PSP-4, Dr. K. N. Katju Marg, Sector 17 Rohini, New Delhi
                      -110089.
                    </td>
                  </tr>
                  <tr class="bg-white dark:bg-gray-800">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Indexing
                    </th>
                    <td class="px-6 py-4">National Science Library</td>
                  </tr>
                  <tr class="bg-white dark:bg-gray-800">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Journal Language/s
                    </th>
                    <td class="px-6 py-4">ENGLISH</td>
                  </tr>
                  <tr class="bg-white dark:bg-gray-800">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Current Status (Print/Online/Both)
                    </th>
                    <td class="px-6 py-4">Both</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="mb-6">
            <h2 className="text-2xl text-purple-500 font-bold mb-2 text-center">
              Objective
            </h2>
            <p>
              To investigate the most recent research developments, as well as
              the publication and widespread electronic dissemination of
              innovative and substantial research. Obtaining and soliciting
              high-quality original research papers. To contribute to the
              progress in research by providing a high-quality online platform
              for publishing original research works.
            </p>
          </div>
          <div className="mb-6">
            <h2 className="text-2xl text-purple-500 font-bold mb-2 text-center">
              Aim and Scope
            </h2>
            <p>
              BBIJTM welcomes original and contemporary research in the broad
              area of Technology and Management, both conceptual and empirical.
              Authors are invited to submit their research contributions for the
              forthcoming edition. The Journal Publishes in both print and
              online version. The journal publishes research articles in
              Technology, and Management on theoretical foundations,
              computational, practical techniques, application, and
              implementations.
            </p>
          </div>
          <div className="mb-6">
            <h2 className="text-2xl text-purple-500 font-bold mb-2 text-center">
              GuideLines
            </h2>
            <p>
              Authors are invited to submit original and unpublished 6-page
              papers in IEEE double column format in MS Word document formats
              (.doc or.docx) to be considered for publication as a regular paper
              in future issues of this journal. Authors can submit their
              manuscripts through email or submit online at the website of this
              journal mentioned below.
            </p>
            <span
              className="underline text-purple-500 cursor-pointer font-semibold hover:text-green-500"
              onClick={() => navigate("/author-guidelines")}
            >
              GuideLines
            </span>
          </div>
          <div className="flex gap-3">
            <div className="mb-6 border border-black rounded-md p-2 hover:scale-105 transition-all">
              <h2 className="text-xl text-purple-500 text-center font-bold mb-2 ">
                Issues
              </h2>
              <p>
                BBIJTM welcomes original and contemporary research in the broad
                area of Technology and Management, both conceptual and
                empirical. Authors are invited to submit their research
                contributions for the forthcoming edition. The Journal Publishes
                in both print and online version. The journal publishes research
                articles in Technology, and Management on theoretical
                foundations, computational, practical techniques, application,
                and implementations.
              </p>
            </div>
            <div className="mb-6 border border-black rounded-md p-2 hover:scale-105 transition-all">
              <h2 className="text-xl text-purple-500 text-center font-bold mb-2">
                Paper
              </h2>
              <p>
                BPIT is pleased to announce the launching of its first bi-annual
                multi-disciplinary journal – Bodh: BPIT International Journal of
                Technology and Management in May-June, 2015. The journal will
                help to build emerging fields of study and enhance communication
                within existing research fraternity in technology and
                management. The journal aims at publishing quality research
                papers that are theoretical, empirical and application oriented
                and promotes the link between Technology and Management.
              </p>
            </div>
            <div className="mb-6 border border-black rounded-md p-2 hover:scale-105 transition-all">
              <h2 className="text-xl text-purple-500 text-center font-bold mb-2">
                Policy
              </h2>
              <p>
                Plagiarism is when an author attempts to pass off someone else
                work as his or her own. Duplicate publication, sometimes called
                self-plagiarism, occurs when an author reuses substantial parts
                of his or her own published work without providing the
                appropriate references. This can range from getting an identical
                paper published in multiple journals, to salami-slicing, where
                authors add small amounts of new data to a previous paper.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
