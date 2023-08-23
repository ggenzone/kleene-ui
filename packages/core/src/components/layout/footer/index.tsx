interface ContainerProps {
  children: React.ReactNode
  className?: string
}

const style = {
  container: 'w-full h-16'
}

export function Footer (props: ContainerProps): JSX.Element {
  return (
    <footer
      className={`${style.container} 
        ${props.className ?? ''}
      `}
    >
      {props.children}
    </footer>
  )
}
