//import styled from 'styled-components'
//import { Button, SwipeBar } from './components'
import './index.css'
import { Button } from './components';

import { FC } from 'react';


import {
    Navbar,
    NavbarBrand,
    NavbarCollapse,
    NavbarNav,
    NavbarItem,
    NavbarLink,
    NavbarToggler,
  } from './components/navbar'

const RoundedButtons: FC = () => (
  <div className="mb-12 text-gray-600">
    <h2 className="mb-4 text-gray-600 text-lg font-bold md:text-2xl">
      Rounded
    </h2>
    <div className="mb-4 space-x-1 space-y-3 md:space-x-6">
      <Button className="text-gray-600" color="primary" rounded={true}>
        Primary
      </Button>
      <Button color="success" rounded={true}>
        Success
      </Button>
      <Button color="danger" rounded={true}>
        Danger
      </Button>
      <Button color="warning" rounded={true}>
        Warning
      </Button>
      <Button rounded={true}>Dark</Button>
      <Button color="indigo" rounded={true}>
        Indigo
      </Button>
    </div>
  </div>
);

const SizedButtons: FC = () => (
    <div className="mb-12">
      <h2 className="mb-3 text-gray-600 text-lg font-bold md:text-2xl">
        Different sizes
      </h2>
      <div className="mb-4 space-x-1 space-y-3 md:space-x-6">
        <Button color="primary">Primary</Button>
        <Button color="success" size="lg">
          Success
        </Button>
        <Button color="danger" size="sm">
          Danger
        </Button>
        <Button color="warning" size="lg">
          Warning
        </Button>
        <Button size="sm">Dark</Button>
        <Button color="indigo">Indigo</Button>
      </div>
    </div>
  );


  
  const NavbarVariantOne = () => (
    <div className="mb-8">
      <Navbar className="text-white bg-indigo-900">
        <NavbarBrand href="#">
          <svg
            className="w-9 h-9"
            preserveAspectRatio="xMidYMid"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 153.6"
          >
            <linearGradient id="a" x1="-2.778%" y1="32%" y2="67.556%">
              <stop offset="0" stopColor="#2298bd" />
              <stop offset="1" stopColor="#0ed7b5" />
            </linearGradient>
            <path
              d="M128 0C93.867 0 72.533 17.067 64 51.2 76.8 34.133 91.733 27.733 108.8 32c9.737 2.434 16.697 9.499 24.401 17.318C145.751 62.057 160.275 76.8 192 76.8c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C174.249 14.743 159.725 0 128 0zM64 76.8C29.867 76.8 8.533 93.867 0 128c12.8-17.067 27.733-23.467 44.8-19.2 9.737 2.434 16.697 9.499 24.401 17.318C81.751 138.857 96.275 153.6 128 153.6c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C110.249 91.543 95.725 76.8 64 76.8z"
              fill="url(#a)"
            />
          </svg>
        </NavbarBrand>
        <NavbarToggler />
        <NavbarCollapse>
          <NavbarNav orientation="start">
            <NavbarItem>
              <NavbarLink href="#">Get Started</NavbarLink>
            </NavbarItem>
            <NavbarItem>
              <NavbarLink href="#">Core Concepts</NavbarLink>
            </NavbarItem>
          </NavbarNav>
          <NavbarNav orientation="end">
            <NavbarItem>
              <NavbarLink href="#">Base Styles</NavbarLink>
            </NavbarItem>
            <NavbarItem>
              <NavbarLink href="#">Customization</NavbarLink>
            </NavbarItem>
          </NavbarNav>
        </NavbarCollapse>
      </Navbar>
    </div>
  );
  
  const NavbarVariantTwo = () => (
    <div className="mb-8">
      <Navbar className="text-white bg-gray-900">
        <NavbarBrand href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-9 h-9 bg-white rounded-full"
          >
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </NavbarBrand>
        <NavbarToggler />
        <NavbarCollapse>
          <NavbarNav orientation="start">
            <NavbarItem>
              <NavbarLink href="#" active={true} activeClass="text-blue-500">
                Organisation
              </NavbarLink>
            </NavbarItem>
            <NavbarItem>
              <NavbarLink href="#">Issues</NavbarLink>
            </NavbarItem>
          </NavbarNav>
          <NavbarNav orientation="middle">
            <NavbarItem>
              <NavbarLink href="#">Pull Requests</NavbarLink>
            </NavbarItem>
            <NavbarItem>
              <NavbarLink href="#">Issues</NavbarLink>
            </NavbarItem>
          </NavbarNav>
          <NavbarNav orientation="end">
            <NavbarItem>
              <NavbarLink href="#">Market Place</NavbarLink>
            </NavbarItem>
            <NavbarItem>
              <NavbarLink href="#">Explore</NavbarLink>
            </NavbarItem>
          </NavbarNav>
        </NavbarCollapse>
      </Navbar>
    </div>
  );

  const NavbarVariantThree = () => (
    <div className="mb-8">
      <Navbar className="text-gray-600 bg-white">
        <NavbarBrand href="#">
          <img
            src="https://seeklogo.com/images/N/next-js-logo-8FCFF51DD2-seeklogo.com.png"
            alt="Next.js"
            className="w-9 h-9"
          />
        </NavbarBrand>
        <NavbarToggler />
        <NavbarCollapse>
          <NavbarNav orientation="start">
            <NavbarItem>
              <NavbarLink href="#">Documentation</NavbarLink>
            </NavbarItem>
          </NavbarNav>
          <NavbarNav orientation="end">
            <NavbarItem>
              <NavbarLink href="#">Deployment</NavbarLink>
            </NavbarItem>
            <NavbarItem>
              <NavbarLink href="#">Basic Features</NavbarLink>
            </NavbarItem>
            <NavbarItem>
              <NavbarLink href="#">Advanced Features</NavbarLink>
            </NavbarItem>
          </NavbarNav>
        </NavbarCollapse>
      </Navbar>
    </div>
  );
  
  const Icon = () => (
    <svg
      width="20"
      height="20"
      fill="currentColor"
      className="mr-2 animate-spin"
      viewBox="0 0 1792 1792"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z" />
    </svg>
  );
  
  const AnimateButtons: FC = () => (
    <div className="mb-12">
      <h2 className="mb-3 text-gray-600 text-lg font-bold md:text-2xl">
        Animate
      </h2>
      <div className="space-y-3">
        <Button color="primary" block={true}>
          <Icon />
          Primary
        </Button>
        <Button color="success" block={true}>
          <Icon />
          Success
        </Button>
        <Button color="danger" block={true}>
          <Icon />
          Danger
        </Button>
        <Button color="warning" block={true}>
          <Icon />
          Warning
        </Button>
        <Button block={true}>
          <Icon />
          Dark
        </Button>
        <Button color="indigo" block={true}>
          <Icon />
          Indigo
        </Button>
      </div>
    </div>
  );
  

  const DefaultButtons: FC = () => (
    <div className="mb-12">
      <h2 className="mb-3 text-gray-600 text-lg font-bold md:text-2xl">Normal</h2>
      <div className="mb-4 space-x-1 space-y-3 md:space-x-6">
        <Button color="primary">Primary</Button>
        <Button color="success">Success</Button>
        <Button color="danger">Danger</Button>
        <Button color="warning">Warning</Button>
        <Button>Dark</Button>
        <Button color="indigo">Indigo</Button>
      </div>
    </div>
  );
  const DisabledButtons: FC = () => (
    <div className="mb-12">
      <h2 className="mb-3 text-gray-600 text-lg font-bold md:text-2xl">
        Disable
      </h2>
      <div className="mb-4 space-x-1 space-y-3 md:space-x-6">
        <Button color="primary" disabled={true}>
          Primary
        </Button>
        <Button color="success" disabled={true}>
          Success
        </Button>
        <Button color="danger" disabled={true}>
          Danger
        </Button>
        <Button color="warning" disabled={true}>
          Warning
        </Button>
        <Button disabled={true}>Dark</Button>
        <Button color="indigo" disabled={true}>
          Indigo
        </Button>
      </div>
    </div>
  );
  const OutlineButtons: FC = () => (
    <div className="mb-12">
      <h2 className="mb-3 text-gray-600 text-lg font-bold md:text-2xl">
        Outline
      </h2>
      <div className="mb-4 space-x-3 space-y-3 md:space-x-6">
        <Button color="primary" outline={true}>
          Primary
        </Button>
        <Button color="success" outline={true}>
          Success
        </Button>
        <Button color="danger" outline={true}>
          Danger
        </Button>
        <Button color="warning" outline={true}>
          Warning
        </Button>
        <Button outline={true}>Dark</Button>
        <Button color="indigo" outline={true}>
          Indigo
        </Button>
      </div>
    </div>
  );

function App() {    
    return (
        <div className="App">
            <NavbarVariantOne />
            <NavbarVariantTwo />
            <NavbarVariantThree />
            <RoundedButtons />
            <SizedButtons />
            <AnimateButtons />
            <DefaultButtons />
            <DisabledButtons />
            <OutlineButtons />
        </div>
    );
}

export default App;

/*

function App (): JSX.Element {
  return (
    <Wrapper>
      <SwipeBar />
      <Button>Click me</Button>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    margin: 2rem;
    display: flex;
    justify-content: center;
`

export default App
*/