/*
Valley Drives (Mobile Application)

•	Uses the google maps platform to connect users to taxis in the Ottawa Valley.
•	Built in React Native with redux for state management, react navigation for seamless screen changes, nativewind for styling, stripe for user payments, and sanity with GROQ for data persistence. 

*/

import { CodeBracketIcon } from "@heroicons/react/24/solid"
import Auracle1 from "/src/assets/auracle.png"
import Auracle2 from "/src/assets/auracle2.png"
import Auracle3 from "/src/assets/auracle3.png"
import Auracle4 from "/src/assets/auracle4.png"
import Valley1 from "/src/assets/valley-rides-1.png"
import Valley2 from "/src/assets/valley-rides-2.png"
import Valley3 from "/src/assets/valley-rides-3.png"
import Valley4 from "/src/assets/valley-rides-4.png"
import { useEffect, useState } from "react"

const auracle = [ Auracle2, Auracle1, Auracle3, Auracle4 ]
const valley_rides = [ Valley1, Valley2, Valley3, Valley4 ]

export default function Projects() {
  const [ image, setImage ] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setImage(prev => (prev + 1) % auracle.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="projects-section">
      <div className="projects-item">
        <div className="flex flex-col w-1/2 bg-gray-300 rounded-l-xl">
          <h3 className="text-white text-3xl bold text-center py-2 w-full bg-black rounded-tl-xl">Auracle</h3>
          <div className="flex flex-row w-full h-1/6 justify-center items-center text-xl bold">
            <CodeBracketIcon className="w-12 h-12 pr-4" />
            <a className="hover:text-blue-800" rel="noreferrer" href="https://github.com/gurxt/auracle" target="_blank">Auracle Repository</a>
          </div>
          <ul className="pl-6 list-disc text-black text-xl pr-2">
            <li>Tarot based application that uses OpenAI APIs to conduct tarot readings for users</li>
            <li>Leverages ThreeJS libraries to creat a 3D environment.</li>
            <li>Images for the tarot deck creating using OpenAI DALL-E</li>
            <li>Built in React Native with redux for state management, tailwind for styling, and sanity with GROQ for data persistence</li>
          </ul>
        </div>
        <div className="flex items-end w-1/2 h-full bg-black rounded-r-xl">
          <img src={auracle[image]} className="h-3/4 pb-2 w-full object-cover" />
        </div>
      </div>
      <div className="projects-item mt-2">
        <div className="flex h-full justify-center items-center w-1/2 bg-gray-800 rounded-l-xl">
          <img src={valley_rides[image]} className="h-3/4 w-2/3 object-contain" />
        </div>
        <div className="flex flex-col w-1/2 bg-gray-300 rounded-r-xl">
          <h3 className="text-white text-3xl bold text-center py-2 w-full bg-gray-800 rounded-tr-xl">Valley Rides</h3>
          <div className="flex flex-row w-full h-1/6 justify-center items-center text-xl bold">
            <CodeBracketIcon className="w-12 h-12 pr-4" />
            <a className="hover:text-blue-800" rel="noreferrer" href="https://github.com/gurxt/valley-drives" target="_blank">Valley Rides Repository</a>
          </div>
          <ul className="pl-6 list-disc text-black text-xl pr-2">
            <li>Mobile Applicaiton</li>
            <li>Uses the google maps platform to connect users to taxis in the Ottawa Valley</li>
            <li>Built in React Native with redux for state management, react navigation for seamless screen changes, nativewind for styling, stripe for user payments, and sanity with GROQ for data persistence</li>
          </ul>
        </div>
      </div>
    </section>
  )
}