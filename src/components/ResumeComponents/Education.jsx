export default function Edcuation() {
  return (
    <section className="education-section">
      <div className="education-item">
        <div className="flex flex-col w-1/2 h-full object-contain">
          <div className="flex flex-col items-center justify-center w-full h-1/4 bg-white rounded-tl-xl">
            <img src="./src/assets/lighthouse-labs.png" className="w-2/3 h-1/2 object-contain" />
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
          <img src="./src/assets/lighthouse-labs-background.jpg" className="object-contain h-full" />
        </div>
      </div>
      <div className="education-item">
        <div className="h-full w-1/2 bg-green-300 rounded-l-xl">
          <img src="./src/assets/algonquin-college-pembroke.jpg" className="object-contain h-full" />
        </div>
        <div className="flex flex-col w-1/2 h-full object-contain">
          <div className="flex flex-col items-center justify-center w-full h-1/4 bg-white rounded-tl-xl">
            <img src="./src/assets/algonquin_college.png" className="w-2/3 h-1/2 object-contain" />
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
    </section>
  )
}