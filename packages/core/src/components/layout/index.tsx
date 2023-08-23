import React from 'react'
import { Sider } from './sider'
import { Container } from './container'
import { Header } from './header'
import { Footer } from './footer'
import { Content } from './content'

interface LayoutProps {
  children: React.ReactNode
  className?: string
}

function Layout (props: LayoutProps): JSX.Element {
  return (
    <div className={`h-screen overflow-hidden w-full ${props.className ?? ''}`}>
      <div className="h-screen overflow-hidden relative">
        <div className="flex items-start">
          {props.children}
        </div>
      </div>
    </div>
  )
}

Layout.Root = Layout
Layout.Sider = Sider
Layout.Container = Container
Layout.Header = Header
Layout.Footer = Footer
Layout.Content = Content

export { Layout }
