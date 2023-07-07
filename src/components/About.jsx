import { TypeAnimation } from "react-type-animation"
import Header from "./Header"
import Scrollbars from "rc-scrollbars"
import Peanutbutter from "/src/assets/mr-peanutbutter.jpg"
import AoT from "/src/assets/attack_on_titan.gif"
import AC from "/src/assets/algonquin_college.png"

export default function About({ setPage, setFadeOut }) {
  return (
    <section className="popup-container">
      <Header title="About Me" setPage={setPage} setFadeOut={setFadeOut} />
      <div className="personal-information">
        <div className="flex flex-col justify-between w-2/5 h-full mt-2">
          <img src={Peanutbutter} className="h-2/5 w-full px-2 rounded-xl" />
          <img src={AoT} className="w-full px-2 rounded-xl" />
        </div>
        <div className="flex flex-col w-3/5 h-full">
          <div id="about-txt-container" className="flex flex-col w-full h-4/5 mt-2 pl-3 text-lg">
            <Scrollbars>
            <p>
              <TypeAnimation
                preRenderFirstString={true}
                sequence={[500, 'Hello', 200, 'Hello, my name is Mr Peanutbut', 100, 'Hello, my name is Anthony Pisani,']}
                speed={30}
                wrapper="span"
                className="text-3xl bold"
                cursor={false}
              />
            </p>
            <br />
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;
              I am a passionate web developer, avid hockey enthusiast (proudly cheering for the Philadelphia Flyers), and a proud cat parent to my beloved feline companion, Yuki. Currently, I am pursuing my education at Algonquin College, where I am in my second semester of the computer programming program.
            </p>
            <br />
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;
              Web development has become a true passion of mine. I am captivated by the process of turning ideas into functional and visually appealing websites. With each line of code, I am driven to create intuitive user experiences and bring ideas to life. Constantly learning and exploring new technologies, I am committed to staying at the forefront of the ever-evolving web development landscape.
            </p>
            <br />
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;
              When I'm not immersed in coding or designing websites, I find solace in the world of hockey. As a die-hard Philadelphia Flyers fan, I eagerly follow their games, analyzing strategies, and discussing team dynamics with fellow fans. The intensity and excitement of the sport fuel my enthusiasm and provide a welcome escape from the digital realm.
            </p>
            <br />
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;
              In addition to my web development and hockey passions, I have the pleasure of sharing my life with Yuki, my cherished cat. Yuki's playful antics and soothing presence bring joy and comfort to my daily routine, reminding me of the importance of balance and taking moments to appreciate life's simple pleasures.
            </p>
            <br />
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;
              As I progress through my computer programming studies at Algonquin College, I am committed to honing my skills, expanding my knowledge, and embracing new challenges in the ever-evolving world of technology. I am eager to embark on new web development projects, engage with fellow hockey enthusiasts, and continue to cherish the special moments with Yuki by my side.
            </p>
            </Scrollbars>
          </div>
          <div className="flex flex-col h-1/3">
            <div className="border-b border-black mt-4 ml-2"></div>
            <div className="border-b-4 border-black mt-2 ml-2"></div>
            <div className="border-b-8 border-black mt-2 ml-2"></div>
            <a className="flex flex-1 items-center justify-end h-full" rel="noreferrer" href="http://algonquincollege.com" target="_blank">
              <img src={AC} className="h-1/3 w-2/3 px-2 rounded-xl" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}