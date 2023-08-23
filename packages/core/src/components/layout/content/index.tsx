interface ContentProps {
  children: React.ReactNode
  className?: string
}

const style = {
  content: 'h-screen overflow-auto p-2 md:p-4'
}

export function Content (props: ContentProps): JSX.Element {
  return (
    <main className={`${style.content} ${props.className ?? ''}`}>
      {props.children}
    </main>
  )
}
