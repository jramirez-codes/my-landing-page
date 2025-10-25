import loadingIcon from '../../assets/loading-logo.svg'
import React from 'react'
export function LoadingScene(props: {
  isRendering: boolean
  setLoadingScreenHidden: React.Dispatch<React.SetStateAction<boolean>>
  loadingSceneHidden: boolean
}) {
  React.useEffect(() => {
    if (!props.isRendering) {
      props.setLoadingScreenHidden(true)
    }
  }, [props.isRendering])

  return (
    <div
      className="bg-sky-300 fixed flex items-center justify-center w-full h-[100vh] z-50"
      style={{
        maskClip: 'view-box'
      }}
    >
      <img src={loadingIcon} className='animate-spin h-[100px]' />
    </div>
  )

}
