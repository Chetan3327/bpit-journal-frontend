import React from 'react';
import {useNavigate} from 'react-router-dom'
const CallForPapers = () => {
  const navigate = useNavigate()
  const style = `
  #header {
    color: white;
    text-align: center;
  }
  
  #title {
    font-size: 24px;
  }
  
  #content {
    margin: 20px;
  }
  
  .intro {
    font-size: 16px;
  }
  
  .domain {
    font-size: 16px;
  }
  
  #domains,
  #important-dates {
    margin: 20px;
  }
  
  h2 {
    text-align: left;
    font-size: 20px;
    text-decoration: underline;
  }
  .domain-list,
  .date {
    list-style: disc;
    margin-left: 20px;
  }
  
  #charges {
    /* background-color: #2ecc71; */
    color: black;
    padding: 10px;
    text-align: center;
  }
  #instructions {
    margin: 20px;
  }
  
  div#cfp36 {
    width: 78%;
    margin-inline: auto;
  }
  
  strong {
    font-size: 23px;
    color: darkblue;
  }`
  return (
    <div className='flex flex-col gap-5 items-center justify-center min-h-screen'>
      <div className='flex flex-col p-5 my-32 bg-white rounded-xl max-w-[80%] min-h-[40%] shadow-2xl border-2 border-black'>
      <style dangerouslySetInnerHTML={{ __html: style }} />
        <div id="cfp36">
        <header id="header">
          <h1 id="title">Call for Research Paper</h1>
        </header>
        <div id="content">
          <p class="intro">
            BPIT is pleased to announce the launching of its first bi-annual
            multi-disciplinary journal – Bodh: BPIT International Journal of
            Technology and Management in May-June, 2015. The journal will help
            to build emerging fields of study and enhance communication within
            the existing research fraternity in technology and management. The
            journal aims at publishing quality research papers that are
            theoretical, empirical, and application-oriented and promotes the
            link between Technology and Management.
          </p>
          <p>
            It will help to endorse all Innovations in Technology and Management
            to enable researchers and academicians to integrate their ideas and
            contribute to the knowledge base.
          </p>
          <p class="domain">
            BPIT International Journal of Technology and Management welcomes
            authors/research scholars for publication of high-quality papers in
            different areas of technology and management. The papers will be
            published with an ISSN number.
          </p>
        </div>
        <button className='p-2 px-4 border-1 bg-purple-500 text-white' onClick={(e) => navigate('/paper')}>Online Submission</button>

        <section id="domains">
          <h2>Domains to be covered:</h2>
          <ul>
            <li class="domain-list">Computer Science</li>
            <li class="domain-list">Information Technology</li>
            <li class="domain-list">
              Electronics and Communication Engineering
            </li>
            <li class="domain-list">Mechanical Engineering</li>
            <li class="domain-list">Electrical and Electronics Engineering</li>
            <li class="domain-list">Management</li>
          </ul>
        </section>
        <section id="important-dates">
          <h2>Important Dates:</h2>
          <ul>
            <li class="date">Last Date of Submission:</li>
            <li class="date">Intimation of Accepted Papers by E-Mail:</li>
            <li class="date">Last Date for Submission of Camera Ready Copy:</li>
            <li class="date">Expected Date of Publication:</li>
          </ul>
        </section>
        <section id="charges">
          <p>
            <strong>
              THERE WILL BE NO REGISTRATION OR PUBLICATION CHARGES.
            </strong>
          </p>
        </section>
        <section id="instructions">
          <h2>Instructions to Authors</h2>
          <p>
            The author should submit a full-length paper in accordance with the
            given format including abstract, tables, figures, results,
            conclusion, and references.
          </p>
          <p>
            The paper should be sent by e-mail to{" "}
            <a href="mailto:bodhbpitijtm@gmail.com">bodhbpitijtm@gmail.com</a>{" "}
            and{" "}
            <a href="mailto:bodhbpitijtm@bpitindia.com">
              bodhbpitijtm@bpitindia.com
            </a>
            .
          </p>
          <p>
            The paper should be original and unpublished and should not be
            currently under consideration for any other event.
          </p>
          <p>
            An acknowledgment mail will be sent within a day. This mail will be
            a confirmation from our side that your paper has been received
            successfully.
          </p>
          <p>
            As per the norms, the paper submitted will undergo an expert peer
            review process for shortlisting.
          </p>
        </section>
      </div>
      </div>
    </div>
  );
};

export default CallForPapers;