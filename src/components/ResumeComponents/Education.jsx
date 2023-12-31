import AlgonquinBg from "/src/assets/algonquin-college-pembroke.jpg"
import AlgonquinLogo from "/src/assets/algonquin_college.png"
import LighthouseBg from "/src/assets/lighthouse-labs-background.jpg"
import LighthouseLogo from "/src/assets/lighthouse-labs.png"
import Scrollbars from "rc-scrollbars"

export default function Edcuation() {
  return (
    <section className="education-section">
      <Scrollbars autoHide>
      <div className="education-item">
        <div className="flex flex-col w-1/2 h-full rounded-l-xl">
          <div className="flex flex-col items-center justify-center w-full h-1/3 bg-white rounded-tl-xl">
            <img src={LighthouseLogo} className="w-64 object-contain" />
            <span className="text-xl italic">Full Stack Web Development Bootcamp</span>
            <span className="text-lg">622 King St. West, Toronto</span>
          </div>
          <div className="flex flex-1 items-center justify-end text-xl">
            <ul className="ml-6 list-disc">
              <li>Complete 3-month full stack web development bootcamp from January-April 2021</li>
              <li>Became proficient with the PERN stack
                <ol className="ml-6 list-decimal">
                  <li>PostgreSQL</li>
                  <li>ExpressJS</li>
                  <li>ReactJS</li>
                  <li>NodeJS</li>
                </ol>
              </li>
              <li>Also learned the basics of Ruby on Rails</li>
            </ul>
          </div>
        </div>
        <div className="h-full w-1/2 bg-blue-300 rounded-r-xl">
          <img src={LighthouseBg} className="object-contain h-full" />
        </div>
      </div>
      <div className="education-item">
        <div className="h-full w-1/2 bg-green-300 rounded-l-xl">
          <img src={AlgonquinBg} className="object-contain h-full" />
        </div>
        <div className="flex flex-col w-1/2 h-full">
          <div className="flex flex-col items-center justify-center w-full h-1/3 bg-white rounded-tr-xl">
            <img src={AlgonquinLogo} className="w-64 object-contain" />
            <span className="text-xl italic">Computer Programming</span>
            <span className="text-lg">Pembroke, Ontario</span>
          </div>
          <div className="flex flex-1 items-center justify-end text-xl">
            <ul className="ml-6 list-disc">
              <li>Currently enrolled in my second semester of four</li>
              <li>Courses include
                <ol className="ml-6 list-decimal">
                  <li>Obejct Oriented Programming with Java</li>
                  <li>Databases with PostgreSQL</li>
                  <li>Web Development with HTML, CSS, and JavaScript</li>
                  <li>Operating System Fundamentals (GNU/Linux)</li>
                </ol>
              </li>
            </ul>
          </div>
        </div>
      </div>
      </Scrollbars>
    </section>
  )
}