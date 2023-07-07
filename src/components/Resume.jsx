import Header from './Header'

/*
Anthony Pisani

(416)-995-5011 - pisa0014@algonquincollege.com

Education

Full Stack Web Development – Lighthouse Labs – 622 King St. West, Toronto

•	Completed 3-month full stack web development bootcamp from January-April 2021
•	PERN stack – PostgreSQL, Express, React, Nodejs

Computer Programming – Algonquin College – Pembroke, Ontario

•	Currently enrolled (expected last semester in the Fall of 2024)
•	Courses include – OOP (Java), Database (SQL), Operating Systems (Windows, Linux), Web Programming

Technical Skills

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

Projects https://github.com/gurxt

Valley Drives (Mobile Application)

•	Uses the google maps platform to connect users to taxis in the Ottawa Valley.
•	Built in React Native with redux for state management, react navigation for seamless screen changes, nativewind for styling, stripe for user payments, and sanity with GROQ for data persistence. 

Auracle (Mobile Application)

•	Tarot based application that uses OpenAI APIs to conduct tarot readings for users.
•	Images for the tarot deck creating using OpenAI DALL-E.
•	Built in React Native with redux for state management, react navigation for seamless screen changes, nativewind for styling, and sanity with GROQ for data persistence. 
	
Economy (Solidity Application)

•	A game-themed solidity project built to enable users to participate in a simulated digital economy.
•	Leverages solidities ERC20 contracts to create tokens for the digital economy as well as ERC721 contracts to build assets.

Work Experience

Freelance (2020-2022)
Shopify platform website creation and maintenance

•	Designed user-friendly, visually appealing Shopify website for diverse businesses, significantly enhancing their online presence and e-commerce capabilities.
•	Utilized advanced features of the Shopify platform for customization, SEO optimization, and integration with third-party applications, resulting in improved website performance and increased customer engagement.

Walmart (2018-2021)
3155 Argentia Rd, Meadowvale, Ontario
Online Orders Associate

•	Managed and executed online customer orders with a high degree of accuracy and timeliness.
•	Leveraged Walmart’s e-commerce platform to effectively manage stock, update product information, and track customer orders.
•	Collaborated with the inventory management team to ensure seamless integration between in-store stock levels and online availability.

McDonalds (2016-2018)
6650 Meadowvale Town Center Circle, Mississauga, Ontario
Overnight Manager

•	Oversaw nightly operations in a fast-paced environment, ensuring high-quality serve and maintaining McDonald’s standard for cleanliness and food safety during the overnight shift.
•	Administered nightly payroll operations, ensuring accuracy and timely payment, while maintaining strict adherence to company policies and compliance with employment laws
•	Demonstrated exceptional problem-solving and conflict resolution skills, effectively addressing, and resolving any customer issues or complaints during overnight operations.
*/

import { 
  IdentificationIcon, 
  AcademicCapIcon, 
  CodeBracketIcon,
  WrenchScrewdriverIcon,
  BriefcaseIcon
} from '@heroicons/react/24/solid'

export default function Resume({ setPage, setFadeOut }) {
  return (
    <section className="popup-container">
      <Header title="Resume" setPage={setPage} setFadeOut={setFadeOut} />
      <nav className="resume-nav">
        <ul id="resume-ul" className="flex flex-row w-full justify-between">
            <li className="flex flex-row justify-center items-center">
              <button className="flex flex-col justify-center items-center">
              <IdentificationIcon className="text-white w-12 h-12" />
              Contact Info
              </button>
            </li>
            <li className="flex flex-row justify-center items-center">
              <button className="flex flex-col justify-center items-center">
              <AcademicCapIcon className="text-white w-12 h-12" />
              Education
              </button>
            </li>
            <li className="flex flex-row justify-center items-center">
              <button className="flex flex-col justify-center items-center">
              <WrenchScrewdriverIcon className="text-white w-12 h-12" />
              Technical Skills
              </button>
            </li>
            <li className="flex flex-row justify-center items-center">
              <button className="flex flex-col justify-center items-center">
              <CodeBracketIcon className="text-white w-12 h-12" />
              Projects
              </button>
            </li>
            <li className="flex flex-row justify-center items-center">
              <button className="flex flex-col justify-center items-center">
              <BriefcaseIcon className="text-white w-12 h-12" />
              Work Experience
              </button>
            </li>

        </ul>
      </nav>
    </section>
  )
}
