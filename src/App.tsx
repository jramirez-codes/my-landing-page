import { useContext } from "react"
import Background from "./components/background"
import Shuffle from "./components/shuffle-text/shuffle-text"
import { Footer } from "./ui-blocks/footer/footer"
import { Header } from "./ui-blocks/header/header"
import { GlobalContext } from "./context/global-context"
import { LoadingScene } from "./components/loading-scene/loading-scene"

function App() {
  const globalContext = useContext(GlobalContext)

  return (
    <div className="relative">
      <LoadingScene
        isRendering={globalContext.isLoading}
      >
        <Background />
      </LoadingScene>
      {!globalContext.isLoading && (
        <>
          <Header />
          <div className="font-bitcoin text-3xl text-center flex justify-center">
            <div className="mt-[5vh]" style={{ zIndex: 10 }}>
              <Shuffle
                className="text-5xl font-bold transition-colors duration-500"
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
              Turning Ideas Into Production Ready Products
            </div>
          </div >
          <Footer />
        </>

      )}
    </div>
  )
}

export default App
