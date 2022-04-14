import { useState, useEffect, useCallback } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import { Layout, Menu } from 'antd';

import './nav-bar.scss';

const { Header } = Layout;

export function NavBar(): JSX.Element {

    const location = useLocation();

    const [navItems] = useState([
        {
            "id": "home",
            "url": "/",
            "title": "首页",
        },
        {
            "id": "todo",
            "url": "/todo",
            "title": "待办",
        },
        {
            "id": "about",
            "url": "/about",
            "title": "关于",
        }
    ]);

    const findKey = useCallback(() => {
        const pathName = location.pathname;
        const current = navItems.find(x => x.url === pathName);
        if (!!current) {
            return [current.id]
        }
        return undefined;
    }, [location, navItems])

    useEffect(() => {
        console.log(location);
    }, [location]);

    return (
      <Header className='app-header'>
        <div className='app-logo text-white'>
          <img className='d-inline-block align-text-bottom me-1'
            height='20' width='20' src='./react.svg' />
          React App
        </div>
        <Menu theme='dark' mode='horizontal'
          defaultSelectedKeys={['home']}
          selectedKeys={findKey()}>
          {navItems.map(item => (
            <Menu.Item key={item.id}>
              <NavLink to={item.url}>{item.title}</NavLink>
            </Menu.Item>
          ))}
        </Menu>
      </Header>
    );
}

// export function NavBar(): JSX.Element {
//     return (
//       <Navbar className='app-navbar fixed-top' bg='dark' expand='md' variant='dark'>
//         <Container fluid={true}>
//           <NavLink className='navbar-brand' to='/'>
//             <img className='d-inline-block align-text-bottom me-1'
//                  height='20' width='20' src='./react.svg' />
//             React App
//           </NavLink>
//           <Navbar.Toggle aria-controls='basic-navbar-nav' />
//           <Navbar.Collapse role='navigation'>
//             <Nav className='me-auto'>
//               <NavLink className='nav-link' to='/'>Home</NavLink>
//               <NavLink className='nav-link' to='/about'>About</NavLink>
//               <NavLink className='nav-link' to='/todo'>Todo</NavLink>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     );
// }
