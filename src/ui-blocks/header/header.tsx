import Shuffle from "../../components/shuffle-text/shuffle-text.tsx"
import { SiGithub } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";

export function Header() {
  return (
    <div className="flex justify-between items-start w-[100vw] p-2 z-100">
      <div className="font-bitcoin bg-transparent font-semibold" >
        <Shuffle
          className="text-xl lg:text-white"
          text="Jordan"
          shuffleDirection="right"
          duration={0.35}
          animationMode="evenodd"
          shuffleTimes={1}
          ease="power3.out"
          stagger={0.03}
          threshold={0.1}
          triggerOnce={true}
          triggerOnHover={true}
          respectReducedMotion={true}

        />
        <br />
        <Shuffle
          className="text-xl lg:text-white"
          text="Ramirez"
          shuffleDirection="right"
          duration={0.35}
          animationMode="evenodd"
          shuffleTimes={1}
          ease="power3.out"
          stagger={0.03}
          threshold={0.1}
          triggerOnce={true}
          triggerOnHover={true}
          respectReducedMotion={true}

        />
      </div>
      <div className="space-y-0 justify-end">
        <a className="flex items-center justify-end space-x-1 group" href="https://github.com/jramirez-codes">
          <Shuffle
            className="text-4xl md:text-xl group-hover:text-red-500 group-hover:font-semibold transition-colors duration-500"
            text="GitHub"
            shuffleDirection="right"
            duration={0.35}
            animationMode="evenodd"
            shuffleTimes={1}
            ease="power3.out"
            stagger={0.03}
            threshold={0.1}
            triggerOnce={true}
            triggerOnHover={true}
            respectReducedMotion={true}
          />
          <SiGithub className="group-hover:text-red-500 -translate-y-1/4 max-h-20" />
        </a>
        <a className="flex items-center justify-end space-x-1 group" href="https://www.linkedin.com/in/jordan-ramirez/">
          <Shuffle
            className="text-4xl md:text-xl group-hover:text-red-500  group-hover:font-semibold transition-colors duration-500"
            text="LinkedIn"
            shuffleDirection="right"
            duration={0.35}
            animationMode="evenodd"
            shuffleTimes={1}
            ease="power3.out"
            stagger={0.03}
            threshold={0.1}
            triggerOnce={true}
            triggerOnHover={true}
            respectReducedMotion={true}
          />
          <SiLinkedin className="group-hover:text-red-500 -translate-y-1/4 max-h-20" />
        </a>
      </div>
    </div>
  )
}
