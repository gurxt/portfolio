import { useState } from "react"
import Header from "./Header"
import Scrollbars from "rc-scrollbars"
import CST7201 from "/src/assets/gnu-linux.png"
import CST7284 from "/src/assets/java-book.png"
import CST7285 from "/src/assets/web-book.png"
import CST7355 from "/src/assets/database-systems-book.png"
import ENL7019 from "/src/assets/tech-comm-eng.png"
import GED5301 from "/src/assets/maid-book.png"
import GEP1001 from "/src/assets/coop-book.png"
import PRL7532 from "/src/assets/ccs-book.png"
import ENL7777 from "/src/assets/comm-book.png"
import CST7101 from "/src/assets/comm-ess-book.png"
import CST7215 from "/src/assets/psql-book.png"
import MAT7100 from "/src/assets/tech-math-book.png"
import CST7116 from "/src/assets/intro-java-book.png"
import { AdjustmentsHorizontalIcon, ChevronDoubleDownIcon, ChevronDoubleUpIcon, StarIcon } from "@heroicons/react/24/solid"

export default function Courses({ setPage, setFadeOut }) {
  const [searchText, setSearchText] = useState('')
  const [courses, setCourses] = useState([
    { 
      name: 'Operating System Fundamentals (GNU/Linux)',
      code: 'CST7102',
      level: 2,
      img: CST7201,
      description: 'The Operating System Fundamentals (GNU/Linux) course offers a comprehensive understanding of the core concepts and principles of operating systems, with a focus on GNU/Linux. Students will explore topics such as process management, memory management, file systems, and system administration using the GNU/Linux environment. Through practical exercises and projects, students will gain hands-on experience in configuring and managing a GNU/Linux operating system, preparing them for real-world system administration tasks.'
    },
    {
      name: 'Object Oriented Programming (Java)',
      code: 'CST7284',
      level: 2,
      img: CST7284,
      description: 'The OOP with Java course is a comprehensive introduction to object-oriented programming principles using the Java programming language. Students will learn key concepts such as classes, objects, inheritance, polymorphism, and encapsulation. Through hands-on projects and exercises, students will develop the skills needed to design and build robust Java applications using object-oriented programming techniques.'
    },
    {
      name: 'Web Programming',
      code: 'CST7285',
      level: 2,
      img: CST7285,
      description: 'The Front-End Web Programming course focuses on building user-friendly and visually appealing web interfaces. Students will learn front-end development technologies such as HTML, CSS, and JavaScript, along with popular frameworks and libraries like React.js. Through practical exercises and projects, students will gain hands-on experience in creating responsive and interactive web applications that engage users and deliver seamless user experiences.'
    },
    {
      name: 'Database Systems',
      code: 'CST7355',
      level: 2,
      img: CST7355,
      description: 'The Database Systems course offers a comprehensive understanding of the fundamental principles and practices of managing and utilizing databases. Students will learn about data modeling, relational database design, query languages, and database administration. This course equips students with the knowledge and skills necessary to develop and maintain efficient and secure database systems for various applications.'
    },
    {
      name: 'Technical Communication for Engineering Technologies',
      code: 'ENL7019',
      level: 2,
      img: ENL7019,
      description: 'Technical Communication for Engineering Technologies is a comprehensive course designed to enhance communication skills within the engineering field. Students will learn effective methods for presenting technical information, writing reports, creating visual aids, and delivering presentations. This course equips students with the necessary skills to communicate complex engineering concepts clearly and concisely in a professional setting.'
    },
    {
      name: 'On Death, Dying and Medical Assistance in Dying (MAID)',
      code: 'GED5301',
      level: 2,
      img: GED5301,
      description: 'The course "On Death, Dying, and Medical Assistance in Dying (MAID)" provides a comprehensive exploration of the ethical, legal, and social aspects surrounding end-of-life care and the practice of medical assistance in dying. Students will examine topics such as patient autonomy, legal frameworks, healthcare provider roles, and the societal implications of MAID. Through thoughtful discussions and case studies, students will gain a deeper understanding of the complexities and considerations related to this sensitive subject matter.'
    },
    {
      name: 'Cooperative Education Readiness',
      code: 'GEP1001',
      level: 2,
      img: GEP1001,
      description: 'The Cooperative Education Readiness course prepares students for successful participation in cooperative education programs. Students will learn essential skills such as resume writing, job search strategies, interview techniques, and workplace professionalism. Through interactive workshops and practical assignments, students will develop the confidence and readiness to engage in cooperative education experiences, bridging the gap between academia and the professional world.'
    },
    {
      name: 'College and Career Success',
      code: 'PRL7532',
      level: 1,
      img: PRL7532,
      description: 'The College and Career Success course equips students with the necessary skills and strategies to thrive in college and succeed in their future careers. Students will learn effective study habits, time management techniques, goal setting, and career exploration. Through interactive discussions and practical assignments, students will develop the tools and mindset needed to navigate the college experience successfully and prepare for a rewarding career path.'
    },
    {
      name: 'Communications I',
      code: 'ENL7777',
      img: ENL7777,
      level: 1,
      description: 'The Communications I course is designed to enhance students communication skills in various contexts. Students will develop effective verbal, nonverbal, and written communication skills. Topics covered may include public speaking, interpersonal communication, and professional writing. Through practical exercises and presentations, students will gain confidence and proficiency in expressing ideas clearly and engagingly, fostering effective communication in personal and professional settings.'
    },
    {
      name: 'Computer Essentials',
      code: 'CST7101',
      level: 1,
      img: CST7101,
      description: 'The Computer Essentials course provides students with a foundational understanding of essential computer skills and concepts. Students will learn about computer hardware, operating systems, file management, software applications, and basic troubleshooting techniques. Through hands-on exercises and practical projects, students will gain proficiency in using computers effectively and confidently. This course equips students with the fundamental knowledge and skills needed to navigate the digital world and excel in other computer-related courses or careers.'
    },
    {
      name: 'Introduction to Database',
      code: 'CST7215',
      level: 1,
      img: CST7215,
      description: 'The Introduction to Database course (PostgreSQL) introduces students to the fundamental concepts and principles of databases, with a focus on PostgreSQL. Students will learn about data modeling, database design, querying using SQL, and database management. Through hands-on exercises and projects, students will gain practical experience in creating and manipulating databases using PostgreSQL. This course equips students with the knowledge and skills to design and work with databases effectively, laying a strong foundation for future database management and development endeavors.'
    },
    {
      name: 'Tech Math for Computer Science',
      code: 'MAT7100',
      level: 1,
      img: MAT7100,
      description: 'The Tech Math for Computer Science course provides students with the mathematical foundations essential for computer science applications. Students will explore topics such as discrete mathematics, logic, algebra, and probability theory. Through practical examples and problem-solving exercises, students will develop the mathematical reasoning and analytical skills necessary to tackle complex computational problems. This course equips students with the mathematical toolkit required to excel in various areas of computer science, including algorithms, data structures, and cryptography.'
    },
    {
      name: 'Introduction to Computer Programming',
      code: 'CST7116',
      level: 1,
      img: CST7116,
      description: 'The Introduction to Computer Programming course is a comprehensive introduction to the fundamentals of programming using the Java programming language. Students will learn essential programming concepts such as variables, data types, control structures, functions, and object-oriented programming principles. Through hands-on exercises and projects, students will gain practical coding experience and develop problem-solving skills. This course equips students with a solid foundation in Java programming, empowering them to tackle real-world programming challenges and pursue further studies in computer science.'
    }
  ])
  const [open, setOpen] = useState(false)
  const [sort, setSort] = useState(null)
  const [filter, setFilter] = useState(null)

  const handleSearch = () => {
    onSearch(searchText)
  }

  const handleSort = (sortBy) => {
    if (sortBy === "asc") {
      if (sort === "asc") return
      setSort("asc")
      setCourses(prev => prev.sort((x, y) => x.level - y.level))
    } else {
      if (sort === "desc") return
      setSort("desc")
      setCourses(prev => prev.sort((x, y) => y.level - x.level))
    }
  }


  return (
    <section className="popup-container">
      <Header title="College Course Information" setPage={setPage} setFadeOut={setFadeOut} />
      <div className="flex flex-row justify-center items-center w-full px-2 h-16">
        <input
          className="w-3/4 h-3/4 rounded-xl px-4 text-xl border-black border"
          type="text"
          placeholder="Search Courses..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button onClick={() => setOpen(true)}>
          <AdjustmentsHorizontalIcon className="h-10 w-10" />
        </button>
      </div>
      { open && (
          <div className="fixed inset-0 flex items-center justify-center z-10">
          <div className="bg-white p-4 shadow w-1/4 h-1/4 rounded-xl">
            <h3 className="text-2xl text-center mb-2">Search Configuration</h3>
            <div className="flex flex-row items-center">
              <span className="w-1/3 text-xl font-bold">sort by course level</span>
              <button onClick={() => handleSort("desc")} className={`flex flex-row items-end text-xl ml-4 hover:text-blue-800 ${sort === "desc" ? "text-red-800" : "text-black"}`}>
                <span>desc</span><ChevronDoubleDownIcon className="w-5 h-5 self-center pl-1" />
              </button>
              <button onClick={() => handleSort("asc")} className={`flex flex-row items-end text-xl ml-4 hover:text-blue-800 ${sort === "asc" ? "text-green-800" : "text-black"}`}>
                <span>asc</span><ChevronDoubleUpIcon className="w-5 h-5 self-center pl-1" />
              </button>
            </div>
            <div className="flex flex-row items-center">
              <span className="w-1/3 text-xl font-ligh font-bold">filter by course level</span>
              <button onClick={() => setFilter(1)} className={`flex flex-row items-end text-xl ml-4 hover:text-blue-800 ${filter === 1 ? 'text-yellow-500' : 'text-black'}`}>
                <span>1</span><StarIcon className="w-5 h-5 self-center pl-1" />
              </button>
              <button onClick={() => setFilter(2)} className={`flex flex-row items-end text-xl ml-4 hover:text-blue-800 ${filter === 2 ? 'text-yellow-500' : 'text-black'}`}>
                <span>2</span>
                <StarIcon className="w-5 h-5 self-center pl-1" />
                <StarIcon className="w-5 h-5 self-center pl-1" />
              </button>
            </div>
            <div className="flex justify-center items-end">
              <button onClick={() => { setFilter(null) ; setSort(null) }} className="mt-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2">
                Reset Default 
              </button>
              <button onClick={() => setOpen(false)} className="mt-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                Back to Search 
              </button>
            </div>
          </div>
        </div>
      )}
      <Scrollbars>
      <div className={`flex flex-1 flex-col items-center justify-center ${open ? 'opacity-0' : 'opacity-100'}`}>
        { courses.filter(course => filter ? course.level === filter : course).map((course) => {
          if (course.name.toLowerCase().includes(searchText.toLowerCase()))
            return (
              <div key={course.name} className="flex flex-row w-4/5 h-1/6 bg-white p-2 rounded-xl mb-2">
                <div className="flex flex-col w-2/3 rounded-r-xl text-lg">
                  <h3 className="text-xl w-full h-1/6 font-bold">{ course.name }</h3>
                  <span><b>Course Code:</b> { course.code }</span>
                  <span><b>Course Level:</b> { course.level }</span>
                  <p><b>Description:</b> { course.description }</p>
                </div>
                <div className="flex w-1/3 items-center justify-center rounded-l-xl">
                  <img src={course.img} className="h-64 oject-contain" />
                </div>
              </div>
            )
          return <div key={course.name}></div>
        })}
      </div>
      </Scrollbars>
    </section>
  )
}

