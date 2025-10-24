import Background from "./components/background"
import Shuffle from "./components/shuffle-text/shuffle-text"
function App() {

  return (
    <>
      <Background>
        <div className="flex justify-between items-center w-[100vw] p-2">
          <div className="font-bitcoin bg-transparent font-semibold" >
            <Shuffle
              className="text-xl"
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
              className="text-xl"
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
          <div className="flex justify-between items-center space-x-4">
            <a href="https://github.com/jramirez-codes">
              <Shuffle
                className="text-xl hover:text-red-500 hover:font-semibold transition-colors duration-500"
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
            </a>
            <a href="https://www.linkedin.com/in/jordan-ramirez/">
              <Shuffle
                className="text-xl hover:text-red-500 hover:font-semibold transition-colors duration-500"
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
            </a>
          </div>
        </div>
      </Background>
    </>
  )
}

export default App
