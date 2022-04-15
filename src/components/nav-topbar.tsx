import { useState, useEffect, useCallback } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import { Layout, Menu } from 'antd';

import { MailOutlined, HomeOutlined } from '@ant-design/icons';

import './nav-topbar.scss';

const { Header } = Layout;

export function NavTopBar(): JSX.Element {

    const location = useLocation();

    const [navItems] = useState([
        {
            'id': 'home',
            'url': '/',
            'title': '首页',
        },
        {
            'id': 'todo',
            'url': '/todo',
            'title': '待办',
        },
        {
            'id': 'about',
            'url': '/about',
            'title': '关于',
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
