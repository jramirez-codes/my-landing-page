import Background from "./components/background"
import Shuffle from "./components/shuffle-text/shuffle-text"
import { Footer } from "./ui-blocks/footer/footer"
import { Header } from "./ui-blocks/header/header"
function App() {

  return (
    <div className="relative">
      <Background />
      <Header />
      <div className="font-bitcoin text-3xl text-center flex justify-center">
        <div className="mt-[20vh] md:mt-0 lg:max-w-[65%]">
          <Shuffle
            className="text-4xl font-bold transition-colors duration-500"
            text="Think it. Build it. Ship it."
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
          Turn Ideas Into Production Ready Products
        </div>
      </div >
      <Footer />
    </div>
  )
}

export default App
