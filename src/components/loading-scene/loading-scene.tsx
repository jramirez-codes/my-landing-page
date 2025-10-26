import React from 'react'
import type { ReactNode } from 'react'

export function LoadingScene(props: {
  isRendering: boolean
  children: ReactNode
}) {

  const [hideMask, setHideMask] = React.useState(false)

  React.useEffect(() => {
    if (!props.isRendering) {
      setTimeout(() => {
        setHideMask(true)
      }, 500)
    }
  }, [props.isRendering])

  return (
    <>
      <div
        className="fixed top-0 left-0 w-[100vw] h-[100vh] bg-sky-300 flex justify-center items-center"
      >
        <div
          data-state={hideMask ? "HIDE_MASK" : props.isRendering ? "RENDERING" : "NOT_RENDERING"}
          className={
            "data-[state=RENDERING]:animate-pulse " +
            "data-[state=RENDERING]:w-[20%] data-[state=RENDERING]:h-[20%] " +
            "data-[state=HIDE_MASK]:w-[100%] data-[state=HIDE_MASK]:h-[100%] " +
            "w-[1000%] h-[1000%] " +
            "transition-all duration-1000 ease-in-out "
          }
          style={!hideMask ? {
            background: "black",
            inset: 0,
            WebkitMaskImage: "url('/loading-logo.svg')",
            WebkitMaskSize: 'cover',
            WebkitMaskPosition: 'center',
            WebkitMaskRepeat: 'no-repeat',
            maskImage: "url('/loading-logo.svg')",
            maskSize: 'cover',
            maskPosition: 'center',
            maskRepeat: 'no-repeat',
            pointerEvents: 'none',
          } : {}} >
          {props.children}
        </div>
      </div >
    </>
  )
}


