/*
Full Stack Web Development 
	
	Front End Technologies
•	HTML, CSS, Bootstrap, jQuery, JavaScript, PHP
•	React, React Native (Expo), React Three Fiber, Typescript, Redux 

Back End Technologies
•	MongoDB, Sanity, Firebase, GROQ, PostgreSQL, Elasticsearch, MySQL
•	Express, NodeJS, Solidity, Ganache
•	Netlify/Heroku for deployment and hosting

Programming Languages

•	Java 8 (Object-oriented language)
•	JavaScript (Functional ES6 JavaScript on the browser, with NodeJS for runtime environments)
•	BASH (shell scripting)
•	Python (machine learning with the Jupyter Notebook—NumPy, SciPy, matplotlib, pandas, and mglearn)
•	C++ (simple game development)
•	Solidity (Ethereum smart contracts)
*/

import Scrollbars from "rc-scrollbars";

export default function TechnicalSkills() {
  return (
    <section className="technical-section">
      <div className="technical-item">
        <div className="flex flex-col w-1/2 bg-slate-800 rounded-l-xl">
          <h3 className="text-3xl bold text-center py-2 w-full bg-white rounded-tl-xl">Front-End</h3>
          <ul className="pl-6 list-disc text-white text-xl">
            <li>HTML, CSS, JavaScript</li>
            <li>Bootstrap, TailwindCSS, MaterialUI, StyledComponents</li>
            <li>JQuery, PHP, Clojure</li>
            <li>React, React-Native, Rails, Vite</li>
            <li>Web3, ThreeJS</li>
          </ul>
        </div>
        <div className="flex justify-center items-center w-1/2 h-full bg-white rounded-r-xl">
          <img src="./src/assets/front-end.jpg" className="object-contain" />
        </div>
      </div>
      <div className="technical-item">
        <div className="flex justify-center items-center w-1/2 h-full bg-white rounded-l-xl">
          <img src="./src/assets/back-end.png" className="object-contain" />
        </div>
        <div className="flex flex-col w-1/2 bg-slate-800 rounded-r-xl">
          <h3 className="text-3xl bold text-center py-2 w-full bg-white rounded-tr-xl">Back-End</h3>
          <ul className="pl-6 list-disc text-white text-xl">
            <li>ExpressJS, NodeJS, Ruby</li>
            <li>Solidity, Ganache</li>
            <li>PostgreSQL, MySQL, MongoDB, Elasticsearch</li>
            <li>Sanity, Firebase</li>
            <li>Netlify/Heroku/AWS</li>
          </ul>
        </div>
      </div>
      <div className="technical-item">
        <div className="flex flex-col w-1/2 bg-slate-800 rounded-l-xl">
          <h3 className="text-3xl bold text-center py-2 w-full bg-white rounded-tl-xl">Programming Languages</h3>
          <Scrollbars>
          <ul className="pl-6 list-disc text-white text-xl">
            <li>JavaScript/NodeJS</li>
            <li>PHP</li>
            <li>Java</li>
            <li>Clojure</li>
            <li>Python</li>
            <li>Ruby</li>
            <li>Solidity</li>
            <li>C++</li>
            <li>BASH</li>
          </ul>
          </Scrollbars>
        </div>
        <div className="flex justify-center items-center w-1/2 h-full bg-white rounded-r-xl">
          <img src="./src/assets/programming-languages.png" className="object-contain" />
        </div>
      </div>
    </section>
  )
}