import { useEffect, useState } from 'react'
import Header from './Header'

/*
Projects https://github.com/gurxt



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
import Contact from './ResumeComponents/Contact'
import Edcuation from './ResumeComponents/Education'
import TechnicalSkills from './ResumeComponents/TechnicalSkills'
import Projects from './ResumeComponents/Projects'
import Experience from './ResumeComponents/Experience'

export default function Resume({ setPage, setFadeOut }) {
  const [active, setActive] = useState("contact")

  return (
    <section className="popup-container">
      <Header title="Resume" setPage={setPage} setFadeOut={setFadeOut} />
      <nav className="resume-nav">
        <ul id="resume-ul" className="flex flex-row w-full justify-between">
            <li className="flex flex-row h-full justify-center items-center">
              <button onClick={() => setActive("contact")} className={`${active === "contact" ? 'text-green-200' : 'text-white'}`}>
                <IdentificationIcon className="w-12 h-12" />
                <span>Contact Info</span>
              </button>
            </li>
            <li className="flex flex-row justify-center items-center">
              <button onClick={() => setActive("education")} className={`${active === "education" ? 'text-green-200' : 'text-white'}`}>
                <AcademicCapIcon className="w-12 h-12" />
                <span>Education</span>
              </button>
            </li>
            <li className="flex flex-row justify-center items-center">
              <button onClick={() => setActive("technical")} className={`${active === "technical" ? 'text-green-200' : 'text-white'}`}>
                <WrenchScrewdriverIcon className="w-12 h-12" />
                <span>Technical Skills</span>
              </button>
            </li>
            <li className="flex flex-row justify-center items-center">
              <button onClick={() => setActive("projects")} className={`${active === "projects" ? 'text-green-200' : 'text-white'}`}>
                <CodeBracketIcon className="w-12 h-12" />
                <span>Projects</span>
              </button>
            </li>
            <li className="flex flex-row justify-center items-center">
              <button onClick={() => setActive("work")} className={`${active === "work" ? 'text-green-200' : 'text-white'}`}>
                <BriefcaseIcon className="w-12 h-12" />
                <span>Work Experience</span>
              </button>
            </li>
        </ul>
      </nav>
      <div className="resume-content">
        { active === "contact"   && <Contact /> }
        { active === "education" && <Edcuation /> }
        { active === "technical" && <TechnicalSkills /> }
        { active === "projects"  && <Projects /> }
        { active === "work"      && <Experience /> }
      </div>
    </section>
  )
}
