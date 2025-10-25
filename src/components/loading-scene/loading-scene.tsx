import loadingIcon from '../../assets/loading-logo.svg'

export function LoadingScene(props: {
  isRendering: boolean
}) {
  return (
    <div className='fixed top-0 left-0 w-[100vw] flex items-center justify-center'>
      <img src={loadingIcon} />
    </div>
  )

}
