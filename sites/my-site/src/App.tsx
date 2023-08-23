import { Button, Sidenav, SidenavItem, Layout } from 'kleene-ui-core';


import { FC } from 'react';

import {
    Navbar,
    NavbarBrand,
    NavbarCollapse,
    NavbarNav,
    NavbarItem,
    NavbarLink,
    NavbarToggler
  } from 'kleene-ui-core';

  import { useState } from 'react';

const SidenavLeft = () => {
  const [open, setOpen] = useState<boolean>(false);

  const toggle = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <div className="mb-8">
      <h2 className="mb-3 text-gray-600 text-lg font-bold md:text-2xl">Left</h2>
      <Button
        color="indigo"
        onClick={toggle}
        disabled={open}
        aria-disabled={open}
      >
        Click to open me
      </Button>
      <Sidenav
        open={open}
        toggle={toggle}
        closeOnClickOutside={true}
        position="left"
      >
        <SidenavItem href="#">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 640 512"
            xmlns="http://www.w3.org/2000/svg"
            height={22}
            width={22}
          >
            <path d="M610.5 373.3c2.6-14.1 2.6-28.5 0-42.6l25.8-14.9c3-1.7 4.3-5.2 3.3-8.5-6.7-21.6-18.2-41.2-33.2-57.4-2.3-2.5-6-3.1-9-1.4l-25.8 14.9c-10.9-9.3-23.4-16.5-36.9-21.3v-29.8c0-3.4-2.4-6.4-5.7-7.1-22.3-5-45-4.8-66.2 0-3.3.7-5.7 3.7-5.7 7.1v29.8c-13.5 4.8-26 12-36.9 21.3l-25.8-14.9c-2.9-1.7-6.7-1.1-9 1.4-15 16.2-26.5 35.8-33.2 57.4-1 3.3.4 6.8 3.3 8.5l25.8 14.9c-2.6 14.1-2.6 28.5 0 42.6l-25.8 14.9c-3 1.7-4.3 5.2-3.3 8.5 6.7 21.6 18.2 41.1 33.2 57.4 2.3 2.5 6 3.1 9 1.4l25.8-14.9c10.9 9.3 23.4 16.5 36.9 21.3v29.8c0 3.4 2.4 6.4 5.7 7.1 22.3 5 45 4.8 66.2 0 3.3-.7 5.7-3.7 5.7-7.1v-29.8c13.5-4.8 26-12 36.9-21.3l25.8 14.9c2.9 1.7 6.7 1.1 9-1.4 15-16.2 26.5-35.8 33.2-57.4 1-3.3-.4-6.8-3.3-8.5l-25.8-14.9zM496 400.5c-26.8 0-48.5-21.8-48.5-48.5s21.8-48.5 48.5-48.5 48.5 21.8 48.5 48.5-21.7 48.5-48.5 48.5zM224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm201.2 226.5c-2.3-1.2-4.6-2.6-6.8-3.9l-7.9 4.6c-6 3.4-12.8 5.3-19.6 5.3-10.9 0-21.4-4.6-28.9-12.6-18.3-19.8-32.3-43.9-40.2-69.6-5.5-17.7 1.9-36.4 17.9-45.7l7.9-4.6c-.1-2.6-.1-5.2 0-7.8l-7.9-4.6c-16-9.2-23.4-28-17.9-45.7.9-2.9 2.2-5.8 3.2-8.7-3.8-.3-7.5-1.2-11.4-1.2h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c10.1 0 19.5-3.2 27.2-8.5-1.2-3.8-2-7.7-2-11.8v-9.2z" />
          </svg>
          <span className="pl-2">User Config</span>
        </SidenavItem>
        <SidenavItem href="#">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
            height={20}
            width={20}
          >
            <path d="M172.2 226.8c-14.6-2.9-28.2 8.9-28.2 23.8V301c0 10.2 7.1 18.4 16.7 22 18.2 6.8 31.3 24.4 31.3 45 0 26.5-21.5 48-48 48s-48-21.5-48-48V120c0-13.3-10.7-24-24-24H24c-13.3 0-24 10.7-24 24v248c0 89.5 82.1 160.2 175 140.7 54.4-11.4 98.3-55.4 109.7-109.7 17.4-82.9-37-157.2-112.5-172.2zM209 0c-9.2-.5-17 6.8-17 16v31.6c0 8.5 6.6 15.5 15 15.9 129.4 7 233.4 112 240.9 241.5.5 8.4 7.5 15 15.9 15h32.1c9.2 0 16.5-7.8 16-17C503.4 139.8 372.2 8.6 209 0zm.3 96c-9.3-.7-17.3 6.7-17.3 16.1v32.1c0 8.4 6.5 15.3 14.8 15.9 76.8 6.3 138 68.2 144.9 145.2.8 8.3 7.6 14.7 15.9 14.7h32.2c9.3 0 16.8-8 16.1-17.3-8.4-110.1-96.5-198.2-206.6-206.7z" />
          </svg>
          <span className="pl-2">Posts</span>
        </SidenavItem>
        <SidenavItem href="#">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            height={20}
            width={20}
          >
            <path d="M20,8h-5.612l1.123-3.367c0.202-0.608,0.1-1.282-0.275-1.802S14.253,2,13.612,2H12c-0.297,0-0.578,0.132-0.769,0.36 L6.531,8H4c-1.103,0-2,0.897-2,2v9c0,1.103,0.897,2,2,2h3h10.307c0.829,0,1.581-0.521,1.873-1.298l2.757-7.351 C21.979,12.239,22,12.12,22,12v-2C22,8.897,21.103,8,20,8z M4,10h2v9H4V10z M20,11.819L17.307,19H8V9.362L12.468,4l1.146,0 l-1.562,4.683c-0.103,0.305-0.051,0.64,0.137,0.901C12.377,9.846,12.679,10,13,10h7V11.819z" />
          </svg>
          <span className="pl-2">Likes</span>
        </SidenavItem>
        <SidenavItem href="#">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 576 512"
            xmlns="http://www.w3.org/2000/svg"
            height={20}
            width={20}
          >
            <path d="M416 192c0-88.4-93.1-160-208-160S0 103.6 0 192c0 34.3 14.1 65.9 38 92-13.4 30.2-35.5 54.2-35.8 54.5-2.2 2.3-2.8 5.7-1.5 8.7S4.8 352 8 352c36.6 0 66.9-12.3 88.7-25 32.2 15.7 70.3 25 111.3 25 114.9 0 208-71.6 208-160zm122 220c23.9-26 38-57.7 38-92 0-66.9-53.5-124.2-129.3-148.1.9 6.6 1.3 13.3 1.3 20.1 0 105.9-107.7 192-240 192-10.8 0-21.3-.8-31.7-1.9C207.8 439.6 281.8 480 368 480c41 0 79.1-9.2 111.3-25 21.8 12.7 52.1 25 88.7 25 3.2 0 6.1-1.9 7.3-4.8 1.3-2.9.7-6.3-1.5-8.7-.3-.3-22.4-24.2-35.8-54.5z" />
          </svg>
          <span className="pl-2">Comments</span>
        </SidenavItem>
      </Sidenav>
    </div>
  );
};

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

      <Layout.Root className='bg-blue-900'>
      <Layout.Container className='bg-red-900 p-0'>
        <NavbarVariantTwo />
        <Layout.Header className='bg-yellow-900 h-32'>
          <p>Header</p>
        </Layout.Header>
        <Layout.Content className='bg-green-900 p-0'>
        <NavbarVariantOne />
            <NavbarVariantTwo />
            <NavbarVariantThree />
            <SidenavLeft />
            <RoundedButtons />
            <SizedButtons />
            <AnimateButtons />
            <DefaultButtons />
            <DisabledButtons />
            <OutlineButtons />
        </Layout.Content>
        <Layout.Footer className='bg-yellow-900'>
          <p>Footer</p>
        </Layout.Footer>
      </Layout.Container>
    </Layout.Root>
    );
}

export default App;

