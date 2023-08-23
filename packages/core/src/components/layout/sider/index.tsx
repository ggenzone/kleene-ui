import css from '../style.module.css'

interface SiderProps {
  mobileOrientation?: 'start' | 'end'
  children: React.ReactNode
  open?: boolean
  className?: string
  position?: 'absolute' | 'relative'
}

const style = {
  mobileOrientation: {
    start: 'left-0 ',
    end: 'right-0 lg:left-0'
  },
  container: 'pb-32 lg:pb-12',
  close: 'duration-700 ease-out hidden transition-all lg:w-24',
  default:
    'bg-black h-screen overflow-y-auto top-0 lg:block lg:z-40',
  open: 'duration-500 ease-in transition-all w-8/12 z-40 sm:w-5/12 md:w-64'
}

export function Sider (props: SiderProps): JSX.Element {
  const isAbsolute = (props.position ?? 'relative') === 'absolute'
  const isOpen = (props.open ?? false)
  const safeMobileOrientation = (props.mobileOrientation ?? 'start')
  return (
    <>
      <aside
        className={`${style.default} 
          ${isAbsolute ? 'lg:absolute' : ''}
          ${style.mobileOrientation[safeMobileOrientation]} 
          ${isOpen ? style.open : style.close} 
          ${isOpen && isAbsolute ? 'absolute' : ''} 
          ${css.scrollbar}
          ${props.className ?? ''} `}
      >
        <div className={style.container}>
          {props.children}
        </div>
      </aside>
    </>
  )
}
