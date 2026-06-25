// src/components/Classes.js
import React from 'react';
import './Classes.css';

const classes = [
  // CHEM
  'CHEM 6A: General Chemistry I',

  // DOC
  'DOC 1: Diversity',
  'DOC 2: Justice',
  'DOC 3: Imagination',

  // LTSP (Spanish)
  'LTSP 2A: Intermediate Spanish I: Foundations',

  // MATH
  'MATH 20B: Calculus for Science & Engineering',
  'MATH 20C: Calculus & Analytic Geometry',

  // BILD
  'BILD 1: The Cell',

  // ECON
  'ECON 1: Principles of Microeconomics',
  'ECON 3: Principles of Macroeconomics',
  'ECON 5: Data Analytics for Social Sciences',
  'ECON 100A: Microeconomics A',
  'ECON 100B: Microeconomics B',
  'ECON 100C: Microeconomics C',
  'ECON 110B: Short-Run Macroeconomics',
  'ECON 120A: Econometrics A',
  'ECON 120B: Econometrics B',
  'ECON 142: Behavioral Economics',
  'ECON 151: Political Economy',

  // HILD
  'HILD 2C: United States History',
  'HILD 7B: Race & Ethnicity in the U.S.',

  // PSYC
  'PSYC 1: Psychology',
  'PSYC 6: General Psychology: Social',
  'PSYC 102: Sensory Neuroscience',
  'PSYC 134: Eating Disorders',
  'PSYC 162: Psychology & the Law',
  'PSYC 172: Psychology of Human Sexuality',
  'PSYC 181: Drugs & Behavior',

  // LATI
  'LATI 50: Introduction to Latin America',

  // LTWL
  'LTWL 120: Popular Literature & Culture',

  // MGT
  'MGT 16: Personal Ethics at Work',
  'MGT 45: Principles of Accounting',
  'MGT 71R: Business & Operations Management',
  'MGT 100: Customer Analytics',
  'MGT 108R: Applied Market Research',
  'MGT 137: Financial Statement Analysis',
  'MGT 160: Experiments in Firms',
  'MGT 162R: Negotiations',
  'MGT 164: Business & Organizational Leadership',
  'MGT 180: Business Finance',
  'MGT 187: New Venture Finance',
  'MGT 189: Topics in Finance',

  // LTRU
  'LTRU 2B: Second-Year Russian',

  // HIEU
  'HIEU 114: USSR & Russia (1917–Present)',

  // BUSN
  'BUSN 120: Labor Law / Social Security',

  // FILM
  'FILM 151: Film Criticism',

  // LAW
  'LAW 102E: Spanish Legal System',

  // SPAN
  'SPAN 73: Upper Intermediate Grammar & Conversation',

  // HIAF
  'HIAF 111: Modern Africa Since 1880',

  // PHYS
  'PHYS 2A: Physics: Mechanics',

  // TDGE
  'TDGE 11: Great Performances on Film',

  // MGTF
  'MGTF 401: Financial Accounting',
  'MGTF 402: Investment Analysis',
  'MGTF 403: Advanced Financial Risk Management',
  'MGTF 404: Financial Econometrics / Empirical Methods',
  'MGTF 406: Behavioral Finance',
  'MGTF 407: Valuation in Corporate Finance',
  'MGTF 408: Real Estate Finance',
  'MGTF 412: Financial Statement Analysis',
  'MGTF 415: Collecting & Analyzing Financial Data',
  'MGTF 416: Professional Seminars (Finance)',
  'MGTF 417: Professional Communications',
  'MGTF 423: Data Science for Finance',
  'MGTF 424: Data Science for Finance – Machine Learning',

  // MGTA
  'MGTA 495: Special Topics: GenAI for Business',
];


const Classes = () => {
  return (
      <section className="classes-section">
        <h2>Relevant College Coursework</h2>
        <p className="course-note">
          All courses completed at the University of California, San Diego. 0-99 -> Lower Division. 100-199 -> Upper Division. 400-499 -> Graduate Level.
            The relevant information about each class
          can be found at the{' '}
          <a href="https://catalog.ucsd.edu/courses/MGT.html" target="_blank" rel="noopener noreferrer">Rady School of Business Catalog</a>,{' '}
            <a href="https://catalog.ucsd.edu/courses/PSYC.html" target="_blank" rel="noopener noreferrer">Psychology Catalog</a>,{' '}
          <a href="https://catalog.ucsd.edu/courses/MATH.html" target="_blank" rel="noopener noreferrer">Math
            Catalog</a>, and{' '}
          <a href="https://catalog.ucsd.edu/courses/ECON.html" target="_blank" rel="noopener noreferrer">Economics Catalog</a>.

        </p>

        <ul className="classes-list">
          {classes.map((course, index) => (
              <li key={index}>{course}</li>
          ))}
        </ul>

      </section>
  );
};

export default Classes;