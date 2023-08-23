interface ContainerProps {
  children: React.ReactNode
  className?: string
  siderPosition?: 'absolute' | 'relative'
}

const style = {
  container: 'flex flex-col h-screen pl-0 w-full',
  sider: 'lg:pl-24'
  // sider: 'lg:pl-24 lg:space-y-4'
}

export function Container (props: ContainerProps): JSX.Element {
  const isAbsolute = (props.siderPosition ?? 'relative') === 'absolute'
  return (
    <div
      className={`${style.container} 
        ${isAbsolute ? style.sider : ''}
        ${props.className ?? ''}
      `}
    >
      {props.children}
    </div>
  )
}
