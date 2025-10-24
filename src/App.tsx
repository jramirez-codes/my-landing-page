import Background from "./components/background"
import Shuffle from "./components/shuffle-text/shuffle-text"
import { Footer } from "./ui-blocks/footer/footer"
import { Header } from "./ui-blocks/header/header"
function App() {

  return (
    <div className="relative">
      <Background />
      <Header />
      <div className="font-bitcoin text-4xl text-center">
        Automate your workflow
        <br />
        <Shuffle
          className="text-4xl font-bold transition-colors duration-500"
          text="Ship Faster"
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
      </div >
      <Footer />
    </div>
  )
}

export default App
